
var $slide = $(".slide");
var current = 0;

function cls() {
  $slide.slideUp();
}

function next() {
  cls();
  if (current === $slide.length - 1) current = -1;
  current++;

  $slide.eq(current).slideDown()

  // var x = 0.4;
  // var intX = setInterval(function () {
  //   x += 0.1;
  //   $slide.eq(current).css("opacity", x);
  //   if (x >= 1) {
  //     clearInterval(intX);
  //     x = 0.4;
  //   }
  // }, 100);
}

setInterval(function () {
  next();
}, 5000);

function prev() {
  cls();
  if (current === 0) current = $slide.length;
  current--;

  $slide.eq(current).slideDown()
  // var x = 0.4;
  // var intX = setInterval(function () {
  //   x += 0.1;
  //   $slide.eq(current).css("opacity", x);
  //   if (x >= 1) {
  //     clearInterval(intX);
  //     x = 0.4;
  //   }
  // }, 100);
}

function start() {
  cls();
  $slide.eq(current).stop().slideDown();
}
start();
