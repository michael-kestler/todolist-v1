let today = new Date();

// let currentDay = today.getDay();

//object that formats day
let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
};

let day = today.toLocaleDateString("en-US", options)