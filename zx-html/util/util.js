window.onresize = function() {
    config.windWidth = window.innerWidth;
    config.windHeight = window.innerHeight;
    config.windHeight *= config.isMobile ? 1:2.5;
    config.alertHeight = config.windHeight - config.alertOffset;
    config.maxHeight = config.windHeight - config.innerOffset;
    config.isWidth = config.windWidth > config.windHeight;
    config.isHeight = config.maxHeight > config.minHeight;
    config.theHeight = Math.max(config.maxHeight, config.minHeight);
    Elem.autosize(null, config.outerOffset);
}


var elems = [{},{},{},{},{},{},{},{},{}];
var values = {};
var colors = [
    {normal:"#eee", dark:"#eee", light:"#eee", bright:"#eee", black:"#333", standard:"white"},
    {normal:"#C48", dark:"#957", light:"#eac", bright:"#e28", black:"#333", standard:"red"},
    {normal:"#c84", dark:"#975", light:"#eca", bright:"#e82", black:"#333", standard:"orange"},
    {normal:"#48c", dark:"#579", light:"#ace", bright:"#28e", black:"#333", standard:"blue"},
    {normal:"#84c", dark:"#759", light:"#cae", bright:"#82e", black:"#333", standard:"purple"},
    {normal:"#4c8", dark:"#597", light:"#aec", bright:"#2e8", black:"#333", standard:"seagreen"},
    {normal:"#8c4", dark:"#795", light:"#cea", bright:"#8e2", black:"#333", standard:"green"},
];
// 0 1 2 3 4 5 
// 0 9 8 7 6 5
// 0 1 2 3 4 5 6 7 8
// 0 f e d c b a 9 8

var Parse = {}; 

Parse.addSplit = function addSplit(num) {
    var str = num.toString();
    return str.replace(/(\d)(?=(\d{3})+(\.|$))/g, '$1,');
}

Parse.sub4Num = function(num) {
    var length = num.toString().length;
    if (num < 1e4)
        return num;
    if (num < 1e8) 
        return (num / 1e4).toFixed(8 - length) + "万";
    if (num < 1e12) 
        return (num / 1e8).toFixed(12 - length) + "亿";
}

Parse.cut4Num = function(num) {
    var str = num.toString();
    var len = str.length - 1;
    var list = ["", "万<br/>", "亿<br/>", "万亿<br/>"];
    var index = Math.floor(len / 4);
    var start = (len + 1) % 4;
    console.log("str: " + str);
    var ans = "";
    for (var i = index;i >= 0;i--) {
        if (i == index)
          ans += str.substr(0, len % 4 + 1) + list[i];
      else
          ans += str.substr((index - i)*4-start, 4) + list[i];
  }
  console.log("ans: " + ans);
  return ans;
}

Parse.fillZero = function (num, count) {
    var str = num.toString();
    if (str.length < count) {
       str = "0" + str;
       return Parse.fillZero(str, count);
   } else {
      return str;
  }
}

Parse.limitText = function (str, len) {
    var str = str.toString();
	var regexp = /[^\x00-\xff]/g;// 正在表达式匹配中文
	// 当字符串字节长度小于指定的字节长度时
	if (str.replace(regexp, "aa").length <= len) {
		return str;
	}
	// 假设指定长度内都是中文
	var m = Math.floor(len/2);
	for (var i = m, j = str.length; i < j; i++) {
		// 当截取字符串字节长度满足指定的字节长度
		if (str.substring(0, i).replace(regexp, "aa").length >= len - 1) {
			return str.substring(0, i) + "...";
		}
	}
	return str + "...";
}

Parse.mixText = function(str) {
    var arr = str.split(' ');
    var result = "";
    for(var i=0;i<arr.length;i++) {
        result += Parse.mix(arr[i]) + " ";
    }
    return result;
}

Parse.mix = function(str) {
    var len = str.length;
    var rand, cur;
    var arr = [];
    for(var i=0;i<len;i++)
        arr[i] = str[i];
    for(var i=0;i<len;i++) {
    rand = Math.floor(Math.random()*len);//随机数的产生范围每次都变化
    if (arr[i] == " " || arr[rand] == " " || arr[i] == "/" || arr[rand] == "/") 
        continue;
    cur = arr[rand];
    arr[rand] = arr[i];
    arr[i] = cur;
    }
    if (str instanceof Object)
        return arr;
    else
        return arr.join('');
}


Parse.swape = function(str, a, b) {
    return str.replace(a, "#00").replace(b, a).replace("#00", b);
}


Parse.getStamp = function(stamp) {
    return stamp || new Date().getTime();
}


Parse.formatTime = function(stamp) {
    stamp = Parse.getStamp(stamp);
    var time = new Date(stamp);
    var str = time.getFullYear() + "-";
    str += Parse.fillZero(time.getMonth()+1, 2) + "-";
    str += Parse.fillZero(time.getDate(), 2) + " ";
    str += Parse.fillZero(time.getHours(), 2) + ":";
    str += Parse.fillZero(time.getMinutes(), 2) + ":";
    str += Parse.fillZero(time.getSeconds(), 2);
    return str;
}

Parse.getDate = function(stamp) {
    stamp = Parse.getStamp(stamp);
    var date = new Date(stamp).toLocaleDateString();
    return date.replace("/", "年").replace("/", "月") + "日";
}


Parse.getTime = function(stamp) {
    stamp = Parse.getStamp(stamp);
    var time = new Date(stamp);
    return time.getHours() + "时" + time.getMinutes() + "分";
}

Parse.remove = function(lines, line) {
    for (let x in lines) {
        if (lines[x] == line)
            lines.splice(x, 1);
    }
}


//元素
var  Elem = {};

//创建一个元素
Elem.creat = function(type, parent, className, id) {
	var elem = document.createElement(type);
	if (parent)
		parent.appendChild(elem);
	if (className)
		elem.className = className;
	if (id)
		elem.id = className + "_" + id;
	return elem;
}

//获取当个元素
Elem.get = function (name) {
    return document.getElementById(name);
}

//获取类的所有元素
Elem.getClass = function (className) {
    return document.getElementsByClassName(className);
}

//删除元素
Elem.remove = function (elem) {
    if(elem)
        elem.parentNode.removeChild(elem);
}

//清空元素子节点
Elem.empty = function (elem) {
    while(elem.hasChildNodes())
        elem.removeChild(elem.firstChild);
}

Elem.removeClass = function(elem,text){
    var str =  elem.className,
        index = str.indexOf(text);
    if(index > -1) {
        elem.className = str.replace(text,"");
    }
}

Elem.addClass = function(elem,text){
    elem.className += text;
}


//设置元素对齐方式
Elem.align = function(elem, align) {
    Elem.style(elem, "textAlign", align);
}

//设置元素字体颜色和背景颜色
Elem.color = function(elem, color, bgcolor) {
    Elem.style(elem, "color", color);
    Elem.style(elem, "backgroundColor", bgcolor);
}

//设置元素flex权重
Elem.flex = function(elem, align, flex) {
    Elem.style(elem, "textAlign", align);
    Elem.style(elem, "flex", flex);
}

//设置元素宽度
Elem.width = function(elem, align, width) {
    Elem.style(elem, "textAlign", align);
    Elem.style(elem, "width", width);
}

//设置元素高度
Elem.height = function(elem, height) {
    Elem.style(elem, "height", height);
    Elem.style(elem, "maxHeight", height);
}

//设置元素显示
Elem.display = function(elem, display) {
    Elem.attr(elem, "display", display);
}

//切换元素显示
Elem.toggle = function(elem, display) {
    if (!elem || !elem.style) return;
    var attr = elem.getAttribute("display") || "block";
    display = display || Parse.swape(attr, "attr", "none");
    Elem.attr(elem, "display", display);
}

Elem.togType = function(elem, btype) {
    if (!elem || !elem.style) return;
    var attr = elem.getAttribute("btype") || "default";
    btype = btype || Parse.swape(attr, "permit", "danger");
    elem.setAttribute("btype", btype);
}


//设置元素样式
Elem.style = function(elem, key, value) {
    if (!elem || !elem.style) return;
    if (key && value) {
        elem.style[key] = value;
    }
}

Elem.attr = function(elem, key, value) {
    if (!elem || !elem.style) return;
    if (key && value) {
        elem.setAttribute(key, value);
    }
}

//设置元素高度自适应
Elem.autosize = function(elem, offset) {
    var windHeight = config.windHeight;
    if (!elem) elem = Elem.get("outer-center");
    elem.style.height = windHeight - offset + "px";
    elem.style.maxHeight = windHeight - offset + "px";
    //alert(windHeight);
}

//克隆元素
Elem.clone = function(elem, parent){
    var copy = Object.assign({}, elem);
    console.log(copy);
    parent.appendChild(copy);
    return copy;
}



//样式
var Style = {};

Style.color = function(id, color, bgcolor) {
    var elem = Elem.get(id);
    Elem.color(elem, color, bgcolor);
}

Style.display = function(id, display) {
    var elem = Elem.get(id);
    Elem.display(elem, display);
}

Style.toggle = function(id, display) {
    var elem = Elem.get(id);
    Elem.toggle(elem, display);
}

//数据存储
var Storage = {};

Storage.get = function (name) {
    var value = localStorage.getItem(name);
    var data = JSON.parse(value);
    // console.log("Storage.get(" + name + ":" + value + ")");
    return data;
}

Storage.set = function (name, val) {
    var value = JSON.stringify(val);
    localStorage.setItem(name, value);
    // console.log("Storage.set(" + name + ":" + value + ")");
}

Storage.add = function (name, addVal) { 
    let oldVal = Storage.get(name) || [];
    let newVal = oldVal.concat(addVal);
    Storage.set(name, newVal);
}

Storage.clear = function () {
  localStorage.clear();
}

//本地数据
var localData = {};

//保存本地数据
localData.save = function() {
    Storage.set("values", values);
    // window.location.reload();
}

//初始化本地数据
localData.init = function(state) {
    var dataIdx = Storage.get("dataIdx") || "values";
    dataIdx = dataIdx.replace("default", "values");

    if (state == "set") {
        values = Storage.get("values");
        Storage.set(dataIdx, values);
        console.log(contentText("SET", dataIdx, "succeed!"));
        console.log(values);
        return values;
    }

    if (state == "get") {
        if (Storage.get(dataIdx)) {
            values = Storage.get(dataIdx);
            Storage.set("values", values);
            console.log(contentText("GET", dataIdx, "succeed!"));
            console.log(values);
        } else {
            console.log(contentText("GET", dataIdx, "fail!!!"));
        }
        return values;
    }

    if (state == "clear") {
        var dict = "HIJKLMNOPQRSTUV";
        for (let idx in dict)
            values[dict[idx]] = 0;
        values.h = 50000;
        Storage.set(dataIdx, values);
        Storage.set("values", values);
        console.log(contentText("CLEAR", dataIdx, "succeed!"));
        console.log(values);
        return values;
    }

    if (state == "init") {
        values = Storage.get("values") || localData.init("clear");
        console.log(contentText("INIT", dataIdx, "succeed!"));
        console.log(values);
        return values;
    }
}

var contentText = function(a, b, c) {
    var line = " —————————— ";
    return line + " " + a + " " + b + " " + c + " " + line; 
}

//显示内页
var setInner = function(innerIdx) {
    var idx = innerIdx || config.innerIdx || 0;
    if (config.innerIdx == idx) {
        togContent();
    } else {
        config.innerIdx = idx;
        config.isHide = 1;
        togContent(1);
    }
    var outerTop = Elem.get("outer-top").children;
    var outerCenter = Elem.get("outer-center").children;
    for (var i = 0; i < outerTop.length; i++) {
        var childTop = outerTop[i];
        var childCenter = outerCenter[i];
        if (childTop.className != "button-top")
            break;
        if (i == idx) {
            childTop.setAttribute("btype", "live");
            childCenter.setAttribute("display", "block");
        } else {
            childTop.setAttribute("btype", "dead");
            childCenter.setAttribute("display", "none");
        }
    }
    Elem.color(document.body, getColorType(idx), "");
    if (config.isAlert && innerIdx != null)
        jsonToTable(items[idx]);
    else
        console.log(items[idx]);
}

var getColorType = function(idx) {
    var innerIdx = idx || config.innerIdx;
    var colorIdx = items[innerIdx].colorIdx;
    var color = colors[colorIdx];
    var type = config.colorType;
    return color[type];
}

var getColorLight = function(idx) {
    var innerIdx = idx || config.innerIdx;
    var colorIdx = items[innerIdx].colorIdx;
    var color = colors[colorIdx];
    var type = config.colorType;
    if (type == "black")
        return "#ccc";
    else
        return color["light"];
}

var addScript = function() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "../../util/temp.js";
    document.head.appendChild(script);
}

var setEvent = function() {

    hideAlert();
    setClick("btn-quit", hideAlert);
    setClick("btn-abon", hideAlert);
    setClick("btn-close", hideAlert);

}

var setClick = function(name, func) {
    if (Elem.get(name)) {
        Elem.get(name).onclick = function() {
            func();
        }
    }
}


//获取浏览器是否是移动端
var getAgent = function() {
    // addScript();
    var val = (/Android|webOS|iPhone|iPod|BlackBerry|MIX/i.test(navigator.userAgent));
    config.isHide = false;
    config.isMobile = val;
    config.colorType = Storage.get("colorType") || "black";
    config.initType = Storage.get("initType") || "clear";
    config.dataIdx = Storage.get("dataIdx") || "defalut";
    config.isDevil = Storage.get("isDevil") == "devil";
    config.isAlert = Storage.get("isAlert") == "alert";
    config.outerOffset = 230;
    config.alertOffset = 716;
    console.log(config);
    window.onresize();
    return val;
}

//设置浏览器
var setAgent = function() {
    setEvent();
    togContent();
    if (!config.isMobile) {
        var body = document.body;
        body.style.zoom = "0.4";
    }
}

var setFullScreen = function() {
    if (config.isMobile) {
        var body = document.body;
        if (body.requestFullScreen) body.requestFullScreen(); //W3C
        if (body.msRequestFullScreen) body.msRequestFullScreen();  //IE11
        if (body.mozRequestFullScreen) body.mozRequestFullScreen(); //FireFox
        if (body.webkitRequestFullScreen) body.webkitRequestFullScreen(); //Chrome
    }
}

var togContent = function(tog) {
    var content = Elem.getClass('content');
    for (let idx in content) {
        var elem = content[idx];
        var hide;
        if (!elem.children) 
            continue;
        if (elem.children.length < 3)  
            continue;
        var title = elem.children[0];
        if (title.className != 'title')  
            continue;
        var block = elem.children[2];
        if (block.className != 'block')  
            continue;
        if (elem.children.length == 4)  
            hide = elem.children[3];
        if (elem.children.length == 3) {
            hide = Elem.creat('div', elem, 'hide');
            hide.innerHTML = "内容已隐藏，点击展开...";
            hide.onclick = function() {
                togContent(1);
            }
        } 

        if (config.isHide || tog) {
            block.style.display = 'block';
            hide.style.display = 'none';
        } else {
            block.style.display = 'none';
            hide.style.display = 'block';
        }
    }
    config.isHide = !config.isHide;
}


//显示弹窗
var showAlert = function(name) {
    Style.display("alert", "block");
    if (name) {
        Style.display(name, "block");
    }
}


//隐藏弹窗
var hideAlert = function(name) {
    Style.display("alert", "none");
    if (name) {
        Style.display(name, "none");
        return;
    }
    var bgs = Elem.getClass("alert-bg");
    for (let x in bgs) {
        Elem.display(bgs[x], "none");
    }
    // Style.display("detail-bg", "none");
    // Style.display("puzzle-bg", "none");
    // Style.display("result-bg", "none");
    // Style.display("search-bg", "none");
}


var jsonToTable = function(data) {
    if (config.isMobile) {
        alert(JSON.stringify(data));
        return;
    }
    var page = '../#/#.html';
    Storage.set('json-page', page.replace(/#/g,config.name));
    Storage.set('json-data', JSON.stringify(data));
    window.location.href = "../view/view.html";
}





