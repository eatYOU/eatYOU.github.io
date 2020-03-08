function setElems() {
	setOuterTop();
	setOuterCenter();
	setAlert();
}


function setOuterTop() {
	var outerTop = Elem.get("outer-top");
	for (let x in items) {
		var btn = Elem.creat("div", outerTop, "button-top");
		btn.innerHTML = items[x].title;
		btn.idx = x;
		elems[x].btntop = btn;
		btn.onclick = function() {
			setInner(this.idx);
		}
	}
}

function setOuterCenter() {
	var outerCenter = Elem.get("outer-center");
	for (let x in items) {
		var inner = Elem.creat("div", outerCenter, "inner", x);
		elems[x].inner = inner;
		setContent(inner, x);
	}
}

function setContent(inner, x) {
	var list = items[x].list;
	for (let y in list) {
		var content = Elem.creat("div", inner, "content", x+y);
		var data = list[y];
		if (data.title)
			setTitle(content, data, x);

		if (x == 0) {
			setDetail(content, data);
			setRank(content, data);
			setTags(content, data);
		}
		if (x == 1) {
			var lines = data.lines;
			setRecentLine(content, lines, x, y);
		}
		if (x == 2) {
			var lines = data.lines;
			setAchieLine(content, lines, x, y);
		}
	}
}

function setTitle(content, data, x) {
    //TITLE
    var title = Elem.creat("div", content, "title");
    title.innerHTML = data.title;
    title.x = x;
    //VICE
    var vice = Elem.creat("div", content, "vice");
    vice.innerHTML = data.vice;
    vice.x = x;
}

function setDetail(content, data) {
	var block = Elem.creat("div", content, "block");
	var head = Elem.creat("img", block, "head");
	var name = Elem.creat("div", block, "name");
	var uid = Elem.creat("div", block, "uid");
	var area = Elem.creat("span", block, "area");
	var sex = Elem.creat("span", block, "sex");
	var age = Elem.creat("span", block, "age");
	var auth = Elem.creat("span", block, "auth");
	var ladd = Elem.creat("span", block, "ladd");
	var cls = Elem.creat("span", block, "cls");

	block.id = "bg";
	name.innerHTML = data.name;
	uid.innerHTML = "ID: " + data.uid;
	area.innerHTML = data.area + " | ";
	sex.innerHTML = data.sex;
	age.innerHTML =" | " + data.age + "岁<br/>";
	auth.innerHTML = data.auth + " | ";
	ladd.innerHTML = data.ladd + "阶";
	cls.innerHTML =  " | " + data.cls;
}


function setRank(content, data) {

	var block = Elem.creat("div", content, "block");
	//TIPS
	var tips = Elem.creat("div", block, "tips");
	tips.innerHTML = data.tipsRank;
	var flex = Elem.creat("div", block, "flex");
	//RANK-ALL
	var all = Elem.creat("div", flex, "rank");
	var city = Elem.creat("div", flex, "rank");
	var area = Elem.creat("div", flex, "rank");
	all.innerHTML = "全国排名<br/><h3> " + data.rankAll;
	city.innerHTML = "全市排名<br/><h3> " + data.rankCity;
	area.innerHTML = "全区排名<br/><h3> " + data.rankArea;


	var flex = Elem.creat("div", block, "flex");
	var all = Elem.creat("div", flex, "value");
	var used = Elem.creat("div", flex, "value");
	var surplus = Elem.creat("div", flex, "value");
	all.innerHTML = "总权值<br/><h3>" + data.valueAll;
	used.innerHTML = "已分配<br/><h3>" + data.valueUsed;
	surplus.innerHTML = "未分配<br/><h3>" + data.valueSurplus;
}


function setTags(content, data) {
	var tags = data.tags;
	if (!tags) return;
	//TIPS
	var block = Elem.creat("div", content, "block");
	var tips = Elem.creat("div", block, "tips");
	tips.innerHTML = data.tipsTag;

	var flex1 = Elem.creat("div", block, "flex", 1);
	var flex2 = Elem.creat("div", block, "flex", 2);
	var flex3 = Elem.creat("div", block, "flex", 3);
	var flex4 = Elem.creat("div", block, "flex", 4);
	var flex5 = Elem.creat("div", block, "flex", 5);

	for(let y in tags) {
		var data = tags[y];
		//BUTTON
		var button = Elem.creat("div", flex1, "user-tag");
		button.innerHTML = data.text;
		button.btnIdx = y;
		button.onclick = function() {
			setTagSearch(this);
		}

		//VALUE
		var value = Elem.creat("div", flex2, "value");
		value.innerHTML = "分配权值<br/><h3>" + data.value;

		//ALLOT
		var allot = Elem.creat("div", flex3, "allot");
		allot.innerHTML = "分配策略<br/><h3>" + data.limit + "<br/>+" + data.allot * 100 + "%";

		//EDIT
		var edit = Elem.creat("div", flex4, "button-min");
		edit.innerHTML = "编辑标签";
		Elem.color(edit, "white", "green");
		// Elem.style(edit, "fontSize", "3.3em");
	}

	//EDIT_DETAIL
	var edit = Elem.creat("div", flex5, "button");
	edit.innerHTML = "编辑资料";
	edit.style.marginTop = "0px";
	edit.style.marginBottom = "15px";
	flex4.style.marginTop = "5px";
	Elem.color(edit, "white", "green");
}


function setAchieLine(content, lines, x, y) {
    var list = items[x].list[y];
    var block = Elem.creat("div", content, "block", x);
    for (let z in lines) {
        var data = lines[z];

        //BLOCK
        var flex = Elem.creat("div", block, "ach-flex", z);	
        var left = Elem.creat("div", flex, "ach-cell ach-left");
        var right = Elem.creat("div", flex, "ach-cell  ach-right");

        data.name = "<h4>" + data.name + "</h4>";
        data.prect = "<h4>" + data.prect + "</h4>";
        left.innerHTML = data.name + data.desc;
        right.innerHTML = data.prect + data.value;
    }
}

function setRecentLine(content, lines, x, y) {
	var list = items[x].list[y];
    var block = Elem.creat("div", content, "block", x);
    for (let z in lines) {
        var data = lines[z];
        var title = {};
        if (z == 0)
       		title = Elem.creat("div", block, "rec-title", z);	
        else if(lines[z].date != lines[z-1].date) {
       		title = Elem.creat("div", block, "rec-title", z);	
        }
        title.innerHTML = data.date;
        //BLOCK
        var flex = Elem.creat("div", block, "ach-flex", z);	
        var left = Elem.creat("div", flex, "ach-cell rec-left");
        var right = Elem.creat("div", flex, "ach-cell rec-right");
        data.time =  data.time.replace("日", "日<h4>");
        data.unit = "<h4>" + data.unit + "</h4>";
        left.innerHTML = data.time;
        right.innerHTML = data.unit + data.desc;
    }
}


function setAlert() {
	hideAlert();
    Elem.get("btn-close").onclick = function() {
        hideAlert();
    }
}

function setTagSearch(button) {
	var box = Elem.get("alert-box");
    var title = Elem.get("detail-title");
    var block = Elem.get("detail-block");
    block.innerHTML = "";
    block.style.maxHeight = config.alertHeight + "px";
    Elem.color(box, "", getColorLight());
    title.innerHTML = "标签搜索:" + button.innerHTML;
	for (let z in config.lines) {
		var line = Elem.creat("div", block, "user-line", z);
		line.top = Elem.creat("div", line, "user-top");
		line.order = Elem.creat("div", line.top, "user-order");
		line.value = Elem.creat("div", line.top, "user-value");
		line.flex = Elem.creat("div", line, "user-flex");
		line.head = Elem.creat("img", line.flex, "user-head");
		line.left = Elem.creat("div", line.flex, "user-left");
		line.name = Elem.creat("div", line.left, "user-name");
		line.mark = Elem.creat("div", line.left, "user-flex");
		line.right = Elem.creat("div", line.flex, "user-right");
		line.ladd = Elem.creat("div", line.right, "user-ladd");
		line.group = Elem.creat("div", line.right, "user-group");
		var data = config.lines[z];
		setFlex(data, line);
	}
    showAlert();
}

function setFlex(data, line) {
	var order = data.order + "th";
	if (order.length == 3)
		data.order = order.replace("1th", "1st").replace("2th", "2nd").replace("3th", "3rd");
	if (data.tag) {
		for (let i in data.tag) {
			var tag = Elem.creat("div", line.tag, "user-tag");
			tag.innerHTML = data.tag[i];
		}
	}
	if (data.mark) {
		for (let i in data.mark) {
			var mark = Elem.creat("div", line.mark, "user-mark");
			mark.innerHTML = data.mark[i];
			mark.style.borderColor = getColorType();
		}
	}
	data.group = data.uid[0].replace("s","赞助商").replace("d","淘金者");
	
	Elem.color(line.group, "white", getColorType());
	Elem.style(line.group, "borderColor", getColorType());
	line.head.style.backgroundColor = getColorLight();
	// line.head.src = "../../picture/head1.jpg";
	line.order.innerHTML = data.order;
	line.value.innerHTML = "权值: " + Parse.sub4Num(data.value);
	line.name.innerHTML = data.name;
	line.group.innerHTML = data.group;
	line.ladd.innerHTML = data.ladd + "阶";
}

//显示弹窗
function showAlert() {
    Style.display("alert", "block");
    Style.display("detail-bg", "block");
    Style.display("puzzle-bg", "none");
    Style.display("result-bg", "none");
}


//隐藏弹窗
function hideAlert() {
    Style.display("alert", "none");
}




