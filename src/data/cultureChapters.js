// 文化文游 · 章节列表。
//
// 单独成文件（而不是写死在 CultureMenu.jsx 里）：标题与简介也要按显示模式注音，
// 放在数据文件里才能被 scripts/check-annotations.mjs 用 toneAlign 逐条校验。
export const CULTURE_CHAPTERS = [
  {
    id: "ch1", title: "一鸣惊人", titlePinyin: "yīmíngjīngrén",
    english: "A Single Cry Amazes the World",
    titleEn: "第一章", icon: "🐦", color: "#4A90D9", bg: "#EEF4FB",
    desc: "随伍举以隐语劝谏楚庄王，成就千古成语。",
    descPinyin: "Suí Wǔ Jǔ yǐ yǐnyǔ quànjiàn Chǔ Zhuāngwáng, chéngjiù qiāngǔ chéngyǔ.",
    descEn: "Enter the palace with Wu Ju and advise King Zhuang of Chu through a riddle — the story behind a timeless idiom."
  },
  {
    id: "ch2", title: "卧薪尝胆", titlePinyin: "wòxīnchángdǎn",
    english: "Sleeping on Brushwood and Tasting Gall",
    titleEn: "第二章", icon: "⚔️", color: "#E67E22", bg: "#FEF5EC",
    desc: "随越王勾践卧薪尝胆，十年生聚终雪前耻。",
    descPinyin: "Suí Yuèwáng Gōujiàn wòxīnchángdǎn, shí nián shēngjù zhōng xuě qiánchǐ.",
    descEn: "Follow King Goujian of Yue as he endures hardship, gathers strength, and wipes out a decade of shame."
  },
  {
    id: "ch3", title: "完璧归赵", titlePinyin: "wánbìguīzhào",
    english: "Returning the Jade Intact to Zhao",
    titleEn: "第三章", icon: "📜", color: "#9B59B6", bg: "#F5F0FA",
    desc: "随蔺相如携和氏璧入秦，智斗秦王，护璧归赵。",
    descPinyin: "Suí Lìn Xiàngrú xié Héshìbì rù Qín, zhìdòu Qínwáng, hù bì guī Zhào.",
    descEn: "Accompany Lin Xiangru to Qin with the He Shi Bi jade, outwit the King of Qin, and bring the jade home safely."
  }
];
