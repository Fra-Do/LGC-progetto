let img_up;
let img_arrows;
let img_istruzioni_A;
let img_istruzioni_B;
let img_istruzioni_C;

let arrows
let up

//let istruzioni_A;
//let istruzioni_B;
//let istruzioni_C;

let istruzioni_arrows = false;

let img_istruzioni_kit1;
let img_istruzioni_kit2;
let img_istruzioni_kit3;
let img_istruzioni_kit4;
let img_istruzioni_kit5;
let img_istruzioni_map;

let istruzioni_kit;
let istruzioni_map;

let istruzioni_leftright    = false;
let istruzioni_kit_created1 = false;
let istruzioni_kit_created2 = false;
let istruzioni_kit_created3 = false;
let istruzioni_kit_created4 = false;
let istruzioni_kit_created5 = false;
let istruzioni_map_created  = false;

let img_istruzioni_cage;
let istruzioni_cage;
let istruzioni_cage_created = false; 

function preload_instruction(s) {
    //img_istruzioni_A    = PP.assets.image.load(s, "assets/images/istruzioni/A.png");
    //img_istruzioni_B    = PP.assets.image.load(s, "assets/images/istruzioni/B.png"); 
    //img_istruzioni_C    = PP.assets.image.load(s, "assets/images/istruzioni/C.png"); 

    img_arrows      = PP.assets.image.load(s, "assets/images/istruzioni/left_right.png");
    img_up          = PP.assets.image.load(s, "assets/images/istruzioni/up.png");

    //kit 
    img_istruzioni_kit1 = PP.assets.image.load(s, "assets/images/istruzioni/k.png");
    img_istruzioni_kit2 = PP.assets.image.load(s, "assets/images/istruzioni/k.png");
    img_istruzioni_kit3 = PP.assets.image.load(s, "assets/images/istruzioni/k.png");
    img_istruzioni_kit4 = PP.assets.image.load(s, "assets/images/istruzioni/k.png");
    img_istruzioni_kit5 = PP.assets.image.load(s, "assets/images/istruzioni/k.png");


    //mappa
    img_istruzioni_map = PP.assets.image.load(s, "assets/images/istruzioni/k.png");

    //cage
    img_istruzioni_cage = PP.assets.image.load(s, "assets/images/istruzioni/k.png");
}

function create_instruction(s) {
    //istruzioni_A = PP.assets.image.add(s, img_istruzioni_A, 600, 50, 0, 0); 
    //istruzioni_B = PP.assets.image.add(s, img_istruzioni_B, 5000, 450, 0, 0); 
    //istruzioni_C = PP.assets.image.add(s, img_istruzioni_C, 7700, 1300, 0, 0); 

    arrows       = PP.assets.image.add(s, img_arrows, 350, 150, 0, 0);
    up           = PP.assets.image.add(s, img_up, 890, 50, 0, 0); 
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

    // ISTRUZIONE: kit 4   6120, 3025,
    if (player.geometry.x > 6040 && player.geometry.x < 6260 &&
        player.geometry.y > 2900 && player.geometry.y < 3200) {
        
        if (istruzioni_kit_created4 == false) {
            istruzioni_interaction4 = PP.assets.image.add(s, img_istruzioni_kit4, 6160, 3000, 0.5, 1); 
        }
        istruzioni_kit_created4 = true;

    } else if ((player.geometry.x < 6040 || player.geometry.x > 6260 &&
                player.geometry.y > 2900 && player.geometry.y < 3200) && istruzioni_kit_created4 == true){
        PP.assets.destroy(istruzioni_interaction4);
        istruzioni_kit_created4 = false;
    }
 
         // ISTRUZIONE: kit 5    8360, 4435
    if (player.geometry.x > 8280 && player.geometry.x < 8500 &&
        player.geometry.y > 4435-150 && player.geometry.y < 4435+150) {
        
        if (istruzioni_kit_created5 == false) {
            istruzioni_interaction5 = PP.assets.image.add(s, img_istruzioni_kit5, 8400, 4410, 0.5, 1); 
        }
        istruzioni_kit_created5 = true;

    } else if ((player.geometry.x < 8280 || player.geometry.x > 8500 &&
                player.geometry.y > 4435-150 && player.geometry.y < 4435+150) && istruzioni_kit_created5 == true){
        PP.assets.destroy(istruzioni_interaction5);
        istruzioni_kit_created5 = false;
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
