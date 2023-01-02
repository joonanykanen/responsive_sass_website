
const menuBtn = document.querySelector(".menu-btn");
const menuCircle = document.querySelector("fa-circle-notch");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".nav-item");
const h1 = document.querySelector(".text-secondary");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        menuBtn.classList.add("close");
        menu.classList.add("show");
        menuNav.classList.add("show");
        navItems.forEach(item => item.classList.add("show"));

        showMenu = true;
    }
    else {
        menuBtn.classList.remove("close");
        menu.classList.remove("show");
        menuNav.classList.remove("show");
        navItems.forEach(item => item.classList.remove("show"));

        showMenu = false;
    }
}

function startAnimation() {
    h1.style.animationDelay = "${Math.random() * 5}s";
    h1.style.animationPlayState = "running";
}

function stopAnimation() {
    h1.style.animationPlayState = "paused";
}

setInterval(() => {
    const shouldAnimate = Math.random() < 0.5;
    if (shouldAnimate) {
    startAnimation();
    } else {
    stopAnimation();
    }
}, 500);


