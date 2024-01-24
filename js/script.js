window.onload=function(){
    // preloader
    document.getElementById("loader").style.display="none";
    document.getElementById("content").style.display="block";
    // change css - day and night
    icon = document.getElementById("day-night")
    iconData = document.getElementById("day-night").innerText
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    if (currentHour >= 6 && currentHour < 18) {
        // Daytime (6:00 AM to 6:00 PM)
        document.getElementById('style-sheet').href = '../css/day.css';
        icon.innerHTML = "☀️";
    } else {
        // Nighttime (6:00 PM to 6:00 AM)
        document.getElementById('style-sheet').href = '../css/night.css';
        icon.innerHTML = "🌙";
    }
};

function DayNight(){
    icon = document.getElementById("day-night")
    iconData = document.getElementById("day-night").innerText
    if (iconData === "☀️"){
        icon.innerHTML = "🌙";
        document.getElementById('style-sheet').href = '../css/night.css';
    }else{
        icon.innerHTML = "☀️";
        document.getElementById('style-sheet').href = '../css/day.css';
    }

}

// scroll to top btn
let ScrollToTop = document.querySelector(".scroll-btn");
window.addEventListener("scroll", () =>{
    if(window.scrollY > 100){
        ScrollToTop.style.display = "flex";
    }else{
        ScrollToTop.style.display = "none";
    }
})

// today's day
let toDaySpan = document.getElementById("today")
let todayObj = new Date()
let dayNumber = todayObj.getDay()
let daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"]
let day = daylist[dayNumber]
toDaySpan.innerHTML = day

// change title when tab changes
let docTitle = document.title;
window.addEventListener("blur", () =>{
    document.title = "ʎuoS uɐlıW";
})
window.addEventListener("focus", () =>{
    document.title = docTitle;
})