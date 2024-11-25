let img_player;
let player;

let player_speed =   300;
let step_lenght = 4;
let height = 5;
let jump_init_speed = 300;
let floor_height    = 615;

let curr_anim = "stop";

function configure_player_animations(s) {

}


function preload_player(s) {
    img_player = PP.assets.image.load(s, "assets/images/stickman.png", 223, 190);
}

function create_player(s) {
    player = PP.assets.image.add(s, img_player, 120, 300, 1, 1);
    PP.physics.add(s, player, PP.physics.type.DYNAMIC); 
}

function update_player(s) {
    if(PP.interactive.kb.is_key_down(s, PP.key_codes.RIGHT)) {
        player.geometry.x += step_lenght;
    } 
    else if (PP.interactive.kb.is_key_down(s, PP.key_codes.LEFT)) {
        player.geometry.x -= step_lenght;
    } 

    if (PP.interactive.kb.is_key_down(s, PP.key_codes.UP)) {
        player.geometry.y -= height;
    }

    if (PP.interactive.kb.is_key_down(s, PP.key_codes.DOWN)) {
        player.geometry.y += height;
    }

    if(player.geometry.y>=floor_height-1 || player.is_on_platform) {
        // Se mi trovo sul pavimento OPPURE su una piattaforma...

        if(PP.interactive.kb.is_key_down(s, PP.key_codes.SPACE)) {
            // ... e premo il tasto spazio, allo salto
            PP.physics.set_velocity_y(player, -jump_init_speed);
        }

    }
}

function destroy_player(s) {
    
}

