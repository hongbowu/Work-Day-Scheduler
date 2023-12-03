// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
let saveBtn = $(".btn");
// $(function () {
// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?

saveBtn.on("click", function (event) {
  // add preventdefault
  event.preventDefault();
  //add for loop for locate the input position.
  for (let i = 1; i < 10; i++) {
    let todo = $("#" + i).val();
    localStorage.setItem("todo", JSON.stringify(todo));
    let toDos = JSON.parse(localStorage.getItem("todo"));
    $("#" + i).text(toDos);
    console.log(toDos);
    if (!todo) {
      return;
    }
  }
});
//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
let currentTime = dayjs();
function timeCompare() {
  for (let i = 0; i < 10; i++) {
    if (JSON.stringify($(".hour" + i).text()) === "") {
      return;
    } else if (
      JSON.stringify($(".hour" + i).text()) === "9AM" &&
      JSON.stringify(currentTime.format("hA")) >= "12PM"
    ) {
      $(".hour" + i)
        .parent()
        .attr("class", "row time-block past");
    } else if (
      JSON.stringify($(".hour" + i).text()) === "10AM" &&
      JSON.stringify(currentTime.format("hA")) >= "12PM"
    ) {
      $(".hour" + i)
        .parent()
        .attr("class", "row time-block past");
    } else if (
      JSON.stringify($(".hour" + i).text()) === "11AM" &&
      JSON.stringify(currentTime.format("hA")) >= "12PM"
    ) {
      $(".hour" + i)
        .parent()
        .attr("class", "row time-block past");
    } else if (
      JSON.stringify($(".hour" + i).text()) <
      JSON.stringify(currentTime.format("hA"))
    ) {
      $(".hour" + i)
        .parent()
        .attr("class", "row time-block past");
    } else if (
      JSON.stringify($(".hour" + i).text()) ===
      JSON.stringify(currentTime.format("hA"))
    ) {
      $(".hour" + i)
        .parent()
        .attr("class", "row time-block present");
    } else {
      $(".hour" + i)
        .parent()
        .attr("class", "row time-block future");
    }
  }
}
timeCompare();
console.log(currentTime.format("hA"));
console.log("9am" === "9AM");
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.

function timeRuns() {
  $("#currentDay").text(currentTime.format("dddd, MMMM D, YYYY h:mm A"));
}
setInterval(timeRuns, 1000);
console.log(JSON.stringify($(".hour1").text()));
