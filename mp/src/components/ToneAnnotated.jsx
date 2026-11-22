import { View, Text } from '@tarojs/components'
import { TONE_COLORS, TONE_LABELS, TONE_SAMPLES } from '../core/utils/pronunciationBank'

/**
 * 声调着色渲染 —— Web 版 src/components/ToneAnnotated.jsx 的小程序版本。
 * 只给发音测评用；学习手册的注音是单色，不走这个组件。
 *
 * toneMap 为 null（没有拼音、或拼音与正文对不上）时一律原样渲染 —— 宁可不配色，
 * 也不能让颜色和字错位（见 core/utils/pronunciationBank.toneAlign）。
 *
 * 小程序里嵌套 Text 才会继承字号，逐字着色必须靠内层 Text（View 会另起一块）。
 * 用 display:block 让拼音行独占一行，效果同 Web 版的 <span style="display:block">。
 */
const BLOCK = { display: 'block' }

export function ToneText({ text, toneMap, style, colors = TONE_COLORS }) {
  if (!toneMap) return <Text style={{ ...BLOCK, ...style }}>{text}</Text>
  return (
    <Text style={{ ...BLOCK, ...style }}>
      {Array.from(text).map((c, i) =>
        toneMap.tones[i] ? (
          <Text key={i} style={{ color: colors[toneMap.tones[i]] }}>{c}</Text>
        ) : (
          <Text key={i}>{c}</Text>
        )
      )}
    </Text>
  )
}

export function TonePinyin({ pinyin, toneMap, style, colors = TONE_COLORS }) {
  if (!toneMap) return <Text style={{ ...BLOCK, ...style }}>{pinyin}</Text>
  return (
    <Text style={{ ...BLOCK, ...style }}>
      {toneMap.spans.map((s, i) =>
        s.tone ? (
          <Text key={i} style={{ color: colors[s.tone] }}>{s.text}</Text>
        ) : (
          <Text key={i}>{s.text}</Text>
        )
      )}
    </Text>
  )
}

export function ToneLegend({ colors = TONE_COLORS, style }) {
  return (
    <View style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 16, ...style }}>
      {[1, 2, 3, 4, 5].map((t) => (
        <View key={t} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <View style={{ width: 7, height: 7, borderRadius: '50%', background: colors[t] }} />
          <Text style={{ fontSize: 11, color: colors[t], fontWeight: 600 }}>{TONE_SAMPLES[t]}</Text>
          <Text style={{ fontSize: 11, color: '#aaa' }}>{TONE_LABELS[t]}</Text>
        </View>
      ))}
    </View>
  )
}
