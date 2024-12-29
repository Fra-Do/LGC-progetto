let img_background_cover;
let img_button_gioca;
let img_button_storia;
let img_button_crediti;

let background_cover;
let button_gioca;
let button_storia;
let button_crediti;

function preload(s) {
    img_background_cover = PP.assets.image.load(s, "assets/images/cover/cover.png");
    img_button_gioca     = PP.assets.image.load(s, "assets/images/cover/gioca.png");
    img_button_storia    = PP.assets.image.load(s, "assets/images/cover/storia.png");
    img_button_crediti   = PP.assets.image.load(s, "assets/images/cover/crediti.png");

}



function create(s) {
    background_cover  = PP.assets.image.add(s, img_background_cover, 0, 0, 0, 0);
    button_gioca      = PP.assets.image.add(s, img_button_gioca, 352, 305, 0, 0);
    button_storia     = PP.assets.image.add(s, img_button_storia, 535, 350, 0, 0);
    button_crediti     = PP.assets.image.add(s, img_button_crediti, 810, 282, 0, 0);



    PP.interactive.mouse.add (button_gioca, "pointerdown", change_scene_livello_1)
    PP.interactive.mouse.add (button_storia, "pointerdown", change_scene_tavola01)
    PP.interactive.mouse.add (button_crediti, "pointerdown", change_scene_crediti)


    
}

function change_scene_livello_1(s) {
    console.log("Cambio scena: Livello 1");
    PP.scenes.start("livello_1");
}

function change_scene_tavola01(s) {
    console.log("Cambio scena: Tavola 1");
    PP.scenes.start("tavola01");
}

function change_scene_crediti(s) {
    console.log("Cambio scena: Crediti");
    PP.scenes.start("crediti");
}

function update(s) {
    

}

function destroy(s) {
    

}

PP.scenes.add("cover", preload, create, update, destroy);