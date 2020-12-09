/**
 * @param type: (String)请求为Post还是Get
 * @param url: (String)请求的url
 * @param isAsynchronous: (boolean)请求是否为异步
 * @param func: (函数)需要执行的操作
 * @param arguments: func中所需要的参数
 */
function ajax(type, url, data, f) {
    let xmlHttp = null;
    if (window.XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest();
    } else {
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            f(xmlHttp)
        } else {
            return null;
        }
    }
    xmlHttp.open(type, url, true);
    xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xmlHttp.send(data);
}


function login_ajax() {
    
    let logname = document.getElementsByTagName('input')['Username'].value;
    let logpass = document.getElementsByTagName('input')['Password'].value;

    if (logname == "" || logpass == "" ) {
        // var obj = document.getElementById("errorMsg");
        alert("用户名或密码不能为空！");
        // obj.setAttribute("class", "tip-box visiblility-show");
        return;
    }
    
    var userinfo = "inAccount=" + logname + "&inPsw=" + logpass;

    var url = "http://10.21.52.79:8080/test/login?name="+logname+"&password="+logpass;

    xmlhttprequest = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

    xmlhttprequest.onreadystatechange = function () {
        if (xmlhttprequest.readyState == 4 && xmlhttprequest.status == 200) {
            var result = xmlhttprequest.responseText;
            if (result!="Fail") {
                window.location.href = "Store.html" ;
            } else {
                // document.getElementById("xiaoxi").innerHTML = "登录失败！";
                alert("用户名或密码错误！")
            }
        }
    }
    xmlhttprequest.open("get", url, true);
    xmlhttprequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xmlhttprequest.send(null); //这时才开始发送请求
}



function sign_in() {
    let success = 1;
    //todo 
    if (success) {
        window.location.href = "Store.html";//跳转
    }
}