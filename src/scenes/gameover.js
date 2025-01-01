let img_gameover;
let gameover;

function preload_gameover(s) {
    img_gameover  = PP.assets.image.load(s, "assets/images/finali/gameover.png");
}

function mouse_click(s) {
    PP.scenes.start("livello_1");
}

function create_gameover(s) {
    gameover = PP.assets.image.add(s, img_gameover, 0, 0, 0, 0); 

}

function update_gameover(s) {

}

function destroy_gameover(s) {

}

PP.scenes.add("gameover", preload_gameover, create_gameover, update_gameover, destroy_gameover);