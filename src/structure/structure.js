let wall;
let verifica_floor;

function preload_structure(s) {

}

function create_structure(s) {
    //PAVIMENTO 1
    wall = PP.shapes.rectangle_add(s, 1150, 1870, 2100, 3000, "0xFF0000", 0); // Modifica colore per il debug
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    console.log (player);
    PP.physics.add_collider(s, player, wall);

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
    
    //-------SCALE------
    
    //SCALA 1
    wall = PP.shapes.rectangle_add(s, 1000, 320, 130, 30, "0xFF0000", 0); // Modifica colore per il debug
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);
    
    //------MURI----- 
    
    
    

}

function update_structure(s, player) {

}

function destroy_structure(s, player) {
    
}


