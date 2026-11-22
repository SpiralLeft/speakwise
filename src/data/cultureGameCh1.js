// 文游 · 一鸣惊人 — 第一章
//
// pinyin 是逐句人工标注的（与题库同一做法）：文游正文含大量文言人名、地名
// （郢都、伍举、夫差、会稽），机翻拼音在这些人名上几乎必错。读音对不上时
// toneAlign 会拒绝配色，学生至少不会照着错色读。
// 数字（613 / 494 / 473）保留在拼音串里：toneAlign 只数汉字位，数字只是分隔符。
//
// 每句：text 汉字 / pinyin 拼音；选项另有 feedback / feedbackPinyin。

export const IMG = {
  hunt:   "/images/c1-hunt.png",
  advise: "/images/c1-advise.png",
  badend: "",
  wuju:   "",
  king:   "",
  guard:  "",
  you:    "",
};

export const META = {
  title: "一鸣惊人",
  subtitle: "第一章",
  desc: "随伍举入宫，以隐语劝谏楚庄王，成就千古成语。",
};

export const SCRIPT = [
  { who: "旁白", text: "公元前 613 年　楚国·郢都　王宫猎场", pinyin: "Gōngyuánqián 613 nián Chǔguó · Yǐngdū Wánggōng lièchǎng", english: "613 BCE · Yingdu, State of Chu · The royal hunting grounds", bg: "", img: "" },
  { who: "伍举", text: "小兄弟，大王现在一门心思沉迷狩猎、不管朝政，再这么下去国家就危险了！我想到个劝他的法子，得借你的力帮我递个话才行。", pinyin: "Xiǎo xiōngdì, dàwáng xiànzài yīmén xīnsī chénmí shòuliè, bùguǎn cháozhèng, zài zhème xiàqù guójiā jiù wēixiǎn le! Wǒ xiǎngdào gè quàn tā de fǎzi, děi jiè nǐ de lì bāng wǒ dì gè huà cái xíng.", english: "Young friend, the king is completely absorbed in hunting and ignoring state affairs. If this continues, the country will be in danger! I've thought of a way to advise him, but I need your help to pass on a message.", bg: IMG.hunt, img: IMG.wuju },
  { who: "你", text: "我愿意和大人一起去。", pinyin: "Wǒ yuànyì hé dàrén yīqǐ qù.", english: "I'm willing to go with you, sir.", bg: IMG.hunt, img: IMG.you },
  { who: "伍举", text: "（低声）你觉得我该如何劝谏大王？", pinyin: "（dīshēng）Nǐ juéde wǒ gāi rúhé quànjiàn dàwáng?", english: "(In a low voice) How do you think I should advise the king?", bg: IMG.hunt, img: IMG.wuju, branch: true },
];

export const CHOICE_1 = [
  { text: "直接告诉大王：您再不治国，楚国就完了", pinyin: "Zhíjiē gàosu dàwáng: nín zài bù zhìguó, Chǔguó jiù wán le", english: "Tell the king outright: if you don't govern, Chu is doomed.", correct: false, feedback: "楚王怒拍案：'妖言惑众，拖下去！'", feedbackPinyin: "Chǔ wáng nù pāi àn: 'yāoyán huòzhòng, tuō xiàqù!'", feedbackEn: "The king slams the table in fury: 'Spreading wild rumors to confuse the people — drag him away!'" },
  { text: "用比喻的故事，让大王自己领悟", pinyin: "Yòng bǐyù de gùshi, ràng dàwáng zìjǐ lǐngwù", english: "Use a parable so the king understands on his own.", correct: true, feedback: '伍举点头：\'妙计！就用"三年不飞鸟"的隐语。\'', feedbackPinyin: "Wǔ Jǔ diǎntóu: 'miàojì! jiù yòng “sān nián bù fēi niǎo” de yǐnyǔ.'", feedbackEn: "Wu Ju nods: 'A brilliant plan! We'll use the riddle of the bird that did not fly for three years.'" },
  { text: "写一首诗歌，委婉表达", pinyin: "Xiě yī shǒu shīgē, wěiwǎn biǎodá", english: "Write a poem to express it tactfully.", correct: false, feedback: "楚王皱眉：'酸儒之言，拖出去！'", feedbackPinyin: "Chǔ wáng zhòuméi: 'suānrú zhī yán, tuō chūqù!'", feedbackEn: "The king frowns: 'The ramblings of a pedant — throw him out!'" },
];

export const PALACE_SCRIPT = [
  { who: "旁白", text: "—— 队伍转入大殿，百官肃立 ——", pinyin: "—— duìwǔ zhuǎnrù dàdiàn, bǎiguān sùlì ——", english: "— The party enters the great hall; the officials stand in solemn silence —", bg: IMG.advise, img: "" },
  { who: "伍举", text: "大王，臣听说有只鸟落在城外的土山上，整整三年既不飞也不叫，您说这是什么鸟呀？", pinyin: "Dàwáng, chén tīngshuō yǒu zhī niǎo luò zài chéngwài de tǔshān shàng, zhěngzhěng sān nián jì bù fēi yě bù jiào, nín shuō zhè shì shénme niǎo ya?", english: "Your Majesty, I hear a bird has perched on the earthen hill outside the city. For three whole years it has neither flown nor cried out. What kind of bird would you call that?", bg: IMG.advise, img: IMG.wuju },
  { who: "楚王", text: "哦？那在你看来，这只鸟怎么样呢？", pinyin: "Ó? Nà zài nǐ kànlái, zhè zhī niǎo zěnmeyàng ne?", english: "Oh? And what do you make of this bird?", bg: IMG.advise, img: IMG.king, branch: true },
];

export const CHOICE_2 = [
  { text: "这鸟三年不飞，一旦展翅就会直冲云霄；三年不鸣，一旦开口就会惊动天下人", pinyin: "Zhè niǎo sān nián bù fēi, yīdàn zhǎnchì jiù huì zhíchōng yúnxiāo; sān nián bù míng, yīdàn kāikǒu jiù huì jīngdòng tiānxià rén", english: "This bird has not flown for three years, but once it spreads its wings it will soar into the clouds; it has not cried for three years, but once it speaks it will startle the whole world.", correct: true, feedback: "楚王大笑：'说得好！此鸟，寡人也！'", feedbackPinyin: "Chǔ wáng dàxiào: 'shuō de hǎo! cǐ niǎo, guǎrén yě!'", feedbackEn: "The king laughs heartily: 'Well said! That bird is none other than I!'" },
  { text: "此鸟平庸无为，白白地占领高枝，不如驱逐它", pinyin: "Cǐ niǎo píngyōng wúwéi, báibái de zhànlǐng gāozhī, bùrú qūzhú tā", english: "This bird is mediocre and useless, occupying the high branch for nothing. Better to drive it away.", correct: false, feedback: "楚王怒喝：'拖下去，斩！'", feedbackPinyin: "Chǔ wáng nùhè: 'tuō xiàqù, zhǎn!'", feedbackEn: "The king roars: 'Drag him out and behead him!'" },
];

export const VICTORY_SCRIPT = [
  { who: "楚王", text: "说得好！此鸟，寡人也！", pinyin: "Shuō de hǎo! Cǐ niǎo, guǎrén yě!", english: "Well said! That bird is none other than I!", bg: IMG.advise, img: IMG.king },
  { who: "旁白", text: "楚庄王从此亲理朝政，诛杀奸臣数百，进用贤臣数百。", pinyin: "Chǔ Zhuāngwáng cóngcǐ qīnlǐ cháozhèng, zhūshā jiānchén shùbǎi, jìnyòng xiánchén shùbǎi.", english: "From then on King Zhuang of Chu took charge of state affairs himself, executing hundreds of treacherous officials and promoting hundreds of worthy ones.", bg: IMG.advise, img: "" },
  { who: "旁白", text: "任用伍举、苏从等贤臣治理朝政，楚国日益富强。", pinyin: "Rènyòng Wǔ Jǔ, Sū Cóng děng xiánchén zhìlǐ cháozhèng, Chǔguó rìyì fùqiáng.", english: "He appointed worthy ministers such as Wu Ju and Su Cong to govern, and Chu grew stronger and more prosperous by the day.", bg: IMG.advise, img: "" },
  { who: "旁白", text: "后来楚庄王问鼎中原，大败晋国，成为春秋五霸之一。", pinyin: "Hòulái Chǔ Zhuāngwáng wèndǐng Zhōngyuán, dàbài Jìnguó, chéngwéi Chūnqiū wǔbà zhī yī.", english: "Later King Zhuang of Chu marched into the Central Plains, crushed the State of Jin, and became one of the Five Hegemons of the Spring and Autumn period.", bg: IMG.advise, img: "" },
  { who: "旁白", text: "【成就】成语'一鸣惊人'已收录于你的文化手册！", pinyin: "【chéngjiù】 chéngyǔ 'yīmíngjīngrén' yǐ shōulù yú nǐ de wénhuà shǒucè!", english: "[Achievement] The idiom 'yīmíngjīngrén' (to amaze the world with a single brilliant feat) has been added to your culture handbook!", bg: IMG.advise, img: "" },
];
