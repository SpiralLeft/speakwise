#!/usr/bin/env node
// 声调配色的自检：从题库手写的拼音推出每个字的声调（src/utils/pronunciationBank.toneAlign）。
//
// 为什么需要它：颜色一旦错位，学生看到的是一个「看起来很正常」的错误读音，
// 没有报错、没有提示，谁也发现不了。所以对齐规则必须逐条钉死，而且要覆盖全题库 ——
// 552 条里任何一条对不上，界面上就是一条不带颜色（或更糟：带错色）的题。
//
//   node scripts/check-tones.mjs
//
// CHECK_VERBOSE=1 逐条回显。
//
// 产品代码里 `import RAW from "../data/pronunciationBank.json"` 是浏览器/打包器写法，
// Node 原生 ESM 不认裸 JSON 导入。这里沿用 mp/scripts/check-core.mjs 的办法：
// 先用 esbuild 把真正要检查的那个模块（连同题库 JSON）打成一个 Node 能跑的文件，
// 再 import 它的产物 —— 跑的仍然是**产品代码本身**，不是副本。

import { build } from "esbuild";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const BUNDLE = path.join(ROOT, "node_modules", ".cache", "check-tones.bundle.mjs");
const SRC = path.join(ROOT, "src", "utils", "pronunciationBank.js");

const built = await build({ entryPoints: [SRC], bundle: true, format: "esm", platform: "node", write: false });
fs.mkdirSync(path.dirname(BUNDLE), { recursive: true });
fs.writeFileSync(BUNDLE, built.outputFiles[0].text);

const { toneAlign, TONE_COLORS, TONE_LABELS, TONE_SAMPLES, PRON_BANK } = await import(pathToFileURL(BUNDLE).href);

let pass = 0;
const fails = [];

function ok(name, cond, detail) {
  if (process.env.CHECK_VERBOSE) console.log((cond ? "  ✓ " : "  ✗ ") + name);
  if (cond) { pass++; return; }
  fails.push(name + (detail ? "  → " + detail : ""));
}
function eq(name, actual, expected) {
  const a = JSON.stringify(actual), e = JSON.stringify(expected);
  ok(name, a === e, "实际 " + a + "，期望 " + e);
}

/** 只取汉字位的声调（非汉字位固定是 0） */
const hanTones = (text, pinyin) => {
  const al = toneAlign(text, pinyin);
  return al ? al.tones.filter(t => t > 0) : null;
};

// ══════════════ 单题规则 ══════════════

eq("四声都标对：我是学生", hanTones("我是学生。", "Wǒ shì xuéshēng."), [3, 4, 2, 1]);
eq("轻声无调号：你好吗", hanTones("你好吗？", "Nǐ hǎo ma?"), [3, 3, 5]);
eq("标点不配色", toneAlign("你好吗？", "Nǐ hǎo ma?").tones, [3, 3, 5, 0]);
eq("叠词后字轻声：妈妈", hanTones("妈妈", "māma"), [1, 5]);
eq("后字轻声：漂亮", hanTones("漂亮", "piàoliang"), [4, 5]);
eq("声母连写多音节：xuéshēng", hanTones("学生", "xuéshēng"), [2, 1]);
eq("jqx 后的 u 是 ü：聚会", hanTones("聚会", "jùhuì"), [4, 4]);
eq("ü 打不出来写 v：女", hanTones("女", "nǚ"), [3]);
eq("一 的变调按标注走", hanTones("一块儿", "yīkuàir"), [1, 4, 4]);
eq("不 的变调按标注走", hanTones("不用", "búyòng"), [2, 4]);

// 儿化：拼音里只有一个 r，正文却是「字 + 儿」两个字。
// 光杆 r 不独立成调，跟着前一个音节读（见 toneAlign 里的注释）。
eq("儿化：这儿", hanTones("这儿", "zhèr"), [4, 4]);
eq("儿化在词中：一点儿", hanTones("一点儿", "yīdiǎnr"), [1, 3, 3]);
eq("儿化在长词里：好玩儿", hanTones("好玩儿", "hǎowánr"), [3, 2, 2]);
eq("儿 单独成字仍是第二声：女儿", hanTones("女儿", "nǚ'ér"), [3, 2]);
eq("二 不是儿化：十二", hanTones("十二", "shí'èr"), [2, 4]);

// 拼接不变量：spans 拼回去必须与原文逐字相等（渲染拼音行靠它保住空格与标点）
for (const it of PRON_BANK.slice(0, 60)) {
  const al = toneAlign(it.text, it.pinyin);
  const joined = al ? al.spans.map(s => s.text).join("") : null;
  ok("拼音片段可还原 #" + it.id, joined === it.pinyin, "拼回 " + JSON.stringify(joined));
}

// ══════════════ 对齐失败要说 null，不能瞎猜 ══════════════

const NUL = (name, text, pinyin) => eq(name, toneAlign(text, pinyin), null);
NUL("音节少于汉字", "你好", "nǐ");
NUL("音节多于汉字", "你好", "nǐ hǎo ma");
NUL("没有汉字", "hello", "nǐ hǎo");
NUL("没有拼音（自定义练习的降级路径）", "你好", "");
NUL("切不动的拼音", "你好", "nǐ hǎo~xyz");
NUL("空输入", "", "");

// ══════════════ 全题库 ══════════════

let aligned = 0;
const dist = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
const bad = [];
for (const it of PRON_BANK) {
  const al = toneAlign(it.text, it.pinyin);
  if (!al) { bad.push("#" + it.id + " " + it.text); continue; }
  aligned++;
  for (const t of al.tones) if (t > 0) dist[t]++;
  // 每个汉字都拿到调、每个标点都拿到 0，且 tones 与正文逐位对齐
  const hanCount = Array.from(it.text).filter(c => /[㐀-䶿一-鿿豈-﫿]/.test(c)).length;
  ok("tones 与正文等长 #" + it.id, al.tones.length === Array.from(it.text).length);
  ok("每个汉字都有调 #" + it.id, al.tones.filter(t => t > 0).length === hanCount);
  ok("音节数等于汉字数 #" + it.id, al.spans.filter(s => s.tone > 0).length === hanCount);
}

eq("全题库无一对不上", bad, []);
ok("题库条目数 > 500（防止题库被清空后检查形同虚设）", PRON_BANK.length > 500, "实际 " + PRON_BANK.length);
ok("五个声调在题库里都出现过", Object.values(dist).every(n => n > 0), JSON.stringify(dist));

// ══════════════ 调色板 ══════════════

eq("五个声调都有颜色", Object.keys(TONE_COLORS).sort(), ["1", "2", "3", "4", "5"]);
eq("五个声调都有名字", Object.keys(TONE_LABELS).sort(), ["1", "2", "3", "4", "5"]);
eq("五个声调都有示例字", Object.keys(TONE_SAMPLES).sort(), ["1", "2", "3", "4", "5"]);
ok("颜色都是 16 进制", Object.values(TONE_COLORS).every(c => /^#[0-9A-F]{6}$/i.test(c)));
eq("配色就是定稿的那一套", TONE_COLORS, { 1: "#2F74C0", 2: "#2DAA6E", 3: "#E8952F", 4: "#D4413A", 5: "#9AA0A6" });

// ══════════════ 汇总 ══════════════

console.log(`\n对齐 ${aligned}/${PRON_BANK.length} 题，声调分布 ${JSON.stringify(dist)}`);
if (fails.length) {
  console.log(`\n✗ ${fails.length} 项未通过：`);
  for (const f of fails) console.log("  " + f);
  process.exit(1);
}
console.log(`✓ 全部通过（${pass} 项）`);
