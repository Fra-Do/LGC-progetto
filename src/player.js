let img_player;
let player;
let player_speed =   200;


function preload_player(s) {
    img_player = PP.assets.image.load(s, "assets/images/stickman.png");
}

function create_player(s) {
    img_player = PP.assets.image.add(s, "assets/images/stickman.png");
}

function update_player(s) {
    if(PP.interactive.kb.is_key_down(s, PP.key_codes.RIGHT)) {
        PP.physics.set_velocity_x(img_player, player_speed);
    } 
    else if (PP.interactive.kb.is_key_down(s, PP.key_codes.LEFT)) {
        PP.physics.set_velocity_x(img_player, -player_speed);
    } //else {
        //PP.physics.set_velocity_x(player, 0);
       // next_anim = "stop";
    //}
}

function destroy_player(s) {

}

