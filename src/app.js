import "bootstrap";
import "./assets/img/4geeks.ico";

let opciones = ["piedra", "papel", "tijeras", "lagarto", "spock"];
let player1 = "";
let player2 = "";
let round = "";
let player1Tag = document.getElementById("player1");
let player2Tag = document.getElementById("player2");
let roundTag = document.getElementById("round");

function game() {
  player1 = opciones[Math.floor(Math.random() * opciones.length)];
  player2 = opciones[Math.floor(Math.random() * opciones.length)];
  player1Tag.textContent = player1;
  player2Tag.textContent = player2;

  if (player1 == "piedra") {
    if (player2 == "lagarto") {
      round = player1 + " vence a " + player2 + ", Player1 gana";
    } else if (player2 == "tijeras") {
      round = player1 + " vence a " + player2 + ", Player1 gana";
    } else if (player1 == player2) {
      round = "Empate";
    } else {
      round = player2 + " vence a " + player1 + ", Player2 gana";
    }
  } else if (player1 == "papel") {
    if (player2 == "piedra") {
      round = player1 + " vence a " + player2 + ", Player1 gana";
    } else if (player2 == "spock") {
      round = player1 + " vence a " + player2 + ", Player1 gana";
    } else if (player1 == player2) {
      round = "Empate";
    } else {
      round = player2 + " vence a " + player1 + ", Player2 gana";
    }
  } else if (player1 == "tijeras") {
    if (player2 == "papel") {
      round = player1 + " vence a " + player2 + ", Player1 gana";
    } else if (player2 == "lagarto") {
      round = player1 + " vence a " + player2 + ", Player1 gana";
    } else if (player1 == player2) {
      round = "Empate";
    } else {
      round = player2 + " vence a " + player1 + ", Player2 gana";
    }
  } else if (player1 == "lagarto") {
    if (player2 == "papel") {
      round = player1 + " vence a " + player2 + ", Player1 gana";
    } else if (player2 == "spock") {
      round = player1 + " vence a " + player2 + ", Player1 gana";
    } else if (player1 == player2) {
      round = "Empate";
    } else {
      round = player2 + " vence a " + player1 + ", Player2 gana";
    }
  } else if (player1 == "spock") {
    if (player2 == "piedra") {
      round = player1 + " vence a " + player2 + ", Player1 gana";
    } else if (player2 == "tijeras") {
      round = player1 + " vence a " + player2 + ", Player1 gana";
    } else if (player1 == player2) {
      round = "Empate";
    } else {
      round = player2 + " vence a " + player1 + ", Player2 gana";
    }
  }

  return round;
}

roundTag.textContent = game();

console.log("Player1 ", player1, "y Player2 ", player2);
console.log(round);
