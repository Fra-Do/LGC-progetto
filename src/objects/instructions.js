let img_up;
let img_arrows;

let arrows
let up

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
let img_istruzioni_cage2;
let img_istruzioni_cage3;
let img_istruzioni_cage4;
let img_istruzioni_cage5;
let img_istruzioni_cage6;
let istruzioni_cage_created = false; 
let istruzioni_cage_created2 = false; 
let istruzioni_cage_created3 = false;
let istruzioni_cage_created4 = false;
let istruzioni_cage_created5 = false;
let istruzioni_cage_created6 = false;

function preload_instruction(s) {
    img_arrows      = PP.assets.image.load(s, "assets/images/istruzioni/left_right.png");
    img_up          = PP.assets.image.load(s, "assets/images/istruzioni/up.png");

    //kit 
    img_istruzioni_kit1 = PP.assets.image.load(s, "assets/images/istruzioni/k.png");
    img_istruzioni_kit2 = PP.assets.image.load(s, "assets/images/istruzioni/k.png");
    img_istruzioni_kit3 = PP.assets.image.load(s, "assets/images/istruzioni/k.png");
    img_istruzioni_kit4 = PP.assets.image.load(s, "assets/images/istruzioni/k.png");
    img_istruzioni_kit5 = PP.assets.image.load(s, "assets/images/istruzioni/k.png");

    //mappa
    img_istruzioni_map = PP.assets.image.load(s, "assets/images/istruzioni/M.png");

    //cage
    img_istruzioni_cage = PP.assets.image.load(s, "assets/images/istruzioni/C.png");
    img_istruzioni_cage2 = PP.assets.image.load(s, "assets/images/istruzioni/C.png");
    img_istruzioni_cage3 = PP.assets.image.load(s, "assets/images/istruzioni/C.png");
    img_istruzioni_cage4 = PP.assets.image.load(s, "assets/images/istruzioni/C.png");
    img_istruzioni_cage5 = PP.assets.image.load(s, "assets/images/istruzioni/C.png");
    img_istruzioni_cage6 = PP.assets.image.load(s, "assets/images/istruzioni/C.png");
}

function create_instruction(s) {
    arrows       = PP.assets.image.add(s, img_arrows, 350, 150, 0, 0);
    up           = PP.assets.image.add(s, img_up, 890, 50, 0, 0); 
}

function update_instruction(s) {

    //FRECCE
    //LEFT e RIGHT
    /*if (player.geometry.x > 100 && player.geometry.x < 300 &&
        player.geometry.y > 90 && player.geometry.y < 140) {
        
        if (istruzioni_arrows == false) {
            istruzioni_interaction1 = PP.assets.image.add(s, img_arrows, 400, 300, 0.5, 1); 
        }
        istruzioni_arrows = true;

    } else if ((player.geometry.x < 100 || player.geometry.x > 300 &&
                player.geometry.y > 90 && player.geometry.y < 140) && istruzioni_arrows == true){
        PP.assets.destroy(istruzioni_interaction1);
        istruzioni_arrows = false;
    }*/


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


     // CAGE 1 (topo)
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

    //CAGE 2 (coniglio)
    if (player.geometry.x > 5550 && player.geometry.x < 5750 &&
        player.geometry.y > 1400 && player.geometry.y < 1500) {
        
        if (istruzioni_cage_created2 == false) {
            istruzioni_interaction_cage2 = PP.assets.image.add(s, img_istruzioni_cage2, 5630, 1200, 0.5, 1); 
        }
        istruzioni_cage_created2 = true;

    } else if ((player.geometry.x < 5550 || player.geometry.x > 5750 &&
                player.geometry.y > 1400 && player.geometry.y < 1500) && istruzioni_cage_created2 == true){
        PP.assets.destroy(istruzioni_interaction_cage2);
        istruzioni_cage_created2 = false;
    }

    //CAGE 3 (maiale) 4503, -35
    if (player.geometry.x > 4403 && player.geometry.x < 4603 &&
        player.geometry.y > -50 && player.geometry.y < 100) {
        
        if (istruzioni_cage_created3 == false) {
            istruzioni_interaction_cage3 = PP.assets.image.add(s, img_istruzioni_cage3, 4503, -160, 0.5, 1); 
        }
        istruzioni_cage_created3 = true;

    } else if ((player.geometry.x < 4403 || player.geometry.x > 4603 &&
                player.geometry.y > -50 && player.geometry.y < 100) && istruzioni_cage_created3 == true){
        PP.assets.destroy(istruzioni_interaction_cage3);
        istruzioni_cage_created3 = false;
    }

    //CAGE 4 (scimmia) 5652, 147
    if (player.geometry.x > 5552 && player.geometry.x < 5752 &&
        player.geometry.y > 50 && player.geometry.y < 300) {
        
        if (istruzioni_cage_created4 == false) {
            istruzioni_interaction_cage4 = PP.assets.image.add(s, img_istruzioni_cage4, 5652, 10, 0.5, 1); 
        }
        istruzioni_cage_created4 = true;

    } else if ((player.geometry.x < 5552 || player.geometry.x > 5752 &&
                player.geometry.y > 50 && player.geometry.y < 300) && istruzioni_cage_created4 == true){
        PP.assets.destroy(istruzioni_interaction_cage4);
        istruzioni_cage_created4 = false;
    }

    //CAGE 5 (topo2) 8295, 320
    if (player.geometry.x > 8195 && player.geometry.x < 8395 &&
        player.geometry.y > 150 && player.geometry.y < 450) {
        
        if (istruzioni_cage_created5 == false) {
            istruzioni_interaction_cage5 = PP.assets.image.add(s, img_istruzioni_cage5, 8295, 190, 0.5, 1); 
        }
        istruzioni_cage_created5 = true;

    } else if ((player.geometry.x < 8195 || player.geometry.x > 8395 &&
                player.geometry.y > 150 && player.geometry.y < 450) && istruzioni_cage_created5 == true){
        PP.assets.destroy(istruzioni_interaction_cage5);
        istruzioni_cage_created5 = false;
    }

    //CAGE 6 (coniglio2)  6060, 1988
    if (player.geometry.x > 5960 && player.geometry.x < 6160 &&
        player.geometry.y > 1980 && player.geometry.y < 2200) {
        
        if (istruzioni_cage_created6 == false) {
            istruzioni_interaction_cage6 = PP.assets.image.add(s, img_istruzioni_cage6, 6058, 1850, 0.5, 1); 
        }
        istruzioni_cage_created6 = true;

    } else if ((player.geometry.x < 5960 || player.geometry.x > 6160 &&
                player.geometry.y > 1980 && player.geometry.y < 2200) && istruzioni_cage_created6 == true){
        PP.assets.destroy(istruzioni_interaction_cage6);
        istruzioni_cage_created6 = false;
    }



} 

function destroy_instruction(s) {
}
