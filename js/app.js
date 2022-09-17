let yearIs = 2022;
let currentYear = new Date().getFullYear();
let countDate = new Date(`Jan 1, ${yearIs} 00:00:00`).getTime();

let x = setInterval(function() {
    let currentDateTime = new Date().getTime();
    let distance = countDate - currentDateTime;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector(".days").innerHTML = days + "d";
    document.querySelector(".hours").innerHTML = hours + "h";
    document.querySelector(".minutes").innerHTML = minutes + "m";
    document.querySelector(".seconds").innerHTML = seconds + "s";

    if (distance < 0) {
        clearInterval(x);
        document.querySelector(".countdown").innerHTML = "TIMER EXPIRED";
        if (yearIs < currentYear) {
            yearIs = currentYear;
            x;
        }
    }
})