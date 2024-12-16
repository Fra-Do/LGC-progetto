let arrowLeft
let arrowRight

let img_up
let img_left_right
let img_left

function preload_instruction(s) {
    img_left_right = PP.assets.image.load(s, "assets/images/leftright.png");
    //img_up         = PP.assets.image.load(s, "assets/images/up.png");
}

function create_instruction(s) {
    if (!player) {
        console.error("Player non trovato. Assicurati che il player sia stato creato.");
        return;
    }

    // Posiziono le frecce sopra il personaggio
    let playerX = player.geometry.x; 
    let playerY = player.geometry.y;

    // Posiziono le immagini
    arrowLeft  = PP.assets.image.add(s, img_left_right, playerX - 50, playerY - 100, 1, 1);
    arrowRight = PP.assets.image.add(s, img_left_right, playerX + 50, playerY - 100, 1, 1);
}

function update_instruction(s) {
    if (!player) return;

    // Aggiorna la posizione delle frecce rispetto al personaggio
    if (arrowLeft) arrowLeft.geometry.x = player.geometry.x - 50;
    if (arrowRight) arrowRight.geometry.x = player.geometry.x + 50;

    if (arrowLeft) arrowLeft.geometry.y = player.geometry.y - 100;
    if (arrowRight) arrowRight.geometry.y = player.geometry.y - 100;

    // Rimuovo le frecce se vengono premuti i tasti sinistra o destra
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.LEFT) && arrowLeft) {
        PP.assets.image.remove(s, arrowLeft); // Rimuove l'immagine
        arrowLeft = null; // Libera la variabile
    }
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.RIGHT) && arrowRight) {
        PP.assets.image.remove(s, arrowRight); // Rimuove l'immagine
        arrowRight = null; // Libera la variabile
    }
}

function destroy_instruction(s) {
    // Rimuove entrambe le frecce
    if (arrowLeft) {
        PP.assets.image.remove(s, arrowLeft);
        arrowLeft = null;
    }
    if (arrowRight) {
        PP.assets.image.remove(s, arrowRight);
        arrowRight = null;
    }
}
