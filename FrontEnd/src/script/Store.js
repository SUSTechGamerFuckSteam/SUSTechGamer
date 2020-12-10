/**
 * 登陆功能
 */
function login() {
    window.location.href = "Login.html";
    //todo: 若已经登陆，则不显示登陆按钮，显示用户头像
}


/**
 * 主页面搜索功能
 */
function search(){
    //todo: 向服务器发出请求，并跳转到搜索结果页面
    alert("search");
}

/**
 * 实现页面无限下拉
 */
let GAME_LIST_COUNT = 0
function arrange_game_list(){
    //let game_list = getFromServer();
    let game_list = [ 'Animal crossing', 'Cyberpunk 2077','Legend of Zelda', 'Red Dead Redemption 2'];
    let game_pics = [
        '../../figures/temporary/game_recommend/AnimalCrossing.jpg',
        '../../figures/temporary/game_recommend/Cyberpunk2077.jpg',
        '../../figures/temporary/game_recommend/LegendOfZelda.jpg',
        '../../figures/temporary/game_recommend/RedDeadRedemption2.jpg'
    ];
    let game_descriptions = [
        '任天堂出品的在Switch平台上发行的游戏。从2020年3月发售以来，就获得了超高的人气，以其休闲轻松的玩法斩获了超长时间的销量第一。',
        '今年的年度最敢跳票游戏！Cyberpunk 2077由CDPR制作发行。该游戏目前仍然处于预售状态，由于CDPR之前较高的作品质量，大多数玩家对该作十分看好。',
        '任天堂出品的开放世界游戏，是Switch游戏机的首发护航大作，因此Switch被玩家戏称为塞尔达启动器。旷野之息是2017年度最佳游戏。',
        'R Star出品的开放世界游戏，在全平台都有发行。2018年斩获了许多大奖，却与年度最佳失之交臂。狂野的西部世界和广阔的开放地图不容错过！'
    ];

    let game_list_div = document.getElementById("game_list");
    for(let i = 0; i < game_list.length; i ++){
        let div = document.createElement("div");
        div.className = "game_list_div";
        game_list_div.appendChild(div);
    }
    for(let i = 0; i < game_list.length; i ++){
        let name = document.createElement("span");
        name.innerHTML = "<b>"+game_list[i]+"</b>";
        game_list_div.children[i + GAME_LIST_COUNT].appendChild(name);

        let pic = document.createElement("img");
        pic.src = game_pics[i];
        game_list_div.children[i + GAME_LIST_COUNT].appendChild(pic);

        let description = document.createElement("p");
        description.innerHTML = game_descriptions[i];
        game_list_div.children[i + GAME_LIST_COUNT].appendChild(description);
    }
    GAME_LIST_COUNT += game_list.length;
}
//滚动条在Y轴上的滚动距离
function getScrollTop(){
    let scrollTop, bodyScrollTop = 0, documentScrollTop = 0;
    if(document.body){
        bodyScrollTop = document.body.scrollTop;
    }
    if(document.documentElement){
        documentScrollTop = document.documentElement.scrollTop;
    }
    scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
    return scrollTop;
}

//文档的总高度
function getScrollHeight(){
    let scrollHeight, bodyScrollHeight = 0, documentScrollHeight = 0;
    if(document.body){
        bodyScrollHeight = document.body.scrollHeight;
    }
    if(document.documentElement){
        documentScrollHeight = document.documentElement.scrollHeight;
    }
    scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
    return scrollHeight;
}

//浏览器视口的高度
function getWindowHeight(){
    let windowHeight;
    if(document.compatMode === "CSS1Compat"){
        windowHeight = document.documentElement.clientHeight;
    }else{
        windowHeight = document.body.clientHeight;
    }
    return windowHeight;
}

//js原生监听滚动事件
window.onscroll = function() {
    if(getScrollTop() + getWindowHeight() === getScrollHeight()){
        arrange_game_list();
    }
}

/**
 * 实现轮播图
 */

$(function() {
	
	var posObject = {
		A:{"width":257,"height":143,"left":-134,"top":164,"opacity":0},
		B:{"width":513,"height":285,"left":0,"top":93,"opacity":1},
		C:{"width":800,"height":445,"left":200,"top":0,"opacity":1},
		D:{"width":513,"height":285,"left":687,"top":93,"opacity":1},
		E:{"width":257,"height":143,"left":1060,"top":164,"opacity":0}
	}
	//特效最主要就是移动posArrary数组的位置，从而切换图片
	var posArrary = [
		posObject.C,
		posObject.D,
		posObject.E,
		posObject.E,
		posObject.E,
		posObject.E,
		posObject.E,
		posObject.E,
		posObject.A,
		posObject.B,
	];
	var zindexArrary = [3,2,1,1,1,1,1,1,1,2];
	var maskArrary = [0,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4];
	
	//设置初始值
	setEveryLiByArr();
	
	//设置一个锁，防止用户快速点击，造成动画排队
	var god = false;
	
	//设置图片信号数
	var idx = 0;
	
	//右按钮事件
	$(".right_btn").click(function() {
		//alert(11);
		//防止动画排队
		if ($("ul li").is(":animated")&&!god) {
			return;
		}
		posArrary.unshift(posArrary.pop());
//		unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。
//		push() 方法可以给数组末尾添加一个或多个数组项。
//		pop() 方法可以从数组的末尾删除一个数组项，并返回删除的数组项
//		shift() 方法和 pop() 方法刚好相反，它可以删除数组的第一项，并返回删除的数组项
		zindexArrary.unshift(zindexArrary.pop());
		maskArrary.unshift(maskArrary.pop());
		setEveryLiByArr();
		idx++;
		//图片到最后一张返回第一张
		if (idx > 9) {
			idx = 0;
		}
		//小圆点跟随图片移动
		$("ol li").eq(idx).addClass("cur").siblings().removeClass("cur");
	});
	//左按钮事件
	$(".left_btn").click(function() {
		//alert(11);
		if ($("ul li").is(":animated")&&!god) {
			return;
		}
		posArrary.push(posArrary.shift());
		zindexArrary.push(zindexArrary.shift());
		maskArrary.push(maskArrary.shift());

		setEveryLiByArr();
		idx--;
		if (idx < 0) {
			idx = 10;
		}
		$("ol li").eq(idx).addClass("cur").siblings().removeClass("cur");
	});
	
	//点击小圆点跳转图片
	$("ol li").click(function() {
		//alert(11);
		var _idx = $(this).index();
		//console.log(_idx);
		if (_idx > idx) {
			var count = _idx - idx;
			god = true;
			while (count--){
				//模拟右按钮点击事件，跳转到点击圆点中的图片
				$(".right_btn").trigger("click");
			}
			god = false;
		} else {
			var count = idx - _idx;
			god = true;
			while (count--){
				$(".left_btn").trigger("click");
			}
			god = false;
		}
	});
	
	//设置每一个li标签的三个数组数据
	function setEveryLiByArr(){
		var during = god?80:800;
		$("ul li").each(function(index){
			//console.log($(this));
			$(this).css("z-index",zindexArrary[index]);
			$(this).animate(posArrary[index],during);
			$(this).find(".mask").animate({"opacity":maskArrary[index]},during);
		});
	}
})

function community_like(){
    alert("community like");
}
function community_dislike(){
    alert("community dislike");
}
