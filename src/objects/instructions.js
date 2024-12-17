let img_up
let img_arrows

let arrows
let up

let istruzioni_arrows = false;

let img_istruzioni_kit1;
let img_istruzioni_kit2;
let img_istruzioni_kit3;
let img_istruzioni_map;

let istruzioni_kit;
let istruzioni_map;

let istruzioni_leftright    = false;
let istruzioni_kit_created1 = false;
let istruzioni_kit_created2 = false;
let istruzioni_kit_created3 = false;
let istruzioni_map_created  = false;

let img_istruzioni_cage;
let istruzioni_cage;
let istruzioni_cage_created = false; 

function preload_instruction(s) {
    img_arrows      = PP.assets.image.load(s, "assets/images/istruzioni/left_right.png");
    img_up          = PP.assets.image.load(s, "assets/images/istruzioni/up.png");

    //kit 
    img_istruzioni_kit1 = PP.assets.image.load(s, "assets/images/istruzioni/k.png");
    img_istruzioni_kit2 = PP.assets.image.load(s, "assets/images/istruzioni/k.png");
    img_istruzioni_kit3 = PP.assets.image.load(s, "assets/images/istruzioni/k.png");

    //mappa
    img_istruzioni_map = PP.assets.image.load(s, "assets/images/istruzioni/k.png");

    //cage
    img_istruzioni_cage = PP.assets.image.load(s, "assets/images/istruzioni/k.png");
}

function create_instruction(s) {
    arrows = PP.assets.image.add(s, img_arrows, 350, 100, 0, 0);
    up     = PP.assets.image.add(s, img_up, 890, 30, 0, 0);
    
}

function update_instruction(s) {

    // FRECCE
    //LEFT e RIGHT
    if (player.geometry.x > 100 && player.geometry.x < 300 &&
        player.geometry.y > 90 && player.geometry.y < 140) {
        
        if (istruzioni_arrows == false) {
            istruzioni_interaction1 = PP.assets.image.add(s, img_arrows, 400, 300, 0.5, 1); 
        }
        istruzioni_arrows = true;

    } else if ((player.geometry.x < 100 || player.geometry.x > 300 &&
                player.geometry.y > 90 && player.geometry.y < 140) && istruzioni_arrows == true){
        PP.assets.destroy(istruzioni_interaction1);
        istruzioni_arrows = false;
    }


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

    // MAPPA
    if (player.geometry.x > 1830 && player.geometry.x < 2000 &&
        player.geometry.y > 130 && player.geometry.y < 250) {
        
        if (istruzioni_map_created == false) {
            istruzioni_interaction_map = PP.assets.image.add(s, img_istruzioni_map, 1900, 130, 0.5, 1); 
        }
        istruzioni_map_created = true;

    } else if ((player.geometry.x < 1830 || player.geometry.x > 2000 &&
                player.geometry.y > 130 && player.geometry.y < 250) && istruzioni_map_created == true){
        PP.assets.destroy(istruzioni_interaction_map);
        istruzioni_map_created = false;
    }


     // CAGE 1
     if (player.geometry.x > 2700 && player.geometry.x < 2900 &&
        player.geometry.y > 800 && player.geometry.y < 900) {
        
        if (istruzioni_cage_created == false) {
            istruzioni_interaction_cage = PP.assets.image.add(s, img_istruzioni_cage, 2820, 650, 0.5, 1); 
        }
        istruzioni_cage_created = true;

    } else if ((player.geometry.x < 2700 || player.geometry.x > 2900 &&
                player.geometry.y > 800 && player.geometry.y < 900) && istruzioni_cage_created == true){
        PP.assets.destroy(istruzioni_interaction_cage);
        istruzioni_cage_created = false;
    }

} 

function destroy_instruction(s) {
}
