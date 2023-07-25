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