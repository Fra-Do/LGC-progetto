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


function preload_animals (s) {
    img_coniglio   = PP.assets.sprite.load_spritesheet(s, "assets/images/personaggi/ss_coniglio2.png", 110.6, 90);
    img_topo       = PP.assets.sprite.load_spritesheet(s, "assets/images/personaggi/ss_topo.png", 198, 65);
    img_scimmia    = PP.assets.sprite.load_spritesheet(s, "assets/images/personaggi/ss_scimmia.png", 248, 125);
    img_maiale     = PP.assets.sprite.load_spritesheet(s, "assets/images/personaggi/ss_maiale.png", 171, 87);
    img_scientist  = PP.assets.sprite.load_spritesheet(s, "assets/images/personaggi/ss_scientist.png", 94, 170);

}

function goto_gameover (s) {
    PP.scenes.start("gameover");
}
function create_animals (s) {
    // CONIGLIO
    coniglio = PP.assets.sprite.add(s, img_coniglio, 400, 350, 0.5, 1); 
    PP.physics.add(s, coniglio, PP.physics.type.DYNAMIC);
    coniglio.geometry.flip_x = true;

    //PP.physics.add_collider_f(s, coniglio, player, goto_gameover);

    PP.assets.sprite.animation_add(coniglio, "walk", 0, 10, 15, -1);
    PP.assets.sprite.animation_play(coniglio, "walk");

    PP.physics.set_velocity_x(coniglio, 250);
    PP.physics.set_immovable(coniglio, true);
    PP.physics.set_allow_gravity(coniglio, false); 

    //TOPO
    topo = PP.assets.sprite.add(s, img_topo, 800, 350, 0.5, 1); 
    PP.physics.add(s, topo, PP.physics.type.DYNAMIC);
    topo.geometry.flip_x = true;

    //PP.physics.add_collider_f(s, topo, player, goto_gameover);

    PP.assets.sprite.animation_add(topo, "walk", 0, 5, 8, -1);
    PP.assets.sprite.animation_play(topo, "walk");

    PP.physics.set_velocity_x(topo, 250);
    PP.physics.set_immovable(topo, true);
    PP.physics.set_allow_gravity(topo, false); 

    //SCIMMIA
    scimmia = PP.assets.sprite.add(s, img_scimmia, 8345, 3735, 0.5, 1); 
    PP.physics.add(s, scimmia, PP.physics.type.DYNAMIC);
    scimmia.geometry.flip_x = true;

    //PP.physics.add_collider_f(s, topo, player, goto_gameover);

    PP.assets.sprite.animation_add(scimmia, "walk", 0, 6, 8, -1);
    PP.assets.sprite.animation_play(scimmia, "walk");

    PP.physics.set_velocity_x(scimmia, 280);
    PP.physics.set_immovable(scimmia, true);
    PP.physics.set_allow_gravity(scimmia, false);

    //MAIALE
    maiale = PP.assets.sprite.add(s, img_maiale, 800, 350, 0.5, 1); 
    PP.physics.add(s, maiale, PP.physics.type.DYNAMIC);
    maiale.geometry.flip_x = true;

    //PP.physics.add_collider_f(s, topo, player, goto_gameover);

    PP.assets.sprite.animation_add(maiale, "walk", 0, 8, 8, -1);
    PP.assets.sprite.animation_play(maiale, "walk");

    PP.physics.set_velocity_x(maiale, 250);
    PP.physics.set_immovable(maiale, true);
    PP.physics.set_allow_gravity(maiale, false);

    //SCIENZIATA
    scientist = PP.assets.sprite.add(s, img_scientist, 6120, 3025, 0.5, 1); 
    PP.physics.add(s, scientist, PP.physics.type.DYNAMIC);
    scientist.geometry.flip_x = true;

    //PP.physics.add_collider_f(s, topo, player, goto_gameover);

    PP.assets.sprite.animation_add(scientist, "walk", 0, 5, 8, -1);
    PP.assets.sprite.animation_play(scientist, "walk");

    PP.physics.set_velocity_x(scientist, 250);
    PP.physics.set_immovable(scientist, true);
    PP.physics.set_allow_gravity(scientist, false);
}

function update_animals (s) {
     // movimento coniglio 
    if (coniglio.geometry.x >= 1000) {
        PP.physics.set_velocity_x(coniglio, -250);
        coniglio.geometry.flip_x = false;
   } 
    else if (coniglio.geometry.x <= 0) {
        PP.physics.set_velocity_x(coniglio, 250);
        coniglio.geometry.flip_x = true;
   }

   //movimento topo 
   if (topo.geometry.x >= 1500) {
    PP.physics.set_velocity_x(topo, -250);
    topo.geometry.flip_x = false;
} 
else if (topo.geometry.x <= 500) {
    PP.physics.set_velocity_x(topo, 250);
    topo.geometry.flip_x = true;
}

// movimento scimmia  7845, 3535
if (scimmia.geometry.x >= 9145) {
    PP.physics.set_velocity_x(scimmia, -280);
    scimmia.geometry.flip_x = true;
} 
else if (scimmia.geometry.x <= 8345) {
    PP.physics.set_velocity_x(scimmia, 280);
    scimmia.geometry.flip_x = false;
}

// movimento maiale
if (maiale.geometry.x >= 6120) {
    PP.physics.set_velocity_x(maiale, -250);
    maiale.geometry.flip_x = false;
} 
else if (maiale.geometry.x <= 0) {
    PP.physics.set_velocity_x(maiale, 250);
    maiale.geometry.flip_x = true;
}

// movimento scienziata
if (scientist.geometry.x >= 5800) {
    PP.physics.set_velocity_x(scientist, -250);
    scientist.geometry.flip_x = true;
} 
else if (scientist.geometry.x <= 6500) {
    PP.physics.set_velocity_x(scientist, 250);
    scientist.geometry.flip_x = false;
}
}

function destroy_animals (s) {

}