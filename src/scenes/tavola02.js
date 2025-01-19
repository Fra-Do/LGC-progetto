let img_tavola2;
let tavola2;

let img_avanti2;
let avanti2;

let img_indietro2;
let indietro2;


function preload_tavola02 (s) {
    img_tavola2     = PP.assets.image.load(s, "assets/images/cover/tavola2prov.png");
    img_avanti2     = PP.assets.image.load(s, "assets/images/cover/avanti.png");
    img_indietro2   = PP.assets.image.load(s, "assets/images/cover/indietro.png");
}

function create_tavola02 (s) {
    tavola2       = PP.assets.image.add(s, img_tavola2, 0, 0, 0, 0);
    avanti2       = PP.assets.image.add(s, img_avanti2, 1200, 660, 0, 0);
    indietro2     = PP.assets.image.add(s, img_indietro2, 20, 660, 0, 0);

    PP.interactive.mouse.add (avanti2, "pointerdown", change_scene_tavola03);
    PP.interactive.mouse.add (indietro2, "pointerdown", change_scene_tavola01);
}

function change_scene_tavola03(s) {
    console.log("Cambio scena: Tavola 3");
    PP.scenes.start("tavola03");
}

function change_scene_tavola01(s) {
    console.log("Cambio scena: Tavola 1");
    PP.scenes.start("tavola01");
}

function update_tavola02 (s) {
    
}

function destroy_tavola02 (s) {
    
}

PP.scenes.add("tavola02", preload_tavola02, create_tavola02, update_tavola02, destroy_tavola02);