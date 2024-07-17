let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let day = document.getElementById("day");
let months = document.getElementById("months");
let dayOfWeek = document.getElementById("dayOfWeek"); // Assuming you have an element for displaying the weekday

const weekDays = ["Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba", "Yakshanba"];

setInterval(() => {
    let currentTime = new Date();

    // Get the current day of the week
    let currentDay = weekDays[currentTime.getDay()];

    // Displaying hours and minutes
    hrs.innerHTML = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
    
    // Displaying seconds
    sec.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();

    // Displaying day of the month
    day.innerHTML = (currentTime.getDate() < 10 ? "0" : "") + currentTime.getDate();

    // Displaying month (note: getMonth() returns 0 for January, so add 1 for human-readable month number)
    months.innerHTML = ((currentTime.getMonth() + 1) < 10 ? "0" : "") + (currentTime.getMonth() + 1);

    // Displaying current weekday in Uzbek
    dayOfWeek.innerHTML = currentDay;
}, 1000);
