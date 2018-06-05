
/** cookie  start */

/**
 * 设置cookies
 * @param {object} cookie 需要设置的cookie
 * @param {number} time 过期时间 默认不过期
 */
const setCookies = (cookie, time) => {
    let name = Object.keys(cookie);

    let flag = false;
    if (time > 0) {
        flag = true;
        var Days = time;
        var exp = new Date();
        exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    }
    name.map((n) => {
        let value = cookie[n];
        let str = n + "=" + escape(value) + ";"
        if (flag) str += "expires=" + exp.toGMTString();
        document.cookie = str;
    })
}

/**
 * 获取cookie值
 * @param {string} name 
 */
const getCookie = (name) => {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}


/**
 * 删除cookie
 * @param {string} name 
 */
const delCookie = (name) => {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}

export const _cookie = {
    setCookies,
    getCookie,
    delCookie,
}


/** cookie  end */


/**localStorage start */

/**
 * 设置localStorage
 * @param {string} key 
 * @param {object} value 
 */
const setLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}


/**
 * 获取localStorage
 * @param {string} key 
 */
const getLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
}


/**
 * 删除localStorage
 * @param {string} key 
 */
const delLocalStorage = (key) => {
    localStorage.removeItem(key);
}


/**
 * 删除所有保存数据
 */
const clearLocalStorage = () => {
    localStorage.clear();
}


export const _localStorage = {
    setLocalStorage,
    getLocalStorage,
    delLocalStorage,
    clearLocalStorage
}

/**localStorage end */









