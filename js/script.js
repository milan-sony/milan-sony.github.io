window.onload = function () {
    setTimeout(function() {
        // preloader
        document.getElementById("loader").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 1000); // 3000 milliseconds = 3 seconds
};

const icons = [
    "./assets/sun.gif",
    "./assets/moon.gif"
]

// toggle day and night
let daynnighticon = document.getElementById('daynnighticon');
let isDay = true;

daynnighticon.addEventListener('click', ()=>{

    if(isDay == true){
        daynnighticon.src = icons[0]
        isDay = false
    }else{
        isDay = false
        daynnighticon.src = icons[1]
        isDay = true;
    }

})




// scroll to top btn
let ScrollToTop = document.querySelector(".scroll-btn");
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        ScrollToTop.style.display = "flex";
    } else {
        ScrollToTop.style.display = "none";
    }
});

// today's day
let toDaySpan = document.getElementById("today")
let todayObj = new Date()
let dayNumber = todayObj.getDay()
let daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"]
let day = daylist[dayNumber]
toDaySpan.innerHTML = day

// change title when tab changes
let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "ʎuoS uɐlıW";
})
window.addEventListener("focus", () => {
    document.title = docTitle;
})