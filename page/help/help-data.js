window.onload = function() {
	getAgent();
	setElems();
	setAgent();
}


var cfg = {
	name: "help",
};


var items = [
{title: '帮助', 
list: [
{summary: '新手淘金者如何淘金？',
detail:'淘金者通过抢夺赞助商投放的红包来获得收益，若想抢夺更多的红包则需要投入资金，投入资金后可以抢夺等量的资金，投入的资金总量越多可抢夺的红包就越多，所获的收益也就越多。'},
{summary: '如何保证淘金者的资金安全？',
detail:`淘金者投入资金到资金池，投入的资金可供其他淘金者抢夺，同时也可以抢夺其他淘金者投入的资金；
可抢总量与发出总量是相等的，资金是在内部流动，淘金者并不能从其他淘金者那里获取收益也不会被其他淘金者获得收益。`},
{summary: '赞助商如何进行投放推广？',
detail:`赞助商投放的推广红包附带推广信息，在淘金者抢夺时会展示推广信息。
推广信息可以二次传播，淘金者在进行投入操作时资金福袋会附带推广信息，在淘金者抢夺时会二次展示推广信息。`},
{summary: '赞助商如何选择阶梯投放？',
detail:`低阶梯的推广，红包的份数少金额小，平均价格低，适用于个人和小的公司，花费小的成本推广给阶层低资产少消费能力弱的人；
高阶梯的推广，有少许大额和大量小额的红包组成，平均价格高，适用于大的企业和厂商，花费大的成本推广给阶层高资产多消费能力强的人。`},
{summary: '如何确保推广的精准？',
detail:`低阶梯的推广，阶层高的淘金者无法抢夺，不能对淘金者做出过滤筛选，高阶梯的推广，可以被阶层高资产多的淘金者抢夺，
能够对淘金者进行过滤筛选，实现淘金者的阶层和赞助商的推广阶梯的精准对接。`},
{summary: '自定义标签和称号标签有什么作用？',
detail:`自定义标签是淘金者和赞助商自己指定的，点击自定义标签进行搜索相关信息，搜索结果根据赋予标签的权值进行排序，权值来自于淘金者的投入总量和赞助商的投放总量。
称号标签无法指定，完成身份认证，达成某项成就，提升区域排名，他人给予评价，提升阶层等级等操作时会得到称号标签，可从中选择两个进行展示。`},
]},

{title: '反馈', 
list: [
{title: 'BUG提交', vice: '十分感谢您的反馈', 
type: 'bug',
remind: '请输入反馈内容',
btnText:'提交反馈',
opts:['功能', '界面', '数据', '其他']},
{title: '意见提交', vice: '非常感谢您提出的宝贵意见', 
type: 'idea',
remind: '请输入意见内容',
btnText:'提交意见',
opts:['功能', '交互', '优化', '其他']},
]},
];