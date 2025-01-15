//VARIABILE PER PORRE L'HUD DAVANTI A TUTTO
let nome_layer;

//VARIABILI PER CONTEGGIO GABBIE
let txt_score;
let curr_score

//SFONDO PER CONTEGGIO GABBIE
let img_counter_cage
let counter_cage;

let ss_counter_health;
let counter_health;

//MAPPA
let img_ss_map;
let ss_map;

//CHIAVE
let img_ss_key;
let ss_key;

//FIALE
let img_ss_fiale;
let ss_fiale;

//GESTIONE ANIMAZIONI OGGETTI
let ss_map_opened   = false;
let ss_key_opened   = false;
let ss_fiale_opened = false;

let isCPressed      = false; // Flag per tracciare lo stato del tasto C

function goto_finale1(s) {
    PP.scenes.start("finale1");
}

function goto_finale2(s) {
    PP.scenes.start("finale2");
}

function preload_HUD(s) {
    img_counter_cage  = PP.assets.image.load             (s, "assets/images/HUD/countergabbie.png");
    ss_counter_health = PP.assets.sprite.load_spritesheet(s, "assets/images/HUD/ss_kit.png", 210, 51);
    img_ss_key        = PP.assets.sprite.load_spritesheet(s, "assets/images/HUD/ss_key.png", 65, 52);
    img_ss_fiale      = PP.assets.sprite.load_spritesheet(s, "assets/images/HUD/ss_fiale.png", 65, 52);
    img_ss_map        = PP.assets.sprite.load_spritesheet(s, "assets/images/HUD/ss_mappa.png", 65, 52);
}

function configure_ss_counter_health_animations (s) {
    PP.assets.sprite.animation_add(counter_health, "health: 2", 2, 2, 1, 0);
    PP.assets.sprite.animation_add(counter_health, "health: 1", 1, 1, 1, 0);
    PP.assets.sprite.animation_add(counter_health, "health: 0", 0, 0, 1, 0);
    
    PP.assets.sprite.animation_play(counter_health, "health: 0");
    console.log(PP.assets.sprite.animation_play(counter_health, "health: 2"));

}

function configure_ss_map_animations (s) {
    //ANIMAZIONI MAPPA
    PP.assets.sprite.animation_add(ss_map, "closed", 0, 0, 1, 0); 
    PP.assets.sprite.animation_add(ss_map, "opened", 1, 1, 1, 0); 

    PP.assets.sprite.animation_play(ss_map, "closed");
}

function configure_ss_key_animations (s) {
    // ANIMAZIONI CHIAVE
    PP.assets.sprite.animation_add(ss_key, "closed", 0, 0, 1, 0); 
    PP.assets.sprite.animation_add(ss_key, "opened", 1, 1, 1, 0); 

    PP.assets.sprite.animation_play(ss_key, "closed");
}

function configure_ss_fiale_animations (s) {
    // ANIMAZIONI FIALE
    PP.assets.sprite.animation_add(ss_fiale, "closed", 0, 0, 1, 0); 
    PP.assets.sprite.animation_add(ss_fiale, "opened", 1, 1, 1, 0); 

    PP.assets.sprite.animation_play(ss_fiale, "closed");
}

function create_HUD(s) {
    // Variabili HUD
    //health = 2;

    // Creazione counter kit
    counter_health = PP.assets.sprite.add(s, ss_counter_health, 210, 50, 0, 0);
    console.log(ss_counter_health); // Controlla che la sprite sia caricata

    configure_ss_counter_health_animations(s);

    nome_layer = PP.layers.create(s);
    PP.layers.add_to_layer(nome_layer, counter_health);
    PP.layers.set_z_index(nome_layer, 3);

    counter_health.tile_geometry.scroll_factor_x = 0;
    counter_health.tile_geometry.scroll_factor_y = 0;

    //CONTEGGIO GABBIE 
    counter_cage = PP.assets.image.add(s, img_counter_cage, 1050, 30, 0, 0);
    counter_cage.tile_geometry.scroll_factor_x = 0;
    counter_cage.tile_geometry.scroll_factor_y = 0;

    //MAPPA
    ss_map     = PP.assets.sprite.add(s, img_ss_map, 500, 50, 0, 0);
    configure_ss_map_animations(s); 
    
    nome_layer = PP.layers.create(s);
    PP.layers.add_to_layer(nome_layer, ss_map);
    PP.layers.set_z_index(nome_layer, 3);

    ss_map.tile_geometry.scroll_factor_x = 0;
    ss_map.tile_geometry.scroll_factor_y = 0;

    //CHIAVE
    ss_key     = PP.assets.sprite.add(s, img_ss_key, 580, 50, 0, 0); 
    configure_ss_key_animations(s);

    nome_layer = PP.layers.create(s);
    PP.layers.add_to_layer(nome_layer, ss_key);
    PP.layers.set_z_index(nome_layer, 3);

    ss_key.tile_geometry.scroll_factor_x = 0;
    ss_key.tile_geometry.scroll_factor_y = 0;
    
    //FIALE
    ss_fiale   = PP.assets.sprite.add(s, img_ss_fiale, 660, 50, 0, 0);
    configure_ss_fiale_animations(s);

    nome_layer = PP.layers.create(s);
    PP.layers.add_to_layer(nome_layer, ss_fiale);
    PP.layers.set_z_index(nome_layer, 3);

    ss_fiale.tile_geometry.scroll_factor_x = 0;
    ss_fiale.tile_geometry.scroll_factor_y = 0;

    //CREAZIONE DEL CONTEGGIO
    txt_score  = PP.shapes.text_styled_add(s, 1083, 52, "Gabbie: 0", 30, "Helvetica", "normal", "0xFFFFFF", null, 0, 0);

    nome_layer = PP.layers.create(s);
    PP.layers.add_to_layer(nome_layer, ss_fiale);
    PP.layers.set_z_index(nome_layer, 4);

    txt_score.tile_geometry.scroll_factor_x = 0;
    txt_score.tile_geometry.scroll_factor_y = 0;

    PP.game_state.set_variable("score", 0);

    //Uscita per finali
    let wall = PP.shapes.rectangle_add(s, 9880, 5100, 100, 300, "0x000000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC);
    
    if (txt_score == 6){
        PP.physics.add_overlap_f(s, player, wall, goto_finale1);
    } else {
        PP.physics.add_overlap_f(s, player, wall, goto_finale2);
    }
}

//SPIEGAZIONE SISTEMA DELLE GABBIE: IL TASTO C VIENE USATO PER APRIRE LE VARIE GABBIE CON GLI ANIMALI INTRAPPOLATI. IN TUTTO SONO 6.
//OGNI VOLTA CHE IL TASTO C VIENE PREMUTO, IL CONTEGGIO DELLE GABBIE AUMENTA DI 1 FINO A UN MASSIMO DI 6
function score_update(s) {
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.C)){
        if (!isCPressed) { //Lo score aumenta quando il tasto viene rilasciato
            isCPressed = true; 
            console.log("Tasto C premuto");

        //ottengo il punteggio corrente
        curr_score = PP.game_state.get_variable("score");

        // Incrementa il punteggio solo se è inferiore a 6
        if (curr_score < 6) {
            curr_score++; // Incrementa il punteggio
            PP.game_state.set_variable("score", curr_score); // Aggiorna lo stato di gioco

        PP.shapes.text_change(txt_score, "Gabbie: " + curr_score);
        } else {
            console.log ("Hai aperto tutte e 6 le gabbie")
        }
    } else if (isCPressed){
        // Resetta il flag quando il tasto è rilasciato
        isCPressed = false;
    }
    }   
} 

// Funzione update per aggiornare l'HUD quando la salute cambia, e per attivare le animazioni della raccolta degli oggetti
function update_HUD(s, player) {
    //MAPPA
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.M)) {
        console.log("Tasto M premuto");
        // Cambia animazione della gabbia
        ss_key_opened = true;
        PP.assets.sprite.animation_stop(ss_map, "closed");
        PP.assets.sprite.animation_play(ss_map, "opened");
    }

    //CHIAVE
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.E)) {
        console.log("Tasto M premuto");
        // Cambia animazione della gabbia
        ss_key_opened = true;
        PP.assets.sprite.animation_stop(ss_key, "closed");
        PP.assets.sprite.animation_play(ss_key, "opened");
    }

    //FIALE
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.L)) {
        console.log("Tasto M premuto");
        // Cambia animazione della gabbia
        ss_fiale_opened = true;
        PP.assets.sprite.animation_stop(ss_fiale, "closed");
        PP.assets.sprite.animation_play(ss_fiale, "opened");
    }
}

// Funzione per distruggere l'HUD
function destroy_HUD(s) {
  
}
