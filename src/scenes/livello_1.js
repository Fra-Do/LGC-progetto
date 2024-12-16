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
    
    img_parallax01  = PP.assets.image.load(s, "assets/images/livello1_2_tubi.png");
    img_parallax02  = PP.assets.image.load(s, "assets/images/livello1_3_tubi.png");
    img_background  = PP.assets.image.load(s, "assets/images/sfondo.png");
    img_tubi        = PP.assets.image.load(s, "assets/images/livello1_tubi_prova.png"); 
    
    preload_collectibles(s);
    preload_player(s);
    preload_structure(s);
    
    preload_platforms(s);
    preload_istruzioni(s);
    

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


    tubi = PP.assets.image.add(s, img_tubi, 10, -410, 0, 0);
    
    
    create_player(s);
    create_collectibles(s); 
    create_structure(s);
    create_platforms (s);
    configure_player_animations(s);
   

    //PP.camera.set_follow_offset(s, 600, 400)
    PP.camera.start_follow(s, player, -50, 120); //così il player è al centro dello schermo
}

function update(s) {
    update_player(s);
    update_platforms(s);
    //if (xz640)
    //set_follow_offset(-640+X,y)
    update_istruzioni(s, player);
}

function destroy(s) {
    destroy_player(s);
    destroy_platforms(s)
}

PP.scenes.add("laboratorio", preload, create, update, destroy);