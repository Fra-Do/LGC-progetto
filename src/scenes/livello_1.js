let img_background;
let img_piattaforme;
let img_parallax01;
let img_parallax02;
let floor;
let background;
let piattaforme;
let parallax01;
let parallax02;

function preload(s) {
    img_parallax01  = PP.assets.image.load(s, "assets/images/parallax_1.png");
    img_parallax02  = PP.assets.image.load(s, "assets/images/parallax01.png");
    img_background  = PP.assets.image.load(s, "assets/images/sfondo.png");
    img_piattaforme = PP.assets.image.load(s, "assets/images/piattaforme.png");
    preload_player(s);
    preload_structure(s)
    preload_collectibles(s)
    preload_platforms(s)

}

function create(s) {
    background  = PP.assets.image.add(s, img_background, 0, -450, 0, 0);
    

    //Parallasse tubi
    parallax01 = PP.assets.tilesprite.add(s, img_parallax01, 0, 0, 9985, 3163, 0, 0);
    parallax01.tile_geometry.scroll_factor_x = 0.5;
    parallax01.tile_geometry.scroll_factor_y = 0;

    parallax02 = PP.assets.tilesprite.add(s, img_parallax02, 0, 0, 9985, 3163, 0, 0);
    parallax02.tile_geometry.scroll_factor_x = 0.8;
    parallax02.tile_geometry.scroll_factor_y = 0;

    piattaforme = PP.assets.image.add(s, img_piattaforme, 0, -450, 0, 0);
    
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
    destroy_platforms(s)
}

PP.scenes.add("laboratorio", preload, create, update, destroy);