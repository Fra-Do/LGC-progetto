let img_kit;
let kit_1;
let kit_2;
let kit_3;

let img_map;
let map;
let map_created = false;
let pergamena

let key;
let img_key;

let img_cage;
let cage;

function preload_collectibles(s) {
    img_kit       = PP.assets.image.load(s, "assets/images/kit.png");
    img_map       = PP.assets.image.load(s, "assets/images/pergamena.png");
    img_lil_map   = PP.assets.image.load(s, "assets/images/lil_map.png");
    
    img_key       = PP.assets.image.load(s, "assets/images/chiave.png", 50, 50);
    img_cage      = PP.assets.sprite.load_spritesheet(s, "assets/objects/ss_cage.png", 268, 105);

}


function configure_cage_animations(s) {
    
    PP.assets.sprite.animation_add(cage, "closed", 0, 0, 10, 0); 
    PP.assets.sprite.animation_add(cage, "opened", 1, 1, 10, 0);
    PP.assets.sprite.animation_play(cage, "closed");
    
}

function collision_collectibles(s, player, kit) {
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.K)) {
        PP.assets.destroy(kit); ;
    }
}



function open_map (s, player, map) {
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.K)) {
        if (map_created == false) { 
            lil_map = PP.assets.image.add(s, img_lil_map, 1060, 50, 0, 0);
        }
        map_created = true;
    } else if (PP.interactive.kb.is_key_down(s, PP.key_codes.K) && map_created == true) {
        map_created = false; 
        PP.assets.destroy(lil_map);
        
    }
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

    let map = PP.assets.image.add(s, img_map, 1880, 200, 0, 0);
    PP.physics.add(s, map, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, map, open_map);
}


function upload_collectibles(s) {
    
}

function destroy_collectibles(s) {
    

}



