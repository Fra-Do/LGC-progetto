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
    wall = PP.shapes.rectangle_add(s, 180, 200, 120, 340, "0xFF0000", 0); // Modifica colore per il debug
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);
    
    //------SOFFITTO-----
    //SOFFITTO
    wall = PP.shapes.rectangle_add(s, 1300, -72, 2476, 155, "0xFF0000", 0);
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);
    
    //------PIATTAFORMA 3------
    //3.2
    wall = PP.shapes.rectangle_add(s, 918, 273, 168, 54, "0xFF0000", 0); // Modifica colore per il debug
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    //3.3
    wall = PP.shapes.rectangle_add(s, 918, 330, 326, 54, "0xFF0000", 0); // Modifica colore per il debug
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    //3.1
    wall = PP.shapes.rectangle_add(s, 900, 1870, 1500, 3000, "0xFF0000", 0); // Modifica colore per il debug
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    console.log (player);
    PP.physics.add_collider(s, player, wall);
    
    //------MURI----- 
    
    
    



    // piattaforma 4 
    wall = PP.shapes.rectangle_add(s, 2810, 100, 696, 1080, "0x0000FF", 0); // Modifica colore per il debug
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);


    //piattaforma 5
    wall = PP.shapes.rectangle_add(s, 2810, 1155, 696, 550, "0x0000FF", 0); // Modifica colore per il debug
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);


    //piattaforma 5.1
    wall = PP.shapes.rectangle_add(s, 2490, 1555, 55, 260, "0x0000FF", 0); // Modifica colore per il debug
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);


    //piattaforma 5.2
    wall = PP.shapes.rectangle_add(s, 2580, 1670, 220, 40, "0x0000FF", 0); // Modifica colore per il debug
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    //piattaforma 5.3
    wall = PP.shapes.rectangle_add(s, 3100, 1560, 110, 260, "0x0000FF", 0); // Modifica colore per il debug
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);


}

function update_structure(s, player) {
    collision_wall(s);

}

function destroy_structure(s, player) {
    
}






