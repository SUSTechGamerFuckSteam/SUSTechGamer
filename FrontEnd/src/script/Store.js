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
    return;
}


/**
 * 对game_recommend模块进行图片切换
 */
//todo: 把此功能用Vue轮播组件重写
let GAME_RECOMMEND_CURR_SLIDE = 0;// 我知道定义全局变量不优雅，但我找不到其他方法了，有好的优化的话务必告诉我😂
let GAME_RECOMMEND_NEXT_SLIDE = 1;
let IS_SLIDE0_ONSHOW = true;// slide0正在展示则为true，slide1正在展示则为false
let GAME_RECOMMEND_INTERVAL = 0;
function game_recommend_slide(){
    let images = [
        '../../figures/temporary/game_recommend/AnimalCrossing.jpg',
        '../../figures/temporary/game_recommend/Cyberpunk2077.jpg',
        '../../figures/temporary/game_recommend/LegendOfZelda.jpg',
        '../../figures/temporary/game_recommend/RedDeadRedemption2.jpg'
    ];
    let slide = [document.getElementById("img_content_1"), document.getElementById("img_content_2")];
    let div_dots = document.getElementById("div_dots");
    let dot = [];
    let dots = div_dots.children;
    for (let i = 0; i < images.length; i ++){
        dot[i] = document.createElement("div");
    }
    for (let i = 0; i < images.length; i ++){
        div_dots.appendChild(dot[i]);
        div_dots.children[i].className = "dot";
    }
    /* todo: 有bug，点击以后无法正确地clearInterval
    for (let i = 0; i < dots.length; i ++){
        dot[i].addEventListener("click", function(){
            clearInterval(GAME_RECOMMEND_INTERVAL);
            console.log(GAME_RECOMMEND_INTERVAL);
            for (let x = 0; x < dots.length; x ++)
                dots[x].style.backgroundColor = "#808080";
            dots[i].style.backgroundColor = "#d3d3d3";
            GAME_RECOMMEND_CURR_SLIDE = i;
            GAME_RECOMMEND_NEXT_SLIDE = i===game_recommend.length-1? 0 : i+1;
            IS_SLIDE0_ONSHOW = true;
            slide[0].src = game_recommend[GAME_RECOMMEND_CURR_SLIDE];
            slide[1].src = game_recommend[GAME_RECOMMEND_NEXT_SLIDE];
            slide[0].style.opacity = "1.0";
            slide[1].style.opacity = "0.0";
            GAME_RECOMMEND_INTERVAL = setInterval(image_change, 4000);
        });
    }*/
    slide[0].src = images[GAME_RECOMMEND_CURR_SLIDE];
    slide[1].src = images[GAME_RECOMMEND_NEXT_SLIDE];
    slide[1].style.opacity = "0.0";
    dots[GAME_RECOMMEND_CURR_SLIDE].style.backgroundColor = "#d3d3d3";
    GAME_RECOMMEND_INTERVAL = setInterval(image_change, 4000);
    console.log(GAME_RECOMMEND_INTERVAL);
}

function image_change() {
    let images = [
        '../../figures/temporary/game_recommend/AnimalCrossing.jpg',
        '../../figures/temporary/game_recommend/Cyberpunk2077.jpg',
        '../../figures/temporary/game_recommend/LegendOfZelda.jpg',
        '../../figures/temporary/game_recommend/RedDeadRedemption2.jpg'
    ];
    let slide = [document.getElementById("img_content_1"), document.getElementById("img_content_2")];
    let div_dots = document.getElementById("div_dots");
    let dots = div_dots.children;

    dots[GAME_RECOMMEND_CURR_SLIDE].style.backgroundColor = "#808080";
    dots[GAME_RECOMMEND_NEXT_SLIDE].style.backgroundColor = "#d3d3d3";

    anime({
        targets: slide,
        opacity: function (el, i, l) {
            if (IS_SLIDE0_ONSHOW) {
                if (i === 0) return "0.0"
                else return "1.0"
            } else {
                if (i === 0) return "1.0"
                else return "0.0"
            }
        },
        easing: 'easeInOutQuad'
    });
    setTimeout(function(){
        IS_SLIDE0_ONSHOW = !IS_SLIDE0_ONSHOW;
        GAME_RECOMMEND_CURR_SLIDE = GAME_RECOMMEND_NEXT_SLIDE;
        GAME_RECOMMEND_NEXT_SLIDE ++;
        if (GAME_RECOMMEND_NEXT_SLIDE === images.length) GAME_RECOMMEND_NEXT_SLIDE = 0;
        if (IS_SLIDE0_ONSHOW){
            slide[1].src = images[GAME_RECOMMEND_NEXT_SLIDE];
        }else {
            slide[0].src = images[GAME_RECOMMEND_NEXT_SLIDE];
        }
    }, 3900);
}




