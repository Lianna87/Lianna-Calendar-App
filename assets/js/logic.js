// display current date and time

$("#currentDay").text(moment().format('dddd, Do MMMM YYYY'));

// $("#currentTime").text(moment().format('h:mm A'));

// const date = dayjs().format("dddd, D MMM YYYY");
// $("#currentDay").text(date);

// const time = dayjs().format("HH:mm");
// $("#currentTime").text(time);


//Variable for save button
const saveBtn = $(".saveBtn");

// save text to local stroage
saveBtn.on("click", function(){
    var hourKey = $(this).siblings(".plan").attr("id")
    var activity = $(this).siblings(".plan").val()
    localStorage.setItem(hourKey, activity)
})

$(".plan").each(function(){
    var hourKey = $(this).attr("id")
    $(this).val(localStorage.getItem(hourKey))
})

//Variable for delete button
const deleteBtn = $(".deleteBtn");

// remove text from local storgae
deleteBtn.on("click", function() {
    var hourKey = $(this).siblings(".plan").attr("id")
    localStorage.removeItem(hourKey)
    $(this).siblings(".plan").val("")
})

// colour code time block to reflect past, present or future
function timeBlockColor() {
    var currentHour = dayjs().hour()
    
    $(".time-block").each(function(){
    var rowHour = parseInt($(this).attr("id"))
    if(rowHour < currentHour) {
        $(this).addClass("past")
    }
    else if(rowHour === currentHour) {
        $(this).addClass("present")
    }
    else {
        $(this).addClass("future")
    }
    })
}
timeBlockColor()



