//Nel gioco si può raccogliere: la mappa, i kit per curare la vita, una chiave e le fiale per attaccare
let txt_score;
let curr_score

let txt_kit;
let curr_kit;
//KIT
let img_kit;
let kit_1;
let kit_2;
let kit_3;
let kit_4;
let kit_5;

//MAPPA
let img_map;
let map;
let img_lil_map;
let lil_map; // Variabile per l'immagine da mostrare
let map_created = false;
let image_visible = false; // Stato della visibilità dell'immagine

//CHIAVE
let key;
let img_key;

//FIALE
let img_fiale;
let fiale;

//GABBIE ANIMALI DA SALVARE
//TOPO
let img_cage_topo;
let cage_topo;

//CONIGLIO
let img_cage_coniglio;
let cage_coniglio;

//MAIALE
let img_cage_maiale;
let cage_maiale;

//SCIMMIA
let img_cage_scimmia;
let cage_scimmia;

//VARIABILI PER LE GABBIE
let cage_1;
let cage_2;
let cage_3;
let cage_4;
let cage_5;
let cage_6;

//VARIABILI PER ANIMAZIONI APERTURA GABBIE
let cage_1_opened = false;
let cage_2_opened = false;
let cage_3_opened = false;
let cage_4_opened = false;
let cage_5_opened = false;
let cage_6_opened = false;

function preload_collectibles(s) {
    //IMMAGINI PER OGGETTI DA RACCOGLIERE NELLA MAPPA
    img_kit           = PP.assets.image.load(s, "assets/images/oggetti/kit.png");
    img_map           = PP.assets.image.load(s, "assets/images/oggetti/map.png");
    img_lil_map       = PP.assets.image.load(s, "assets/images/oggetti/lil_map.png");
    img_fiale         = PP.assets.image.load(s, "assets/images/oggetti/fiale.png");
    img_key           = PP.assets.image.load(s, "assets/images/oggetti/key.png");

    //GABBIE
    img_cage_topo     = PP.assets.sprite.load_spritesheet(s, "assets/images/oggetti/gabbie/ss_topogabbia.png", 134, 105);
    img_cage_coniglio = PP.assets.sprite.load_spritesheet(s, "assets/images/oggetti/gabbie/ss_conigliogabbia.png", 134, 105);
    img_cage_maiale   = PP.assets.sprite.load_spritesheet(s, "assets/images/oggetti/gabbie/ss_maialegabbia.png", 134, 105);
    img_cage_scimmia  = PP.assets.sprite.load_spritesheet(s, "assets/images/oggetti/gabbie/ss_scimmiagabbia.png", 134, 105);
}

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

    map = PP.assets.image.add(s, img_map, 1600+280, 175, 0, 0);
    PP.physics.add(s, map, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, map, open_map);

    fiale = PP.assets.image.add(s, img_fiale, 9400, 3610, 0, 0);
    PP.physics.add(s, fiale, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, fiale, collision_collectibles);
}

//FUNZIONE PER GESTIRE LE GABBIE
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

let isCPressed = false;
//QUANDO VIENE PREMUTO IL TASTO C LA GABBIA SI APRE
function open_cage_1(s, player) {
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.C)) {
        // Cambia animazione della gabbia
        cage_1_opened = true;
        PP.assets.sprite.animation_stop(cage_1, "closed");
        PP.assets.sprite.animation_play(cage_1, "opened");
        
        if (!isCPressed) { // Incrementa lo score solo una volta per ogni pressione
            isCPressed = true; 
            console.log("Tasto C premuto");

            // Ottieni il punteggio corrente
            let curr_score = PP.game_state.get_variable("score");

            // Incrementa il punteggio solo se è inferiore a 6
            if (curr_score < 6) {
                curr_score++; // Incrementa il punteggio
                PP.game_state.set_variable("score", curr_score); // Aggiorna lo stato di gioco
                PP.shapes.text_change(txt_score, "= " + curr_score);
            } else {
                console.log("Hai aperto tutte e 6 le gabbie");
            }
        }
    
    }
        
}

function open_cage_2(s, player) {
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.C)) {
        // Cambia animazione della gabbia
        cage_2_opened = true;
        PP.assets.sprite.animation_stop(cage_2, "closed");
        PP.assets.sprite.animation_play(cage_2, "opened");
        
        if (!isCPressed) { // Incrementa lo score solo una volta per ogni pressione
            isCPressed = true; 
            console.log("Tasto C premuto");

            // Ottieni il punteggio corrente
            let curr_score = PP.game_state.get_variable("score");

            // Incrementa il punteggio solo se è inferiore a 6
            if (curr_score < 6) {
                curr_score++; // Incrementa il punteggio
                PP.game_state.set_variable("score", curr_score); // Aggiorna lo stato di gioco
                PP.shapes.text_change(txt_score, "Gabbie: " + curr_score);
            } else {
                console.log("Hai aperto tutte e 6 le gabbie");
            }
        }
    
    }
}

function open_cage_3(s, player) {
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.C)) {
        // Cambia animazione della gabbia
        cage_2_opened = true;
        PP.assets.sprite.animation_stop(cage_3, "closed");
        PP.assets.sprite.animation_play(cage_3, "opened");
        
        if (!isCPressed) { // Incrementa lo score solo una volta per ogni pressione
            isCPressed = true; 
            console.log("Tasto C premuto");

            // Ottieni il punteggio corrente
            let curr_score = PP.game_state.get_variable("score");

            // Incrementa il punteggio solo se è inferiore a 6
            if (curr_score < 6) {
                curr_score++; // Incrementa il punteggio
                PP.game_state.set_variable("score", curr_score); // Aggiorna lo stato di gioco
                PP.shapes.text_change(txt_score, "Gabbie: " + curr_score);
            } else {
                console.log("Hai aperto tutte e 6 le gabbie");
            }
        }
    
    }
}

function open_cage_4(s, player) {
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.C)) {
        // Cambia animazione della gabbia
        cage_4_opened = true;
        PP.assets.sprite.animation_stop(cage_4, "closed");
        PP.assets.sprite.animation_play(cage_4, "opened");
        
        if (!isCPressed) { // Incrementa lo score solo una volta per ogni pressione
            isCPressed = true; 
            console.log("Tasto C premuto");

            // Ottieni il punteggio corrente
            let curr_score = PP.game_state.get_variable("score");

            // Incrementa il punteggio solo se è inferiore a 6
            if (curr_score < 6) {
                curr_score++; // Incrementa il punteggio
                PP.game_state.set_variable("score", curr_score); // Aggiorna lo stato di gioco
                PP.shapes.text_change(txt_score, "Gabbie: " + curr_score);
            } else {
                console.log("Hai aperto tutte e 6 le gabbie");
            }
        }
    
    }
}

function open_cage_5(s, player) {
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.C)) {
        // Cambia animazione della gabbia
        cage_5_opened = true;
        PP.assets.sprite.animation_stop(cage_5, "closed");
        PP.assets.sprite.animation_play(cage_5, "opened");
        
        if (!isCPressed) { // Incrementa lo score solo una volta per ogni pressione
            isCPressed = true; 
            console.log("Tasto C premuto");

            // Ottieni il punteggio corrente
            let curr_score = PP.game_state.get_variable("score");

            // Incrementa il punteggio solo se è inferiore a 6
            if (curr_score < 6) {
                curr_score++; // Incrementa il punteggio
                PP.game_state.set_variable("score", curr_score); // Aggiorna lo stato di gioco
                PP.shapes.text_change(txt_score, "Gabbie: " + curr_score);
            } else {
                console.log("Hai aperto tutte e 6 le gabbie");
            }
        }
    
    }
}

function open_cage_6(s, player) {
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.C)) {
        // Cambia animazione della gabbia
        cage_6_opened = true;
        PP.assets.sprite.animation_stop(cage_6, "closed");
        PP.assets.sprite.animation_play(cage_6, "opened");
        
        if (!isCPressed) { // Incrementa lo score solo una volta per ogni pressione
            isCPressed = true; 
            console.log("Tasto C premuto");

            // Ottieni il punteggio corrente
            let curr_score = PP.game_state.get_variable("score");

            // Incrementa il punteggio solo se è inferiore a 6
            if (curr_score < 6) {
                curr_score++; // Incrementa il punteggio
                PP.game_state.set_variable("score", curr_score); // Aggiorna lo stato di gioco
                PP.shapes.text_change(txt_score, "Gabbie: " + curr_score);
            } else {
                console.log("Hai aperto tutte e 6 le gabbie");
            }
        }
    
    }
}

let isKPressed = false;
//FUNZIONI PER RACCOLTA DI OGGETTI
function collision_collectibles(s, player, kit) {
        if (PP.interactive.kb.is_key_down(s, PP.key_codes.K)) {
            PP.assets.destroy(kit); 
            if (!isKPressed) { // Incrementa lo score solo una volta per ogni pressione
                isKPressed = true; 
                console.log("Tasto K premuto");
                
            // Ottieni il punteggio corrente
            let curr_kit = PP.game_state.get_variable("kit");
    
            // Incrementa il punteggio solo se è inferiore a 6
            if (curr_kit < 5) {
                curr_kit++; // Incrementa il punteggio
                PP.game_state.set_variable("kit", curr_kit); // Aggiorna lo stato di gioco
                PP.shapes.text_change(txt_kit, "Kit= " + curr_kit);
            } else {
                console.log("Hai raccolto tutti e 5 i kit");
            }
        }

    if (PP.interactive.kb.is_key_down(s, PP.key_codes.E)) {
        PP.assets.destroy(key); 
    }

    if (PP.interactive.kb.is_key_down(s, PP.key_codes.L)) {
        PP.assets.destroy(fiale); 
    }
}
}

//ALL'INIZIO DEL GIOCO LA PROTAGONISTA TROVA LA MAPPA, CHE APRE IN QUALUNQUE MOMENTO
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
        PP.assets.destroy(lil_map); // Rimuove la mappa dalla scena
        lil_map = null; // Resetta il riferimento
        map_created = false;
    }
}

function update_collectibles(s) {
    
}

function destroy_collectibles(s) {
    

}
