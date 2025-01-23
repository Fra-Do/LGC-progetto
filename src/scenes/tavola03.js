let img_tavola3;
let tavola3;

let img_avanti3;
let avanti3;

let img_indietro3;
let indietro3;


function preload_tavola03 (s) {
    img_tavola3     = PP.assets.image.load(s, "assets/images/cover/tavola3.png");
    img_avanti3     = PP.assets.image.load(s, "assets/images/cover/avanti.png");
    img_indietro3   = PP.assets.image.load(s, "assets/images/cover/indietro.png");
}

function create_tavola03 (s) {
    tavola3       = PP.assets.image.add(s, img_tavola3, 0, 0, 0, 0);
    avanti3       = PP.assets.image.add(s, img_avanti3, 1220, 660, 0, 0);
    indietro3     = PP.assets.image.add(s, img_indietro3, 20, 660, 0, 0);

    PP.interactive.mouse.add (avanti3, "pointerdown", change_scene_livello_1);
    PP.interactive.mouse.add (indietro3, "pointerdown", change_scene_tavola02);
}

function change_scene_livello_1(s) {
    console.log("Cambio scena: Livello 1");
    PP.scenes.start("livello_1");
}

function change_scene_tavola02(s) {
    console.log("Cambio scena: Tavola 2");
    PP.scenes.start("tavola02");
}

function update_tavola03 (s) {
    
}

function destroy_tavola03 (s) {
    
}

PP.scenes.add("tavola03", preload_tavola03, create_tavola03, update_tavola03, destroy_tavola03);