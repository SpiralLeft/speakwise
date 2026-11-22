// 学习手册数据。
//
// 每条都按「汉字 / 拼音 / 英文」三段拆开存，而不是像旧版那样把注音和译文塞在
// example 的括号里。原因：显示模式（HPE / HP / HE / H）要能独立控制拼音和英文，
// 括号文本拆不开就没法在 HE/H 模式下藏掉拼音；拼音单独成字段后也能交给
// utils/pronunciationBank.toneAlign 做声调着色（与发音测评、题库浏览同一套规则）。
//
//   title / titlePinyin / titleEn     卡片标题
//   desc                              解释文字（中英混排的正文，不属于注音对象）
//   example / examplePinyin / exampleEn  示例句
//
// titlePinyin 里保留 "V 不 V"、箭头之类的符号：toneAlign 数的是汉字位，
// 符号不参与配色；对不上就整行按普通文字渲染，不会出现错色。
export const MANUAL_DATA = {
  "1-3": {
    vocab: [
      {
        title: "高频动词：想 vs 要",
        titlePinyin: "gāopín dòngcí: xiǎng / yào",
        desc: "想 indicates a wish or missing someone. 要 indicates a stronger intent, demand, or future action.",
        example: "我想喝茶。我要喝茶。",
        examplePinyin: "Wǒ xiǎng hē chá. Wǒ yào hē chá.",
        exampleEn: "I'd like tea. / I want (or will) have tea."
      },
      {
        title: "方向与位置：在",
        titlePinyin: "fāngxiàng yǔ wèizhì: zài",
        desc: "Use 在 to indicate location. Structure: Subject + 在 + Place.",
        example: "我在家。书在桌子上。",
        examplePinyin: "Wǒ zài jiā. Shū zài zhuōzi shàng.",
        exampleEn: "I am at home. The book is on the table."
      },
      {
        title: "数量词：二 vs 两",
        titlePinyin: "shùliàngcí: èr / liǎng",
        desc: "Use 二 for counting numbers (1, 2, 3). Use 两 when quantifying objects with a measure word.",
        example: "一二三。两个人。",
        examplePinyin: "Yī èr sān. Liǎng gè rén.",
        exampleEn: "1, 2, 3. Two people."
      }
    ],
    grammar: [
      {
        title: "一般疑问句：吗",
        titlePinyin: "yībān yíwènjù: ma",
        desc: "Add 吗 at the end of a statement to turn it into a yes/no question.",
        example: "你是学生吗？",
        examplePinyin: "Nǐ shì xuésheng ma?",
        exampleEn: "Are you a student?"
      },
      {
        title: "正反疑问句：V 不 V",
        titlePinyin: "zhèngfǎn yíwènjù: V bù V",
        desc: "Form a question by stating the verb and its negative form side-by-side.",
        example: "你去不去？",
        examplePinyin: "Nǐ qù bú qù?",
        exampleEn: "Are you going or not?"
      },
      {
        title: "完成体：了",
        titlePinyin: "wánchéngtǐ: le",
        desc: "Place 了 after a verb or at the end of a sentence to indicate a completed action.",
        example: "我吃饭了。",
        examplePinyin: "Wǒ chīfàn le.",
        exampleEn: "I ate."
      }
    ],
    pinyin: [
      {
        title: "三声变调",
        titlePinyin: "sānshēng biàndiào",
        titleEn: "3rd Tone Sandhi",
        desc: "When two 3rd tones are back-to-back, the first one is pronounced as a 2nd tone.",
        example: "你好",
        examplePinyin: "nǐ hǎo → ní hǎo",
        exampleEn: "3rd tone + 3rd tone → 2nd tone + 3rd tone"
      },
      {
        title: "“不”的变调",
        titlePinyin: "“bù” de biàndiào",
        titleEn: "Tone of bù",
        desc: "When '不' (4th tone) is followed by another 4th tone, it changes to the 2nd tone (bú).",
        example: "不是，不去",
        examplePinyin: "bú shì, bú qù",
        exampleEn: "Both are read with a 2nd-tone 不 before a 4th tone."
      },
      {
        title: "“一”的变调",
        titlePinyin: "“yī” de biàndiào",
        titleEn: "Tone of yī",
        desc: "Before a 4th tone, it becomes 2nd tone (yí). Before 1st/2nd/3rd tones, it becomes 4th tone (yì).",
        example: "一个，一起",
        examplePinyin: "yí gè, yì qǐ",
        exampleEn: "yí before a 4th tone; yì before a 1st, 2nd or 3rd tone."
      }
    ]
  },
  "4-6": {
    vocab: [
      {
        title: "成语入门：莫名其妙",
        titlePinyin: "chéngyǔ rùmén: mòmíngqímiào",
        desc: "Meaning 'baffling' or 'without rhyme or reason'. Very common in daily complaints.",
        example: "他突然生气了，真是莫名其妙。",
        examplePinyin: "Tā tūrán shēngqì le, zhēn shì mòmíngqímiào.",
        exampleEn: "He suddenly got angry — it's really baffling."
      },
      {
        title: "连词：既然……就……",
        titlePinyin: "liáncí: jìrán…… jiù……",
        desc: "Since... then... Used to draw a conclusion from a stated premise.",
        example: "既然下雨了，我们就别去了。",
        examplePinyin: "Jìrán xiàyǔ le, wǒmen jiù bié qù le.",
        exampleEn: "Since it's raining, let's not go."
      },
      {
        title: "程度副词：简直",
        titlePinyin: "chéngdù fùcí: jiǎnzhí",
        desc: "Meaning 'simply' or 'absolutely'. Used for exaggeration.",
        example: "这儿的风景简直太美了！",
        examplePinyin: "Zhèr de fēngjǐng jiǎnzhí tài měi le!",
        exampleEn: "The scenery here is simply too beautiful!"
      }
    ],
    grammar: [
      {
        title: "把字句",
        titlePinyin: "bǎzìjù",
        titleEn: "bǎ-construction",
        desc: "Subject + 把 + Object + Verb + Complement. Used when the subject does something to change the state/location of a specific object.",
        example: "请把门关上。",
        examplePinyin: "Qǐng bǎ mén guānshàng.",
        exampleEn: "Please close the door."
      },
      {
        title: "被字句",
        titlePinyin: "bèizìjù",
        titleEn: "Passive Voice",
        desc: "Receiver + 被 + Doer + Verb. Often used for negative or unfavorable situations.",
        example: "我的手机被弟弟弄坏了。",
        examplePinyin: "Wǒ de shǒujī bèi dìdi nòng huài le.",
        exampleEn: "My phone was broken by my brother."
      },
      {
        title: "趋向补语",
        titlePinyin: "qūxiàng bǔyǔ",
        titleEn: "Directional Complements",
        desc: "Verb + 来/去 (towards/away from speaker) indicating direction of action.",
        example: "他走过来了。",
        examplePinyin: "Tā zǒu guòlái le.",
        exampleEn: "He walked over here."
      }
    ],
    pinyin: [
      {
        title: "轻声",
        titlePinyin: "qīngshēng",
        titleEn: "Neutral Tone",
        desc: "Certain syllables lose their tone and are pronounced short and light, especially structural particles or second syllables in some words.",
        example: "东西，喜欢，我的",
        examplePinyin: "dōngxi, xǐhuan, wǒ de",
        exampleEn: "The second syllable in each is short and light."
      },
      {
        title: "儿化音",
        titlePinyin: "érhuàyīn",
        titleEn: "Erhua",
        desc: "Adding 'r' sound to the end of a syllable, common in Northern China accents, sometimes changes the meaning.",
        example: "画 → 画儿",
        examplePinyin: "huà → huàr",
        exampleEn: "huà (picture) → huàr (a painting)"
      }
    ]
  },
  "7-9": {
    vocab: [
      {
        title: "高级成语：塞翁失马，焉知非福",
        titlePinyin: "gāojí chéngyǔ: Sàiwēng shī mǎ, yān zhī fēi fú",
        titleEn: "A blessing in disguise",
        desc: "A blessing in disguise. Lit: The old man lost his horse, how could one know it isn't a blessing?",
        example: "这次没考上也许是塞翁失马，焉知非福呢。",
        examplePinyin: "Zhè cì méi kǎoshàng yěxǔ shì Sàiwēng shī mǎ, yān zhī fēi fú ne.",
        exampleEn: "Failing this time may be a blessing in disguise."
      },
      {
        title: "书面语：旨在",
        titlePinyin: "shūmiànyǔ: zhǐzài",
        desc: "Formal vocabulary meaning 'aimed at' or 'with the purpose of'.",
        example: "这项政策旨在提高教学质量。",
        examplePinyin: "Zhè xiàng zhèngcè zhǐzài tígāo jiàoxué zhìliàng.",
        exampleEn: "This policy is aimed at improving teaching quality."
      },
      {
        title: "双音节词的正式表达",
        titlePinyin: "shuāngyīnjié cí de zhèngshì biǎodá",
        titleEn: "Formal two-syllable expressions",
        desc: "In advanced HSK, colloquial 1-character words are replaced by formal 2-character words.",
        example: "给 → 给予；办 → 处理",
        examplePinyin: "gěi → jǐ yǔ; bàn → chǔ lǐ",
        exampleEn: "give → to grant; handle → to deal with"
      }
    ],
    grammar: [
      {
        title: "反问句",
        titlePinyin: "fǎnwènjù",
        titleEn: "Rhetorical Questions",
        desc: "Using structures like 难道...吗？ or 怎么会...呢？ to make a strong statement through a question.",
        example: "难道你连这个都不知道吗？",
        examplePinyin: "Nándào nǐ lián zhège dōu bù zhīdào ma?",
        exampleEn: "Don't tell me you don't even know this?"
      },
      {
        title: "复杂关联词：与其……不如……",
        titlePinyin: "fùzá guānliáncí: yǔqí…… bùrú……",
        desc: "Rather than A... it is better to B. Used for evaluating choices.",
        example: "与其抱怨环境，不如改变自己。",
        examplePinyin: "Yǔqí bàoyuàn huánjìng, bùrú gǎibiàn zìjǐ.",
        exampleEn: "Rather than complaining about the environment, it's better to change yourself."
      },
      {
        title: "插入语",
        titlePinyin: "chārùyǔ",
        titleEn: "Parentheticals",
        desc: "Phrases inserted to express the speaker's attitude or source of info.",
        example: "总而言之，依我看，据报道",
        examplePinyin: "Zǒng'éryánzhī, yī wǒ kàn, jù bàodào.",
        exampleEn: "in conclusion, in my opinion, according to reports"
      }
    ],
    pinyin: [
      {
        title: "语调与情感表达",
        titlePinyin: "yǔdiào yǔ qínggǎn biǎodá",
        titleEn: "Intonation & Emotion",
        desc: "At advanced levels, tone isn't just about pronunciation, but sentence intonation. Rising intonation expresses doubt/surprise, falling expresses certainty/command.",
        example: "他真的来了？他真的来了。",
        examplePinyin: "Tā zhēnde lái le? Tā zhēnde lái le.",
        exampleEn: "Rising: He really came?! Falling: He really came."
      },
      {
        title: "连续语流中的停顿",
        titlePinyin: "liánxù yǔliú zhōng de tíngdùn",
        titleEn: "Pausing in speech",
        desc: "Knowing where to pause (sense groups) is crucial for advanced fluency and conveying correct grammatical meaning.",
        example: "我发现他其实并不了解这个项目。",
        examplePinyin: "Wǒ fāxiàn / tā qíshí / bìng bù liǎojiě / zhège xiàngmù.",
        exampleEn: "I found that he actually didn't understand this project at all."
      }
    ]
  }
};
