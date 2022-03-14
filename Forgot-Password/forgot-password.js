function hash(message) {
    let hash = 0
    for (let len = 0; len < message.length; len++) {
        hash *= 58
        hash += message.charCodeAt(len)
    }
    return hash
}

let x = (document.cookie).split('; ')
let cookiemap = new Map()
for (let i = 0; i < x.length; i++) {
    cookiemap.set(x[i].split('=')[0], x[i].split('=')[1])
}

let cookieHash = 0
let useragentHash = 0
let langHash = 0

if (!(hash(cookiemap.get('Username')) == cookieHash)) {
    alert('ID is not correct; access denied')
    window.location.replace("https://jaccro25.github.io/The-Lost-Recipe/Main-Page/recipe.html");
}

let cookie = document.getElementById("cookie");
cookie.innerHTML = cookiemap.get('Username');

let useragent = document.getElementById("useragent");
useragent.innerHTML = navigator.userAgent;

let language = document.getElementById('language')
language.innerHTML = navigator.languages;