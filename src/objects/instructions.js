let arrowLeft
let arrowRight

let img_up
let img_left_right
let img_left

let img_istruzioni_kit1;
let img_istruzioni_kit2;
let img_istruzioni_kit3;

let img_istruzioni_map;

let istruzioni_kit_created1 = false;
let istruzioni_kit_created2 = false;
let istruzioni_kit_created3 = false;
let istruzioni_map_created = false;

function preload_instruction(s) {
    img_left_right = PP.assets.image.load(s, "assets/images/leftright.png");
    //img_up         = PP.assets.image.load(s, "assets/images/up.png");

    //kit 
    img_istruzioni_kit1 = PP.assets.image.load(s, "assets/images/istruzioni_kit.png");
    img_istruzioni_kit2 = PP.assets.image.load(s, "assets/images/istruzioni_kit.png");
    img_istruzioni_kit3 = PP.assets.image.load(s, "assets/images/istruzioni_kit.png");
    img_istruzioni_map = PP.assets.image.load(s, "assets/images/instruction_map.png");
}

function create_instruction(s) {
   /* if (!player) {
        console.error("Player non trovato. Assicurati che il player sia stato creato.");
        return;
    }

    // Posiziono le frecce sopra il personaggio
    let playerX = player.geometry.x; 
    let playerY = player.geometry.y;

    // Posiziono le immagini
    arrowLeft  = PP.assets.image.add(s, img_left_right, playerX - 50, playerY - 100, 1, 1);
    arrowRight = PP.assets.image.add(s, img_left_right, playerX + 50, playerY - 100, 1, 1); */
} 

function update_instruction(s, player) {
    /*if (!player) return;

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
    */
   




    // KIT
    // ISTRUZIONE: kit 1
    if (player.geometry.x > 1300 && player.geometry.x < 1500 &&
        player.geometry.y > 340 && player.geometry.y < 400) {
        
        if (istruzioni_kit_created1 == false) {
            istruzioni_interaction1 = PP.assets.image.add(s, img_istruzioni_kit1, 1370, 200, 0.5, 1); 
        }
        istruzioni_kit_created1 = true;

    } else if ((player.geometry.x < 1300 || player.geometry.x > 1500 &&
                player.geometry.y > 340 && player.geometry.y < 400) && istruzioni_kit_created1 == true){
        PP.assets.destroy(istruzioni_interaction1);
        istruzioni_kit_created1 = false;
    }

    // ISTRUZIONE: kit 2  
    if (player.geometry.x > 2555 && player.geometry.x < 2685 &&
        player.geometry.y > 1300 && player.geometry.y < 1700) {
        
        if (istruzioni_kit_created2 == false) {
            istruzioni_interaction2 = PP.assets.image.add(s, img_istruzioni_kit2, 2610, 1450, 0.5, 1); 
        }
        istruzioni_kit_created2 = true;

    } else if ((player.geometry.x < 2555 || player.geometry.x > 2685 &&
                player.geometry.y > 1400 && player.geometry.y < 1700) && istruzioni_kit_created2 == true){
        PP.assets.destroy(istruzioni_interaction2);
        istruzioni_kit_created2 = false;
    }

    // ISTRUZIONE: kit 3
    if (player.geometry.x > 8000 && player.geometry.x < 8200 &&
        player.geometry.y > 1400 && player.geometry.y < 1500) {
        
        if (istruzioni_kit_created3 == false) {
            istruzioni_interaction3 = PP.assets.image.add(s, img_istruzioni_kit3, 8095, 1250, 0.5, 1); 
        }
        istruzioni_kit_created3 = true;

    } else if ((player.geometry.x < 8000 || player.geometry.x > 8200 &&
                player.geometry.y > 1400 && player.geometry.y < 1500) && istruzioni_kit_created3 == true){
        PP.assets.destroy(istruzioni_interaction3);
        istruzioni_kit_created3 = false;
    }


    // ISTRUZIONE: mappa 
    if (player.geometry.x > 1550 && player.geometry.x < 1650 &&
        player.geometry.y > 340 && player.geometry.y < 400) {
        
        if (istruzioni_map_created == false) {
            istruzioni_interaction_map = PP.assets.image.add(s, img_istruzioni_map, 1650, 200, 0.5, 1); 
        }
        istruzioni_map_created = true;

    } else if ((player.geometry.x < 1550 || player.geometry.x > 1600 &&
                player.geometry.y > 340 && player.geometry.y < 400) && istruzioni_map_created == true){
        PP.assets.destroy(istruzioni_interaction_map);
        istruzioni_map_created = false;
        }
    } 
    
    /*

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
} */
