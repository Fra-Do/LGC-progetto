let img_player;
let player;

let player_speed = 200;
let step_lenght  = 4;
let height       = 5;


function preload_player(s) {
    img_player = PP.assets.image.load(s, "assets/images/personaggio.png");
}

function create_player(s) {
    player = PP.assets.image.add(s, img_player, 400, 600, 1, 1);
    PP.physics.add(s, player, PP.physics.type.DYNAMIC); 
    
}

function update_player(s) {
    if(PP.interactive.kb.is_key_down(s, PP.key_codes.RIGHT)) {
        player.geometry.x += step_lenght;
    } 
    else if (PP.interactive.kb.is_key_down(s, PP.key_codes.LEFT)) {
        player.geometry.x -= step_lenght;
        PP.physics.set_velocity_x(player, player_speed);
    } 

    if (PP.interactive.kb.is_key_down(s, PP.key_codes.UP)) {
        player.geometry.y -= height;
        PP.physics.set_velocity_x(player, -player_speed);
    }

    if (PP.interactive.kb.is_key_down(s, PP.key_codes.DOWN)) {
        player.geometry.y += height;
    }
}


function destroy_player(s) {
}

