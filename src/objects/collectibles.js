let img_kit;
let kit_1;
let kit_2;
let kit_3;

let img_pergamena;
let pergamena;

let key;
let img_key;


function preload_collectibles(s) {
    img_kit       = PP.assets.image.load(s, "assets/images/kit.png");
    img_pergamena = PP.assets.image.load(s, "assets/images/pergamena.png", 35, 30);
    img_key       = PP.assets.image.load(s, "assets/images/chiave.png", 35, 30);
    

}

function collision_collectibles(s, player, kit) {
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.K)) {
        PP.assets.destroy(kit); ;
    }

    //PP.assets.destroy(kit); 
}

//function get_kit (s, player) {
    //if(PP.interactive.kb.is_key_down(s, PP.key_codes.E)) {
        //console.log ("Hai ottenuto kit");
        //PP.assets.destroy(obj2);
    //}
    
//}

//function get_pergamena (s, player) {
   // if(PP.interactive.kb.is_key_down(s, PP.key_codes.E)) {
        //console.log ("Hai ottenuto pergamena");
        //PP.assets.destroy(obj2);
    //}
    
//}

//function get_key (s, player) {
    //if(PP.interactive.kb.is_key_down(s, PP.key_codes.E)) {
        //console.log ("Hai ottenuto chiave");
        //PP.assets.destroy(obj2);
    //}
    
//}

function create_collectibles(s) {
    //kit_2     = PP.assets.image.add(s, img_kit, 5575, 1430, 0, 0);
    //kit_3     = PP.assets.image.add(s, img_kit, 8080, 1430, 0, 0);
    pergamena = PP.assets.image.add(s, img_pergamena, 1600, 330, 0, 0);
    key       = PP.assets.image.add(s, img_key, 9450, 2100, 0, 0);

    // primo kit
    let kit_1 = PP.assets.image.add(s, img_kit, 1330, 240, 0, 0);
    PP.physics.add(s, kit_1, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, kit_1, collision_collectibles);

    // secondo kit
    let kit_2 = PP.assets.image.add(s, img_kit, 2575, 1500, 0, 0);
    PP.physics.add(s, kit_2, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, kit_2, collision_collectibles);

    // terzo kit
    let kit_3 = PP.assets.image.add(s, img_kit, 8055, 1330, 0, 0);
    PP.physics.add(s, kit_3, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, kit_3, collision_collectibles);
    
    
    /*let kit_down = PP.assets.image.add(s, img_kit, 1130, 240, 0, 0);
    PP.physics.add(s, kit_down, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, kit_down, collision_collectibles);*/
}


function upload_collectibles(s) {
    
}

function destroy_collectibles(s) {
    

}



