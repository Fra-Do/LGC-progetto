let img_kit;
let kit_1;
let kit_2;
let kit_3;
let kit_4;
let kit_5;

let img_map;
let img_lil_map;
let map_created = false;
let lil_map; // Variabile per l'immagine da mostrare
let image_visible = false; // Stato della visibilità dell'immagine
let map;

let key;
let img_key;

let txt_score;

let img_cage_topo;
let cage_topo;

let img_cage_coniglio;
let cage_coniglio;

let img_cage_maiale;
let cage_maiale;

let img_cage_scimmia;
let cage_scimmia;


let cage_1;
let cage_2;
let cage_3;
let cage_4;
let cage_5;
let cage_6;

let cage_1_opened = false;
let cage_2_opened = false;
let cage_3_opened = false;
let cage_4_opened = false;
let cage_5_opened = false;
let cage_6_opened = false;

function preload_collectibles(s) {
    img_kit           = PP.assets.image.load(s, "assets/images/oggetti/kit.png");
    img_map           = PP.assets.image.load(s, "assets/images/oggetti/map.png");
    img_lil_map       = PP.assets.image.load(s, "assets/images/oggetti/lil_map.png");
    img_cage_topo     = PP.assets.sprite.load_spritesheet(s, "assets/images/oggetti/gabbie/ss_topogabbia.png", 134, 105);
    img_cage_coniglio = PP.assets.sprite.load_spritesheet(s, "assets/images/oggetti/gabbie/ss_conigliogabbia.png", 134, 105);
    img_cage_maiale   = PP.assets.sprite.load_spritesheet(s, "assets/images/oggetti/gabbie/ss_maialegabbia.png", 134, 105);
    img_cage_scimmia   = PP.assets.sprite.load_spritesheet(s, "assets/images/oggetti/gabbie/ss_scimmiagabbia.png", 134, 105);
    img_key           = PP.assets.image.load(s, "assets/images/oggetti/key.png");
}

function create_cage(s, player) {
    // Creazione gabbia topo
    cage_1 = PP.assets.sprite.add(s, img_cage_topo, 2817, 777, 0.5, 1);
    PP.physics.add(s, cage_1, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, cage_1, function () {
        open_cage_1(s, player);
    });

    // Creazione gabbia coniglio
    cage_2 = PP.assets.sprite.add(s, img_cage_coniglio, 5632, 1330, 0.5, 1);
    PP.physics.add(s, cage_2, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, cage_2, function () {
        open_cage_2(s, player);
    });

    // Creazione gabbia maiale
    cage_3 = PP.assets.sprite.add(s, img_cage_maiale, 4503, -35, 0.5, 1);
    PP.physics.add(s, cage_3, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, cage_3, function () {
        open_cage_3(s, player);
    });

    // Creazione gabbia scimmia
    cage_4 = PP.assets.sprite.add(s, img_cage_scimmia, 5652, 147, 0.5, 1);
    PP.physics.add(s, cage_4, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, cage_4, function () {
        open_cage_4(s, player);
    });

    // Creazione gabbia topo2
    cage_5 = PP.assets.sprite.add(s, img_cage_topo, 8295, 320, 0.5, 1);
    PP.physics.add(s, cage_5, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, cage_5, function () {
        open_cage_5(s, player);
    });

    // Creazione gabbia coniglio2
    cage_6 = PP.assets.sprite.add(s, img_cage_coniglio, 6060, 1988, 0.5, 1);
    PP.physics.add(s, cage_6, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, cage_6, function () {
        open_cage_6(s, player);
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
    //topo
    PP.assets.sprite.animation_add(cage_1, "closed", 0, 0, 10, 0); 
    PP.assets.sprite.animation_add(cage_1, "opened", 1, 1, 10, 0);
    PP.assets.sprite.animation_play(cage_1, "closed");

    //coniglio
    PP.assets.sprite.animation_add(cage_2, "closed", 0, 0, 10, 0); 
    PP.assets.sprite.animation_add(cage_2, "opened", 1, 1, 10, 0);
    PP.assets.sprite.animation_play(cage_2, "closed");

    //maiale
    PP.assets.sprite.animation_add(cage_3, "closed", 0, 0, 10, 0); 
    PP.assets.sprite.animation_add(cage_3, "opened", 1, 1, 10, 0);
    PP.assets.sprite.animation_play(cage_3, "closed");

    //scimmia
    PP.assets.sprite.animation_add(cage_4, "closed", 0, 0, 10, 0); 
    PP.assets.sprite.animation_add(cage_4, "opened", 1, 1, 10, 0);
    PP.assets.sprite.animation_play(cage_4, "closed");

    //topo2
    PP.assets.sprite.animation_add(cage_5, "closed", 0, 0, 10, 0); 
    PP.assets.sprite.animation_add(cage_5, "opened", 1, 1, 10, 0);
    PP.assets.sprite.animation_play(cage_5, "closed");

    //coniglio2
    PP.assets.sprite.animation_add(cage_6, "closed", 0, 0, 10, 0); 
    PP.assets.sprite.animation_add(cage_6, "opened", 1, 1, 10, 0);
    PP.assets.sprite.animation_play(cage_6, "closed");
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
        PP.assets.sprite.animation_stop(cage_2, "closed");
        PP.assets.sprite.animation_play(cage_2, "opened");
    }
}

function open_cage_3(s, player) {
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.C)) {
        console.log("Tasto C premuto");
        // Cambia animazione della gabbia
        cage_3_opened = true;
        PP.assets.sprite.animation_stop(cage_3, "closed");
        PP.assets.sprite.animation_play(cage_3, "opened");
    }
}

function open_cage_4(s, player) {
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.C)) {
        console.log("Tasto C premuto");
        // Cambia animazione della gabbia
        cage_4_opened = true;
        PP.assets.sprite.animation_stop(cage_4, "closed");
        PP.assets.sprite.animation_play(cage_4, "opened");
    }
}

function open_cage_5(s, player) {
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.C)) {
        console.log("Tasto C premuto");
        // Cambia animazione della gabbia
        cage_5_opened = true;
        PP.assets.sprite.animation_stop(cage_5, "closed");
        PP.assets.sprite.animation_play(cage_5, "opened");
    }
}

function open_cage_6(s, player) {
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.C)) {
        console.log("Tasto C premuto");
        // Cambia animazione della gabbia
        cage_6_opened = true;
        PP.assets.sprite.animation_stop(cage_6, "closed");
        PP.assets.sprite.animation_play(cage_6, "opened");
    }
}

function collision_collectibles(s, player, kit) {
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.K)) {
        PP.assets.destroy(kit); 
    }
}

function open_map(s) {
    // Controlla se il tasto M viene premuto e la mappa non è ancora visibile
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.M) && !map_created) {
        console.log("Mappa aperta");
        // Aggiungi l'immagine della mappa al centro dello schermo
        lil_map = PP.assets.image.add(s, img_lil_map, 160, 160, 0, 0); 
        lil_map.tile_geometry.scroll_factor_x = 0;
        lil_map.tile_geometry.scroll_factor_y = 0;
        map_created = true;

        //codice per creare un layer sopra tutti 
    let nome_layer = PP.layers.create(s);
    PP.layers.add_to_layer(nome_layer, lil_map);
    PP.layers.set_z_index(nome_layer, 2);
    } 
    // Controlla se il tasto X viene premuto e la mappa è visibile
    else if (PP.interactive.kb.is_key_down(s, PP.key_codes.X) && map_created) {
        console.log("Mappa chiusa");
        PP.assets.destroy(map); // Distruggi immagine mappa, questo codice eseguito qui perché se no in altri modi non funziona
        PP.assets.destroy(lil_map); // Rimuove la mappa dalla scena
        lil_map = null; // Resetta il riferimento
        map_created = false;
    }
}

function create_collectibles(s) {
    key = PP.assets.image.add(s, img_key, 9450, 2000, 0, 0);
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


    // liv 2 primo kit
    let kit_4 = PP.assets.image.add(s, img_kit, 6120, 3025, 0, 0);
    PP.physics.add(s, kit_4, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, kit_4, collision_collectibles);

    // liv 2 second kit
    let kit_5 = PP.assets.image.add(s, img_kit, 8360, 4435, 0, 0);
    PP.physics.add(s, kit_5, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, kit_5, collision_collectibles);
    
    
    /*let kit_down = PP.assets.image.add(s, img_kit, 1130, 240, 0, 0);
    PP.physics.add(s, kit_down, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, kit_down, collision_collectibles);*/   

    map = PP.assets.image.add(s, img_map, 1600+280, 175, 0, 0);
    PP.physics.add(s, map, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, map, open_map);
}


function upload_collectibles(s) {
    
}

function destroy_collectibles(s) {
    

}



