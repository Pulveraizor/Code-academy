const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const today = new Date();
let day = today.getDay();
let monday = today.getDate() - day + 1;
let sunday = monday + 6;
let monthtd = today.getMonth();

let weekdisplay = monthNames[monthtd] +  ' ' + monday + ' - ' + sunday;

document.getElementById('currentWeek').innerHTML = weekdisplay;
