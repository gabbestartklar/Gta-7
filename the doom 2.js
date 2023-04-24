// Hämta canvas-elementet
var canvas = document.getElementById("The doom2 monopol-canvas");

// Hämta kontexten för canvas
var context = canvas.getContext("2d");

// Skapa en array för alla spelare
var players = [  { name: "Spelare 1", position: 0, color: "red" },  { name: "Spelare 2", position: 0, color: "blue" }];

// Skapa en array för alla rutor på spelplanen
var squares = [  { name: "Start", color: "white", x: 700, y: 550 },  { name: "Röd", color: "red", x: 630, y: 550 },  { name: "Grön", color: "green", x: 560, y: 550 },  { name: "Blå", color: "blue", x: 490, y: 550 }]  // Fyll i resten av spelplanen med rutor];

// Rita spelplanen på canvas
function drawBoard() {
  // Rita bakgrund
  context.fillStyle = "lightgray";
  context.fillRect(0, 0, canvas.width, canvas.height);

  // Rita spelplanens rutor
  squares.forEach(function(square) {
    context.fillStyle = square.color;
    context.fillRect(square.x, square.y, 50, 50);
  });

  // Rita spelarnas pjäser
  players.forEach(function(player) {
    context.fillStyle = player.color;
    context.beginPath();
    context.arc(squares[player.position].x + 25, squares[player.position].y + 25, 10, 0, Math.PI * 2);
    context.fill();
  });
}

// Flytta spelaren framåt ett antal steg
function movePlayer(playerIndex, steps) {
  players[playerIndex].position += steps;
  if (players[playerIndex].position >= squares.length) {
    players[playerIndex].position -= squares.length;
  }
}

// Rita spelplanen för första gången
drawBoard();

// Flytta spelaren 1 steg framåt och rita om spelplanen
movePlayer(0, 1);
drawBoard();
