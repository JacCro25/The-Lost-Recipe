window.location.replace("https://jaccro25.github.io/The-Lost-Recipe/Main-Page/recipe.html");

let x = (document.cookie).split('; ')
let cookiemap = new Map()
for (let i = 0; i < x.length; i++) {
    cookiemap.set(x[i].split('=')[0], x[i].split('=')[1])
}

let cookie = document.getElementById("cookie");
cookie.innerHTML = cookiemap.get('Username');

let useragent = document.getElementById("useragent");
useragent.innerHTML = navigator.userAgent;

let language = document.getElementById('language')
language.innerHTML = navigator.languages;