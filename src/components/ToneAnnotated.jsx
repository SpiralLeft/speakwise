import { TONE_COLORS, TONE_LABELS, TONE_SAMPLES } from "../utils/pronunciationBank.js";

/**
 * 声调着色渲染 —— 只给发音测评用。
 *
 * 学习手册 / 文化文游的注音特意用单色：这两处是阅读材料，多色会干扰阅读；
 * 声调颜色是评测页的核心信息，所以只有那里保留。
 *
 * toneMap 为 null（没有拼音、或拼音与正文对不上）时一律原样渲染 —— 宁可不配色，
 * 也不能让颜色和字错位，学生看不出标注错了（见 pronunciationBank.toneAlign）。
 *
 * colors 允许按背景色换一档明度：语义仍是「一声蓝、二声绿、三声橙、四声红、轻声灰」。
 */
// 用 <span> + display:block 而不是 <div>：这三处调用点都在 <button> 里，
// button 只允许 phrasing content，嵌 div 属于非法结构（浏览器能画，但语义是坏的）。
const BLOCK = { display: "block" };

export function ToneText({ text, toneMap, style, colors = TONE_COLORS }) {
  if (!toneMap) return <span style={{ ...BLOCK, ...style }}>{text}</span>;
  return (
    <span style={{ ...BLOCK, ...style }}>
      {Array.from(text).map((c, i) => (toneMap.tones[i]
        ? <span key={i} style={{ color: colors[toneMap.tones[i]] }}>{c}</span>
        : <span key={i}>{c}</span>))}
    </span>
  );
}

export function TonePinyin({ pinyin, toneMap, style, colors = TONE_COLORS }) {
  if (!toneMap) return <span style={{ ...BLOCK, ...style }}>{pinyin}</span>;
  return (
    <span style={{ ...BLOCK, ...style }}>
      {toneMap.spans.map((s, i) => (s.tone
        ? <span key={i} style={{ color: colors[s.tone] }}>{s.text}</span>
        : <span key={i}>{s.text}</span>))}
    </span>
  );
}

export function ToneLegend({ colors = TONE_COLORS, style }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 16, fontSize: 11, color: "#aaa", ...style }}>
      {[1, 2, 3, 4, 5].map(t => (
        <span key={t} style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: colors[t], display: "inline-block" }} />
          <span style={{ color: colors[t], fontWeight: 600 }}>{TONE_SAMPLES[t]}</span>
          {TONE_LABELS[t]}
        </span>
      ))}
    </div>
  );
}
