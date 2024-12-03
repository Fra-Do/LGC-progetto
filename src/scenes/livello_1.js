let img_background;
let floor;
let background;

function preload(s) {
    img_background = PP.assets.image.load(s, "assets/images/livello_1.png");
    preload_player(s);
    preload_structure(s)
    preload_collectibles(s)

}

function create(s) {
    background = PP.assets.image.add(s, img_background, 0, -450, 0, 0);
    create_player(s);
    create_structure(s);
    create_platforms (s);
    configure_player_animations(s);
    create_collectibles(s)

    PP.camera.set_follow_offset(s, 600, 400)
    PP.camera.start_follow(s, player, 50, 120);
}

function update(s) {
    update_player(s);
    update_platforms(s);
}

function destroy(s) {
    destroy_player(s);
}

PP.scenes.add("laboratorio", preload, create, update, destroy);