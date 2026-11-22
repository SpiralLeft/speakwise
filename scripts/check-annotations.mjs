#!/usr/bin/env node
// 文化文游 + 学习手册的注音 / 译文自检。
//
// 为什么需要它：这两块新增的拼音和英文全是手写的。拼音只要有音节数与汉字数
// 对不上，基本就是写错了（漏字、串行）；英文漏一条，学生切到 HE/HPE 模式就会
// 看到一段中文没有译文。这里逐句钉死：
//
//   1. 每句/每个选项/Bad End 台词都有拼音和英文；
//   2. toneAlign 能对齐（音节数 = 汉字数），spans 拼回去与拼音原文逐字相等；
//   3. 学习手册的示例句同样能对齐；标题里带 V 这类拉丁记号的允许不对齐。
//
//   node scripts/check-annotations.mjs
//
// CHECK_VERBOSE=1 逐条回显。

import { build } from "esbuild";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const BUNDLE = path.join(ROOT, "node_modules", ".cache", "check-annotations.bundle.mjs");

// pronunciationBank.js 顶部 import 了 JSON，Node 原生 ESM 不认裸 JSON 导入，
// 沿用 check-tones.mjs 的办法：esbuild 打成 Node 能跑的产物，跑的仍是产品代码。
const built = await build({
  entryPoints: [path.join(ROOT, "src", "utils", "pronunciationBank.js")],
  bundle: true, format: "esm", platform: "node", write: false,
});
fs.mkdirSync(path.dirname(BUNDLE), { recursive: true });
fs.writeFileSync(BUNDLE, built.outputFiles[0].text);

const { toneAlign } = await import(pathToFileURL(BUNDLE).href);

const CH = [];
for (const id of ["cultureGameCh1.js", "cultureGameCh2.js", "cultureGameCh3.js"]) {
  CH.push({ id, mod: await import(pathToFileURL(path.join(ROOT, "src", "data", id)).href) });
}
const { MANUAL_DATA } = await import(pathToFileURL(path.join(ROOT, "src", "data", "studyManual.js")).href);
const { CULTURE_CHAPTERS } = await import(pathToFileURL(path.join(ROOT, "src", "data", "cultureChapters.js")).href);

let pass = 0;
const fails = [];
const ok = (name, cond, detail) => {
  if (process.env.CHECK_VERBOSE) console.log((cond ? "  ✓ " : "  ✗ ") + name);
  if (cond) { pass++; return; }
  fails.push(name + (detail ? "  → " + detail : ""));
};

// toneAlign 成功时返回 tones / spans；这里统一断言「能对齐 + 片段可还原」
const hasText = (v) => typeof v === "string" && v.trim() !== "";

function aligned(where, text, pinyin) {
  ok(where + " 有拼音", typeof pinyin === "string" && pinyin.trim() !== "", JSON.stringify(text));
  if (!pinyin) return false;
  const al = toneAlign(text, pinyin);
  ok(where + " 可对齐", !!al, JSON.stringify(text) + " / " + JSON.stringify(pinyin));
  if (!al) return false;
  const joined = al.spans.map(s => s.text).join("");
  ok(where + " 拼音片段可还原", joined === pinyin, "拼回 " + JSON.stringify(joined));
  ok(where + " tones 与正文等长", al.tones.length === Array.from(text).length);
  return true;
}

// ══════════════ 文化文游 ══════════════

const cultureStats = [];
let cultureLines = 0;
for (const { id, mod } of CH) {
  const tag = id.replace(/cultureGame|\.js/g, "");
  const scripts = [
    ["SCRIPT", mod.SCRIPT],
    ["PALACE_SCRIPT", mod.PALACE_SCRIPT],
    ["VICTORY_SCRIPT", mod.VICTORY_SCRIPT],
  ];
  for (const [name, list] of scripts) {
    ok(`${tag}.${name} 存在`, Array.isArray(list) && list.length > 0);
    (list || []).forEach((n, i) => {
      aligned(`${tag}.${name}[${i}]`, n.text, n.pinyin);
      ok(`${tag}.${name}[${i}] 有英文`, hasText(n.english), n.text);
    });
  }
  for (const [name, list] of [["CHOICE_1", mod.CHOICE_1], ["CHOICE_2", mod.CHOICE_2]]) {
    ok(`${tag}.${name} 是数组`, Array.isArray(list));
    (list || []).forEach((c, i) => {
      aligned(`${tag}.${name}[${i}] 选项`, c.text, c.pinyin);
      aligned(`${tag}.${name}[${i}] Bad End`, c.feedback, c.feedbackPinyin);
      ok(`${tag}.${name}[${i}] 选项有英文`, hasText(c.english), c.text);
      ok(`${tag}.${name}[${i}] Bad End 有英文`, hasText(c.feedbackEn), c.feedback);
    });
  }
  const n = scripts.reduce((a, [, l]) => a + (l?.length || 0), 0)
    + (mod.CHOICE_1?.length || 0) + (mod.CHOICE_2?.length || 0);
  cultureLines += n;
  cultureStats.push(`${tag}:${n} 句`);
}

// ── 章节列表（CultureMenu）──
CULTURE_CHAPTERS.forEach((ch, i) => {
  aligned(`章节列表[${i}] 标题`, ch.title, ch.titlePinyin);
  aligned(`章节列表[${i}] 简介`, ch.desc, ch.descPinyin);
  ok(`章节列表[${i}] 标题有英文`, hasText(ch.english), ch.title);
  ok(`章节列表[${i}] 简介有英文`, hasText(ch.descEn), ch.desc);
});

// ══════════════ 学习手册 ══════════════

// 讲变调的示例句，拼音故意多出箭头后的第二种读法（nǐ hǎo → ní hǎo），
// 音节数本来就不等于汉字数。这类只要求拼音存在，不要求能配色。
const MANUAL_PLAIN_OK = new Set(["你好"]);

let manualItems = 0;
for (const [level, tabs] of Object.entries(MANUAL_DATA)) {
  for (const [tab, list] of Object.entries(tabs)) {
    list.forEach((it, i) => {
      manualItems++;
      const where = `手册 ${level}/${tab}[${i}]`;
      ok(where + " 有示例拼音", !!it.examplePinyin, it.example);
      ok(where + " 有示例汉字", !!it.example);
      if (MANUAL_PLAIN_OK.has(it.example)) {
        ok(where + " 变调示例允许不配色", toneAlign(it.example, it.examplePinyin) === null);
      } else {
        aligned(where + " 示例", it.example, it.examplePinyin);
      }
      // 「正反疑问句：V 不 V」的拼音串为可读性保留了 V，音节数对不上；
      // 其余标题（含用 / 代替 vs 的）都应当能配色。
      const hasLatinNotation = /V 不 V/.test(it.title);
      if (hasLatinNotation) {
        ok(where + " 标题拼音存在", !!it.titlePinyin, it.title);
      } else {
        aligned(where + " 标题", it.title, it.titlePinyin);
      }
      // 英文模式要有内容可显示（可选的 titleEn 不算）
      ok(where + " 有示例英文", typeof it.exampleEn === "string" && it.exampleEn.trim() !== "", it.example);
    });
  }
}

// 覆盖率下限：防止以后有人加句台词忘了写拼音、检查却因为列表为空而形同虚设
ok("三章文游都在检查范围内", cultureStats.length === 3, cultureStats.join(" "));
ok("文游台词覆盖 > 60 句", cultureLines > 60, "实际 " + cultureLines);
ok("学习手册条目覆盖 > 20 条", manualItems > 20, "实际 " + manualItems);

// ══════════════ 汇总 ══════════════

console.log(`\n检查了 ${cultureStats.join(" / ")}，学习手册 ${manualItems} 条`);
if (fails.length) {
  console.log(`\n✗ ${fails.length} 项未通过：`);
  for (const f of fails) console.log("  " + f);
  process.exit(1);
}
console.log(`✓ 全部通过（${pass} 项）`);
