let img_back1;
let back1;

let img_finale1;
let finale1;

function preload_finale1(s) {
    img_finale1 = PP.assets.image.load(s, "assets/images/finali/finale1.png");
    img_back1   = PP.assets.image.load(s, "assets/images/cover/indietro.png");
}

function create_finale1(s) {
    finale1 = PP.assets.image.add(s, img_finale1, 0, 0, 0, 0); 
    back1   = PP.assets.image.add(s, img_back1, 20, 660, 0, 0);

    PP.interactive.mouse.add (back1, "pointerdown", change_scene_cover);
}

function change_scene_cover(s) {
    console.log("Cambio scena: Cover");
    PP.scenes.start("cover");
}

function update_finale1(s) {

}

function destroy_finale1(s) {

}

PP.scenes.add("finale1", preload_finale1, create_finale1, update_finale1, destroy_finale1);