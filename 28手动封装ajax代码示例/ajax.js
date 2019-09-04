//高级单例模式
/**
 * get 是url地址？传参   ?name=zs&age=18
 * 4步骤：
 * 1、创建ajax实例
 * 2、打开和服务器的连接
 * 3、发送请求
 * 4、等待服务器做出响应
 * 
 */
let ajax = (function () {
    //创建一个ajax实例
    let xhr = new XMLHttpRequest();
    function get(opt) {
        return new Promise((resolve, reject) => {
            let { url, params, async = true } = opt;
            //打开和服务器的连接
            //  /getuser?name=zs&age=18    /getuser
            url = params ? url + "?" + format(params) : url;
            xhr.open("get", url, async)
            //等待服务器做出响应
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {//后台做出响应
                    if (xhr.status == 200) {//前端已经接收到后台做出的响应了
                        // resolve(xhr.responseText)
                        resolve(JSON.parse(xhr.responseText))
                    } else {
                        reject(new Error())
                    }
                }
            }

            //发送请求
            xhr.send()
        })
    }
    function post(opt) {
        return new Promise((resolve, reject) => {
            let { url, params, async = true, paramsType = "application/x-www-form-urlencoded" } = opt;
            //打开和服务器的连接
            xhr.open("post", url, async)
            //等待服务器做出响应
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {//后台做出响应
                    console.log(4)
                    if (xhr.status == 200) {//前端已经接收到后台做出的响应了
                        console.log(200)
                        // resolve(xhr.responseText)
                        resolve(JSON.parse(xhr.responseText))
                    } else {
                        reject(new Error())
                    }
                }
            }
            // 3、发送请求
            //  application/json  对应的是json格式
            //  application/x-www-form-urlencoded  对应的是序列化字符串
            xhr.setRequestHeader("content-type", paramsType)
            //  xhr.send(JSON.stringify(params))
            params = paramsType === "application/x-www-form-urlencoded" ? format(params) : JSON.stringify(params);
            xhr.send(params)
        })
    }
    function format(params) {//{name:zs,age:18}   name=zs&age=18 序列化字符串
        return Object.entries(params).map(item => item.join("=")).join("&")
    }
    return {
        get,
        post
    }
})()
