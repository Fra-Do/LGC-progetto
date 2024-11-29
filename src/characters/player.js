let img_player;
let player;

let player_speed = 800;
let step_lenght  = 4;
let height       = 5;


function preload_player(s) {
    img_player = PP.assets.image.load(s, "assets/images/protagonista.png");
}

function create_player(s) {
    player = PP.assets.image.add(s, img_player, 400, 300, 1, 1);
    PP.physics.add(s, player, PP.physics.type.DYNAMIC); 
    
}

function update_player(s) {
    if(PP.interactive.kb.is_key_down(s, PP.key_codes.RIGHT)) {
        PP.physics.set_velocity_x(player, player_speed);
        //player.geometry.x += step_lenght;
    } 
    else if (PP.interactive.kb.is_key_down(s, PP.key_codes.LEFT)) {
        PP.physics.set_velocity_x(player, -player_speed);
        //player.geometry.x -= step_lenght;  
    } else {
        // Se non e' premuto alcun tasto...
        PP.physics.set_velocity_x(player, 0);
        //next_anim = "stop";
    }

    if (PP.interactive.kb.is_key_down(s, PP.key_codes.UP)) {
       // player.geometry.y -= height;
       PP.physics.set_velocity_y(player, -player_speed);
        
    }

    if (PP.interactive.kb.is_key_down(s, PP.key_codes.DOWN)) {
        //player.geometry.y += height;
    }
}


function destroy_player(s) {
}

