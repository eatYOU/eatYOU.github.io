window.onload = function() {
    getAgent();
    setElems();
    setAgent();
    setInner();
}

var config = {
    name: "nexu",
    titleStr: "搜索:#0",
    buttons:[
        { idx:0, text: '发消息', btype: 'permit'},
        { idx:1, text: '添加关注', btype: 'permit'},
        { idx:2, text: '取消关注', btype: 'danger'},
        { idx:3, text: '查看主页', btype: 'defult'},
    ],

};




var items = [
{title: '消息', colorIdx: 1,
list: [
{title: '', vice:'', btype: 'warn', buttonIdx: [0,3],
lines: [
{uid: 'd310003', name: '青青', ladd: 13, tag: ['自定义标签1', '自定义标签2', '自定义标签3'], mark: ['阶层展示1', '阶层展示2']},
{uid: 'd310002', name: '倩倩', ladd: 7, tag: ['自定义标签1', '自定义标签2', '自定义标签3'], mark: ['称号标签1', '称号标签2']},
{uid: 's310001', name: '素素', ladd: 6, tag: ['自定义标签1', '自定义标签2', '自定义标签3'], mark: ['排名标签1', '排名标签2']},
{uid: 'd310001', name: '梦梦', ladd: 3, tag: ['自定义标签1', '自定义标签2', '自定义标签3'], mark: ['成就标签1', '成就标签2']},
{uid: 's310002', name: '萌萌', ladd: 5, tag: ['自定义标签1', '自定义标签2', '自定义标签3'], mark: ['评价展示1', '评价展示2']},
{uid: 'd310004', name: '威威', ladd: 19, tag: ['自定义标签1', '自定义标签2', '自定义标签3'], mark: ['身份认证1', '身份认证2']},
{uid: 'd310005', name: '明明', ladd: 22, tag: ['自定义标签1', '自定义标签2', '自定义标签3'], mark: ['成就标签1', '成就标签2']},
{uid: 's310003', name: '欢欢', ladd: 12, tag: ['自定义标签1', '自定义标签2', '自定义标签3'], mark: ['阶层展示1', '阶层展示2']},
{uid: 's310004', name: '亮亮', ladd: 17, tag: ['自定义标签1', '自定义标签2', '自定义标签3'], mark: ['身份认证1', '身份认证2']},
{uid: 's310005', name: '辰辰', ladd: 21, tag: ['自定义标签1', '自定义标签2', '自定义标签3'], mark: ['成就标签1', '成就标签2']},
]},
]},


{title: '关注', colorIdx: 2,
list: [
{title: '赞助商', vice: '强制关注的赞助商', btype: 'primary', buttonIdx: [0,1,3],
lines: [
{uid: 's110004', name: '萌萌职业技术学院', ladd: 20, tag: ['挖掘机', '技术', '哪家强'], mark: ['技术培训', '技术学院']},
{uid: 's110005', name: '萌萌部落格', ladd: 17, tag: ['孤独症患者', '抑郁症患者', '强迫症患者'], mark: ['二次元', '中二病']},
{uid: 's110006', name: '萌萌家族', ladd: 15, tag: ['大萌', '二萌', '小萌'], mark: ['武林萌主', '天下第一萌']},
{uid: 's210001', name: '萌萌宠物店', ladd: 7, tag: ['宠物', '宠物店', '人狗情未了'], mark: ['宠物配种', '宠物医院']},
]},

{title: '赞助商', vice:'我关注的赞助商', btype: 'primary', buttonIdx: [0,2,3],
lines: [
{uid: 's210002', name: '萌萌水果店', ladd: 9, tag: ['普陀区', '洛川路', '宜川路'], mark: ['种类丰富', '价格实惠']},
{uid: 's210004', name: '萌萌家居(徐汇店)', ladd: 17, tag: ['徐汇区', '漕溪路', '126号'], mark: ['家居', '家具']},
{uid: 's210004', name: '萌萌美容美发', ladd: 17, tag: ['理发', '美容', '美发'], mark: ['空标签', '空标签']},
{uid: 's210009', name: '萌萌养生堂', ladd: 16, tag: ['针灸', '拔火罐', '刮痧'], mark: ['空标签', '空标签']},
{uid: 's210009', name: '萌萌汽修', ladd: 16, tag: ['流动补胎', '保养', '洗车'], mark: ['金牌修理师', '金牌技师']},
],
buttons: [

]},

{title: '淘金者', vice:'我关注的淘金者', btype: 'primary', buttonIdx: [0,2,3],
lines: [
{uid: 'd120001', name: '二狗子本人', ladd: 7, tag: ['你好', '我叫', '二狗子'], mark: ['ERGOUZI', '二狗家族']},
{uid: 'd120005', name: '二狗子的老婆', ladd: 6, tag: ['年龄25', '体重150', '身高150'], mark: ['ERGOUZI', '二狗家族']},
{uid: 'd120006', name: '二狗子的岳父', ladd: 8, tag: ['象棋大师', '围棋七段', '格斗冠军'], mark: ['ERGOUZI', '二狗家族']},
{uid: 'd120007', name: '二狗子的表妹', ladd: 11, tag: ['王源', '王俊凯', '易烊千玺'], mark: ['ERGOUZI', '二狗家族']},
{uid: 'd120004', name: '二狗子的二狗子', ladd: 8, tag: ['萌', '蠢', '呆'], mark: ['ERGOUZI', '二狗家族']},
{uid: 'd120008', name: '二狗子的七舅姥爷', ladd: 12, tag: ['哎哟', '卧槽', '这年轻人'], mark: ['ERGOUZI', '二狗家族']},
{uid: 'd120008', name: '二狗子的远方大表哥', ladd: 14, tag: ['空标签', '空标签', '空标签'], mark: ['空标签', '空标签']},
]},
]},


{title: '粉丝', colorIdx: 3,
list: [
{title: '淘金者', vice:'关注我的淘金者', btype: 'default', buttonIdx: [0,1,3],
lines: [
{uid: 'd110001', name: '李刚猛', ladd: 18, tag: ['自定义标签1', '自定义标签2', '自定义标签3'], mark: ['身份标签1', '身份标签2']},
{uid: 'd110002', name: '王坚强', ladd: 20, tag: ['自定义标签1', '自定义标签2', '自定义标签3'], mark: ['排名标签1', '排名标签2']},
{uid: 'd110003', name: '章威武', ladd: 12, tag: ['自定义标签1', '自定义标签2', '自定义标签3'], mark: ['成就标签1', '成就标签2']},
{uid: 'd110004', name: '张雄壮', ladd: 17, tag: ['自定义标签1', '自定义标签2', '自定义标签3'], mark: ['阶层标签1', '阶层标签2']},
{uid: 'd110005', name: '徐福贵', ladd: 17, tag: ['自定义标签1', '自定义标签2', '自定义标签3'], mark: ['评价标签1', '评价标签2']},
{uid: 's110006', name: '赵铁柱', ladd: 15, tag: ['自定义标签1', '自定义标签2', '自定义标签3'], mark: ['理财专家', '投资顾问']},
{uid: 's110007', name: '赵铁牛', ladd: 15, tag: ['自定义标签1', '自定义标签2', '自定义标签3'], mark: ['理财专家', '投资顾问']},
{uid: 's110008', name: '赵铁蛋', ladd: 15, tag: ['自定义标签1', '自定义标签2', '自定义标签3'], mark: ['理财专家', '投资顾问']},
]},
]},

];

var industry = `
01-农,
02-林,
03-畜牧,
04-渔,
05-农、林、牧、渔专业及辅助性活动,
06-煤炭开采和洗选,
07-石油和天然气开采,
08-黑色金属矿采选,
09-有色金属矿采选,
10-非金属矿采选,
11-开采专业及辅助性活动,
12-其他采矿,
13-农副食品加工,
14-食品制造,
15-酒、饮料和精制茶制造,
16-烟草制品,
17-纺织,
18-纺织服装、服饰,
19-皮革、毛皮、羽毛及其制品和制鞋,
20-木材加工和木、竹、藤、棕、草制品,
21-家具制造,
22-造纸和纸制品,
23-印刷和记录媒介复制,
24-文教、工美、体育和娱乐用品制造,
25-石油、煤炭及其他燃料加工,
26-化学原料和化学制品制造,
27-医药制造,
28-化学纤维制造,
29-橡胶和塑料制品,
30-非金属矿物制品,
31-黑色金属冶炼和压延加工业,
32-有色金属冶炼和压延加工,
33-金属制品,
34-通用设备制造,
35-专用设备制造,
36-汽车制造,
37-铁路、船舶、航空航天和其他运输设备制造,
38-电气机械和器材制造,
39-计算机、通信和其他电子设备制造,
40-仪器仪表制造,
41-其他制造,
42-废弃资源综合利用,
43-金属制品、机械和设备修理,
44-电力、热力生产和供应,
45-燃气生产和供应,
46-水的生产和供应,
47-房屋建筑,
48-土木工程建筑,
49-建筑安装,
50-建筑装饰、装修和其他建筑,
51-批发,
52-零售,
53-铁路运输,
54-道路运输,
55-水上运输,
56-航空运输,
57-管道运输,
58-多式联运和运输代理,
59-装卸搬运和仓储,
60-邮政,
61-住宿,
62-餐饮,
63-电信、广播电视和卫星传输服务,
64-互联网和相关服务,
65-软件和信息技术服务,
66-货币金融服务,
67-资本市场服务,
68-保险,
69-其他金融,
70-房地产,
71-租赁,
72-商务服务,
73-研究和试验发展,
74-专业技术服务,
75-科技推广和应用服务,
76-水利管理,
77-生态保护和环境治理,
78-公共设施管理,
79-土地管理,
80-居民服务,
81-机动车、电子产品和日用产品修理,
82-其他服务,
83-教育,
84-卫生,
85-社会工作,
86-新闻和出版,
87-广播、电视、电影和录音制作,
88-文化艺术,
89-体育,
90-娱乐,
91-中国共产党机关,
92-国家机构,
93-人民政协、民主党派,
94-社会保障,
95-群众团体、社会团体和其他成员组织,
96-基层群众自治组织,
97-国际组织
`;

var digger = `
张雄壮,
李刚猛,
王坚强,
赵震撼,
章威武,
`;
