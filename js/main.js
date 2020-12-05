$("#menu-toggle").click(function () {
  $("header").toggleClass("open");
});

/*mousemove parallax effect: https://jsfiddle.net/lovromar/JmUL8*/
$(document).ready(function myFunction() {
  var currentX = "";
  var currentY = "";
  var movementConstant = 0.004;
  $("main").mousemove(function (e) {
    if (currentX == "") currentX = e.clientX;
    var xdiff = e.clientX - currentX;
    currentX = e.clientX;
    if (currentY == "") currentY = e.clientY;
    var ydiff = e.pageY - currentY;
    currentY = e.pageY;
    $(".parallaxfx img").each(function (i, el) {
      var movement = (i + 1) * (xdiff * movementConstant);
      var movementy = (i + 1) * (ydiff * movementConstant);
      var newX = $(el).position().left + movement;
      var newY = $(el).position().top + movementy;
      $(el).css("left", newX + "px");
      $(el).css("top", newY + "px");
    });
  });
});
