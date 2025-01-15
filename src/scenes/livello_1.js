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
    //PARALLASSE
    img_parallax01  = PP.assets.image.load(s, "assets/images/mappa/livello1_2_tubi.png");
    img_parallax02  = PP.assets.image.load(s, "assets/images/mappa/livello1_3_tubi.png");
    
    //SFONDO
    img_background  = PP.assets.image.load(s, "assets/images/mappa/sfondo.png");
    
    //STRUTTURA
    img_tubi        = PP.assets.image.load(s, "assets/images/mappa/liv1e2.png"); 
    
    preload_HUD(s)
    preload_collectibles(s);
    preload_instruction(s)
    preload_player(s);
    preload_animals (s);
    preload_structure(s)
    preload_collectibles(s)
    preload_platforms(s)
    
}

function create(s) {
    background  = PP.assets.image.add(s, img_background, 0, -450, 0, 0);

    //Parallasse tubi
    parallax02 = PP.assets.image.add(s, img_parallax02, 0, 0, 0, 0);
    parallax02.tile_geometry.scroll_factor_x = 0.8;
    parallax02.tile_geometry.scroll_factor_y = 0.8;
    
    parallax01 = PP.assets.image.add(s, img_parallax01, 0, 0, 0, 0);
    parallax01.tile_geometry.scroll_factor_x = 0.5;
    parallax01.tile_geometry.scroll_factor_y = 0.5;

    //Tubi struttura
    tubi = PP.assets.image.add(s, img_tubi, 10, -410, 0, 0);
    
    create_instruction(s) 
    create_player(s);
    create_animals (s);

    create_collectibles(s);
    create_structure(s);
    create_platforms (s);
    configure_player_animations(s, player);
    create_cage(s, player);
    configure_cage_animations(s)
    create_HUD(s)

    //Gestione camera
    PP.camera.start_follow(s, player, 0, 120); //così il player è al centro dello schermo
    PP.camera.set_follow_offset(s, -600, 120);
}

function update(s) {
    //update_collectibles(s);
    score_update(s)
    update_instruction(s)
    update_player(s, player);
    update_platforms(s);
    update_animals (s);
    
    // margine sinistro camera
    if (player.geometry.body_x < 640) {
        PP.camera.set_follow_offset (s, -600 + player.geometry.body_x, 120);
    } 
    
    // margine destro
    if (player.geometry.body_x > 9320) {
        PP.camera.set_follow_offset (s, -9320 + player.geometry.body_x, 120);
    }
    
    //margine superiore 
    if (player.geometry.body_y < 0) {
        PP.camera.set_follow_offset (s, 0,  120 + player.geometry.body_y);
    } 

    //margine inferiore 
    if (player.geometry.body_y >= 4770-120) {
        PP.camera.set_follow_offset (s, 0, -4770 + player.geometry.body_y);
    } 
    update_instruction(s, player);
    open_map(s); // Controlla i tasti M e X per gestire la mappa
    update_HUD(s)
    manage_player_weapon(s);
}

function destroy(s) {
    //update_collectibles(s);
    destroy_instruction(s);
    destroy_player(s);
    destroy_platforms(s);
    destroy_HUD(s)
    destroy_animals (s);
}

PP.scenes.add("livello_1", preload, create, update, destroy);
