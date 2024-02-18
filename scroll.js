
const navBar = document.querySelector(".nav-bar");
console.log(navBar)


window.addEventListener("scroll", function() {
    const scrollHeight = this.window.scrollY
    const navHeight = navBar.getBoundingClientRect().height

    if(scrollHeight > navHeight) {
        navBar.classList.add("fixed-nav")
    } else {
        navBar.classList.remove("fixed-nav")
    }
})