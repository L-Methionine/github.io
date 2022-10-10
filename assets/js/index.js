var osearch = document.getElementById('kw');
var obtn = document.getElementById('btn');
var btncontainer = document.getElementById('btn-container');

function Tosearch() {
    window.open("http://www.baidu.com/s?wd=" + osearch.value);
}

obtn.onclick = function () {
    Tosearch();
}

btncontainer.onclick = function () {
    Tosearch();
}
