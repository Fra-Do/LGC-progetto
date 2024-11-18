let img_background;
let floor;

function preload(s) {
    img_background = PP.assets.image.load(s, "assets/images/livello_1.png");
    preload_player(s);
}

function create(s) {
    PP.assets.image.add(s, img_background, 0, 0, 0, 0);
    floor = PP.shapes.rectangle_add(s, 640, 620, 12800, 1, "0x000000", 0); 
    create_player
}

function update(s) {
    update_player
}

function destroy(s) {
    destroy_player
}

PP.scenes.add("level1", preload, create, update, destroy);