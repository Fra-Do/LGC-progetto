let wall;
let verifica_floor;

function preload_structure(s) {

}

function collision_platform(s,player, platform) {
    player.is_on_platform = true;
}


function create_structure(s) {

    PP.physics.add_collider(s, player, floor);
    //------PIATTAFORME STATICHE-----
    //MURO INIZIALE
    wall = PP.shapes.rectangle_add(s, 1060, 317, 120, 250, "0xFF0000", 0); // Modifica colore per il debug
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
    wall = PP.shapes.rectangle_add(s, 1150, 1870, 2100, 3000, "0xFF0000", 0); // Modifica colore per il debug
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    console.log (player);
    PP.physics.add_collider(s, player, wall);
    
    //------MURI----- 
    
    
    

}

function update_structure(s, player) {

}

function destroy_structure(s, player) {
    
}


