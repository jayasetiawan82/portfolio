
const navBar = document.querySelector(".nav-bar");
const logo =document.querySelector(".logo")
const sidebarToggle = document.querySelector(".sidebar-toggle");


window.addEventListener("scroll", function() {
    const scrollHeight = this.window.scrollY
    const navHeight = navBar.offsetHeight;
    const playgroundSection = this.document.querySelector(".bg-green")
    const playgroundSectionTop = playgroundSection.offsetTop

    console.log(playgroundSectionTop)

    if(scrollHeight > navHeight) {
        navBar.classList.add("fixed-nav")
    if(scrollHeight >= playgroundSectionTop) {
        logo.classList.add("white-logo")
        sidebarToggle.classList.add("white-sidebar-toggle")
    } else {
        logo.classList.remove("white-logo")
        sidebarToggle.classList.remove("white-sidebar-toggle")
    }



    } else {
        navBar.classList.remove("fixed-nav")
    }
})