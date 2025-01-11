let img_coniglio;
let coniglio;

let img_topo;
let topo;


function preload_animals (s) {
    img_coniglio = PP.assets.sprite.load_spritesheet(s, "assets/images/personaggi/ss_coniglio2.png", 110.6, 90);
    img_topo = PP.assets.sprite.load_spritesheet(s, "assets/images/personaggi/ss_topo.png", 198, 65);
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

    //PP.physics.add_collider_f(s, coniglio, player, goto_gameover);

    PP.assets.sprite.animation_add(topo, "walk", 0, 5, 8, -1);
    PP.assets.sprite.animation_play(topo, "walk");

    PP.physics.set_velocity_x(topo, 250);
    PP.physics.set_immovable(topo, true);
    PP.physics.set_allow_gravity(topo, false); 
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
}

function destroy_animals (s) {

}