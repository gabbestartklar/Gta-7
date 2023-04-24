window.onload = function() {
  var canvas = document.getElementById("MAP");
  var ctx = canvas.getContext("2d");
  var img = new Image();
  img.onload = function() {
    drawHouses(ctx, img, 10, 10, 5);
  };
  img.src = "HUS.png";

  function drawHouses(ctx, img, startX, startY, numHouses) {
    for (var i = 0; i < numHouses < 10; i++) {
      var x = startX + i * 110; // 100 pixels for the house + 10 pixels spacing
      var y = startY;
      ctx.drawImage(img, x, y, 100, 100);
    }
  }
};