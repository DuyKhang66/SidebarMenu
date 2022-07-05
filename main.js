const nav = document.querySelector('nav');
const toggle_menu = document.querySelector('.toggle_menu');
const content = document.querySelector('.content')

toggle_menu.onclick = function() {
    nav.classList.toggle('hide')
    content.classList.toggle('expand')
}
//mode
const body = document.querySelector('body')
const dark = document.querySelector('.btn-dark')
const icon = document.querySelector('#dark-icon')
isDark = false
isIcon = false

dark.onclick = function() {
    if(this.isDark){
        this.isDark = false
        this.isIcon= false
        body.classList.remove("dark")
        icon.classList.remove("bi-moon")
    } else{
        this.isDark = true
        this.isIcon= true
        body.classList.add("dark")
        icon.classList.add("bi-moon")
    }
}
