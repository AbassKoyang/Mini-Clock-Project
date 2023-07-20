let day = document.getElementById('day')
let date = document.getElementById('date')
let month = document.getElementById('month')
let year = document.getElementById('year')
let hour = document.getElementById('hour')
let minute = document.getElementById('minute')
let second = document.getElementById('second')
let space = ' ';

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const allMonths = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]

const actualDate = new Date();

day.appendChild(document.createTextNode(weekDays[actualDate.getDay()] + ',' + space));
date.appendChild(document.createTextNode(actualDate.getDate() + space));
month.appendChild(document.createTextNode(allMonths[actualDate.getMonth()] + ',' + space));
year.appendChild(document.createTextNode(actualDate.getFullYear()));


hour.appendChild(document.createTextNode(actualDate.getHours() + ':'))
minute.appendChild(document.createTextNode(actualDate.getMinutes() + ':'))
second.appendChild(document.createTextNode(actualDate.getSeconds()))

