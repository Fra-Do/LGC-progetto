let img_player;
let player;

let player_speed      = 400;
let jump_init_speed   = 500;
let step_lenght       = 10;
let height            = 8;

let curr_anim         = "stop";

let verifica_platform = true;
let verifica_floor    = true;

let is_on_platform;
let is_on_ground;

function configure_player_animations(s, player) {
    PP.assets.sprite.animation_add_list(player, "run", [1, 2, 3, 4], 10, -1);  
    PP.assets.sprite.animation_add     (player, "stop", 0, 0, 10, 0);  
    PP.assets.sprite.animation_add_list(player, "jump_up", [5, 6, 7, 8, 9], 10, 0);
    PP.assets.sprite.animation_add_list(player, "jump_down", [10, 11, 12, 13], 10, 0);
    PP.assets.sprite.animation_add_list(player, "weapon", [14, 15, 16, 17, 18, 19, 20], 10, -1);
    
    PP.assets.sprite.animation_play    (player, "stop");  // avvia l'animazione "stop" di default
}

function preload_player(s) {
    img_player = PP.assets.sprite.load_spritesheet(s, "assets/images/personaggi/ss_protagonista.png", 94, 136, 1, 12);
}

/*function collision_platform(s, player, platform) {
    player.is_on_platform = true;
    player.platform_velocity_y = PP.physics.get_velocity_y(platform); // Salva la velocità della piattaforma
    if( platform.geometry.y = player.geometry.y) {
        verifica_platform = false;
        console.log(verifica_platform); 
        next_anim = "stop";
    }
}*/

function create_player(s) {
    //player = PP.assets.sprite.add(s, img_player, 400, 350, 0.5, 1);  //posizioni iniziali giuste 
    player = PP.assets.sprite.add(s, img_player, 7000, 500, 0.5, 1);  

    PP.physics.add(s, player, PP.physics.type.DYNAMIC);
    PP.physics.set_allow_gravity(player, true);

    //codice per creare un layer sopra tutti 
    let nome_layer = PP.layers.create(s);
    PP.layers.add_to_layer(nome_layer, player);
    PP.layers.set_z_index(nome_layer, 1);
}

function update_player(s, player) {
    let next_anim = curr_anim;

    // Verifica se il personaggio è a terra per evitare che parta con l'animazione di jump_down
    is_on_ground = PP.physics.get_velocity_y(player) === 0; 

    // Se il personaggio è a terra, abilitiamo di nuovo il salto. Se non inserisco questo il player salta una volta sola
    if (is_on_ground || is_on_platform) {
        verifica_floor = true;
        verifica_platform = true;
    }

    // Movimento orizzontale
    if(PP.interactive.kb.is_key_down(s, PP.key_codes.RIGHT)) {
        PP.physics.set_velocity_x(player, player_speed);
        next_anim = "run";  // quando si preme freccia destra, l'animazione è "run"
    } 
    else if (PP.interactive.kb.is_key_down(s, PP.key_codes.LEFT)) {
        PP.physics.set_velocity_x(player, -player_speed);
        next_anim = "run";  // quando si preme freccia sinistra, l'animazione è "run"
    } else {
        PP.physics.set_velocity_x(player, 0);
        next_anim = "stop"; 
    }

    if(PP.interactive.kb.is_key_down(s, PP.key_codes.UP)) {
        PP.physics.set_velocity_y(player, -jump_init_speed);  // Impostiamo la velocità verticale per il salto
        
        // Reset del flag a false quando il player è su una piattaforma
        //verifica_floor = false;
        //verifica_platform = false;
    }

    // Animazioni di salto gestite in base alla velocità verticale
    if(PP.physics.get_velocity_y(player) < 0 ) {
        next_anim = "jump_up";
    }
    else if(PP.physics.get_velocity_y(player) > 0 ) {
            next_anim = "jump_down";
    }

    if (PP.interactive.kb.is_key_down(s, PP.key_codes.L) && 
        PP.interactive.kb.is_key_up(s, PP.key_codes.RIGHT ) && PP.interactive.kb.is_key_up(s, PP.key_codes.LEFT)) {
        next_anim = "weapon";
    }

    // Se l'animazione è cambiata, la aggiorniamo
    if (next_anim != curr_anim) {
        console.log (next_anim)
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