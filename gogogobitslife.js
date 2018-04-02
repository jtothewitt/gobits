/* gogogobitslife.js */

function executeAt(time, func) {
  var currentTime = new Date().getTime();
  if (currentTime > time) {
    console.error("Time is in the Past");
    return false;
  }
  setTimeout(func, time - currentTime);
  return true;
}

$(document).ready(function() {
  executeAt(new Date().setTime(new Date().getTime() + 1000), function() {
    alert(none);
  });
});

var words = [
    "be a gobit!",
    "get a promotion.",
    "call mom more.",
    "travel to asia.",
    "learn to code.",
    "buy a house."
  ],
  i = 0;

setInterval(function() {
  // \/ \/ callback function
  $("#goalHop").fadeOut(200, function() {
    // if i = last index ? i = 0 else i++
    $(this)
      .text(words[i === words.length - 1 ? (i = 0) : (i += 1)])
      .fadeIn(600);
  });
}, 2300);
