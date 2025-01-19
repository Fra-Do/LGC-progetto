let img_topolino;
let topolino;

let cage_topolino;
let cage_topo_opened = false;

function preload_topo (s) {
    img_topolino = PP.assets.image.load (s, "assets/images/characters/topolino.png");
}

function configure_topo_animations (s) {
    
}

function create_topo (s) {
    topolino = PP.assets.sprite.add(s, img_topolino, 2817, 777, 0.5, 1);
    PP.physics.add(s, topolino, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, topolino, function () {
        open_topo(s, player);
    });
}

let isCPressed = false;
//QUANDO VIENE PREMUTO IL TASTO C LA GABBIA SI APRE
function open_topo(s, player) {
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.C)) {
        // Cambia animazione della gabbia
        cage_topo_opened = true;
        PP.assets.sprite.animation_stop(topolino, "closed");
        PP.assets.sprite.animation_play(topolino, "opened");
    }  
}

function update_topo (s) {
   
}

function destroy_topo (s) {
    
}