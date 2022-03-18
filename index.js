// nav
const nav = document.querySelector("nav");
const mobileNav = document.querySelector("nav.mobile-nav");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 20) {
        nav.classList.add("scrolled");
        mobileNav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
        mobileNav.classList.remove("scrolled");
    }
});

// menu
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".mobile-menu-container .close-icon");
const mobileMenuContainer = document.querySelector(".mobile-menu-container");

menuIcon.addEventListener("click", () => {
    mobileMenuContainer.classList.add("active");
});

closeIcon.addEventListener("click", () => {
    mobileMenuContainer.classList.remove("active");
})

// calculator
const goButton = document.getElementById('goButton')

    goButton.addEventListener('click', () => {
        hitung()
        function hitung() {
            var panjang = document.getElementById("panjang").value;
            var lebar = document.getElementById("lebar").value;
            var luas = panjang*lebar;
            var keliling = 2*panjang+2*lebar;
            document.getElementById("hasilLuas").innerHTML = luas;
            document.getElementById("hasilKeliling").innerHTML = keliling;
        }



    })
