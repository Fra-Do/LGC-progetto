let img_background_cover;
let img_button_gioca;

let background_cover;
let button_gioca;

function preload(s) {
    img_background_cover = PP.assets.image.load(s, "assets/images/cover/cover.png");
    img_button_gioca      = PP.assets.image.load(s, "assets/images/cover/gioca.png");

}



function create(s) {
    background_cover  = PP.assets.image.add(s, img_background_cover, 0, 0, 0, 0);
    button_gioca      = PP.assets.image.add(s, img_button_gioca, 352, 305, 0, 0);

    PP.interactive.mouse.add (button_gioca, "pointerdown", change_scene_livello_1)
    
}

function change_scene_livello_1(s) {
    console.log("Cambio scena: Livello 1");
    PP.scenes.start("livello_1");
}



function update(s) {
    

}

function destroy(s) {
    

}

PP.scenes.add("cover", preload, create, update, destroy);