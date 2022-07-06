const header = document.querySelector("header");
const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 30) {
        header.classList.add("scrolled");
        nav.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
        nav.classList.remove("scrolled");
    }
});

const light = document.querySelector(".light");
const dark = document.querySelector(".dark");
const linkss = document.links;
const profile = document.querySelector(".profile");
const linksCard = document.querySelector(".links-card");

light.addEventListener("click", () => {
    light.style.display="none";
    dark.style.display="block";
    document.body.style.backgroundColor="#1E2E3E";
    linkss[0].style.color="#fff";
    linkss[1].style.color="#fff";
    linkss[2].style.color="#fff";
    linkss[3].style.color="#fff";
    linkss[4].style.color="#fff";
    profile.style.color="#fff";
    linksCard.style.color="#fff";
});

dark.addEventListener("click", () => {
    dark.style.display="none";
    light.style.display="block";
    document.body.style.backgroundColor="#E1FBFF";
    linkss[0].style.color="#000";
    linkss[1].style.color="#000";
    linkss[2].style.color="#000";
    linkss[3].style.color="#000";
    linkss[4].style.color="#000";
    profile.style.color="#000";
    linksCard.style.color="#000";
});

document.body.onload = startTime();

function startTime() {
    const today = new Date();
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    let d = weekday[today.getDay()];
    let dd = today.getDate();
    let mm = month[today.getMonth()];
    let yy = today.getFullYear();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("day").innerHTML = d;
    document.getElementById("ddmmyy").innerHTML = dd + " " + mm + " " + yy;
    document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  };
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  };