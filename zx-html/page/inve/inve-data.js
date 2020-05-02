window.onload = function() {
	getAgent();
	setUsers();
	setElems();
	setAgent();
}

var setUsers = function() {
	if (config.modeType == "sponer") {
		items = items_sponer;
	} else if (config.modeType == "ghost") {
		items = items_ghost;
	}
}

var config = {
	name: 'inve',
	inveCount: 20,
	laddCount: 25,
	laddSrc: '../../picture/ladd/',
	rightColor: 'green',
	wrongColor: 'red',
	btnName: ['next',  'doit', 'quit', 'redo', 'abon', 'open', 'more', 'close'],
};

var items = [
{ id: 0, title: '投入',
list: [
{title: '我的投入', vice: '投入的资金可被淘金者抢夺', 
dot: 1, isGrab: 1, group: '淘金者',
puzzleText: "发现一个红包", resultText:"阶福袋", cellText: "口令", cellTips:"输入正确口令打开红包",
inverStr: "投入者: ", flexStr: "#0的投入",
laddStr: "阶梯<br/><h3>#0阶</h3>",
pieceStr: "剩余份数<br/><h3>#0份</h3>",
priceStr: "单个金额<br/><h3>#0元</h3>",
timesStr: "已传播<br/><h3>#0次</h3>",
btnName: ["quit"],
btnText: ["关闭"],
lines: [
{index: "1548342507258", stamp: "2019-01-24 23:08:27", ladder: 12, ladd: 8, multi: 3, inver: "我", tag: ['众鑫淘金', '海量红包', '等你发掘']},
{index: "1548342507258", stamp: "2019-01-23 12:18:10", ladder: 9, ladd: 5, multi: 15, inver: "我", tag: ['众鑫淘金', '海量红包', '等你发掘']},
]},
{title: '选择投入', vice: '投入资金后可以抢夺等量的资金', 
dot: 1, isGrab: 0, 
inverStr: "投入者: ", flexStr: "投入预览",
laddStr: "阶梯<br/><h3>#0阶</h3>",
pieceStr: "投入份数<br/><h3>#0份</h3>",
priceStr: "单个金额<br/><h3>#0元</h3>",
timesStr: "可传播<br/><h3>#0次</h3>",
btnName: ["doit", "quit"],
btnText: ["投入", "取消"],
lines: []},
]},


{ id: 1, title: '抢夺', 
list: [
{title: '资金池', vice: '抢夺资金以提高可获收益上限',
dot: 1, isGrab: 1, group: '淘金者', instance: "luxury",
puzzleText: "发现一个福袋", resultText:"阶福袋", cellText: "口令", cellTips:"输入正确口令打开福袋",
inverStr: "投入者: ", flexStr: "#0的投入",
laddStr: "阶梯<br/><h3>#0阶</h3>",
pieceStr: "剩余份数<br/><h3>#0份</h3>",
priceStr: "单个金额<br/><h3>#0元</h3>",
timesStr: "已传播<br/><h3>#0次</h3>",
btnName: ["next", "quit", "redo", "abon", "open", "more", "close"],
btnText: ["抢夺", "取消", "重置", "丢弃", "打开", "查看", "关闭"],
lines: []}, 
]},


{ id: 2, title: '获取', 
list: [
{title: '红包池', vice: '抢夺投放的红包来获取收益', puzzleText: '发现一个红包',
dot: 100, isGrab: 1, group: '赞助商', instance: "car",
puzzleText: "发现一个红包", resultText:"阶红包", cellText: "口令", cellTips:"输入正确口令打开红包",
inverStr: "投放者: ", flexStr: "#0的投放",
laddStr: "阶梯<br/><h3>#0阶</h3>",
pieceStr: "剩余份数<br/><h3>#0份</h3>",
priceStr: "单个金额<br/><h3>#0元</h3>",
timesStr: "已传播<br/><h3>#0次</h3>",
btnName: ["next", "quit", "redo", "abon", "open", "more", "close"],
btnText: ["获取", "取消", "重置", "丢弃", "打开", "查看", "关闭"],
lines: []},
]}
];

var items_sponer = [
{ id: 0, title: '投放', 
list: [
{title: '我的投放', vice: '投放的红包可被淘金者抢夺', 
dot: 1, isGrab: 1, group: '赞助商',
puzzleText: "发现一个红包", resultText:"阶红包", cellText: "口令", cellTips:"输入正确口令打开红包",
inverStr: "投放者: ", flexStr: "#0的投放",
laddStr: "阶梯<br/><h3>#0阶</h3>",
pieceStr: "剩余份数<br/><h3>#0份</h3>",
priceStr: "单个金额<br/><h3>#0元</h3>",
timesStr: "已传播<br/><h3>#0次</h3>",
btnName: ["quit"],
btnText: ["关闭"],
lines: [
{index: "1548342507258", stamp: "2019-01-24 23:08:27", ladder: 12, ladd: 8, multi: 3, inver: "我", tag: ['众鑫淘金', '海量红包', '等你发掘']},
{index: "1548342507258", stamp: "2019-01-23 12:18:10", ladder: 9, ladd: 5, multi: 15, inver: "我", tag: ['众鑫淘金', '海量红包', '等你发掘']},
]},
{title: '选择阶梯', vice: '投入资金后可以抢夺等量的资金', 
dot: 1, isGrab: 0, 
inverStr: "投放者: ", flexStr: "投放预览",
laddStr: "阶梯<br/><h3>#0阶</h3>",
pieceStr: "投入份数<br/><h3>#0份</h3>",
priceStr: "单个金额<br/><h3>#0元</h3>",
timesStr: "可传播<br/><h3>#0次</h3>",
btnName: ["doit", "quit"],
btnText: ["投放红包", "取消"],
lines: []},
]},
];

var instance = {
	user: `
张雄壮,
李刚猛,
王坚强,
赵震撼,
章威武,
`,
	luxury: `
香奈儿/Chanel,
路易威登/Louis Vuitton,
迪奥/Dior,
古驰/Gucci,
阿玛尼/Armani,
范思哲/Versace,
玛克斯马拉/MaxMara,
爱马仕/Hermes,
蒂芙尼/Tiffany,
普拉达/Prada,
博柏利/Burberry,
纪梵希/Givenchy,
芬迪/Fendi,
巴黎世家/Baolida,
菲拉格慕/Ferragamo,
瓦伦迪诺/Valentino
`,

	car: `
宾利/Bentley,
劳斯莱斯/Rolls Royce,
阿斯顿马丁/Aston Martin,
路虎/Land Rover,
捷豹/Jaguar,
林肯/Lincoln,
凯迪拉克/Cadi llac,
吉普/Jeep,
别克/Buick,
福特/Ford,
克莱斯勒/Chrysler,
道奇/Dodge,
雪佛兰/Chevro let,
讴歌/Acura,
雷克萨斯/Lexus,
英菲尼迪/Infiniti,
丰田/Toyota,
日产/Nissan,
本田/Honda,
马自达/Mazda,
斯巴鲁/Subaru,
迈巴赫/Maybach,
梅塞德斯奔驰/Mercedes Benz,
保时捷/Porsche,
宝马/BMW ,
奥迪/Audi,
大众/Volks wagen,
法拉利/Ferrari,
兰博基尼/Lamborg hini,
玛莎拉蒂/Maserati,
阿尔法罗密欧/Alfa Romeo,
菲亚特/Fiat,
红旗/Red Banner,
奇瑞/Qirui,
长城/GreatWall,
比亚迪/Byd,
长安/Changan,
吉利/Geely
`,

	ghost: `
奴奵婒/姃姣嫌媾/娳娏嬆嫬婖,
妁奻婐/姹姘嫄嫁/娒娚嬄嫽娹,
奼奾娺/姽姝嫋媲/娞娦嬂嬋婭,
奺妒媿/姞娅嬅媳/娋娧嬗嫵媕,
妣妋媦/娇姙媺媽/娪娨嬙嫻媠,
妫妓媛/姱娍嫓媼/娮娙嬔嫿媢,
妠姒媮/娜姛嫆嫎/婊娛嬠嬞媚,
妊妩媯/娆姟嫊媰/娼娡嬒嫴婷,
妍妖媋/娀娂媴媹/婳婢嬐嬇媟,
妤妪媅/姚姼嫦嫇/婕婵嬢嬍婣,
妘妉媂/姻婙嫪嫟/娵婼嬕嬘媬,
姉妢媍/姪姰嫣嫀/嫏婧嬑嫸媨,
姂妚媓/姦姳嫕媷/婉婗嬩嬡婸,
妦妔婽/姶姵嫰嫍/婞婠嬪嬝媏,
妎姖媫/姯姺嫧媱/娬婋嬱嬨媩,
妌妕媡/姡娗嫭嫃/媧婬嬥嬓媈,
妜妲媔/姢姠嫤嫡/婦媖嬤嬚媘,
妧姗媆/姩姸嫲嫘/婩婥嬺嬛嫅,
妡姁媊/姾姷嫥嫚/婇娾嬬嬟媄,
妐妬媶/娰娭嫞嫖/婃婄嬯嬳婻,
姅姍媞/姲娣嬉嫱/婰婤嬹嬭媥,
姌妼婾/娫婀嬈嫛/婏婝嬽嬶媇,
妯姀媙/姫姬嬀嫜/婔娻孅嬦媣,
妷姏媗/娖娠嬌嫗/婎婟孉嬧媃,
妭妳媀/娥娲嫺嫷/媎婫孄嬵媤,
妸妵媑/娓娴嬁嫨/婛婅孆嬣媁,
姈姎媸/娱娝嬏嫮/婮婡孇嬫媉,
姄妱嫉/娕娊嫶嫝/娽婈孋嬻婹,
妽姤嫫/娐娢嫾嫹/婂婨孍嬾媜,
妶姮嫔/婲娔嫼嫙/婑媌孊嬿嫒,
婍娸媒/婌婘孃婿/孏娷孈孀孂
`,

	monster: `
鬼/guǐ,
魂/hún,
魁/kuí,
魉/liǎng,
魎/liǎng,
鬽/mèi,
魅/mèi,
魔/mó,
魒/piāo,
魄/pò,
魌/qī,
鬾/jì,
魃/bá,
魓/bì,
魑/chī,
魗/chǒu,
魀/gà,
魐/gān,
鬿/qí,
魕/qí,
魋/tuí,
魍/wǎng,
魏/wèi,
魈/xiāo,
魆/xū,
魖/xū,
魇/yǎn,
魘/yǎn,
魊/yù,
魙/zhān
`,
};


var items_ghost = [
{ id: 0, title: '修炼', 
list: [
{title: '修炼中', vice: '请勿打扰！谢谢！', 
dot: 1, isGrab: 1, group: '凡人',
inverStr: '修炼者: ', flexStr: '#0正在修炼',
laddStr: '阶梯<br/><h3>#0阶</h3>',
pieceStr: '剩余份数<br/><h3>#0份</h3>',
priceStr: '单个金额<br/><h3>#0元</h3>',
timesStr: '已传播<br/><h3>#0次</h3>',
btnName: ['quit'],
btnText: ['我佛慈悲'],
lines: [
{index: '1548342507258', stamp: '2019-01-24</br><h3>23:08:27',ladder: 12,  ladd: 8, multi: 3, inver: '我', tag: ['众鑫淘金', '海量红包', '等你发掘']},
{index: '1548342507258', stamp: '2019-01-23</br><h3>12:18:10',ladder: 9,  ladd: 5, multi: 15, inver: '我', tag: ['众鑫淘金', '海量红包', '等你发掘']},
]},
{title: '修炼道场', vice: '绝世神功，在此练成！', 
dot: 1, isGrab: 0, group: '凡人',
inverStr: '修炼者: ', flexStr: '武功秘籍',
laddStr: '阶梯<br/><h3>#0阶</h3>',
pieceStr: '投入份数<br/><h3>#0份</h3>',
priceStr: '单个金额<br/><h3>#0元</h3>',
timesStr: '可传播<br/><h3>#0次</h3>',
btnName: ['doit', 'quit'],
btnText: ['修炼', '敌法'],
lines: []},
]},


{ id: 1, title: '斩妖', 
list: [
{title: '锁妖塔', vice: '我杀！故我在！！！',
dot: 1, isGrab: 1, group: '妖女', instance: 'ghost',
puzzleText: "放下屠刀 立地成佛", resultText:"阶妖精的尾巴", cellText: "咒语", cellTips:"正确吟诵咒语击杀妖魔",
inverStr: '领主: ', flexStr: '#0的栖息地',
laddStr: '阶梯<br/><h3>#0阶</h3>',
pieceStr: '剩余份数<br/><h3>#0份</h3>',
priceStr: '单个金额<br/><h3>#0元</h3>',
timesStr: '已传播<br/><h3>#0次</h3>',
btnName: ['next', 'quit', 'redo', 'abon', 'open', 'close'],
btnText: ['十步杀一Yao', '我佛慈悲', '天地大回旋', '慈悲为怀', '事了拂衣去', '深藏功与名'],
lines: []}, 
]},


{ id: 3, title: '除魔',
list: [
{title: '魔界', vice: '破山贼易，破心魔难！',
dot: 100, isGrab: 1, group: '魔鬼', instance: 'monster',
puzzleText: "阿弥陀佛 善哉善哉", resultText:"阶魔石", cellText: "咒语", cellTips:"正确吟诵咒语击杀妖魔",
inverStr: '领主: ', flexStr: '#0的栖息地',
laddStr: '阶梯<br/><h3>#0阶</h3>',
pieceStr: '剩余份数<br/><h3>#0份</h3>',
priceStr: '单个金额<br/><h3>#0元</h3>',
timesStr: '已传播<br/><h3>#0次</h3>',
btnName: ['next', 'quit', 'redo', 'abon', 'open', 'close'],
btnText: ['千里不留Mo', '我佛慈悲', '乾坤大挪移', '慈悲为怀', '事了拂衣去', '深藏功与名'],
lines: []},
]}
];
