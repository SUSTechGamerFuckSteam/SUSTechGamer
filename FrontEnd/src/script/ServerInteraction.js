/**
 * @param type: (String)请求为Post还是Get
 * @param url: (String)请求的url
 * @param isAsynchronous: (boolean)请求是否为异步
 * @param func: (函数)需要执行的操作
 * @param arguments: func中所需要的参数
 */
function ajax(type, url, data) {
    let xmlHttp = null;
    if (window.XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest();
    } else {
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            return xmlHttp.responseText;
        } else {
            return null;
        }
    }
    xmlHttp.open(type, url, true);
    xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xmlHttp.send(data);
}

function parseJson() {
    //todo
}