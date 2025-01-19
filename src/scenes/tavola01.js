let img_tavola1;
let tavola1;

let img_avanti1;
let avanti1;

let img_indietro1;
let indietro1;


function preload_tavola01 (s) {
    img_tavola1     = PP.assets.image.load(s, "assets/images/cover/tavola1prov.png");
    img_avanti1     = PP.assets.image.load(s, "assets/images/cover/avanti.png");
    img_indietro1   = PP.assets.image.load(s, "assets/images/cover/indietro.png");
}

function create_tavola01 (s) {
    tavola1       = PP.assets.image.add(s, img_tavola1, 0, 0, 0, 0);
    avanti1       = PP.assets.image.add(s, img_avanti1, 1200, 660, 0, 0);
    indietro1     = PP.assets.image.add(s, img_indietro1, 20, 660, 0, 0);

    PP.interactive.mouse.add (avanti1, "pointerdown", change_scene_tavola02);
    PP.interactive.mouse.add (indietro1, "pointerdown", change_scene_cover);
}

function change_scene_cover(s) {
    console.log("Cambio scena: Cover");
    PP.scenes.start("cover");
}

function change_scene_tavola02(s) {
    console.log("Cambio scena: Tavola 2");
    PP.scenes.start("tavola02");
}

function update_tavola01 (s) {
    
}

function destroy_tavola01 (s) {
    
}

PP.scenes.add("tavola01", preload_tavola01, create_tavola01, update_tavola01, destroy_tavola01);