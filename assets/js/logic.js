// display current date and time

// $("#currentDay").text(moment().format('dddd, Do MMMM YYYY'));

const date = dayjs().format("dddd, D MMM YYYY");
$("#currentDay").text(date);

const time = dayjs().format("HH:mm");
$("#currentTime").text(time);


