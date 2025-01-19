//VARIABILE PER PORRE L'HUD NEL PRIMO LIVELLO
let nome_layer;

let health;

//VARIABILI PER CONTEGGIO GABBIE
let img_sfondo;
let sfondo;

//CONTEGGIO GABBIE
let img_counter_cage
let counter_cage;

//CONTEGGIO KIT
let img_counter_kit;
let counter_kit;

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

function goto_finale1(s) {
    PP.scenes.start("finale1");
}

function goto_finale2(s) {
    PP.scenes.start("finale2");
}

function preload_HUD(s) {
    img_sfondo        = PP.assets.image.load             (s, "assets/images/HUD/sfondohud.png");
    img_counter_cage  = PP.assets.image.load             (s, "assets/images/HUD/gabbiahud.png");
    img_counter_kit   = PP.assets.image.load             (s, "assets/images/HUD/kithud.png");
    img_ss_key        = PP.assets.sprite.load_spritesheet(s, "assets/images/HUD/ss_key.png", 65, 52);
    img_ss_fiale      = PP.assets.sprite.load_spritesheet(s, "assets/images/HUD/ss_fiale.png", 65, 52);
    img_ss_map        = PP.assets.sprite.load_spritesheet(s, "assets/images/HUD/ss_mappa.png", 65, 52);
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
    // SFONDO HUD
    sfondo       = PP.assets.image.add(s, img_sfondo, 57, 17, 0, 0);
    sfondo.tile_geometry.scroll_factor_x = 0;
    sfondo.tile_geometry.scroll_factor_y = 0;

    //CONTEGGIO GABBIE 
    counter_cage = PP.assets.image.add(s, img_counter_cage, 230, 35, 0, 0);
    counter_cage.tile_geometry.scroll_factor_x = 0;
    counter_cage.tile_geometry.scroll_factor_y = 0;

    //CONTEGGIO KIT
    counter_kit = PP.assets.image.add(s, img_counter_kit, 70, 30, 0, 0);
    counter_kit.tile_geometry.scroll_factor_x = 0;
    counter_kit.tile_geometry.scroll_factor_y = 0;

    //MAPPA
    ss_map = PP.assets.sprite.add(s, img_ss_map, 60, 120, 0, 0);
    configure_ss_map_animations(s); 
    
    nome_layer = PP.layers.create(s);
    PP.layers.add_to_layer(nome_layer, ss_map);
    PP.layers.set_z_index(nome_layer, 3);

    ss_map.tile_geometry.scroll_factor_x = 0;
    ss_map.tile_geometry.scroll_factor_y = 0;

    //CHIAVE
    ss_key = PP.assets.sprite.add(s, img_ss_key, 131, 120, 0, 0); 
    configure_ss_key_animations(s);

    nome_layer = PP.layers.create(s);
    PP.layers.add_to_layer(nome_layer, ss_key);
    PP.layers.set_z_index(nome_layer, 3);

    ss_key.tile_geometry.scroll_factor_x = 0;
    ss_key.tile_geometry.scroll_factor_y = 0;
    
    //FIALE
    ss_fiale = PP.assets.sprite.add(s, img_ss_fiale, 203, 120, 0, 0);
    configure_ss_fiale_animations(s);

    nome_layer = PP.layers.create(s);
    PP.layers.add_to_layer(nome_layer, ss_fiale);
    PP.layers.set_z_index(nome_layer, 3);

    ss_fiale.tile_geometry.scroll_factor_x = 0;
    ss_fiale.tile_geometry.scroll_factor_y = 0;

    //CREAZIONE DEL CONTEGGIO GABBIE
    txt_score  = PP.shapes.text_styled_add(s, 315, 48, "= 0", 30, "Helvetica", "normal", "0xFFFFFF", null, 0, 0);

    nome_layer = PP.layers.create(s);
    PP.layers.add_to_layer(nome_layer, txt_score);
    PP.layers.set_z_index(nome_layer, 4);

    txt_score.tile_geometry.scroll_factor_x = 0;
    txt_score.tile_geometry.scroll_factor_y = 0;

    PP.game_state.set_variable("score", 0);

    //CREAZIONE DEL CONTEGGIO KIT
    txt_kit    = PP.shapes.text_styled_add(s, 150, 48, "= 1", 30, "Helvetica", "normal", "0xFFFFFF", null, 0, 0);

    nome_layer = PP.layers.create(s);
    PP.layers.add_to_layer(nome_layer, txt_kit);
    PP.layers.set_z_index(nome_layer, 4);

    txt_kit.tile_geometry.scroll_factor_x = 0;
    txt_kit.tile_geometry.scroll_factor_y = 0;

    PP.game_state.set_variable("kit", 1);

    //GESTIONE USCITA PER ARRIVARE AI FINALI
    //Aggiungiamo il rettangolo per la collisione
    let wall = PP.shapes.rectangle_add(s, 9880, 5100, 100, 300, "0x000000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC);
    
    // Aggiungiamo overlap dinamico in base al punteggio
    PP.physics.add_overlap_f(s, player, wall, function () { //funzione anonima di callback perché viene usata solo in questo punto del codice
        
        //Se le gabbie aperte sono minori di 6 si ha il finale 2, se sono 6 le gabbie aperte si ha il finale 1
        let currentScore = PP.game_state.get_variable("score");
        if (currentScore < 6) {
            goto_finale2(s);
        } else {
            goto_finale1(s);
        }
    });
}

//SPIEGAZIONE SISTEMA DELLE GABBIE: IL TASTO C VIENE USATO PER APRIRE LE VARIE GABBIE CON GLI ANIMALI INTRAPPOLATI. IN TUTTO SONO 6.
//OGNI VOLTA CHE IL TASTO C VIENE PREMUTO, IL CONTEGGIO DELLE GABBIE AUMENTA DI 1 FINO A UN MASSIMO DI 6

// Flag per monitorare la pressione del tasto
//let isCPressed = false;

/*function score_update(s) {
    // Controlla se il tasto C è premuto
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.C)) {
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
    } else {
        // Resetta il flag quando il tasto è rilasciato. Questo per evitare che lo score aumenti tutto in una volta sola
        if (isCPressed) {
            console.log("Tasto C rilasciato");
        }
        isCPressed = false;
    }
} */

let enable_damage = true;
 
function reenable_damage (s) {
    enable_damage = true;
}

 //funziona ma va al game over non a 0 kit ma se viene colpita di nuovo quando ci sono 0 kit
 function reduce_kit(s, player, animal) { 
    if (enable_damage) {
        let curr_kit = PP.game_state.get_variable("kit");

        if (curr_kit > 0) {
            curr_kit--; // Decrementa il conteggio della vita
            PP.game_state.set_variable("kit", curr_kit); // Aggiorna lo stato di gioco
            PP.shapes.text_change(txt_kit, "= " + curr_kit);
            enable_damage = false;

            PP.timers.add_timer(s, 2000, reenable_damage, false);

            // Se il conteggio è sceso a 0, vai a gameover
            if (curr_kit === 0) {
                goto_gameover(s);
            }

        } else if (curr_kit === 0) {
            // Fall-back nel caso in cui il conteggio sia già 0. Altrimenti dovrei far colpire 
            //il personaggio un'altra volta per andare al gameover
            goto_gameover(s);
        }
    } 
}

/*function reduce_kit (s, player, animal) {
    let curr_kit = PP.game_state.get_variable("kit");
    if (curr_kit > 0 && enable_damage) {
        curr_kit--; // Incrementa il punteggio
        PP.game_state.set_variable("kit", curr_kit); // Aggiorna lo stato di gioco
        PP.shapes.text_change(txt_kit, "= " + curr_kit);
        PP.timers.add_timer(s, 800, reenable_damage, false);
        enable_damage = false;

        /*PP.assets.sprite.animation_stop(player, "run");
        PP.assets.sprite.animation_play(player, "hurt");

    } 
}*/

function get_kit (s, player, kit_gen) {
    if (struzioni_kit_created1) {
        score_kit_update(s)
    }
}

// Funzione update per aggiornare l'HUD quando la salute cambia, e per attivare le animazioni della raccolta degli oggetti
function update_HUD(s, player) {
    //MAPPA
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.M)) {
        console.log("Tasto M premuto");
        // Cambia animazione della gabbia
        
        // Controlla se l'istruzione per la mappa è stata creata
        if (istruzioni_map_created) {
            // Cambia animazione della mappa
            if (!ss_map_opened) { 
                ss_map_opened = true;
                PP.assets.sprite.animation_stop(ss_map, "closed");
                PP.assets.sprite.animation_play(ss_map, "opened");
                PP.assets.destroy(map); 

                console.log("Mappa raccolta!");
            }
        } else {
            console.log("Non puoi raccogliere la mappa senza aver visualizzato l'istruzione.");
        }
    }

    //CHIAVE
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.E)) {
        console.log("Tasto E premuto");
        if (istruzioni_key_created) {
            // Cambia animazione della mappa
            if (!ss_key_opened) { 
                ss_key_opened = true;
                PP.assets.sprite.animation_stop(ss_key, "closed");
                PP.assets.sprite.animation_play(ss_key, "opened");
                PP.assets.destroy(key); 
                console.log("Chiave raccolta!");
            }
        } else {
            console.log("Non puoi raccogliere la chiave senza aver visualizzato l'istruzione.");
        }
    }

    //FIALE
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.L)) {
        console.log("Tasto L premuto");
        if (istruzioni_fiale_created) {
            // Cambia animazione della mappa
            if (!ss_fiale_opened) { 
                ss_fiale_opened = true;
                PP.assets.sprite.animation_stop(ss_fiale, "closed");
                PP.assets.sprite.animation_play(ss_fiale, "opened");
                PP.assets.destroy(fiale); 

                console.log("fiale raccolte!");
            }
        } else {
            console.log("Non puoi raccogliere le fiale senza aver visualizzato l'istruzione.");
        }
    }
    
    //chiamo qui la funzione altrimenti non funziona correttamente
    //score_kit_update(s)
    //score_update(s)
    
    
}

// Funzione per distruggere l'HUD
function destroy_HUD(s) {
  
}
