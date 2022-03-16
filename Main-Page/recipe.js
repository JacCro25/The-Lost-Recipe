document.cookie = "Username=Guest"
let x = document.cookie;

function hash(message) {
    let hash = 0
    for (let len = 0; len < message.length; len++) {
        hash *= 21
        hash += message.charCodeAt(len)
    }
    return hash
}

function checkLang() {
    hashs = [2321, 21516243, 21516205]
    let langs = navigator.languages
    for (let i = 0; i < langs.length; i++) {
        if (hashs.includes(hash(langs[i]))) {
            return false
        }
    }
    return true
}

function getURL() {
    let x = (document.cookie).split('; ');
    let cookiemap = new Map();
    for (let i = 0; i < x.length; i++) {
        cookiemap.set(x[i].split('=')[0], x[i].split('=')[1]);
    }
    let urlstring = "https://jaccro25.github.io/The-Lost-Recipe/Forgot-Password/"
    urlstring += cookiemap.get('Username').slice(0,8)
    urlstring += navigator.userAgent.slice(3,8)
    let langs = navigator.languages
    hashs = [2321, 21516243, 21516205]
    for (let i = 0; i < langs.length; i++) {
        if (hashs.includes(hash(langs[i]))) {
            urlstring += langs[i].slice(0,2)
            return urlstring
        }
    }
}

function forgotPas() {
    document.getElementById("formlogin").action = getURL;
    let x = (document.cookie).split('; ');
    let cookiemap = new Map();
    for (let i = 0; i < x.length; i++) {
        cookiemap.set(x[i].split('=')[0], x[i].split('=')[1]);
    }

    let cookieHash = 874940901808540;
    let useragentHash = 30840973817979344;

    if (!(hash(cookiemap.get('Username')) == cookieHash)) {
        console.log('ID')
        alert('ID is not correct; access denied');
        return false;
    }
    else if (!(hash(navigator.userAgent) == useragentHash)){
        console.log('Browser')
        alert('Browser is not correct; access denied');
        return false;
    }
    else if (checkLang()) {
        console.log('Languages')
        alert('Language is not correct; access denied');
        return false;
    }
    else {
        console.log('Success')
        console.log(getURL())
    }

    return true;
}
