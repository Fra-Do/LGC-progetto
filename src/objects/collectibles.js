let img_kit;
let kit_1;
let kit_2;
let kit_3;

let img_map;
let img_lil_map;
let map;
let map_created = false;
let pergamena

let key;
let img_key;

let txt_score;


let cage;
let img_cage;
let cage_1;
let cage_2;
let cage_3;
let cage_4;
let cage_5;
let cage_1_opened = false;
let cage_2_opened = false;
let cage_3_opened = false;
let cage_4_opened = false;
let cage_5_opened = false;

let lil_map; // Variabile per l'immagine da mostrare
let image_visible = false; // Stato della visibilità dell'immagine



function preload_collectibles(s) {
    img_kit       = PP.assets.image.load(s, "assets/images/oggetti/kit.png");
    img_map       = PP.assets.image.load(s, "assets/images/oggetti/map.png");
    img_lil_map   = PP.assets.image.load(s, "assets/images/oggetti/lil_map.png");
    img_cage      = PP.assets.sprite.load_spritesheet(s, "assets/images/oggetti/ss_cage.png", 134, 105);
    img_key       = PP.assets.image.load(s, "assets/images/oggetti/key.png");
}

/*function create_image_toggle(s) {
    // Aggiungi l'immagine e nascondila inizialmente
    lil_map = PP.assets.image.add(s, img_lil_map, 800, 450, 0.5, 0.5); // Posizionala al centro
    PP.assets.image.set_visible(lil_map, false); // Nascondi la mappa inizialmente
}*/

/*function toggle_map_with_keys(s, player, map) {
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.M) && !map_visible) {
        // Mostra la mappa
        lil_map = PP.assets.image.add(s, img_lil_map, 800, 450, 0.5, 0.5);
        map_visible = true;
    } else if (PP.interactive.kb.is_key_down(s, PP.key_codes.X) && map_visible) {
        // Nasconde la mappa
        PP.assets.destroy(lil_map);
        lil_map = null;
        map_visible = false;
    }
}*/



function create_cage(s, player) {
    // Creazione cage 
    cage_1 = PP.assets.sprite.add(s, img_cage, 2817, 777, 0.5, 1);
    PP.physics.add(s, cage_1, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, cage_1, function () {
        open_cage_1(s, player);
    });

    cage_2 = PP.assets.sprite.add(s, img_cage, 4000, 50, 0.5, 1);
    PP.physics.add(s, cage_2, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, cage_2, function () {
        open_cage_2(s, player);
    });

    cage_3 = PP.assets.sprite.add(s, img_cage, 2817, 777, 0.5, 1);
    PP.physics.add(s, cage_3, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, cage_3, function () {
        open_cage_3(s, player);
    });

    cage_4 = PP.assets.sprite.add(s, img_cage, 2817, 777, 0.5, 1);
    PP.physics.add(s, cage_4, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, cage_4, function () {
        open_cage_4(s, player);
    });

    cage_5 = PP.assets.sprite.add(s, img_cage, 2817, 777, 0.5, 1);
    PP.physics.add(s, cage_5, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, cage_5, function () {
        open_cage_5(s, player);
    });

    
}



/*function collision_cage(s, player, cage) {
    // In caso di collisione procedo come segue:

    // Ottieni lo score attuale
    let prev_score = PP.game_state.get_variable("score");
    // Aggiorna lo score
    PP.game_state.set_variable("score", prev_score + 1);

     // Aggiorna il testo visibile
     txt_score.text = "Test Score Update"; // Test temporaneo per verificare l'aggiornamento


    // Aggiorna il testo visibile
    let curr_score = PP.game_state.get_variable("score");
    PP.shapes.text_change(txt_score, "Score: " + curr_score);

    // Debug per verificare lo stato
    console.log("Nuovo score: " + PP.game_state.get_variable("score"));
    console.log("Testo aggiornato: " + txt_score.text);

}*/

function configure_cage_animations(s) {
    PP.assets.sprite.animation_add(cage_1, "closed", 0, 0, 10, 0); 
    PP.assets.sprite.animation_add(cage_1, "opened", 1, 1, 10, 0);
    PP.assets.sprite.animation_play(cage_1, "closed");
}

function open_cage_1(s, player) {
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.C)) {
        console.log("Tasto C premuto");
        // Cambia animazione della gabbia
        cage_1_opened = true;
        PP.assets.sprite.animation_stop(cage_1, "closed");
        PP.assets.sprite.animation_play(cage_1, "opened");
    }
}

function open_cage_2(s, player) {
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.C)) {
        console.log("Tasto C premuto");
        // Cambia animazione della gabbia
        cage_2_opened = true;
        PP.assets.sprite.animation_stop(cage_1, "closed");
        PP.assets.sprite.animation_play(cage_1, "opened");
    }
}

function open_cage_3(s, player) {
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.C)) {
        console.log("Tasto C premuto");
        // Cambia animazione della gabbia
        cage_3_opened = true;
        PP.assets.sprite.animation_stop(cage_1, "closed");
        PP.assets.sprite.animation_play(cage_1, "opened");
    }
}

function open_cage_4(s, player) {
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.C)) {
        console.log("Tasto C premuto");
        // Cambia animazione della gabbia
        cage_4_opened = true;
        PP.assets.sprite.animation_stop(cage_1, "closed");
        PP.assets.sprite.animation_play(cage_1, "opened");
    }
}

function open_cage_5(s, player) {
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.C)) {
        console.log("Tasto C premuto");
        // Cambia animazione della gabbia
        cage_5_opened = true;
        PP.assets.sprite.animation_stop(cage_1, "closed");
        PP.assets.sprite.animation_play(cage_1, "opened");
    }
}


function collision_collectibles(s, player, kit) {
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.K)) {
        PP.assets.destroy(kit); 
    }
}

function open_map(s) {
    // Controlla se il tasto K viene premuto e la mappa non è ancora visibile
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.M) && !map_created) {
        console.log("Mappa aperta");
        // Aggiungi l'immagine della mappa al centro dello schermo
        lil_map = PP.assets.image.add(s, img_lil_map, 160, 270, 0, 0); // Modifica posizione se necessario
        lil_map.tile_geometry.scroll_factor_x = 0;
        lil_map.tile_geometry.scroll_factor_y = 0;
        map_created = true;
    } 
    // Controlla se il tasto X viene premuto e la mappa è visibile
    else if (PP.interactive.kb.is_key_down(s, PP.key_codes.X) && map_created) {
        console.log("Mappa chiusa");
        PP.assets.destroy(lil_map); // Rimuove la mappa dalla scena
        lil_map = null; // Resetta il riferimento
        map_created = false;
    }

    
}

/*function open_map (s, player, map) {
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.K) && map_created == false) {
        console.log ("mappa");  
        lil_map = PP.assets.image.add(s, img_lil_map, 1350, -50, 0, 0);
        
        map_created = true;
    } else if (PP.interactive.kb.is_key_down(s, PP.key_codes.X) && map_created == true) {
        console.log ("creata")    
        map_created = false; 
        PP.assets.destroy(lil_map);
        
    }
}*/

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

    
    
    key       = PP.assets.image.add(s, img_key, 9450, 2000, 0, 0);
    PP.physics.add(s, key, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, key, collision_collectibles);

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

    let map = PP.assets.image.add(s, img_map, 1600+280, 175, 0, 0);
    PP.physics.add(s, map, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, map, open_map);
    


    
}


function upload_collectibles(s) {
    
}

function destroy_collectibles(s) {
    

}



