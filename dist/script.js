$(document).ready(function(){var t=moment().format("MMMM Do YYYY");
let e=document.getElementById("currentDay");
e.innerHTML=t;
var a=moment().format("HH");
$("#clearFieldsBtn").click(function(t){
    t.preventDefault,
    $("textarea").val(""),
    localStorage.clear()}),
    $(".time-div").each(function(){
        var t=$(this).attr("id").split("-")[1];
        a==t?($(this).addClass("present"),
        $(this).children(".description").addClass("white-text")):a<t?($(this).removeClass("present"),
        $(this).addClass("future")):t<a&&($(this).removeClass("future"),
        $(this).addClass("past"))}),
        $(".saveBtn").click(function(t){
            t.preventDefault();
            var e=$(this).siblings(".time-block").val(),
            t=$(this).parent().attr("id").split("-")[1];
            localStorage.setItem(t,e)}),
            $("#hour-09 .time-block").val(localStorage.getItem("09")),
            $("#hour-10 .time-block").val(localStorage.getItem("10")),
            $("#hour-11 .time-block").val(localStorage.getItem("11")),
            $("#hour-12 .time-block").val(localStorage.getItem("12")),
            $("#hour-13 .time-block").val(localStorage.getItem("13")),
            $("#hour-14 .time-block").val(localStorage.getItem("14")),
            $("#hour-15 .time-block").val(localStorage.getItem("15")),
            $("#hour-16 .time-block").val(localStorage.getItem("16")),
            $("#hour-17 .time-block").val(localStorage.getItem("17"))});