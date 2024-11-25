let floor_height    = 620;
let player_speed    = 400;
let jump_init_speed = 450;

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

}

function destroy_player(s) {
    
}

