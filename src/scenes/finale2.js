let img_back2;
let back2;

let img_finale2;
let finale2;

function preload_finale2(s) {
    img_finale2  = PP.assets.image.load(s, "assets/images/finali/finale2.png");
    img_back2    = PP.assets.image.load(s, "assets/images/cover/indietro.png");
}

function create_finale2(s) {
    finale2 = PP.assets.image.add(s, img_finale2, 0, 0, 0, 0); 
    back2   = PP.assets.image.add(s, img_back2, 20, 660, 0, 0);

    PP.interactive.mouse.add (back2, "pointerdown", change_scene_cover);
}

function change_scene_cover(s) {
    console.log("Cambio scena: Cover");
    PP.scenes.start("cover");
}

function update_finale2(s) {

}

function destroy_finale2(s) {

}

PP.scenes.add("finale2", preload_finale2, create_finale2, update_finale2, destroy_finale2);