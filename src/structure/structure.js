let wall;
let verifica_floor;
let img_acid;
let img_acid_2;
let img_acid_3;

function preload_structure(s) {
    img_acid = PP.assets.image.load(s, "assets/images/acid.png");
    img_acid_2 = PP.assets.image.load(s, "assets/images/acid_2.png");
    img_acid_3 = PP.assets.image.load(s, "assets/images/acid_3.png");
}

function collision_platform(s,player, platform) {
    player.is_on_platform = true;
}


function create_structure(s) {

    background = PP.assets.image.add(s, img_acid, 1652, 2190, 0, 0);
    background = PP.assets.image.add(s, img_acid_2, 7047, 2190, 0, 0);
    background = PP.assets.image.add(s, img_acid_3, 8450, 2190, 0, 0);

    //------PIATTAFORME STATICHE-----
    //MURO INIZIALE

    wall = PP.shapes.rectangle_add(s, 180, 200, 120, 340, "0xFF0000", 0); // Modifica colore per il debug
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);
    
    //------SOFFITTO-----
    //SOFFITTO (1)
    wall = PP.shapes.rectangle_add(s, 1300, -72, 2476, 155, "0xFF0000", 0);
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    // soffitto 2
    wall = PP.shapes.rectangle_add(s, 4700, -320, 3090, 255, "0xFF0000", 0);
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    //PAVIMENTO (2)
    wall = PP.shapes.rectangle_add(s, 5500, 2580, 8000, 230, "0x0000FF", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    //pavimento (2)
    wall = PP.shapes.rectangle_add(s, 9590, 2310, 775, 305, "0x0000FF", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);
   
   
    //------PIATTAFORMA 3------
    //3.1
    wall = PP.shapes.rectangle_add(s, 900, 1860, 1500, 3000, "0xFF0000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    console.log (player);
    PP.physics.add_collider(s, player, wall);

    //3.2
    wall = PP.shapes.rectangle_add(s, 918, 273, 168, 54, "0xFF0000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    //3.3
    wall = PP.shapes.rectangle_add(s, 918, 330, 326, 54, "0xFF0000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);
    
    //3.4
    wall = PP.shapes.rectangle_add(s, 1876, 233, 191, 37, "0xFF0000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    //3.5
    wall = PP.shapes.rectangle_add(s, 2210, 350, 191, 37, "0xFF0000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    //3.6
    wall = PP.shapes.rectangle_add(s, 2210, 789, 191, 37, "0xFF0000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    //3.7
    wall = PP.shapes.rectangle_add(s, 1900, 580, 191, 37, "0xFF0000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    //3.8
    wall = PP.shapes.rectangle_add(s, 1920, 950, 191, 37, "0xFF0000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);
    
    // PIATTAFORMA 4
    wall = PP.shapes.rectangle_add(s, 2810, 100, 696, 1080, "0x0000FF", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    //PIATTAFORMA 5
    wall = PP.shapes.rectangle_add(s, 2810, 1155, 696, 550, "0x0000FF", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    // 5.1
    wall = PP.shapes.rectangle_add(s, 2490, 1555, 55, 260, "0x0000FF", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);


    // 5.2
    wall = PP.shapes.rectangle_add(s, 2580, 1670, 220, 40, "0x0000FF", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    // 5.3
    wall = PP.shapes.rectangle_add(s, 3100, 1560, 110, 260, "0x0000FF", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    //PIATTAFORMA 6
    wall = PP.shapes.rectangle_add(s, 4850, 700, 1970, 880, "0x0000FF", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    //6.1
    wall = PP.shapes.rectangle_add(s, 4500, 80, 290, 40, "0x0000FF", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    //6.2
    wall = PP.shapes.rectangle_add(s, 6050, 770, 445, 185, "0x0000FF", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    //6.3
    wall = PP.shapes.rectangle_add(s, 6550, 1000, 810, 275, "0x0000FF", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    //6.4
    wall = PP.shapes.rectangle_add(s, 6200, 1350, 850, 410, "0x0000FF", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    //6.5
    wall = PP.shapes.rectangle_add(s, 4240, 1570, 450, 220, "0x0000FF", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    //6.6
    wall = PP.shapes.rectangle_add(s, 4920, 1570, 300, 220, "0x0000FF", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    //6.7
    wall = PP.shapes.rectangle_add(s, 12000, 1570, 400, 220, "0x0000FF", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    //6.8
    wall = PP.shapes.rectangle_add(s, 5570, 1570, 400, 220, "0x0000FF", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);


    //PIATTAFORMA 7
    //7.1
    wall = PP.shapes.rectangle_add(s, 6019, 220, 191, 37, "0xFF0000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    //7.2
    wall = PP.shapes.rectangle_add(s, 6250, 365, 191, 37, "0xFF0000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    //7.3
    wall = PP.shapes.rectangle_add(s, 8120, -40, 3764, 248, "0xFF0000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    //7.4
    wall = PP.shapes.rectangle_add(s, 9222, 610, 1556, 1090, "0xFF0000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    //7.5
    wall = PP.shapes.rectangle_add(s, 8090, 795, 746, 714, "0xFF0000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    //7.6
    wall = PP.shapes.rectangle_add(s, 7185, 500, 1055, 125, "0xFF0000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    //7.7
    wall = PP.shapes.rectangle_add(s, 6560, 530, 207, 58, "0xFF0000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    //7.6
    wall = PP.shapes.rectangle_add(s, 9890, 1520, 160, 750, "0x0000FF", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);


    //PIATTAFORMA 8
    wall = PP.shapes.rectangle_add(s, 6240, 2300, 1620, 325, "0x0000FF", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    //8.1
    wall = PP.shapes.rectangle_add(s, 6760, 2080, 575, 120, "0x0000FF", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    //8.2
    wall = PP.shapes.rectangle_add(s, 6850, 1950, 400, 130, "0x0000FF", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    //8.3
    wall = PP.shapes.rectangle_add(s, 6950, 1820, 210, 140, "0x0000FF", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);


    //PIATTAFORMA 9
    wall = PP.shapes.rectangle_add(s, 8080, 1965, 720, 985, "0x0000FF", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    //SPRUZZINI
    //superiori
    wall = PP.shapes.rectangle_add(s, 7096, 110, 124, 43, "0x0000FF", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    wall = PP.shapes.rectangle_add(s, 7430, 110, 124, 43, "0x0000FF", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);
   
    //inferiori
    wall = PP.shapes.rectangle_add(s, 6900, 416, 124, 43, "0x0000FF", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    wall = PP.shapes.rectangle_add(s, 7252, 416, 124, 43, "0x0000FF", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    wall = PP.shapes.rectangle_add(s, 7585, 416, 124, 43, "0x0000FF", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);


    //OGGETTI
    //KIT
    //kit 1
    wall = PP.shapes.rectangle_add(s, 1368, 347, 35, 30, "0xFF0000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    //kit 2
    wall = PP.shapes.rectangle_add(s, 5580, 1450, 35, 30, "0xFF0000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    //kit 3
    wall = PP.shapes.rectangle_add(s, 8090, 1443, 35, 30, "0xFF0000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    //pergamena
    wall = PP.shapes.rectangle_add(s, 1630, 347, 35, 30, "0xFF0000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    //Chiave
    wall = PP.shapes.rectangle_add(s, 9460, 2126, 35, 30, "0xFF0000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);



}

function update_structure(s, player) {
    collision_wall(s);

}

function destroy_structure(s, player) {
    
}






