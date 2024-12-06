let hearts = [];
let playerHealth = 3; // Salute iniziale
const maxHealth = 3;  // Numero massimo di cuori
let img_cuore; 

function preload_HUD() {
  img_cuore = PP.assets.image.load('cuore', 'assets/images/cuore.png');
}

function create_HUD() {
  // Creazione dei cuori all'inizio del gioco
  for (let i = 0; i < maxHealth; i++) {
    const heart = this.add.image(50 + i * 60, 30, img_cuore); 
    hearts.push(heart); // Aggiungi il cuore all'array
  }

  // Evento prendi danno
  this.input.on('pointerdown', takeDamage, this); // Ad esempio, il danno avviene quando clicchi
}

// Funzione update per aggiornare l'HUD quando la salute cambia
function update_HUD() {
  if (playerHealth < hearts.length) {
    hearts[playerHealth].setAlpha(0); // Rende invisibile il cuore
  }
}

// Funzione che simula il danno al giocatore
function takeDamage() {
  if (playerHealth > 0) {
    playerHealth--; // Riduci la salute
    update(); // Aggiorna l'HUD
  }
}

// Funzione per distruggere l'HUD
function destroy_HUD() {
  hearts.forEach(heart => {
    heart.destroy(); // Rimuovi tutti i cuori
  });
  hearts = []; // Resetta l'array dei cuori
}
