let img_background;
let floor;
let background;

function preload(s) {
    img_background = PP.assets.image.load(s, "assets/images/livello_1.png");
    preload_player(s);
    
}

function create(s) {
    background = PP.assets.image.add (s, img_background, 0, 0, 0, 0);
   
    create_player(s);

    PP.camera.set_follow_offset(s, 600, 400)
    PP.camera.start_follow(s, player, 50, 120);
}

function update(s) {
    update_player(s);
}

function destroy(s) {
    destroy_player(s);
}

PP.scenes.add("level1", preload, create, update, destroy);