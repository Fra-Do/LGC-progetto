let img_player;
let player;

let img_weapon;
let weapon;

let weapon_disable    = false;

let player_speed      = 400;
let jump_init_speed   = 550;
let step_lenght       = 10;
let height            = 8;

let curr_anim         = "stop";

let is_on_platform;

function configure_player_animations(s, player) {
    PP.assets.sprite.animation_add_list(player, "run", [1, 2, 3, 4], 10, -1);  
    PP.assets.sprite.animation_add     (player, "stop", 0, 0, 10, 0);  
    PP.assets.sprite.animation_add_list(player, "jump_up", [5, 6, 7, 8, 9], 10, 0);
    PP.assets.sprite.animation_add_list(player, "jump_down", [10, 11, 12, 13], 10, 0);
    PP.assets.sprite.animation_add_list(player, "weapon", [14, 15, 16, 17, 18, 19, 20], 10, -1);
    PP.assets.sprite.animation_add_list(player, "hurt", [8, 15, 10, 17], 10, -1);
    
    PP.assets.sprite.animation_play    (player, "stop");  // avvia l'animazione "stop" di default
}

function preload_player(s) {
    img_player = PP.assets.sprite.load_spritesheet(s, "assets/images/personaggi/ss_protagonista.png", 94, 136, 1, 12);
    img_weapon = PP.assets.image.load             (s, "assets/images/oggetti/arma.png", 50, 50);
}

function create_player(s) {
   player = PP.assets.sprite.add(s, img_player, 400, 350, 0.5, 1);  //posizioni iniziali giuste 
    //player = PP.assets.sprite.add(s, img_player, 8055, 1330, 0.5, 1); 
    //player = PP.assets.sprite.add(s, img_player, 2500, 350, 0.5, 1);  

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
        next_anim = "run";  
    } 
    else if (PP.interactive.kb.is_key_down(s, PP.key_codes.LEFT)) {
        PP.physics.set_velocity_x(player, -player_speed);
        next_anim = "run";  
    } else {
        PP.physics.set_velocity_x(player, 0);
        next_anim = "stop"; 
    }

    if(PP.interactive.kb.is_key_down(s, PP.key_codes.UP) && player.ph_obj.body.blocked.down) {
        PP.physics.set_velocity_y(player, -jump_init_speed);  // Impostiamo la velocità verticale per il salto
        player.is_on_platform = false;
    } 

    if(PP.physics.get_velocity_y(player) < 0 && !player.is_on_platform) {
        next_anim = "jump_up";
    }

    if(PP.physics.get_velocity_y(player) > 0 && !player.ph_obj.body.blocked.down) {
        player.is_on_platform = false;
        next_anim = "jump_down";
    }

    if (PP.interactive.kb.is_key_down(s, PP.key_codes.L) && 
        PP.interactive.kb.is_key_up(s, PP.key_codes.RIGHT ) && PP.interactive.kb.is_key_up(s, PP.key_codes.LEFT)) {
        if (ss_fiale_opened) {
            next_anim = "weapon";
        }
            
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

    manage_player_weapon(s);
}

//FUNZIONE PR COLPIRE I NEMICI
function hit_scientist2 (s, weapon, scientist2) {
    PP.assets.destroy (scientist2);
    PP.assets.destroy (weapon);
}

function hit_animals (s, weapon, animal){
    PP.assets.destroy(weapon);
    PP.assets.destroy(animal);
    console.log ("colpito animale");
}

//LANCIO ARMA
function reenable_weapon(s) {
    weapon_disable = false;
}

// Funzione globale per lanciare l'arma
function launch_weapon(s, offset, velocity) {
    if (ss_fiale_opened) {
        weapon = PP.assets.image.add(s, img_weapon,
            player.geometry.x + offset,
            player.geometry.y - 70,
            0.5, 0.5
        );

    PP.physics.add(s, weapon, PP.physics.type.DYNAMIC);
    PP.physics.set_allow_gravity(weapon, false);
    PP.physics.set_rotation(weapon, 360);
    PP.physics.set_velocity_x(weapon, velocity);
    PP.physics.add_collider_f(s, weapon, coniglio, hit_animals);
    PP.physics.add_collider_f(s, weapon, topo, hit_animals);
    PP.physics.add_collider_f(s, weapon, scimmia, hit_animals);
    PP.physics.add_collider_f(s, weapon, maiale, hit_animals);
    PP.physics.add_collider_f(s, weapon, scientist, hit_animals);
    PP.physics.add_collider_f(s, weapon, scientist2, hit_scientist2);

    PP.timers.add_timer(s, 700, reenable_weapon, false); // Riabilita l'arma dopo 700ms
    weapon_disable = true;
    } 
}

function manage_player_weapon(s) {
    if (ss_fiale_opened) {
    let offset   = 70;
    let velocity = 1000;

    if (player.geometry.flip_x == true) {
        offset   = - offset;
        velocity = - velocity;
    }

    if (PP.interactive.kb.is_key_down(s, PP.key_codes.L)){

        //Codice per lanciare l'arma dopo che l'animazione di lancio è finita
        if (!weapon_disable) { // Controlla se è permesso lanciare l'arma
            weapon_disable = true; // Blocca ulteriori lanci fino a quando non viene riabilitata
            PP.timers.add_timer(s, 290, () => launch_weapon(s, offset, velocity), false); // Ritardo di 290ms
        }
    }
}
}


function destroy_player(s) {
    
}