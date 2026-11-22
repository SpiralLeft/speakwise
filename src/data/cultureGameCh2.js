// 文游 · 卧薪尝胆 — 第二章
//
// 逐句人工标注拼音（见第一章文件头）。会稽读 Kuàijī、夫差读 Fūchā —— 这类
// 人名地名读音是自动注音最容易出错的地方，所以文游数据一律手写。

export const IMG = {
  battle:  "/images/c2-battle.png",
  hut:     "/images/c2-hut.png",
  badend:  "",
  victory: "",
  fuchai:  "/images/c2-fuchai.png",
  goujian: "/images/c2-goujian.png",
  you:     "",
  guard:   "",
};

export const META = {
  title: "卧薪尝胆",
  subtitle: "第二章",
  desc: "随越王勾践卧薪尝胆，积蓄力量，十年生聚终雪前耻。",
};

export const SCRIPT = [
  { who: "旁白", text: "公元前 494 年　吴国·姑苏台", pinyin: "Gōngyuánqián 494 nián Wúguó · Gūsūtái", english: "494 BCE · Gusu Terrace, State of Wu", bg: "", img: "" },
  { who: "吴王夫差", text: "勾践，你败于我手，今日起为我牵马洗辇，可有不服？", pinyin: "Gōujiàn, nǐ bài yú wǒ shǒu, jīnrì qǐ wèi wǒ qiān mǎ xǐ niǎn, kě yǒu bù fú?", english: "Goujian, you were defeated by me. From today you will lead my horse and wash my carriage. Do you object?", bg: IMG.battle, img: IMG.fuchai },
  { who: "越王勾践", text: "（俯首）臣……不敢。愿为大王效犬马之劳。", pinyin: "（fǔshǒu）chén…… bùgǎn. Yuàn wèi dàwáng xiào quǎnmǎ zhī láo.", english: "(Bowing his head) Your servant... would not dare. I am willing to serve Your Majesty like a dog or horse.", bg: IMG.battle, img: IMG.goujian },
  { who: "吴王夫差", text: "哼！算你识相。且看你这三年的表现！", pinyin: "Hēng! Suàn nǐ shíxiàng. Qiě kàn nǐ zhè sān nián de biǎoxiàn!", english: "Hmph! At least you know your place. We shall see how you behave over the next three years!", bg: IMG.battle, img: IMG.fuchai },
  { who: "旁白", text: "三年后，勾践获释归国，居于会稽山茅屋……", pinyin: "Sān nián hòu, Gōujiàn huòshì guīguó, jū yú Kuàijī Shān máowū……", english: "Three years later, Goujian was released and returned home, living in a thatched hut on Mount Kuaiji...", bg: IMG.hut, img: "" },
  { who: "你", text: "大王，您每日睡柴草、尝苦胆，这是何苦？", pinyin: "Dàwáng, nín měirì shuì cháicǎo, cháng kǔdǎn, zhè shì hékǔ?", english: "Your Majesty, every day you sleep on brushwood and taste bitter gall — why put yourself through this?", bg: IMG.hut, img: IMG.you },
  { who: "越王勾践", text: "汝知'卧薪尝胆'之意乎？我问你——", pinyin: "Rǔ zhī 'wòxīnchángdǎn' zhī yì hū? Wǒ wèn nǐ——", english: "Do you know the meaning of 'sleeping on brushwood and tasting gall'? Let me ask you—", bg: IMG.hut, img: IMG.goujian, branch: true },
];

export const CHOICE_1 = [
  { text: "大王应享安乐，忘却前耻，与吴修好", pinyin: "Dàwáng yīng xiǎng ānlè, wàngquè qiánchǐ, yǔ Wú xiūhǎo", english: "Your Majesty should enjoy comfort, forget past shame, and make peace with Wu.", correct: false, feedback: "勾践怒目：'懦夫之言！' 吴兵突至，将你押走……", feedbackPinyin: "Gōujiàn nùmù: 'nuòfū zhī yán!' Wú bīng tū zhì, jiāng nǐ yā zǒu……", feedbackEn: "Goujian glares: 'The words of a coward!' Wu soldiers rush in and drag you away..." },
  { text: "大王卧薪尝胆，正是为了不忘耻辱，积蓄力量复国", pinyin: "Dàwáng wòxīnchángdǎn, zhèngshì wèile bù wàng chǐrǔ, jīxù lìliàng fùguó", english: "Your Majesty sleeps on brushwood and tastes gall precisely to remember the humiliation and build strength to restore the state.", correct: true, feedback: "勾践点头：'知我者，卿也。十年生聚，十年教训，越必兴！'", feedbackPinyin: "Gōujiàn diǎntóu: 'zhī wǒ zhě, qīng yě. Shí nián shēngjù, shí nián jiàoxùn, Yuè bì xīng!'", feedbackEn: "Goujian nods: 'You understand me. Ten years of growth, ten years of training — Yue will rise again!'" },
  { text: "大王此举徒增苦楚，不如刺杀夫差，一了百了", pinyin: "Dàwáng cǐjǔ tú zēng kǔchǔ, bùrú cìshā Fūchā, yīliǎobǎiliǎo", english: "This only adds to your suffering; better to assassinate Fuchai and end it all.", correct: false, feedback: "勾践摇头：'匹夫之勇，不足与谋。' 你被逐出宫外……", feedbackPinyin: "Gōujiàn yáotóu: 'pǐfū zhī yǒng, bùzú yǔ móu.' Nǐ bèi zhúchū gōngwài……", feedbackEn: "Goujian shakes his head: 'The courage of a fool is no use in planning.' You are driven from the palace..." },
];

export const PALACE_SCRIPT = [
  { who: "旁白", text: "—— 十年后，越国大治，兵强马壮 ——", pinyin: "—— shí nián hòu, Yuèguó dàzhì, bīngqiángmǎzhuàng ——", english: "— Ten years later, Yue is well governed, its soldiers strong and horses sturdy —", bg: IMG.victory, img: "" },
  { who: "越王勾践", text: "如今时机已至！汝愿随我伐吴，一雪前耻？", pinyin: "Rújīn shíjī yǐ zhì! Rǔ yuàn suí wǒ fá Wú, yī xuě qiánchǐ?", english: "The time has come! Will you follow me to attack Wu and wipe out our shame?", bg: IMG.victory, img: IMG.goujian },
  { who: "你", text: "臣万死不辞！", pinyin: "Chén wànsǐ bùcí!", english: "I would face death a thousand times without shrinking!", bg: IMG.victory, img: IMG.you },
  { who: "旁白", text: "公元前 473 年，越军攻破姑苏，吴王夫差自刎。", pinyin: "Gōngyuánqián 473 nián, Yuèjūn gōngpò Gūsū, Wúwáng Fūchā zìwěn.", english: "In 473 BCE, the Yue army breached Gusu, and King Fuchai of Wu took his own life.", bg: IMG.battle, img: "" },
];

export const CHOICE_2 = []; // No second choice in this chapter

export const VICTORY_SCRIPT = [
  { who: "越王勾践", text: "二十年卧薪尝胆，终雪会稽之耻！夫差，你可曾想到今日？", pinyin: "Èrshí nián wòxīnchángdǎn, zhōng xuě Kuàijī zhī chǐ! Fūchā, nǐ kě céng xiǎngdào jīnrì?", english: "Twenty years of sleeping on brushwood and tasting gall, and at last the shame of Kuaiji is wiped out! Fuchai, did you ever imagine this day?", bg: IMG.battle, img: IMG.goujian },
  { who: "旁白", text: "勾践终于报了会稽之仇，成为了春秋最后一位霸主。", pinyin: "Gōujiàn zhōngyú bào le Kuàijī zhī chóu, chéngwéi le Chūnqiū zuìhòu yī wèi bàzhǔ.", english: "Goujian finally avenged Kuaiji and became the last hegemon of the Spring and Autumn period.", bg: IMG.victory, img: "" },
  { who: "旁白", text: "'卧薪尝胆'的典故流传至今，成为激励后人忍辱负重、奋发图强的精神象征。", pinyin: "'wòxīnchángdǎn' de diǎngù liúchuán zhìjīn, chéngwéi jīlì hòurén rěnrǔfùzhòng, fènfātúqiáng de jīngshén xiàngzhēng.", english: "The story of 'sleeping on brushwood and tasting gall' has passed down to this day — a symbol of enduring hardship and striving to become strong.", bg: IMG.victory, img: "" },
  { who: "旁白", text: "【成就】成语'卧薪尝胆'已收录于你的文化手册！", pinyin: "【chéngjiù】 chéngyǔ 'wòxīnchángdǎn' yǐ shōulù yú nǐ de wénhuà shǒucè!", english: "[Achievement] The idiom 'wòxīnchángdǎn' (enduring hardship to achieve a goal) has been added to your culture handbook!", bg: IMG.victory, img: "" },
];
