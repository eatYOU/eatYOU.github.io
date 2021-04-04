
let Tran = new __Tran();
let Inve = new Tran.InveData();
let Grab = new Tran.GrabData();

function __Tran() {

    this.init = function() {
        this.setConfig();
        this.creatElems();
        Container(this);
    }

    this.creatElems = function() {
        Alert.creatOuterTop(this);
        Alert.creatOuterCenter(this);
        Alert.creatOuterBot(this);
        Alert.showInner();
    }

    this.creatBlock = function(content, data) {
        if (data.type == 'inve')
            this.creatInveBody(content, data);
        else
            this.creatGrabBody(content, data);
    }


//----------------------G-R-A-B--------------------------------------------
//--------------------- 2020年5月27日 -------------------------------------
//----------------------G-R-A-B--------------------------------------------


    this.creatGrabBody = function(content, data) {
        let lines = data.lines.length > 0 ? data.lines : instance[data.type];
        let block = Elem.creat('div', content, 'block');
        for (let idx in lines) {
            if (idx >= cfg.inveCount) break;
            let line = new Tran.GrabData();
            line.init(data, lines[idx], idx);
            let body = new Tran.GrabBody();
            body.init(block, data, line);
            data.lines[idx] = line;
        }
    }


    this.GrabData = function() {

        this.init = function(data, line, idx) {
            this.idx = idx;
            this.uid = line.uid;
            this.sid = line.sid || line.uid;
            this.__digger = new Alert.UserData();
            this.__sponer = new Alert.UserData();
            this.__digger.init(Config.__user(this.uid));
            this.__sponer.init(Config.__user(this.sid));
            this.__digger.nexu = line.nexu;
            this.__sponer.nexu = line.nexu;
            this.initTemp();
            this.initData(data.dot, data.type);
        };

        this.initTemp = function() {
            this.ladd = this.__digger.ladd - Math.floor(this.__digger.ladd * Math.random());
            this.multi = Math.floor(100 * Math.pow(Math.random(),8)) + 1;
            this.index = Math.floor((1547 + Math.random()) * 1e9);
            this.stamp = Parse.formatTime(this.index);
            this.stamp = ~~(Math.random()*30) + '分钟前';

        };

        this.initInve = Inve.initData;

        this.initData = function(dot, type) {
            this.initInve(dot, type);
            this.priceCur = 0;
            this.pieceCur = 0;
            this.timesCur = 0;
            this.priceCurList = [];
            this.pieceCurList = [];
            this.timesCurList = [];
            let rand;
            for (let z = 0; z < this.ladd; z++) {
                rand = Math.random() / 4 + 0.25;
                this.priceCurList[z] = this.priceAllList[z];
                this.pieceCurList[z] = Math.floor(this.pieceAllList[z] * rand);
                rand = Math.random() / 4 + 0.50;
                if (dot == 1) rand = 1;
                this.timesCurList[z] = this.pieceAllList[z] - this.pieceCurList[z];
                this.timesCurList[z] = Math.floor(this.timesCurList[z] * rand * dot);
                this.pieceCur += this.pieceCurList[z];
                this.priceCur += this.priceCurList[z] * this.pieceCurList[z];
                this.timesCur += this.timesCurList[z];
            }
            this.laddStr = this.laddStr.replace('h3', 'h4');
            this.pieceStr = this.pieceStr.replace('h3', 'h4');
            this.priceStr = this.priceStr.replace('h3', 'h4');
            this.timesStr = this.timesStr.replace('h3', 'h4');
            this.laddStr += '倍数<br/><h3>' +  this.multi + '倍';
            this.pieceStr += '剩余份数<br/><h3>' +  Parse.sub4Num(this.pieceCur) + '份';
            this.priceStr += '剩余金额<br/><h3>' +  Parse.sub4Num(this.priceCur) + '元';
            this.timesStr += '已传播<br/><h3>' +  Parse.sub4Num(this.timesCur) + '次';
            this.pieceEach = (this.priceCur / this.pieceCur).toFixed(2) + '元/份';
            this.percent = (this.priceCur / this.priceAll * 100).toFixed(2);
            this.percentStr = '剩余 ' + this.percent + '%';
        }
    }


    this.GrabBody = function() {
        let that = this;
        this.init = function(block, data, line) {
            if (!line.ladd) return;
            line.initData = line.initData || new this.GrabData().initData;
            line.initData(data.dot, data.type);
            this.body = Elem.creat('div', block, 'user-block', 'lines['+line.idx+']');
            this.body.self = this;

            this.flex1 = Elem.creat('div', this.body, 'user-top');
            this.index = Elem.creat('div', this.flex1, 'user-order');
            this.stamp = Elem.creat('div', this.flex1, 'user-value');
            // this.index.innerHTML = '编号: ' + line.index;
            this.index.innerHTML = line.percentStr;
            this.stamp.innerHTML = line.stamp;
            Elem.page(this.index, Alert.colorFont());

            this.flex2 = new Alert.UserFlex();
            this.flex2.init(this.body, line.__digger);
            this.flex3 = Elem.creat('div', this.body, 'user-flex');
            this.ladd  = Tran.creatText(this.flex3, 'L10', line.laddStr);
            this.piece = Tran.creatText(this.flex3, 'R20', line.pieceStr);
            this.price = Tran.creatText(this.flex3, 'R20', line.priceStr);
            // this.times = Tran.creatText(this.flex3, 'R20', line.timesStr);
            this.flex1.setAttribute('margin', 'T5');
            this.flex3.setAttribute('margin', 'T0');
            this.body.setAttribute('margin', 'B15');
            this.body.onclick = function() {
                Alert.bodySelect(this);
                Tran.showDetail(this);
            }
        }
    }



//----------------------I-N-V-E--------------------------------------------
//--------------------- 2020年5月27日 -------------------------------------
//----------------------I-N-V-E--------------------------------------------


    this.creatInveBody = function(content, data) {
        let block = Elem.creat('div', content, 'block');
        for (let idx = 0; idx < cfg.laddCount; idx++) {
            let line = new Tran.InveData();
            line.init(data, idx);
            let body = new Tran.InveBody();
            body.init(block, line, data, idx);
            data.lines[idx] = line;
        }
    }


    this.InveData = function() {

        this.init = function(data, idx) {
            this.idx = idx;
            this.ladd = idx + 1;
            this.multi = 1;
            this.initData(data.dot, data.type); 
        }


        this.initData = function(dot, type) {
            this.row = parseInt(this.ladd / 5 - 0.2);
            this.priceAll = 0;
            this.pieceAll = 0;
            this.timesAll = 0;
            this.priceAllList = [];    
            this.pieceAllList = [];
            this.timesAllList = [];
            for (let z = 0; z < this.ladd; z++) {
                this.priceAllList[z] = Math.pow(2, z);
                this.pieceAllList[z] = Math.pow(2, this.ladd - z - 1) * this.multi;
                this.timesAllList[z] =  this.pieceAllList[z] * dot;
            }

            this.priceAll = Math.pow(2, this.ladd - 1) * this.ladd * this.multi;
            this.pieceAll = Math.pow(2, this.ladd) * this.multi - this.multi;
            this.timesAll = this.pieceAll * dot;

            this.laddStr = '阶梯<br/><h3>' +  this.ladd + '阶</h3>';
            this.pieceStr = '总份数<br/><h3>' +  Parse.sub4Num(this.pieceAll) + '份</h3>';
            this.priceStr = '总金额<br/><h3>' +  Parse.sub4Num(this.priceAll) + '元</h3>';
            this.timesStr = '可传播<br/><h3>' +  Parse.sub4Num(this.timesAll) + '次</h3>';
            this.pieceEach = (this.priceAll / this.pieceAll).toFixed(2) + '元/份';
            if (dot == 1) {
                this.timesEach = (this.priceAll / this.timesAll).toFixed(2) + '元/次';
            } else {
                this.timesEach = (this.priceAll / this.timesAll * 1000).toFixed(2) + '元/千次';
            }
        }
    }

    this.InveBody = function() {
        let that = this;

        this.init = function(block, line, data, z) {
            if (!line.ladd) return;
            line.initData = line.initData || new Tran.InveData().initData;
            line.initData(data.dot, data.type);
            line.row = Math.floor(line.ladd / 5 - 0.2);
            this.body = Elem.creat('div', block, 'user-block', 'lines['+z+']');
            this.body.self = this;
            this.body.onclick = function() {
                Alert.bodySelect(this);
                Tran.showDetail(this);
            }
            this.flex = Elem.creat('div', this.body, 'user-flex');
            this.ladd  = Tran.creatText(this.flex, 'L10', line.laddStr);
            this.piece = Tran.creatText(this.flex, 'R20', line.pieceStr);
            this.price = Tran.creatText(this.flex, 'R20', line.priceStr);
            // this.times = Tran.creatText(this.flex, 'R20', line.timesStr);
            this.flex.setAttribute('margin', 'T5')
            if (z == 0) {
                Alert.bodySelect(this.body);
            }
        }
    }


    this.creatFlex = function(block, attr) {
        let elem = Elem.creat('div', block, 'user-flex');
        elem.setAttribute('margin', attr);
        return elem;
    }

    this.creatText = function(flex, attr, text) {
        let elem = Elem.creat('text', flex, 'cell');
        elem.setAttribute('margin', attr);
        elem.innerHTML = text;
        return elem;
    }

    this.isGrabOrGain = function(data) {
        return (data.type == 'grab' || data.type == 'gain');
    }


    this.showDetail = function(body) {
        Alert.hidePanel();
        Alert.showPanel('detail');
        let data = Config.__list(body);
        let line = Config.__line(body);
        let title = Alert.curPanel.title;
        if (data.type == 'inve') {
            title.innerHTML = data.flexStr;
            console.log([
                Alert.curPanel.name,
                line.ladd+'阶',
                Alert.copy(Alert.curList), 
                Alert.copy(Alert.curWord), 
                line, body.self,
            ]);
        } else {
            let digger = line.__digger;
            let sponer = line.__sponer;  
            Alert.curWord.push(digger.uid);
            title.innerHTML = data.flexStr.replace('#0', digger.name);
            console.log([
                Alert.curPanel.name,
                digger.uid, digger.name, 
                Alert.copy(Alert.curList), 
                Alert.copy(Alert.curWord), 
                line, body.self,
            ]);
            if (data.type == 'gain') {
                Elem.hide(Alert.buttons.digger);
            } else {
                Elem.show(Alert.buttons.digger);
            }
        }
        document.body.line = line;
        document.body.data = data;
        let block = Alert.curPanel.block;
        block.innerHTML = '';


        //alert(JSON.stringify(line));
        let priceKey = 'priceAllList';
        let pieceKey = data.type != 'inve' ? 'pieceCurList' : 'pieceAllList';
        let timesKey = data.type != 'inve' ? 'timesCurList' : 'timesAllList';
        let display = data.type != 'inve' ? 'flex' : 'none';

        this.isTask = this.isGrabOrGain(data);
        for (let i = line.ladd; i > 0; i--) {
            if (this.isTask) {
                let flex = this.creatFlex(block, 'B0');
                let orderStr = '<h2>任务' + i;
                let nameStr = '<h2>' + (Task.gameNames[data.taskTypes[i]] || '未设置');
                let order = this.creatText(flex, 'L10', orderStr);
                let name = this.creatText(flex, 'R20', nameStr);
            }

            let flex2 = this.creatFlex(block, 'B5');
            let laddStr = data.laddStr.replace('#0', i);
            let pieceStr = data.pieceStr.replace('#0', Parse.sub4Num(line[pieceKey][i-1]));
            let priceStr = data.priceStr.replace('#0', Parse.sub4Num(line[priceKey][i-1]));
            let timesStr = data.timesStr.replace('#0', Parse.sub4Num(line[timesKey][i-1]));
            let ladd = this.creatText(flex2, 'L10', laddStr);
            let piece = this.creatText(flex2, 'R20', pieceStr);
            let price = this.creatText(flex2, 'R20', priceStr);
            // let times = this.creatText(flex2, 'R20', timesStr);
        }

        if(block.firstChild)
            block.firstChild.scrollIntoView();
        Task.logs.cur = data.logTips.replace('#inver', line.inver);
        Elem.show(Alert.buttons.sponer.parentNode, display);
        Alert.buttons.doit.innerHTML = data.doitText;
        Alert.log(Task.logs.cur);

    }


    this.showTask = function() {
        Alert.hidePanel();
        if (!this.isTask) return;
        Alert.showPanel('task');
        let redo = Alert.buttons.redo;
        let title = Alert.curPanel.title;
        let block = Alert.curPanel.block;
        redo.setAttribute('state', 'danger');
        Task.creatTask(block);
    }




    this.showResult = function() {
        Alert.hidePanel();
        Alert.showPanel('result');
        let line = document.body.line;
        let data = document.body.data;
        let block = Alert.curPanel.block;
        Task.initRoll(line);
        Task.ladd = Math.min(line.ladd, Task.ladd);
        console.log(line);
        let body = Elem.creat('div', block, 'padd-body');
        let ladd = Elem.creat('div', body, 'cell');
        ladd.innerHTML = Task.ladd + '阶' + Task.pack;
        let pic = Elem.creat('img', body, 'img');
        pic.src = Path.ladd.replace('#ladd', Task.ladd);
        let price = Elem.creat('div', body, 'cell');
        price.innerHTML = '<h1>￥' +  Parse.addSplit(line.priceAllList[Task.ladd - 1]);
        Alert.log('<h5>恭喜您获得了</h5>' + ladd.innerText);
    }


    this.setConfig = function() {
        if (Config.sett.modeType == 'sponer') {
            items = items_sponer;
        } else if (Config.sett.modeType == 'ghost') {
            items = items_ghost;
        }
    }

}





