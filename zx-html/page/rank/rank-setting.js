function setElems() {
	setOuterTop();
	setOuterCenter();
}


function setOuterTop() {
	var outerTop = Elem.get("outer-top");
	for (let x in items) {
		var btn = Elem.set("div", outerTop, "button-top");
		btn.innerHTML = items[x].title;
		btn.idx = x;
		elems[x].btntop = btn;
		if (config.isMobile)
			btn.style.minWidth = config.minWidth;
		btn.onclick = function() {
			values.innerIdx = this.idx;
			setInner();
		}
	}
}

function setOuterCenter() {
	var outerCenter = Elem.get("outer-center");
	for (let x in items) {
		var inner = Elem.set("div", outerCenter, "inner", x);
		elems[x].inner = inner;
		setContent(inner, x);
	}
}


function setContent(inner, x) {
	var list = items[x].list;
	for (let y in list) {
		var content = Elem.set("div", inner, "content", x+y);
		var data = list[y];
		if (data.title)
			setTitle(content, data, x);
		//var data = config;
		if (!data.lines)
			setNotLine(content, x);
		data.lines = Parse.mix(industry.split(','));
		if (data.lines) {
			setLine(content, data.lines, x, y);
		}
	}
}

function setTitle(content, data, x) {
	//TITLE
	var title = Elem.set("div", content, "title");
	title.innerHTML = data.title;
	title.x = x;
	//VICE
	var vice = Elem.set("div", content, "vice");
	vice.innerHTML = data.vice;
	vice.x = x;
}


function setNotLine(content, x) {
	var block = Elem.set("div", content, "block");
	block.style.minHeight = "500px";
	Elem.color(block, "transparent", "white");
}


function setLine(content, lines, x, y) {
	var list = Elem.set("div", content, "block");
	for (let z in lines) {
		if (z > 19) return;
		var data = lines[z];
		var line = Elem.set("div", list, "user-line", z);
		line.block = {};
		line.body = Elem.set("div", line, "blk-body");
		line.tag = Elem.set("div", line, "blk-tag");
		line.desc = Elem.set("div", line, "blk-desc");
		line.button = Elem.set("div", line, "blk-button");
		line.top = Elem.set("div", line.body, "user-top");
		line.order = Elem.set("div", line.top, "user-order");
		line.value = Elem.set("div", line.top, "user-value");
		line.flex = Elem.set("div", line.body, "user-flex");
		line.head = Elem.set("div", line.flex, "user-head");
		line.left = Elem.set("div", line.flex, "user-left");
		line.name = Elem.set("div", line.left, "user-name");
		line.mark = Elem.set("div", line.left, "user-flex");
		line.right = Elem.set("div", line.flex, "user-right");
		line.ladd = Elem.set("div", line.right, "user-ladd");
		line.nexu = Elem.set("div", line.right, "user-nexu");


		line.x = x;
		line.y = y;
		line.z = z;
		line.show = false;
		line.data = setFlex(line, data);
		line.onclick = function() {
			if (values.line == this) 
				values.line = null;
			else
				console.log(this.data);
			showLine(values.line, false);
			showLine(this, !this.show);
			values.line = this;
		}
	}
}


function showLine(line, display) {
	if (line) {
		line.show = display;
		if (display) {
			line.style.margin = "20px 0px";
			Elem.display(line.tag, "flex");
			Elem.display(line.desc, "block");
			Elem.display(line.button, "flex");
		} else {
			line.style.margin = "5px 0px";
			Elem.display(line.tag, "none");
			Elem.display(line.desc, "none");
			Elem.display(line.button, "none");
		}
	}
}

function setFlex(line, data) {
	var x = line.x;
	var y = line.y;
	var z = line.z;
	var list = items[x].list[y];
	var topText = list.text;
	data = config.unit;
	data.name = items[x].list[y].lines[z];
	if (!config.order[z]) 
		data.order = parseInt(z) + 1 + "th";
	else
		data.order = config.order[z];
	// setNotFlex()
	data.value = topText + ": ￥" + Parse.sub4Num(2e5 + Math.floor(2e4 * (30-z+Math.random())));
	data.nexu = config.state[0].nexu;
	data.button = config.state[0].button;
	data.ladd = Math.floor(Math.random() * 20) + 3;
	//data.desc = data.name + "的描述";
	line.head.style.backgroundColor = getColorLight(x);

	if (data.tag) {
		for (let i in data.tag) {
			var tag = Elem.set("div", line.tag, "user-tag");
			tag.innerHTML = data.tag[i];
		}
	}
	if (data.mark) {
		for (let i in data.mark) {
			var mark = Elem.set("div", line.mark, "user-mark");
			mark.innerHTML = data.mark[i];
			mark.style.borderColor = getColorType(x);
		}
	}
	line.name.innerHTML = data.name;
	line.order.innerHTML = data.order;
	line.value.innerHTML = data.value;
	line.nexu.innerHTML = data.nexu;
	line.ladd.innerHTML = data.ladd + "阶";
	line.desc.innerHTML = data.desc;

	for (let k in data.button) {
		var key = data.button[k];
		var value = config.button[key];
		//BUTTON
		var button = Elem.set("div", line.button, "button");
		Elem.color(button, "white", value.color);
		button.innerHTML = value.nexu;
		button.data = value;
		button.onclick = function () {
			setNexu(this);
		}
	}
	return data;	
}


function setNexu(button) {
	var btnData = button.data;
	var line = values.line;
	var idx = line.idx;
	var org = line.x;
	if (btnData.org.length == 0)
		alert(JSON.stringify(line));

	for(let i in btnData.org) {
		if (org == btnData.org[i]) {
			var tgt = btnData.tgt[i];
			line.org = tgt;
			items[tgt].lines.push(line.data);
			//items[org].lines.splice(idx, 1);
			line.idx = items[tgt].lines.length - 1;
			var inner = Elem.getClass("inner")[tgt];
			var block = inner.childNodes[1];
			block.appendChild(line.block);
			Elem.remove(line.float);
			setFlex(line);
			line.nexu.innerHTML = btnData.act + btnData.nexu;
			return;
		}
	}
}

function setButton(data) {

}
