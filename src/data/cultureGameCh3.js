// 文游 · 完璧归赵 — 第三章
//
// 逐句人工标注拼音（见第一章文件头）。本章文言段落最长，且含「肉袒负荆」
// 「怒发冲冠（nùfàchōngguān）」「衣褐（yìhè）」等多音字，必须按义项手写。

export const META = {
  title: "完璧归赵",
  subtitle: "第三章",
  desc: "随蔺相如携和氏璧入秦，智斗秦王，护璧归赵。",
};

export const IMG = {
  zhaofu:   "",
  palace:   "/images/秦王蔺相如对峙图.png",
  badend:   "",
  victory:  "",
  miaoxian: "/images/缪贤立绘.png",
  linxiang:"/images/蔺相如立绘.png",
  you:      "",
  guard:    "",
};

export const SCRIPT = [
  { who: "旁白", text: "公元前 283 年　赵国·邯郸", pinyin: "Gōngyuánqián 283 nián Zhàoguó · Hándān", english: "283 BCE · Handan, State of Zhao", bg: "", img: "" },
  { who: "旁白", text: "楚人卞和献'和氏璧'于赵惠文王，此璧天下无双。", pinyin: "Chǔ rén Biàn Hé xiàn 'Héshìbì' yú Zhào Huìwén Wáng, cǐ bì tiānxià wúshuāng.", english: "Bian He of Chu presented the 'He Shi Bi' jade to King Huiwen of Zhao. This jade was unmatched in the world.", bg: IMG.zhaofu, img: "" },
  { who: "缪贤", text: "秦王愿以十五座城池交换和氏璧，但这必是骗局……", pinyin: "Qínwáng yuàn yǐ shíwǔ zuò chéngchí jiāohuàn Héshìbì, dàn zhè bì shì piànjú……", english: "The King of Qin offers fifteen cities in exchange for the jade, but it must be a trick...", bg: IMG.zhaofu, img: IMG.miaoxian },
  { who: "缪贤", text: "相如虽愿携璧入秦，但我心中不安。你随他同去，务必护璧周全！", pinyin: "Xiàngrú suī yuàn xié bì rù Qín, dàn wǒ xīnzhōng bù'ān. Nǐ suí tā tóng qù, wùbì hù bì zhōuquán!", english: "Xiangru is willing to take the jade to Qin, but I am uneasy. Go with him and make sure the jade is protected!", bg: IMG.zhaofu, img: IMG.miaoxian },
  { who: "蔺相如", text: "此璧价值连城，更系赵国安危。我有一计，但需有人配合。你，可愿助我？", pinyin: "Cǐ bì jiàzhí liánchéng, gèng xì Zhàoguó ānwēi. Wǒ yǒu yī jì, dàn xū yǒu rén pèihé. Nǐ, kě yuàn zhù wǒ?", english: "This jade is priceless, and the safety of Zhao depends on it. I have a plan, but I need someone to assist me. Will you help?", bg: IMG.zhaofu, img: IMG.linxiang },
  { who: "你", text: "晚辈万死不辞！", pinyin: "Wǎnbèi wànsǐ bùcí!", english: "I would face death a thousand times without shrinking!", bg: IMG.zhaofu, img: IMG.you },
  { who: "蔺相如", text: "若秦王在章台接见我，却无意交割城池，我该如何应对？", pinyin: "Ruò Qínwáng zài Zhāngtái jiējiàn wǒ, què wúyì jiāogē chéngchí, wǒ gāi rúhé yìngduì?", english: "If the King of Qin receives me at Zhangtai but has no intention of handing over the cities, how should I respond?", bg: IMG.zhaofu, img: IMG.linxiang, branch: true },
];

export const CHOICE_1 = [
  { text: "当场揭穿秦王诡计，痛斥秦国无信", pinyin: "Dāngchǎng jiēchuān Qínwáng guǐjì, tòngchì Qínguó wúxìn", english: "Expose the King of Qin's scheme on the spot and denounce Qin's faithlessness.", correct: false, feedback: "蔺相如摇头：'激怒秦王，人璧俱失。' 秦兵将你拿下……", feedbackPinyin: "Lìn Xiàngrú yáotóu: 'jīnù Qínwáng, rén bì jù shī.' Qín bīng jiāng nǐ ná xià……", feedbackEn: "Lin Xiangru shakes his head: 'Angering the king will lose us both the man and the jade.' Qin soldiers seize you..." },
  { text: "假称璧有瑕疵，要回玉璧，再拖延时间", pinyin: "Jiǎchēng bì yǒu xiácī, yào huí yùbì, zài tuōyán shíjiān", english: "Claim the jade has a flaw, get it back, and then stall for time.", correct: true, feedback: "蔺相如眼中闪过赞赏：'正是此计！'", feedbackPinyin: "Lìn Xiàngrú yǎnzhōng shǎnguò zànshǎng: 'zhèng shì cǐ jì!'", feedbackEn: "Admiration flashes in Lin Xiangru's eyes: 'That is exactly the plan!'" },
  { text: "献上玉璧，换取秦王好感，再求割城", pinyin: "Xiànshàng yùbì, huànqǔ Qínwáng hǎogǎn, zài qiú gē chéng", english: "Present the jade to win the king's favor, then ask for the cities.", correct: false, feedback: "蔺相如叹息：'正中秦王下怀。' 赵国既失璧又失地……", feedbackPinyin: "Lìn Xiàngrú tànxī: 'zhèngzhòng Qínwáng xiàhuái.' Zhàoguó jì shī bì yòu shī dì……", feedbackEn: "Lin Xiangru sighs: 'That plays right into his hands.' Zhao loses both the jade and the land..." },
];

export const PALACE_SCRIPT = [
  { who: "旁白", text: "—— 章台宫·秦王大殿 ——", pinyin: "—— Zhāngtáigōng · Qínwáng dàdiàn ——", english: "— Zhangtai Palace · The King of Qin's great hall —", bg: IMG.palace, img: "" },
  { who: "秦王", text: "（接过和氏璧，传示美人及左右，群臣欢呼'万岁'）", pinyin: "（jiēguò Héshìbì, chuánshì měirén jí zuǒyòu, qúnchén huānhū 'wànsuì'）", english: "(He takes the jade and passes it among his consorts and attendants; the ministers cheer 'Long live the king!')", bg: IMG.palace, img: "" },
  { who: "蔺相如", text: "大王，此璧虽美，却有一微瑕，请让臣指给大王看。", pinyin: "Dàwáng, cǐ bì suī měi, què yǒu yī wēixiá, qǐng ràng chén zhǐ gěi dàwáng kàn.", english: "Your Majesty, beautiful as this jade is, it has a tiny flaw. Allow me to point it out to you.", bg: IMG.palace, img: IMG.linxiang },
  { who: "秦王", text: "哦？拿来吾看。", pinyin: "Ó? Ná lái wú kàn.", english: "Oh? Hand it here and let me see.", bg: IMG.palace, img: "" },
  { who: "蔺相如", text: "（接过玉璧，后退数步，倚柱而立，怒发冲冠）大王欲得璧，使人发书至赵王。赵王悉召群臣议，皆言秦贪，负其强，以空言求璧，偿城恐不可得！", pinyin: "（jiēguò yùbì, hòutuì shùbù, yǐzhù érlì, nùfàchōngguān）Dàwáng yù dé bì, shǐ rén fā shū zhì Zhào Wáng. Zhào Wáng xī zhào qúnchén yì, jiē yán Qín tān, fù qí qiáng, yǐ kōngyán qiú bì, cháng chéng kǒng bùkě dé!", english: "(Taking the jade, he steps back several times, stands against a pillar, hair bristling with rage) Your Majesty wanted the jade and sent a letter to the King of Zhao. The King of Zhao summoned all his ministers to discuss it; they all said Qin is greedy and relies on its strength, seeking the jade with empty words, and that the cities would likely never be delivered!", bg: IMG.palace, img: IMG.linxiang },
  { who: "蔺相如", text: "臣观大王无意偿赵王城邑，故臣复取璧。大王必欲急臣，臣头今与璧俱碎于柱矣！", pinyin: "Chén guān dàwáng wúyì cháng Zhào Wáng chéngyì, gù chén fù qǔ bì. Dàwáng bì yù jí chén, chén tóu jīn yǔ bì jù suì yú zhù yǐ!", english: "I see that Your Majesty has no intention of giving Zhao the cities, so I have taken the jade back. If Your Majesty presses me, my head and the jade will shatter together against this pillar!", bg: IMG.palace, img: IMG.linxiang },
  { who: "秦王", text: "（大惊失色，连声劝阻）先生勿急！寡人即刻召有司案图，指从此以往十五都予赵！", pinyin: "（dàjīng shīsè, liánshēng quànzǔ）xiānsheng wù jí! Guǎrén jíkè zhào yǒusī àntú, zhǐ cóngcǐ yǐwǎng shíwǔ dū yǔ Zhào!", english: "(Greatly alarmed, he hurriedly tries to calm him) Do not be hasty, sir! I will immediately summon the officials to consult the map and point out fifteen cities from here onward to be given to Zhao!", bg: IMG.palace, img: "" },
  { who: "蔺相如", text: "（暗中对你使眼色）你快——", pinyin: "（ànzhōng duì nǐ shǐ yǎnsè）nǐ kuài——", english: "(Giving you a covert signal) Quick, you—", bg: IMG.palace, img: IMG.linxiang, branch: true },
];

export const CHOICE_2 = [
  { text: "立即上前扶住蔺相如，防止他真的撞柱", pinyin: "Lìjí shàngqián fúzhù Lìn Xiàngrú, fángzhǐ tā zhēnde zhuàng zhù", english: "Rush forward to hold Lin Xiangru back and stop him from actually striking the pillar.", correct: false, feedback: "此举暴露计谋，秦王强行夺璧……", feedbackPinyin: "Cǐjǔ bàolù jìmóu, Qínwáng qiángxíng duó bì……", feedbackEn: "This gives the plan away, and the King of Qin seizes the jade by force..." },
  { text: "悄悄退出大殿，准备马车，接应玉璧潜逃", pinyin: "Qiāoqiāo tuìchū dàdiàn, zhǔnbèi mǎchē, jiēyìng yùbì qiántáo", english: "Slip quietly out of the hall, ready a carriage, and get the jade away in secret.", correct: true, feedback: "你悄然退出，从者衣褐怀璧，从径道亡……", feedbackPinyin: "Nǐ qiǎorán tuìchū, cóngzhě yìhè huáibì, cóng jìngdào wáng……", feedbackEn: "You slip away; an attendant hides the jade in his clothes and escapes along a side road..." },
  { text: "大声附和蔺相如，增加气势", pinyin: "Dàshēng fùhè Lìn Xiàngrú, zēngjiā qìshì", english: "Loudly back up Lin Xiangru to add to the momentum.", correct: false, feedback: "人多引起警觉，秦兵封锁宫门……", feedbackPinyin: "Rén duō yǐnqǐ jǐngjué, Qínbīng fēngsuǒ gōngmén……", feedbackEn: "The commotion raises alarm; Qin soldiers seal the palace gates..." },
];

export const VICTORY_SCRIPT = [
  { who: "旁白", text: "—— 玉璧归赵，不辱使命 ——", pinyin: "—— yùbì guī Zhào, bù rǔ shǐmìng ——", english: "— The jade returns to Zhao; the mission is accomplished —", bg: IMG.victory, img: "" },
  { who: "蔺相如", text: "完璧归赵！秦王虽强，终不能欺赵！", pinyin: "Wánbìguīzhào! Qínwáng suī qiáng, zhōng bùnéng qī Zhào!", english: "The jade returns to Zhao intact! Mighty as the King of Qin is, he could not deceive Zhao!", bg: IMG.victory, img: IMG.linxiang },
  { who: "你", text: "大人智勇双全，晚辈佩服！", pinyin: "Dàrén zhìyǒngshuāngquán, wǎnbèi pèifú!", english: "You are both wise and brave, sir. I admire you!", bg: IMG.victory, img: IMG.you },
  { who: "旁白", text: "蔺相如拜为上大夫。后渑池之会再挫秦王，拜为上卿，位在廉颇之上。", pinyin: "Lìn Xiàngrú bài wéi shàngdàfū. Hòu Miǎnchí zhī huì zài cuò Qínwáng, bài wéi shàngqīng, wèi zài Lián Pō zhī shàng.", english: "Lin Xiangru was appointed senior minister. Later, at the Mianchi meeting, he again thwarted the King of Qin and was made chief minister, ranking above Lian Po.", bg: IMG.victory, img: "" },
  { who: "旁白", text: "老将廉颇不服，扬言羞辱，蔺相如以国家为重，处处避让。", pinyin: "Lǎojiàng Lián Pō bù fú, yángyán xiūrǔ, Lìn Xiàngrú yǐ guójiā wéi zhòng, chùchù bìràng.", english: "The veteran general Lian Po was resentful and threatened to humiliate him; Lin Xiangru, putting the state first, avoided him at every turn.", bg: IMG.victory, img: "" },
  { who: "蔺相如", text: "'先国家之急而后私仇也。'", pinyin: "'Xiān guójiā zhī jí ér hòu sīchóu yě.'", english: "'The state's crisis comes before private grudges.'", bg: IMG.victory, img: IMG.linxiang },
  { who: "旁白", text: "廉颇闻之，肉袒负荆，登门谢罪——成就'负荆请罪'的千古美谈。", pinyin: "Lián Pō wén zhī, ròutǎn fù jīng, dēngmén xièzuì——chéngjiù 'fùjīngqǐngzuì' de qiāngǔ měitán.", english: "When Lian Po heard this, he bared his back, carried brambles, and came to apologize at Lin's door — giving rise to the enduring story of 'bearing brambles to beg forgiveness.'", bg: IMG.victory, img: "" },
  { who: "旁白", text: "【成就】成语'完璧归赵'已收录于你的文化手册！", pinyin: "【chéngjiù】 chéngyǔ 'wánbìguīzhào' yǐ shōulù yú nǐ de wénhuà shǒucè!", english: "[Achievement] The idiom 'wánbìguīzhào' (returning the jade intact to Zhao) has been added to your culture handbook!", bg: IMG.victory, img: "" },
];
