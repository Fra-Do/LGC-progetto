let img_background;
let img_piattaforme;
let img_parallax01;
let img_parallax02;
let img_tubi;

let tubi;
let floor;
let background;
let piattaforme;
let parallax01;
let parallax02;

function preload(s) {
    img_background = PP.assets.image.load(s, "assets/images/mappa/sfondo.png");
    img_tubi       = PP.assets.image.load(s, "assets/images/mappa/livello2_tubi.png"); 

    preload_structure2(s)
    preload_player(s);
    
}

function create(s) {
    background = PP.assets.image.add(s, img_background, 0, -450, 0, 0);
    tubi = PP.assets.image.add(s, img_tubi, 0, 0, 0, 0);

    create_player(s);
    configure_player_animations(s);

    create_structure2(s);

    PP.camera.set_follow_offset(s, 600, 400)
    PP.camera.start_follow(s, player, 50, 120);
}

function update(s) {
    update_player(s);
    update_structure2(s)

}

function destroy(s) {
    destroy_player(s);
    destroy_structure2(s)

}

PP.scenes.add("livello_2", preload, create, update, destroy);