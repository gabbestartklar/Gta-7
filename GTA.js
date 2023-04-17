
window.onload = function() {
    var canvas = document.getElementById("MAP");
    var ctx = canvas.getContext("2d");
    console.log(ctx)
    var img = document.getElementById("HUS");
    console.log(img)
    ctx.drawImage(img, 10, 10, 100, 100);

  };
