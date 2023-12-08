let hours = document.getElementById("hours");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(() => {
  let currentTime = new Date();
  hours.innerHTML =
    (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
  min.innerHTML =
    (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
  sec.innerHTML =
    (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
}, 1000);

// const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
// console.log(timezone);
// let s = new Date().toLocaleString();

// console.log(s);
// let currentTime = new Date();
// let loHour = currentTime.getHours().toLocaleString();
// console.log(loHour);
// Get the current date and time
// const currentDate = new Date();

// // Get the local hours from the current date
// const localHours = currentDate.getHours();

// console.log("Local Hours:", localHours);

// Assuming the time is in 24-hour format
const timeIn24Hours = 13;

// Convert the time to 12-hour format
const timeIn12Hours = timeIn24Hours % 12 || 12;

// Determine if it's AM or PM
const amOrPm = timeIn24Hours >= 12 ? "PM" : "AM";

// Construct the final time string
const formattedTime = `${timeIn12Hours} ${amOrPm}`;

console.log(formattedTime); // Output: "1 PM"
