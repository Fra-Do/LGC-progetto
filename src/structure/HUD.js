let nome_layer;

let txt_score;

let img_counter_cage
let counter_cage;

let ss_counter_health;

let counter_health;

let player_health;

let health;

let img_health;

let img_ss_map;
let ss_map;

let img_ss_key;
let ss_key;

let img_ss_fiale;
let ss_fiale;

let ss_map_opened   = false;
let ss_key_opened   = false;
let ss_fiale_opened = false;

let isCPressed = false; // Flag per tracciare lo stato del tasto C




function preload_HUD(s) {
    img_counter_cage  = PP.assets.image.load             (s, "assets/images/HUD/countergabbie.png");
    ss_counter_health = PP.assets.sprite.load_spritesheet(s, "assets/images/HUD/spriteskit.png", 70, 51);
    img_ss_key        = PP.assets.sprite.load_spritesheet(s, "assets/images/HUD/ss_key.png", 65, 52);
    img_ss_fiale      = PP.assets.sprite.load_spritesheet(s, "assets/images/HUD/ss_fiale.png", 65, 52);
    img_ss_map        = PP.assets.sprite.load_spritesheet(s, "assets/images/HUD/ss_mappa.png", 65, 52);
}

function configure_ss_map_animations (s) {
    // Aggiungi animazioni alla sprite
    PP.assets.sprite.animation_add(ss_map, "closed", 0, 0, 1, 0); // Frame iniziale
    PP.assets.sprite.animation_add(ss_map, "opened", 1, 1, 1, 0); // Frame successivo

    // Avvia animazione iniziale
    PP.assets.sprite.animation_play(ss_map, "closed");
}

function configure_ss_key_animations (s) {
    // Aggiungi animazioni alla sprite
    PP.assets.sprite.animation_add(ss_key, "closed", 0, 0, 1, 0); // Frame iniziale
    PP.assets.sprite.animation_add(ss_key, "opened", 1, 1, 1, 0); // Frame successivo

    // Avvia animazione iniziale
    PP.assets.sprite.animation_play(ss_key, "closed");
}

function configure_ss_fiale_animations (s) {
    // Aggiungi animazioni alla sprite
    PP.assets.sprite.animation_add(ss_fiale, "closed", 0, 0, 1, 0); // Frame iniziale
    PP.assets.sprite.animation_add(ss_fiale, "opened", 1, 1, 1, 0); // Frame successivo

    // Avvia animazione iniziale
    PP.assets.sprite.animation_play(ss_fiale, "closed");
}

function create_HUD(s) { 
    counter_cage = PP.assets.image.add(s, img_counter_cage, 1050, 30, 0, 0);
    counter_cage.tile_geometry.scroll_factor_x = 0;
    counter_cage.tile_geometry.scroll_factor_y = 0;


    ss_map    = PP.assets.sprite.add(s, img_ss_map, 500, 50, 0, 0);
    configure_ss_map_animations(s); // Configura le animazioni qui
    
    nome_layer = PP.layers.create(s);
    PP.layers.add_to_layer(nome_layer, ss_map);
    PP.layers.set_z_index(nome_layer, 3);

    ss_map.tile_geometry.scroll_factor_x = 0;
    ss_map.tile_geometry.scroll_factor_y = 0;

    ss_key   = PP.assets.sprite.add(s, img_ss_key, 580, 50, 0, 0); 
    configure_ss_key_animations(s);

    nome_layer = PP.layers.create(s);
    PP.layers.add_to_layer(nome_layer, ss_key);
    PP.layers.set_z_index(nome_layer, 3);

    ss_key.tile_geometry.scroll_factor_x = 0;
    ss_key.tile_geometry.scroll_factor_y = 0;
    
    ss_fiale = PP.assets.sprite.add(s, img_ss_fiale, 660, 50, 0, 0);
    configure_ss_fiale_animations(s);

    nome_layer = PP.layers.create(s);
    PP.layers.add_to_layer(nome_layer, ss_fiale);
    PP.layers.set_z_index(nome_layer, 3);

    ss_fiale.tile_geometry.scroll_factor_x = 0;
    ss_fiale.tile_geometry.scroll_factor_y = 0;

    txt_score = PP.shapes.text_styled_add(s, 1083, 52, "Gabbie:0", 30, "Helvetica", "normal", "0xFFFFFF", null, 0, 0);

    nome_layer = PP.layers.create(s);
    PP.layers.add_to_layer(nome_layer, ss_fiale);
    PP.layers.set_z_index(nome_layer, 4);

    txt_score.tile_geometry.scroll_factor_x = 0;
    txt_score.tile_geometry.scroll_factor_y = 0;

    PP.game_state.set_variable("score", 0);

    

  // Variabili HUD
  health = 3;

  // Creazione counter cuori
  counter_health = PP.assets.sprite.add(s, ss_counter_health, 100, -70, 0, 0);
  

    PP.assets.sprite.animation_add(counter_health, "health: 5", 5, 5, 1, 0); 
    PP.assets.sprite.animation_add(counter_health, "health: 4", 4, 4, 1, 0);
    PP.assets.sprite.animation_add(counter_health, "health: 3", 3, 3, 1, 0); 
    PP.assets.sprite.animation_add(counter_health, "health: 2", 2, 2, 1, 0);
    PP.assets.sprite.animation_add(counter_health, "health: 1", 1, 1, 1, 0);
    PP.assets.sprite.animation_add(counter_health, "health: 0", 0, 0, 1, 0);
    PP.assets.sprite.animation_play(counter_health, "health: 0");
}



function score_update(s) {
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.C)){
        if (!isCPressed) { // Procedi solo se il tasto era rilasciato
            isCPressed = true; // Imposta il flag a true
            console.log("Tasto C premuto");

        //ottengo il punteggio corrente
        let curr_score = PP.game_state.get_variable("score");

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
        /*let prev_score = PP.game_state.get_variable("score");
        PP.game_state.set_variable("score", prev_score+1);

        PP.shapes.text_change(txt_score, "Score: " + (prev_score+1));*/

    } 
    
} 



// Funzione update per aggiornare l'HUD quando la salute cambia
function update_HUD(s, player) {
    // Controlla pressione del tasto M
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.M)) {
        console.log("Tasto M premuto");
        // Cambia animazione della gabbia
        ss_key_opened = true;
        PP.assets.sprite.animation_stop(ss_map, "closed");
        PP.assets.sprite.animation_play(ss_map, "opened");
    }

    // Controlla pressione del tasto E
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.E)) {
        console.log("Tasto M premuto");
        // Cambia animazione della gabbia
        ss_key_opened = true;
        PP.assets.sprite.animation_stop(ss_key, "closed");
        PP.assets.sprite.animation_play(ss_key, "opened");
    }

     // Controlla pressione del tasto E
     if (PP.interactive.kb.is_key_down(s, PP.key_codes.L)) {
        console.log("Tasto M premuto");
        // Cambia animazione della gabbia
        ss_fiale_opened = true;
        PP.assets.sprite.animation_stop(ss_fiale, "closed");
        PP.assets.sprite.animation_play(ss_fiale, "opened");
    }

   // Gestione ss_counter_health
   /*if (health == 5) {
    PP.assets.sprite.animation_stop(counter_health, "health: 0");
    PP.assets.sprite.animation_play(counter_health, "health: 5");    
}

if (health == 4) {
    PP.assets.sprite.animation_stop(counter_health, "health: 5");
    PP.assets.sprite.animation_play(counter_health, "health: 4");    
}

if (health == 3) {
    PP.assets.sprite.animation_stop(counter_health, "health: 4");
    PP.assets.sprite.animation_play(counter_health, "health: 3");    
}

if (health == 2) {
    PP.assets.sprite.animation_stop(counter_health, "health: 3");
    PP.assets.sprite.animation_play(counter_health, "health: 2");
}

if (health == 1) {
    PP.assets.sprite.animation_stop(counter_health, "health: 2");
    PP.assets.sprite.animation_play(counter_health, "health: 1");
}

if (health == 0) {
    PP.assets.sprite.animation_stop(counter_health, "health: 1");
    PP.assets.sprite.animation_play(counter_health, "health: 0");
}*/
}

// Funzione per distruggere l'HUD
function destroy_HUD(s) {
  
}
