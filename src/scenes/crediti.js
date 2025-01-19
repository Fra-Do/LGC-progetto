let img_crediti;
let crediti;

let img_back;
let back;

function preload_credits (s) {
    img_crediti = PP.assets.image.load(s, "assets/images/cover/crediti.png");
    img_back    = PP.assets.image.load(s, "assets/images/cover/indietro.png");

}

function create_credits (s) {
    crediti  = PP.assets.image.add(s, img_crediti, 0, 0, 0, 0);
    back     = PP.assets.image.add(s, img_back, 20, 660, 0, 0);

    PP.interactive.mouse.add (back, "pointerdown", change_scene_cover)
}

function change_scene_cover(s) {
    console.log("Cambio scena: Livello 1");
    PP.scenes.start("cover");
}

function update_credits (s) {
    
}

function destroy_credits (s) {
    
}

PP.scenes.add("crediti", preload_credits, create_credits, update_credits, destroy_credits);