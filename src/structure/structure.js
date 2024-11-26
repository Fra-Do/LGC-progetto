let wall;
let verifica_floor;

function preload_structure(s) {

}

function collision_platform(s,player, platform) {
    player.is_on_platform = true;
}


function create_structure(s) {

    //PP.physics.add_collider(s, player, floor);
    //------PIATTAFORME STATICHE-----
    //MURO INIZIALE
    wall = PP.shapes.rectangle_add(s, 177, 300, 120, 250, "0xFF0000", 0); // Modifica colore per il debug
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);
    
    //------SOFFITTO-----
    //SOFFITTO
    wall = PP.shapes.rectangle_add(s, 1300, -72, 2476, 155, "0xFF0000", 0);
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);
    
    //------PIATTAFORMA 3------
    //3.1
    wall = PP.shapes.rectangle_add(s, 900, 1870, 1500, 3000, "0xFF0000", 0); // Modifica colore per il debug
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    console.log (player);
    PP.physics.add_collider(s, player, wall);

    //3.2
    wall = PP.shapes.rectangle_add(s, 918, 273, 168, 54, "0xFF0000", 0); // Modifica colore per il debug
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    //3.3
    wall = PP.shapes.rectangle_add(s, 918, 330, 326, 54, "0xFF0000", 0); // Modifica colore per il debug
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    //3.4
    wall = PP.shapes.rectangle_add(s, 1876, 233, 191, 37, "0xFF0000", 0); // Modifica colore per il debug
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    //3.5
    wall = PP.shapes.rectangle_add(s, 2210, 350, 191, 37, "0xFF0000", 0); // Modifica colore per il debug
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    //3.6
    wall = PP.shapes.rectangle_add(s, 2210, 789, 191, 37, "0xFF0000", 0); // Modifica colore per il debug
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    
    
    //------MURI----- 
    
    
    



    // piattaforma 4 
    wall = PP.shapes.rectangle_add(s, 2810, -60, 696, 1080, "0x0000FF", 0); // Modifica colore per il debug
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);
}

function update_structure(s, player) {
    collision_wall(s);

}

function destroy_structure(s, player) {
    
}






