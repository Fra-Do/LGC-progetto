let img_background_cover;
let img_button_game;

let background_cover;
let button_game;

function preload(s) {
    img_background_cover = PP.assets.image.load(s, "assets/images/cover/copertina.png");
    img_button_game      = PP.assets.image.load(s, "assets/images/istruzioni/down.png");

}



function create(s) {
    background_cover = PP.assets.image.add(s, img_background_cover, 0, 0, 0, 0);
    button_game      = PP.assets.image.add(s, img_button_game, 217, 57, 0, 0);

    PP.interactive.mouse.add (button_game, "pointerdown", change_scene_livello_1)
    
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