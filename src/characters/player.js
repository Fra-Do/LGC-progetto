let img_player;
let player;

let player_speed = 200;
let step_lenght  = 4;
let height       = 5;

let curr_anim = "stop";

function configure_player_animations(s, player) {
    PP.assets.sprite.animation_add_list(player, "run", [1, 2, 3, 4, 5, 6], 10, -1);  // 6 frame per l'animazione "run"
    PP.assets.sprite.animation_add(player, "stop", 0, 0, 10, 0);  // frame 0 per l'animazione "stop"
    PP.assets.sprite.animation_play(player, "stop");  // avvia l'animazione "stop" di default
}

function preload_player(s) {
    // 6 frame disposti in una sola riga
    img_player = PP.assets.sprite.load_spritesheet(s, "assets/images/spriteragazza.png", 94, 137, 6, 1);
}

function create_player(s) {
    player = PP.assets.sprite.add(s, img_player, 400, 300, 0.5, 1);
    PP.physics.add(s, player, PP.physics.type.DYNAMIC);  
}

function update_player(s) {
    let next_anim = curr_anim;
    
    if(PP.interactive.kb.is_key_down(s, PP.key_codes.RIGHT)) {
        PP.physics.set_velocity_x(player, player_speed);
        next_anim = "run";  // quando si preme freccia destra, l'animazione è "run"
    } 
    else if (PP.interactive.kb.is_key_down(s, PP.key_codes.LEFT)) {
        PP.physics.set_velocity_x(player, -player_speed);
        next_anim = "run";  // quando si preme freccia sinistra, l'animazione è "run"
    } else {
        PP.physics.set_velocity_x(player, 0);  // se nessun tasto è premuto, il player si ferma
        next_anim = "stop";
    }

    // Aggiorniamo la direzione dell'animazione (esempio per il salto)
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.UP)) {
        PP.physics.set_velocity_y(player, -player_speed);
    }

    // Se l'animazione è cambiata, la aggiorniamo
    if (next_anim != curr_anim) {
        PP.assets.sprite.animation_play(player, next_anim);
        curr_anim = next_anim;
    }

    // Flip l'immagine quando si cambia direzione
    if (PP.physics.get_velocity_x(player) < 0) {
        player.geometry.flip_x = true;
    } 
    else if (PP.physics.get_velocity_x(player) > 0) {
        player.geometry.flip_x = false;
    }
}

function destroy_player(s) {
    
}