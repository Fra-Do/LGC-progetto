let img_istruzioni_kit1;
let img_istruzioni_kit2;
let img_istruzioni_kit3;

let istruzioni_kit;

let istruzioni_kit_created1 = false;
let istruzioni_kit_created2 = false;
let istruzioni_kit_created3 = false;


function preload_istruzioni(s) {
    img_istruzioni_kit1 = PP.assets.image.load(s, "assets/images/istruzioni_kit.png");
    img_istruzioni_kit2 = PP.assets.image.load(s, "assets/images/istruzioni_kit.png");
    img_istruzioni_kit3 = PP.assets.image.load(s, "assets/images/istruzioni_kit.png");
}

function create_istruzioni(s, player) {
    
}

function update_istruzioni(s, player) {
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
}