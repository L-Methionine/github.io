//var osearch = document.getElementById('kw');
//var obtn = document.getElementById('btn');
//var btncontainer = document.getElementById('btn-container');
var navBar = document.querySelector('.navigation-bar');
var scrollbar = document.querySelector('#bar');
var img_control_forward = document.querySelector('#img_forward');
var img_control_back = document.querySelector('#img_back');
var lst_img = [];

//预处理图片
window.onload = function () {
    top_images = document.getElementsByClassName('topimg');
    for (var i = 0; i < top_images.length; i++) {
        lst_img.push(top_images[i].src);
        console.log(top_images[i].src);
    }
}

/*
function Tosearch() {
    window.open("http://www.baidu.com/s?wd=" + osearch.value);
}

obtn.onclick = function () {
    Tosearch();
}

btncontainer.onclick = function () {
    Tosearch();
}
*/

document.getElementById('e-Mail').onclick = function() {
    window.alert('My E-Mail : Zinc_Chloride@outlook.com')
}

window.onscroll = function () {
    var sctop=document.documentElement.scrollTop;//获取滚动条高度

    if(sctop>=10){//如果高度大于10px则显示回到顶部按钮
        navBar.style.background="rgba(255, 255, 255, 0.85)";//显示按钮
    }
    else{
        navBar.removeAttribute("style");//隐藏按钮
    }

    // Progress bar
    var s = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    // console.log(s)
    var body = document.body;
    // console.log(body)
    var html = document.documentElement;
    // console.log(html)
    var d = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    // console.log(d)
    var c = window.innerHeight;
    // console.log(c);
    var position = (s / (d - c)) * 100;  
    scrollbar.setAttribute('style', 'width: ' + position + '%');
}

var index = 0;

/* 切换src方法 但是无动画效果
img_control_forward.onclick = function () {
    console.log(document.getElementById('img-1').src);
    top_img = document.getElementById('img-1');
    top_img.src = lst_img[index];
    index++;
    if (index == lst_img.length) {
        index = 0;
    }
}

img_control_back.onclick = function () {
    console.log(document.getElementById('img-1').src);
    document.getElementById('img-1').src = lst_img[index];
    index--;
    if (index == -1) {
        index = lst_img.length - 1;
    }
}
*/

function img_forward() {
    top_images[index].style.filter = 'brightness(0.8) opacity(0)';
    index++;
    console.log(index);
    if (index == lst_img.length) {
        index = 0;
        for (var i = 0; i < lst_img.length; i++) {
            top_images[i].style.filter = 'brightness(0.8) opacity(1)';
        }
    }
}

setInterval(img_forward, 5000); // 每过一段时间就会自动切换图片

// 修改图片透明度方法
img_control_forward.onclick = img_forward;  // 图片向前切换

img_control_back.onclick = function () {    // 图片向后切换
    index--;
    console.log(index);
    if (index == -1) {
        index = lst_img.length - 1;
        for (var i = 0; i < lst_img.length-1; i++) {
            top_images[i].style.filter = 'brightness(0.8) opacity(0)';
        };
    }else{
        top_images[index].style.cssText = null;
    }
}

/*
let article_1 = document.getElementById('article-1');

article_1.onclick = function () {
    window.open('https://mp.weixin.qq.com/s/eIoreVGjHz0aXn7jC_FP2w');
}
*/