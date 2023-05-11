// Sätt upp Canvas och context
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Sätt upp spelplanen
const tileSize = 20;
const width = canvas.width / tileSize;
const height = canvas.height / tileSize;

// Sätt upp ormen
let snake = [{x: 2, y: 2}, {x: 1, y: 2}, {x: 0, y: 2}];  // Anpassa startpositionen och längden på ormen
let dx = 1;
let dy = 0;

// Sätt upp maten
let food = {x: Math.floor(Math.random() * width), y: Math.floor(Math.random() * height)};

let score = 0

// Rita ut spelet på Canvas
function draw() {
    // Rensa Canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Rita ut ormen
    snake.forEach(segment => {
        ctx.fillStyle = "green";
        ctx.fillRect(segment.x * tileSize, segment.y * tileSize, tileSize, tileSize);
        ctx.font = "30px Arial";
        ctx.fillText("1",10,50);
    });

    // Rita ut maten
    ctx.fillStyle = "red";
    ctx.fillRect(food.x * tileSize, food.y * tileSize, tileSize, tileSize);

    // Uppdatera ormens position
    let head = {x: snake[0].x + dx, y: snake[0].y + dy};
    snake.unshift(head);

    // Ta bort svansen om ormen inte har ätit mat
    if (head.x !== food.x || head.y !== food.y) {
        snake.pop();
    } else {
        // Placera ut ny mat
        food = {x: Math.floor(Math.random() * width), y: Math.floor(Math.random() * height)};
    }

    // Kontrollera om ormen kolliderar med väggarna eller sin egen kropp
    if (head.x < 0 || head.x >= width || head.y < 0 || head.y >= height || snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y)) {
        clearInterval(intervalId);
        alert("Game over! Try again by clicking on the restartbutton");
    }


}

// Lyssna på piltangenterna för att styra ormen
document.addEventListener("keydown", event => {
    if (event.keyCode === 37) { // vänster
        dx = -1;
        dy = 0;
    } else if (event.keyCode === 38) { // upp
        dx = 0;
        dy = -1;
    } else if (event.keyCode === 39) { // höger
        dx = 1;
        dy = 0;
    } else if (event.keyCode === 40) { // ner
        dx = 0;
        dy = 1;
    }
});

// Uppdatera spelet varje 100 millisekunder
let intervalId = setInterval(draw, 100);





