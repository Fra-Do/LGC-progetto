let img_gameover;
let gameover

function preload_gamover(s) {
    img_gameover  = PP.assets.image.load(s, "assets/images/gameoverprov.png");
}

function mouse_click(s) {
    PP.scenes.start("livello_1");
}

function create_gameover(s) {
    gameover = PP.assets.image.add(s, img_gameover, 0, 0, 0, 0);

    PP.shapes.text_styled_add(s, 
        PP.game.config.canvas_width /2,   //X
        PP.game.config.canvas_height/2,   //Y
        "Game Over",
        100,           //font size
        "Helvetica",  
        "bold",
        "0xFFFFFF",  //foreground color
        null,  //background color
        0.5,
        0.5
    ); 

    let goback = PP.shapes.text_styled_add(s, 
        1000,            //X
        600,             //Y
        "riprova",
        40,             //font size
        "Helvetica",  
        "normal",
        "0xFFFFFF",  //foreground color
        null,  //background color
        0.5,
        0.5
    );

    PP.interactive.mouse.add(goback, "pointerdown",mouse_click);

}

function update_gameover(s) {

}

function destroy_gameover(s) {

}

PP.scenes.add("gameover", preload, create, update, destroy);