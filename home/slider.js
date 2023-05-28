$(document).ready(function() {
  function slideLeft() {
    var container = $(".container");
    var firstImg = container.find(".slide-img:first");
    var imgWidth = firstImg.width();

    container.animate({ marginLeft: -imgWidth }, 'slow', function() {
      container.append(firstImg);
      container.css("margin-left", 0);
    });
  }

  setInterval(slideLeft, 5000);
});