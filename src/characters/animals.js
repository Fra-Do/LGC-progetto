//5 tipi di animali mutati diversi: un coniglio, un topo, una scimmia, un maiale e una scienziata
let img_coniglio;
let coniglio;

let img_topo;
let topo;

let img_scimmia;
let scimmia;

let img_maiale;
let maiale;

let img_scientist;
let scientist;
let scientist2;

//Variabili per aver trovato il topolino
let img_congratulazioni;
let congratulazioni;
let img_topino;


function preload_animals(s) {
    img_coniglio   = PP.assets.sprite.load_spritesheet(s, "assets/images/personaggi/ss_coniglio2.png", 110.6, 90);
    img_topo       = PP.assets.sprite.load_spritesheet(s, "assets/images/personaggi/ss_topo.png", 198, 65);
    img_scimmia    = PP.assets.sprite.load_spritesheet(s, "assets/images/personaggi/ss_scimmia.png", 248, 160);
    img_maiale     = PP.assets.sprite.load_spritesheet(s, "assets/images/personaggi/ss_maiale.png", 171, 115);
    img_scientist  = PP.assets.sprite.load_spritesheet(s, "assets/images/personaggi/ss_scientist.png", 94, 170);

    img_topino = PP.assets.sprite.load_spritesheet(s, "assets/images/personaggi/ss_topino2.png", 147.5, 115);
    img_congratulazioni = PP.assets.image.load(s, "assets/images/istruzioni/scritta_topo_b2.png");
}

//Gameover per la collisione con le scienziate
function goto_gameover (s) {
    PP.scenes.start("gameover");
}

function create_animals (s) {
    // CONIGLIO
    coniglio = PP.assets.sprite.add(s, img_coniglio, 6560, 4560, 0.5, 1); 
    PP.physics.add(s, coniglio, PP.physics.type.DYNAMIC);
    coniglio.geometry.flip_x = true;

    //Chiamiamo la funzione reduce kit contenuta in HUD.js
    PP.physics.add_overlap_f(s, player, coniglio, reduce_kit);

    PP.assets.sprite.animation_add(coniglio, "walk", 0, 10, 15, -1);
    PP.assets.sprite.animation_play(coniglio, "walk");

    PP.physics.set_velocity_x(coniglio, 250);
    PP.physics.set_immovable(coniglio, true);
    PP.physics.set_allow_gravity(coniglio, false); 

    //TOPO 
    topo = PP.assets.sprite.add(s, img_topo, 8060, 4560, 0.5, 1); 
    PP.physics.add(s, topo, PP.physics.type.DYNAMIC);
    topo.geometry.flip_x = true;

    //Chiamiamo la funzione reduce kit contenuta in HUD.js
    PP.physics.add_overlap_f(s, player, topo, reduce_kit);

    PP.assets.sprite.animation_add(topo, "walk", 0, 5, 8, -1);
    PP.assets.sprite.animation_play(topo, "walk");

    PP.physics.set_velocity_x(topo, 250);
    PP.physics.set_immovable(topo, true);
    PP.physics.set_allow_gravity(topo, false); 

    //SCIMMIA
    scimmia = PP.assets.sprite.add(s, img_scimmia, 8345, 3735, 0.5, 1); 
    PP.physics.add(s, scimmia, PP.physics.type.DYNAMIC);
    scimmia.geometry.flip_x = true;

    //Chiamiamo la funzione reduce kit contenuta in HUD.js
    PP.physics.add_overlap_f(s, player, scimmia, reduce_kit);

    PP.assets.sprite.animation_add(scimmia, "walk", 0, 6, 8, -1);
    PP.assets.sprite.animation_play(scimmia, "walk");

    PP.physics.set_velocity_x(scimmia, 280);
    PP.physics.set_immovable(scimmia, true);
    PP.physics.set_allow_gravity(scimmia, false);

    //MAIALE
    maiale = PP.assets.sprite.add(s, img_maiale, 6560, 5190, 0.5, 1); 
    PP.physics.add(s, maiale, PP.physics.type.DYNAMIC);
    maiale.geometry.flip_x = true;

    //Chiamiamo la funzione reduce kit contenuta in HUD.js
    PP.physics.add_overlap_f(s, player, maiale, reduce_kit);

    PP.assets.sprite.animation_add(maiale, "walk", 0, 8, 8, -1);
    PP.assets.sprite.animation_play(maiale, "walk");

    PP.physics.set_velocity_x(maiale, 270);
    PP.physics.set_immovable(maiale, true);
    PP.physics.set_allow_gravity(maiale, false);

    //SCIENZIATA
    scientist = PP.assets.sprite.add(s, img_scientist, 6700, 3147, 0.5, 1); 
    PP.physics.add(s, scientist, PP.physics.type.DYNAMIC);
    scientist.geometry.flip_x = false;

    //Quando la protagonista collide con la scienziata è subito gameover 
    PP.physics.add_collider_f(s, scientist, player, goto_gameover, hit_animals);

    PP.assets.sprite.animation_add(scientist, "walk", 0, 5, 8, -1);
    PP.assets.sprite.animation_play(scientist, "walk");

    PP.physics.set_velocity_x(scientist, 270);
    PP.physics.set_immovable(scientist, true);
    PP.physics.set_allow_gravity(scientist, false);

    //SCIENZIATA 2
    scientist2 = PP.assets.sprite.add(s, img_scientist, 7660, 5190, 0.5, 1); 
    PP.physics.add(s, scientist2, PP.physics.type.DYNAMIC);
    scientist2.geometry.flip_x = false;
    
    //Quando la protagonista collide con la scienziata è subito gameover 
    PP.physics.add_collider_f(s, scientist2, player, goto_gameover);

    PP.assets.sprite.animation_add(scientist2, "walk", 0, 5, 8, -1);
    PP.assets.sprite.animation_play(scientist2, "walk");

    PP.physics.set_velocity_x(scientist2, 270);
    PP.physics.set_immovable(scientist2, true);
    PP.physics.set_allow_gravity(scientist2, false);


    //CODICE TOPOLINO TROVATO
    // Topino
    topino = PP.assets.sprite.add(s, img_topino, 9310, 5190, 0.5, 1); 
    PP.physics.add(s, topino, PP.physics.type.DYNAMIC);
    
    PP.physics.add_overlap_f(s, player, topino, topino_free);
    
    //Sprite topino che esce dlla gabbia
    PP.assets.sprite.animation_add(topino, "locked", 0, 0, 15, 0);
    PP.assets.sprite.animation_add(topino, "free", 0, 8, 15, 0);
    PP.assets.sprite.animation_play(topino, "locked");
   
    PP.physics.set_immovable(topino, true);
    PP.physics.set_allow_gravity(topino, false);
}

//CAMMINATA NEMICI
function update_animals (s) {
 // movimento coniglio  
if (coniglio.geometry.x >= 6560) {
    PP.physics.set_velocity_x(coniglio, -250);
    coniglio.geometry.flip_x = false;
} 
else if (coniglio.geometry.x <= 5560) {
    PP.physics.set_velocity_x(coniglio, 250);
    coniglio.geometry.flip_x = true;
}

   //movimento topo 8060
   if (topo.geometry.x >= 8360) {
    PP.physics.set_velocity_x(topo, -250);
    topo.geometry.flip_x = false;
} 
else if (topo.geometry.x <= 7460) {
    PP.physics.set_velocity_x(topo, 250);
    topo.geometry.flip_x = true;
}

// movimento scimmia  
if (scimmia.geometry.x >= 9145) {
    PP.physics.set_velocity_x(scimmia, -280);
    scimmia.geometry.flip_x = true;
} 
else if (scimmia.geometry.x <= 8345) {
    PP.physics.set_velocity_x(scimmia, 280);
    scimmia.geometry.flip_x = false;
}

// movimento maiale 
if (maiale.geometry.x >= 6560) {
    PP.physics.set_velocity_x(maiale, -270);
    maiale.geometry.flip_x = true;
} 
else if (maiale.geometry.x <= 5160) {
    PP.physics.set_velocity_x(maiale, 270);
    maiale.geometry.flip_x = false;
}

// movimento scienziata  
if (scientist.geometry.x >= 7000) {
    PP.physics.set_velocity_x(scientist, -270);
    scientist.geometry.flip_x = true;
} 
else if (scientist.geometry.x <= 6210) {
    PP.physics.set_velocity_x(scientist, 270);
    scientist.geometry.flip_x = false;
}

// movimento scienziata2  
if (scientist2.geometry.x >= 9060) {
    PP.physics.set_velocity_x(scientist2, -270);
    scientist2.geometry.flip_x = true;
} 
else if (scientist2.geometry.x <= 7660) {
    PP.physics.set_velocity_x(scientist2, 270);
    scientist2.geometry.flip_x = false;
}

}

//Funzione del topolino liberato
function topino_free (s) {
    PP.assets.sprite.animation_play(topino, "free");
    congratulazioni = PP.assets.image.add(s, img_congratulazioni, 9150, 4795, 0, 0);
    congratulazioni.geometry.scale_x = 0.1;
    congratulazioni.geometry.scale_y = 0.1;
}

function destroy_animals (s) {

}