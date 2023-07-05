var time = document.querySelector(".time");
var dateTime = document.querySelector(".date-time");


// update clock function
function updateClock() {
    var now = new Date();

    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    var day = now.getDay();
    var date = now.getDate();
    var month = now.getMonth();
    var year = now.getFullYear();

    var dayNames = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    var monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    date = date < 10 ? "0" + date : date;

    let  meridiem = 'AM';
    if(hours === 0){
      hours = 12
      meridiem = 'AM';
  }
  else if( hours === 12 ){
      meridiem = 'PM';
  }
  else if( hours > 12){
    hours = hours - 12
      meridiem = 'PM';
  }


    time.innerHTML = hours + ":" + minutes + ":" + seconds + " " + meridiem;
    dateTime.innerHTML =
        dayNames[day] + ", " + monthNames[month] + " " + date + ", " + year;
}
updateClock();
setInterval(updateClock, 1000);
