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
    let langs = navigator.languages
    for (let i = 0; i < langs.length; i++) {
        if (hash(langs[i]) in [6206, 1211020770, 1211020410]) {
            return true
        }
    }
    return false
}

function forgotPas() {
    let x = (document.cookie).split('; ');
    let cookiemap = new Map();
    for (let i = 0; i < x.length; i++) {
        cookiemap.set(x[i].split('=')[0], x[i].split('=')[1]);
    }

    let cookieHash = 21910813593121400000;
    let useragentHash = 13600869381773530000;
    let langHash = 0;

    if (!(hash(cookiemap.get('Username')) == cookieHash)) {
        alert('ID is not correct; access denied');
    }
    else if (!(hash(navigator.userAgent) == useragentHash)){
        alert('Browser is not correct; access denied');
    }
    else if (checkLang()) {
        alert('Language is not correct; access denied');
    }
    else {
        window.location.replace('https://jaccro25.github.io/The-Lost-Recipe/Forgot-Password/forgot-password.html')
    }
}
