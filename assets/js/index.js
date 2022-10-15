var osearch = document.getElementById('kw');
var obtn = document.getElementById('btn');
var btncontainer = document.getElementById('btn-container');
var safari = document.querySelector('.safari');
var scrollbar = document.querySelector('#bar');
var img0_url = './img/gs1.jpg';
var img1_url = './img/R&Y.png';
var img_control_forward = document.querySelector('#img_forward');
var img_control_back = document.querySelector('#img_back');
var lst_img = [img0_url, img1_url];




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

var index = 1;

img_control_forward.onclick = function () {
    console.log(document.getElementsByClassName('pic')[0].style.cssText);
    document.getElementsByClassName('pic')[0].style.cssText = `background: url(${lst_img[index]}) center center no-repeat; background-size: cover;`;
    index++;
    if (index == lst_img.length) {
        index = 0;
    }
}

img_control_back.onclick = function () {
    console.log(document.getElementsByClassName('pic')[0].style.cssText);
    document.getElementsByClassName('pic')[0].style.cssText = `background: url(${lst_img[index]}) center center no-repeat; background-size: cover;`;
    index--;
    if (index == -1) {
        index = lst_img.length - 1;
    }
}