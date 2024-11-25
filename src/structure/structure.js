let wall;
let verifica_floor;

function preload_structure(s) {


}

function collision_floor(s, player, floor) {
    verifica_floor = true;
    console.log ("collisione struttura");
}

function create_structure(s, player) {
    //------PIATTAFORME STATICHE-----
    //------PIATTAFORMA 2-----
    wall = PP.shapes.rectangle_add(s, 900, 325, 78, 18, "0xFF0000", 0); // Modifica colore per il debug
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);
    //------PIATTAFORMA 1-----
    wall = PP.shapes.rectangle_add(s, 759, 280, 78, 18, "0xFF0000", 0); // Modifica colore per il debug
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);
    
    
    //------SOFFITTO-----
    //SOFFITTO
    wall = PP.shapes.rectangle_add(s, 252, 150, 1920, 72.9117, "0xFF0000", 0);
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);
    
    //-------SCALE------
    //SCALA 2
    wall = PP.shapes.rectangle_add(s, 375, 300, 70, 30, "0xFF0000", 0); // Modifica colore per il debug
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);
    
    //SCALA 1
    wall = PP.shapes.rectangle_add(s, 370, 320, 130, 30, "0xFF0000", 0); // Modifica colore per il debug
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);
    
    //------MURI----- 
    //MURO SX
    wall = PP.shapes.rectangle_add(s, 38, 250, 120, 160, "0xFF0000", 0); // Modifica colore per il debug
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);
    
    
    //PAVIMENTO 1
    wall = PP.shapes.rectangle_add(s, 38, 410, 1270, 160, "0xFF0000", 0); // Modifica colore per il debug
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    

    //console.log("Muro sx creato a:", 38, 500, "con larghezza 300 e altezza 80");

}

PP.scenes.add("structure", preload, create, update, destroy);