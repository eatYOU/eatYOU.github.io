window.onload = function() {
	getAgent();
	setUsers();
	setElems();
	setAgent();
}

var setUsers = function() {
	if (config.sett.modeType == 'sponer') {
		items = items_sponer;
	} else if (config.sett.modeType == 'ghost') {
		items = items_ghost;
	}
}

var cfg = {
	name: 'inve',
	inveCount: 33,
	laddCount: 25,
	laddSrc: '../../picture/ladd/',
	rightColor: 'green',
	wrongColor: 'red',
	btnName: ['next',  'doit', 'quit', 'redo', 'abon', 'open', 'start', 'throw', 'home', 'follow', 'close'],
};



var items = [
{ id: 0, title: '投入',
list: [
{title: '我的投入', vice: '投入的资金可被淘金者抢夺', 
dot: 1, 
isGrab: 1, 
group: '淘金者',
inverStr: '投入者: ', 
flexStr: '#0的投入',
laddStr: '阶梯<br/><h3>#0阶</h3>',
pieceStr: '剩余份数<br/><h3>#0份</h3>',
priceStr: '单个金额<br/><h3>#0元</h3>',
timesStr: '已传播<br/><h3>#0次</h3>',
btnName: ['quit'],
btnText: ['关闭'],
lines: [
{index: '1548342507258', stamp: '2019-01-24 23:08:27', ladder: 12, ladd: 8, multi: 3, inver: '我', tag: ['众鑫淘金', '海量红包', '等你发掘']},
{index: '1548342507258', stamp: '2019-01-23 12:18:10', ladder: 9, ladd: 5, multi: 15, inver: '我', tag: ['众鑫淘金', '海量红包', '等你发掘']},
]},
{title: '选择投入', vice: '投入资金后可以抢夺等量的资金', 
dot: 1, 
isGrab: 0, 
inverStr: '投入者: ', 
flexStr: '投入预览',
laddStr: '阶梯<br/><h3>#0阶</h3>',
pieceStr: '投入份数<br/><h3>#0份</h3>',
priceStr: '单个金额<br/><h3>#0元</h3>',
timesStr: '可传播<br/><h3>#0次</h3>',
btnName: ['doit', 'quit'],
btnText: ['投入', '取消'],
lines: []},
]},


{ id: 1, title: '抢夺', 
list: [
{title: '资金池', vice: '抢夺资金以提高可获收益上限',
dot: 1, 
isGrab: 1, 
group: '淘金者', 
instance: 'grab',
packTitle: '发现一个福袋', 
taskTitle:'任务#0-#1', 
taskType:['snake', 'puzzle', 'jigsaw'], 
resultTitle:'恭喜您获得了', 
packType:'福袋', 

inverStr: '投入者: ', 
flexStr: '#0的投入',
laddStr: '阶梯<br/><h3>#0阶</h3>',
pieceStr: '剩余份数<br/><h3>#0份</h3>',
priceStr: '单个金额<br/><h3>#0元</h3>',
timesStr: '已传播<br/><h3>#0次</h3>',
btnName: ['doit', 'quit', 'redo', 'abon', 'start', 'throw', 'open', 'home', 'follow', 'close'],
btnText: ['抢夺', '取消', '重置', '丢弃', '开始', '丢弃', '打开', '分享', '关注', '关闭'],
lines: []}, 
]},


{ id: 2, title: '获取', 
list: [
{title: '红包池', vice: '抢夺投放的红包来获取收益',
dot: 100, 
isGrab: 1, 
group: '赞助商', 
instance: 'grab',
packTitle: '发现一个红包', 
taskTitle:'任务#0-#1', 
taskType:['puzzle', 'jigsaw'], 
resultTitle:'恭喜您获得了', 
packType:'红包', 

inverStr: '投放者: ', flexStr: '#0的投放',
laddStr: '阶梯<br/><h3>#0阶</h3>',
pieceStr: '剩余份数<br/><h3>#0份</h3>',
priceStr: '单个金额<br/><h3>#0元</h3>',
timesStr: '已传播<br/><h3>#0次</h3>',
btnName: ['doit', 'quit', 'redo', 'abon', 'start', 'throw', 'open', 'home', 'follow', 'close'],
btnText: ['获取', '取消', '重置', '丢弃', '开始', '丢弃', '打开', '分享', '关注', '关闭'],
lines: []},
]}
];

var items_sponer = [
{ id: 0, title: '投放', 
list: [
{title: '我的投放', vice: '投放的红包可被淘金者抢夺', 
dot: 1, 
isGrab: 1, 
group: '赞助商',
packTitle: '发现一个红包', 
taskTitle:'任务#0-#1', 
taskType:['puzzle', 'jigsaw'], 

inverStr: '投放者: ', 
flexStr: '#0的投放',
laddStr: '阶梯<br/><h3>#0阶</h3>',
pieceStr: '剩余份数<br/><h3>#0份</h3>',
priceStr: '单个金额<br/><h3>#0元</h3>',
timesStr: '已传播<br/><h3>#0次</h3>',
btnName: ['quit'],
btnText: ['关闭'],
lines: [
{index: '1548342507258', stamp: '2019-01-24 23:08:27', ladder: 12, ladd: 8, multi: 3, inver: '我', tag: ['众鑫淘金', '海量红包', '等你发掘']},
{index: '1548342507258', stamp: '2019-01-23 12:18:10', ladder: 9, ladd: 5, multi: 15, inver: '我', tag: ['众鑫淘金', '海量红包', '等你发掘']},
]},
{title: '选择阶梯', vice: '投入资金后可以抢夺等量的资金', 
dot: 1, 
isGrab: 0, 
inverStr: '投放者: ', 
flexStr: '投放预览',
laddStr: '阶梯<br/><h3>#0阶</h3>',
pieceStr: '投入份数<br/><h3>#0份</h3>',
priceStr: '单个金额<br/><h3>#0元</h3>',
timesStr: '可传播<br/><h3>#0次</h3>',
btnName: ['doit', 'quit'],
btnText: ['投放红包', '取消'],
lines: []},
]},
];

var instance = {
	user: [
'李刚猛',
'章威武',
'张雄壮',
'王坚强',
'徐福贵',
'赵铁柱',
'赵铁牛',
'赵铁蛋',
'王强棒',
'马大炮',
'马高大',
],
	grab: [
		{name:'GSUNG钻戒', word:'GSUNG/钻戒', pic:['https://img.alicdn.com/bao/uploaded/i2/1050683166/O1CN01KJqMKW1ZG4Q5V7ZzV_!!0-item_pic.jpg']},
		{name:'华为Mate30', word:'华为/Mate30/Pro5G', pic:['https://img.alicdn.com/bao/uploaded/i4/TB1IFWxl5_1gK0jSZFq59.paXXa_112746.jpg']},
		{name:'多力多滋', word:'多力多滋/Doritos', pic:['https://img.alicdn.com/bao/uploaded/i2/2961304099/O1CN01ZFdSWH1g9NyEHKzfy_!!2961304099.jpg']},
		{name:'歌帝梵', 	word:'歌帝梵/Godiva', pic:['https://img.alicdn.com/bao/uploaded/i1/885684871/O1CN01uOus5R1lqxln9jUj7_!!0-item_pic.jpg']},
		{name:'白云边', 	word:'白云边', pic:['https://img.alicdn.com/bao/uploaded/i1/2202077926/TB2tPbQowJkpuFjSszcXXXfsFXa_!!2202077926.jpg']},
		{name:'剑南春', word:'剑南春', pic:['https://img.alicdn.com/bao/uploaded/i3/1964265852/O1CN01Jo1xh11t6GLoui3dG_!!1964265852.jpg']},
		{name:'百年秦池', word:'百年秦池', pic:['https://img.alicdn.com/bao/uploaded/i1/2201438839095/O1CN01MDBJEe2H3YloVcI2D_!!2201438839095.jpg']},
		{name:'天之蓝', word:'天之蓝', pic:['https://img.alicdn.com/bao/uploaded/i2/1770955031/TB2HCMGmnTI8KJjSsphXXcFppXa_!!1770955031.jpg']},
		{name:'红星二锅头', word:'红星二锅头', pic:['https://img.alicdn.com/bao/uploaded/i1/2377361352/O1CN01nYPYsE1LrG4XaGCNg_!!2377361352.jpg']},
		{name:'泸州老窖', word:'泸州老窖', pic:['https://img.alicdn.com/bao/uploaded/i4/2863359127/O1CN01I4cKeB2HIDUJXSqz0_!!0-item_pic.jpg']},
		{name:'五粮液', word:'五粮液', pic:['https://img.alicdn.com/bao/uploaded/i2/1801754147/O1CN01mZ76kE1gVN3WKAfpD_!!1801754147.jpg']},
		{name:'西凤酒', word:'西凤酒', pic:['https://img.alicdn.com/bao/uploaded/i2/3463652690/O1CN01qFW51F1Vk3xLludUY_!!3463652690.jpg']},
		{name:'古蔺1987', word:'古蔺1987', pic:['https://img.alicdn.com/bao/uploaded/i3/1040084460/O1CN01IZ9nUU1ioj38oRH2x_!!1040084460.jpg']},
		{name:'康师傅', word:'康师傅/方便面', pic:['https://img.alicdn.com/bao/uploaded/i3/725677994/O1CN018wIigQ28vIkcPvP2k_!!0-item_pic.jpg']},
		{name:'四特酒', word:'四特酒/四特东方韵', pic:['https://img.alicdn.com/bao/uploaded/i1/3424146324/TB2NRysaWLN8KJjSZFKXXb7NVXa_!!3424146324.jpg']},
		{name:'日清食品', word:'Nissin/UFO/方便面', pic:['https://img.alicdn.com/bao/uploaded/i3/161/O1CN01Z88MTs1D3mMpjt95f_!!161-0-lubanu.jpg']},
		{name:'阿宽面皮', word:'阿宽/红油面皮', pic:['https://img.alicdn.com/bao/uploaded/i2/2645124890/O1CN01hFIOSN1lzfMQgMadI_!!2645124890-0-lubanu-s.jpg']},
		{name:'拉面说', word:'拉面说/日式地狱辣', pic:['https://img.alicdn.com/bao/uploaded/i4/725677994/O1CN01VSwa5728vIkTqgkPG_!!0-item_pic.jpg']},
		{name:'统一汤达人', word:'统一汤达人/日式豚骨面', pic:['https://img.alicdn.com/bao/uploaded/i4/144/O1CN01Eqwxlv1CvzdOE3O4g_!!144-0-lubanu.jpg']},
		{name:'小米', word:'小米电视4A/50英寸/1699元', pic:['https://img.alicdn.com/bao/uploaded/i2/TB1gZiJEf1TBuNjy0Fj4yejyXXa_104835.jpg']},
		{name:'德芙巧克力', word:'德芙/DOVE/纵享丝滑', pic:['https://img.alicdn.com/bao/uploaded/i3/877104952/O1CN01oelof71mS3tsiMsj2_!!0-item_pic.jpg']},
		{name:'德芙巧克力', word:'德芙/士力架', pic:['https://img.alicdn.com/bao/uploaded/i4/1642676348/O1CN01KdIr6I1wlQmq5CENt_!!1642676348.jpg']},
		{name:'费列罗', word:'费列罗/Ferrero', pic:['https://img.alicdn.com/bao/uploaded/i2/2549841410/O1CN014Md2Gf1MHovX0QX8m_!!2549841410.jpg']},
		{name:'雀巢食品', word:'雀巢/瑞士进口/速溶咖啡', pic:['https://img.alicdn.com/bao/uploaded/i4/2559015013/O1CN018TbyaT1mtzzRcSv5u_!!2559015013.jpg']},
		{name:'特仑苏', word:'特仑苏/纯牛奶', pic:['https://img.alicdn.com/bao/uploaded/i3/3718861889/O1CN01jb97sv1PpCeuBeuBh_!!3718861889.jpg']},
		{name:'欧亚', word:'欧亚/高原生态/全脂纯牛奶', pic:['https://img.alicdn.com/bao/uploaded/i1/2175881970/O1CN01n0sGIo1QQIqiQQXPz_!!2175881970.jpg']},
		{name:'旺旺食品', word:'旺旺/旺仔牛奶', pic:['https://img.alicdn.com/bao/uploaded/i4/4084273869/O1CN01QSTrPt1eS2w5KETLx_!!0-item_pic.jpg']},
		{name:'君乐宝', word:'君乐宝/老酸奶', pic:['https://img.alicdn.com/bao/uploaded/i1/3400215070/O1CN01qa0nQR1nK6WpCr1vY_!!3400215070.jpg']},
],


	ghost: [
'奴奵婒|奴奵婒/姃姣嫌媾/娳娏嬆嫬婖',
'妁奻婐|妁奻婐/姹姘嫄嫁/娒娚嬄嫽娹',
'奼奾娺|奼奾娺/姽姝嫋媲/娞娦嬂嬋婭',
'奺妒媿|奺妒媿/姞娅嬅媳/娋娧嬗嫵媕',
'妣妋媦|妣妋媦/娇姙媺媽/娪娨嬙嫻媠',
'妫妓媛|妫妓媛/姱娍嫓媼/娮娙嬔嫿媢',
'妠姒媮|妠姒媮/娜姛嫆嫎/婊娛嬠嬞媚',
'妊妩媯|妊妩媯/娆姟嫊媰/娼娡嬒嫴婷',
'妍妖媋|妍妖媋/娀娂媴媹/婳婢嬐嬇媟',
'妤妪媅|妤妪媅/姚姼嫦嫇/婕婵嬢嬍婣',
'妘妉媂|妘妉媂/姻婙嫪嫟/娵婼嬕嬘媬',
'姉妢媍|姉妢媍/姪姰嫣嫀/嫏婧嬑嫸媨',
'姂妚媓|姂妚媓/姦姳嫕媷/婉婗嬩嬡婸',
'妦妔婽|妦妔婽/姶姵嫰嫍/婞婠嬪嬝媏',
'妎姖媫|妎姖媫/姯姺嫧媱/娬婋嬱嬨媩',
'妌妕媡|妌妕媡/姡娗嫭嫃/媧婬嬥嬓媈',
'妜妲媔|妜妲媔/姢姠嫤嫡/婦媖嬤嬚媘',
'妧姗媆|妧姗媆/姩姸嫲嫘/婩婥嬺嬛嫅',
'妡姁媊|妡姁媊/姾姷嫥嫚/婇娾嬬嬟媄',
'妐妬媶|妐妬媶/娰娭嫞嫖/婃婄嬯嬳婻',
'姅姍媞|姅姍媞/姲娣嬉嫱/婰婤嬹嬭媥',
'姌妼婾|姌妼婾/娫婀嬈嫛/婏婝嬽嬶媇',
'妯姀媙|妯姀媙/姫姬嬀嫜/婔娻孅嬦媣',
'妷姏媗|妷姏媗/娖娠嬌嫗/婎婟孉嬧媃',
'妭妳媀|妭妳媀/娥娲嫺嫷/媎婫孄嬵媤',
'妸妵媑|妸妵媑/娓娴嬁嫨/婛婅孆嬣媁',
'姈姎媸|姈姎媸/娱娝嬏嫮/婮婡孇嬫媉',
'姄妱嫉|姄妱嫉/娕娊嫶嫝/娽婈孋嬻婹',
'妽姤嫫|妽姤嫫/娐娢嫾嫹/婂婨孍嬾媜',
'妶姮嫔|妶姮嫔/婲娔嫼嫙/婑媌孊嬿嫒',
'婍娸媒|婍娸媒/婌婘孃婿/孏娷孈孀孂',
],

	monster: [
'魔|魔/mó|u=4203463438,607882362&fm=58.jpg',
'鬼|鬼/guǐ|u=3997360622,423902578&fm=58.jpg',
'嵬|嵬/wéi|u=4046789283,962643476&fm=58.jpg',
'溾|溾/āi|u=4093295788,1029562318&fm=58.jpg',
'愧|愧/kuì|u=3246668576,657087905&fm=58.jpg',
'媿|媿/kuì|u=4004471373,795311087&fm=58.jpg',
'塊|塊/kuài|u=3974395180,838073597&fm=58.jpg',
'槐|槐/huái|u=4226703005,1174618760&fm=58.jpg',
'傀|傀/guī/kuǐ|u=3393830233,740076870&fm=58.jpg',
'瘣|瘣/lěi/huì|u=254622230,859391058&fm=58.jpg',
'廆|廆/guī/wěi/huì|u=3959644514,1026815903&fm=58.jpg',
'魂|魂/hún|u=4132033420,404308287&fm=58.jpg',
'魄|魄/pò|u=58385214,645210876&fm=58.jpg',
'魁|魁/kuí|u=46371786,1097344202&fm=58.jpg',
'魉|魉/liǎng|u=411073308,1332614655&fm=58.jpg',
'鬽|鬽/mèi|u=140404897,1172938044&fm=58.jpg',
'魅|魅/mèi|u=328316354,1308781525&fm=58.jpg',
'魒|魒/piāo|u=40997260,626081498&fm=58.jpg',
'魌|魌/qī|u=376970956,1446860955&fm=58.jpg',
'鬾|鬾/jì|u=41227170,1210707451&fm=58.jpg',
'魃|魃/bá|u=4260662997,724666201&fm=58.jpg',
'魓|魓/bì|u=4209622717,974807291&fm=58.jpg',
'魑|魑/chī|u=98406488,1114942624&fm=58.jpg',
'魗|魗/chǒu|u=4160897826,564558431&fm=58.jpg',
'魀|魀/gà|u=4078736565,499794249&fm=58.jpg',
'魐|魐/gān|u=4276027206,580807616&fm=58.jpg',
'鬿|鬿/qí|u=129248651,730585173&fm=58.jpg',
'魕|魕/qí|u=116081723,632256214&fm=58.jpg',
'魋|魋/tuí|u=170893395,787171613&fm=58.jpg',
'魍|魍/wǎng|u=291354928,1278665743&fm=58.jpg',
'魏|魏/wèi|u=271177314,1209952764&fm=58.jpg',
'魈|魈/xiāo|u=206941532,1160339818&fm=58.jpg',
'魆|魆/xū|u=9033554,1098363272&fm=58.jpg',
'魖|魖/xū|u=4148562868,562859827&fm=58.jpg',
'魇|魇/yǎn|u=81375853,501138547&fm=58.jpg',
'魘|魘/yǎn|u=4258793950,550527716&fm=58.jpg',
'魊|魊/yù|u=271126139,796985860&fm=58.jpg',
'魙|魙/zhān|u=127670721,1147580728&fm=58.jpg',
],
};



var items_ghost = [
{ id: 0, title: '修炼', 
list: [
{title: '修炼中', vice: '请勿打扰！谢谢！', 
dot: 1, 
isGrab: 1, 
group: '凡人',
inverStr: '修炼者: ', 
flexStr: '#0正在修炼',
laddStr: '阶梯<br/><h3>#0阶</h3>',
pieceStr: '剩余份数<br/><h3>#0份</h3>',
priceStr: '单个金额<br/><h3>#0元</h3>',
timesStr: '已传播<br/><h3>#0次</h3>',
btnName: ['quit'],
btnText: ['关闭'],
lines: [
{index: '1548342507258', stamp: '2019-01-24</br><h3>23:08:27',ladder: 12,  ladd: 8, multi: 3, inver: '我', tag: ['众鑫淘金', '海量红包', '等你发掘']},
{index: '1548342507258', stamp: '2019-01-23</br><h3>12:18:10',ladder: 9,  ladd: 5, multi: 15, inver: '我', tag: ['众鑫淘金', '海量红包', '等你发掘']},
]},
{title: '修炼道场', vice: '绝世神功，在此练成！', 
dot: 1, 
isGrab: 0, 
group: '凡人',
inverStr: '修炼者: ', 
flexStr: '武功秘籍',
laddStr: '阶梯<br/><h3>#0阶</h3>',
pieceStr: '投入份数<br/><h3>#0份</h3>',
priceStr: '单个金额<br/><h3>#0元</h3>',
timesStr: '可传播<br/><h3>#0次</h3>',
btnName: ['doit', 'quit'],
btnText: ['修炼', '放弃'],
lines: []},
]},


{ id: 1, title: '斩妖', 
list: [
{title: '锁妖塔', vice: '我杀！故我在！！！',
dot: 1, 
isGrab: 1, 
group: '妖女', 
instance: 'ghost',
packTitle: '放下屠刀 立地成佛', 
taskTitle:'任务#0-#1', 
taskType:['puzzle', 'jigsaw'], 
resultTitle:'恭喜您获得了', 
packType:'妖精的尾巴', 

inverStr: '领主: ', 
flexStr: '#0的栖息地',
laddStr: '阶梯<br/><h3>#0阶</h3>',
pieceStr: '剩余份数<br/><h3>#0份</h3>',
priceStr: '单个金额<br/><h3>#0元</h3>',
timesStr: '已传播<br/><h3>#0次</h3>',
btnName: ['doit', 'quit', 'redo', 'abon', 'start', 'throw', 'open', 'home', 'follow', 'close'],
btnText: ['挑战', '放弃', '重置', '返回', '开始', '丢弃', '事了拂衣去', '分享', '关注', '深藏功与名'],
lines: []}, 
]},


{ id: 3, title: '除魔',
list: [
{title: '魔界', vice: '破山贼易，破心魔难！',
dot: 100, 
isGrab: 1, 
group: '魔鬼', 
instance: 'monster',
packTitle: '阿弥陀佛 善哉善哉', 
taskTitle:'任务#0-#1', 
taskType:['puzzle', 'jigsaw'], 
resultTitle:'恭喜您获得了', 
packType:'魔石', 

inverStr: '领主: ', 
flexStr: '#0的栖息地',
laddStr: '阶梯<br/><h3>#0阶</h3>',
pieceStr: '剩余份数<br/><h3>#0份</h3>',
priceStr: '单个金额<br/><h3>#0元</h3>',
timesStr: '已传播<br/><h3>#0次</h3>',
btnName: ['doit', 'quit', 'redo', 'abon', 'start', 'throw', 'open', 'home', 'follow', 'close'],
btnText: ['挑战', '放弃', '重置', '返回', '开始', '丢弃', '事了拂衣去', '分享', '关注', '深藏功与名'],
lines: []},
]}
];
