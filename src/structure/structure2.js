let wall2;

let img_tubi;
let img_tubi_2;
let img_tubi_3;
let img_tubi_4;
let img_freccia;

let freccia;

function preload_structure2(s) {
    

}

function collision_platform(s,player, platform) {
    player.is_on_platform = true;
}

function goto_gameover(s) {
    PP.scenes.start("gameover");
}

function create_structure2(s) {


    //------PIATTAFORME STATICHE-----
    //SOFFITTO
    wall2 = PP.shapes.rectangle_add(s, 3800, 90, 7599, 170, "0x000000", 0); 
    PP.physics.add(s, wall2, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall2);

    //MURO INIZIALE
    wall2 = PP.shapes.rectangle_add(s, 160, 400, 222, 474, "0x000000", 0); 
    PP.physics.add(s, wall2, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall2);
   
    /* wall = PP.shapes.rectangle_add(s, 180, 200, 120, 340, "0x000000", 0); // Modifica colore per il debug
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);*/
    
    //PAVIMENTO 
    wall2 = PP.shapes.rectangle_add(s, 1500, 779, 2912, 395, "0x000000", 0); 
    PP.physics.add(s, wall2, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall2);

    //------PIATTAFORMA 8------
    wall2 = PP.shapes.rectangle_add(s, 5000, 2500, 2612, 870, "0x000000", 0); 
    PP.physics.add(s, wall2, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall2);


    //rettangolo acido 
    /*img_acid = PP.shapes.rectangle_add(s, 5500, 2300, 7543, 290, "0x000000", 0); 
    PP.physics.add(s, img_acid, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, img_acid, goto_gameover);*/
   
   
    



}

function update_structure2(s, player) {
    //collision_wall(s);

}

function destroy_structure2(s, player) {
    
}