var osearch = document.getElementById('kw');
var obtn = document.getElementById('btn');
var btncontainer = document.getElementById('btn-container');
var safari = document.querySelector('.safari');
var scrollbar = document.querySelector('#bar');
var img_control_forward = document.querySelector('#img_forward');
var img_control_back = document.querySelector('#img_back');
var lst_img = [];

window.onload = function () {
    top_images = document.getElementsByClassName('topimg');
    for (var i = 0; i < top_images.length; i++) {
        lst_img.push(top_images[i].src);
        console.log(top_images[i].src);
    }
}

function Tosearch() {
    window.open("http://www.baidu.com/s?wd=" + osearch.value);
}

obtn.onclick = function () {
    Tosearch();
}

btncontainer.onclick = function () {
    Tosearch();
}

window.onscroll = function () {
    var sctop=document.documentElement.scrollTop;//获取滚动条高度

    if(sctop>=10){//如果高度大于10px则显示回到顶部按钮
        safari.style.background="rgba(255, 255, 255, 0.85)";//显示按钮
    }
    else{
        safari.removeAttribute("style");//隐藏按钮
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

// 修改图片透明度方法
img_control_forward.onclick = function () {
    top_img = document.getElementById('img-' + index);
    top_img.style.filter = 'brightness(0.8) opacity(0)';
    index++;
    console.log(index);
    if (index == lst_img.length) {
        index = 0;
        for (var i = 0; i < lst_img.length; i++) {
            document.getElementById('img-' + i).style.filter = 'brightness(0.8) opacity(1)';
        }
    }
}

img_control_back.onclick = function () {
    top_img = document.getElementById('img-' + index);
    index--;
    console.log(index);
    if (index == -1) {
        index = lst_img.length - 1;
        for (var i = 0; i < lst_img.length-1; i++) {
            document.getElementById('img-' + i).style.filter = 'brightness(0.8) opacity(0)';
        };
    }else{
        document.getElementById('img-' + index).style.cssText = null;
    }
}