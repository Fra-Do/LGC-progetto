let wall;
let img_acid;
let img_acid_2;
let img_acid_3;

let acid;

let img_tubi;
let img_tubi_2;
let img_tubi_3;
let img_tubi_4;




function preload_structure(s) {
    //Acido gameover
    img_acid   = PP.assets.image.load(s, "assets/images/struttura/acid.png");
    img_acid_2 = PP.assets.image.load(s, "assets/images/struttura/acid_2.png");
    img_acid_3 = PP.assets.image.load(s, "assets/images/struttura/acid_3.png");

    //Tubi statici
    img_tubi   = PP.assets.image.load(s, "assets/images/struttura/tubo_st_1.png");
    img_tubi_2 = PP.assets.image.load(s, "assets/images/struttura/tubo_st_2.png");
    img_tubi_3 = PP.assets.image.load(s, "assets/images/struttura/tubo_st_3.png");
}

function collision_platform(s,player, platform) {
    player.is_on_platform = true;
}

//FUNZIONE DI GAMEOVER QUANDO SI COLLIDE CON L'ACIDO
function goto_gameover(s) {
    PP.scenes.start("gameover");
}

function create_structure(s) {
    background = PP.assets.image.add(s, img_acid, 1652, 2190, 0, 0);
    background = PP.assets.image.add(s, img_acid_2, 7047, 2190, 0, 0);
    background = PP.assets.image.add(s, img_acid_3, 8450, 2190, 0, 0);
   
    //Tubi statici
    background = PP.assets.image.add(s, img_tubi, 1785, 213, 0, 0);
    background = PP.assets.image.add(s, img_tubi, 2120, 330, 0, 0);
    background = PP.assets.image.add(s, img_tubi, 1795, 560, 0, 0);
    background = PP.assets.image.add(s, img_tubi, 2120, 770, 0, 0);
    background = PP.assets.image.add(s, img_tubi, 1830, 930, 0, 0);
    background = PP.assets.image.add(s, img_tubi_2, 5930, 200, 0, 0);
    background = PP.assets.image.add(s, img_tubi_2, 6150-10, 345, 0, 0);


    //------PIATTAFORME STATICHE-----
    //MURO INIZIALE

    wall = PP.shapes.rectangle_add(s, 180, 200, 120, 340, "0x000000", 0); // Modifica colore per il debug
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);
    
    //------SOFFITTO-----
    //SOFFITTO (1)
    wall = PP.shapes.rectangle_add(s, 1300, -72, 2476, 155, "0x000000", 0);
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    // soffitto 2
    wall = PP.shapes.rectangle_add(s, 4700, -300, 3090, 255, "0x000000", 0);
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    //PAVIMENTO (2)
    wall = PP.shapes.rectangle_add(s, 5700, 2630, 8000, 360, "0x000000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);


    //pavimento (2)
    wall = PP.shapes.rectangle_add(s, 9440, 2273, 520, 300, "0x000000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);


    //ACIDO GAMEOVER
    img_acid = PP.shapes.rectangle_add(s, 5500, 2300, 7543, 290, "0x000000", 0); 
    PP.physics.add(s, img_acid, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, img_acid, goto_gameover);
   
    //------PIATTAFORMA 3------
    //3.1
    wall = PP.shapes.rectangle_add(s, 900, 1860, 1500, 3000, "0x000000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    //3.2
    wall = PP.shapes.rectangle_add(s, 918, 273, 168, 54, "0x000000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    //3.3
    wall = PP.shapes.rectangle_add(s, 918, 330, 326, 54, "0x000000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);
    
    //3.4
    wall = PP.shapes.rectangle_add(s, 1876+30, 233+35, 190, 66, "0x000000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    //3.5 
    wall = PP.shapes.rectangle_add(s, 2210+30, 350+35, 190, 66, "0x000000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    //3.6
    wall = PP.shapes.rectangle_add(s, 2210+30, 789+35, 190, 66, "0x000000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    //3.7
    wall = PP.shapes.rectangle_add(s, 1900+15, 580+35, 190, 66, "0x000000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    //3.8
    wall = PP.shapes.rectangle_add(s, 1920+30, 950+35, 190, 66, "0x000000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);
    
    // PIATTAFORMA 4
    wall = PP.shapes.rectangle_add(s, 2810, 95, 696, 1080, "0x000000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    //PIATTAFORMA 5
    wall = PP.shapes.rectangle_add(s, 2810, 1150, 696, 550, "0x000000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    // 5.1
    wall = PP.shapes.rectangle_add(s, 2500, 1555, 55, 260, "0x000000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);


    // 5.2
    wall = PP.shapes.rectangle_add(s, 2590, 1640, 220, 40, "0x000000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    // 5.3
    wall = PP.shapes.rectangle_add(s, 3080, 1550, 140, 260, "0x000000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    //PP.physics.add_collider(s, player, wall);

    //PIATTAFORMA 6
    wall = PP.shapes.rectangle_add(s, 4845, 700, 1970, 880, "0x000000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    //6.1
    wall = PP.shapes.rectangle_add(s, 4500, 90, 290, 40, "0x000000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    //6.2
    wall = PP.shapes.rectangle_add(s, 6050, 765, 445, 185, "0x000000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    //6.3
    wall = PP.shapes.rectangle_add(s, 6530, 985, 810, 275, "0x000000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    //6.4
    wall = PP.shapes.rectangle_add(s, 6190, 1320, 850, 410, "0x000000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    //6.5/
    wall = PP.shapes.rectangle_add(s, 4235, 1555, 460, 220, "0x000000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    //6.6
    wall = PP.shapes.rectangle_add(s, 4910, 1555, 320, 220, "0x000000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    //6.7 
    wall = PP.shapes.rectangle_add(s, 12000, 1560, 400, 220, "0x000000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    //6.8
    wall = PP.shapes.rectangle_add(s, 5570, 1555, 400, 220, "0x000000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);


    //PIATTAFORMA 7
    //7.1
    wall = PP.shapes.rectangle_add(s, 6020+25, 220+15, 198, 39, "0x000000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    //7.2
    wall = PP.shapes.rectangle_add(s, 6250+5, 365+15, 198, 39, "0x000000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    //7.3
    wall = PP.shapes.rectangle_add(s, 8120, -25, 3764, 248, "0x000000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    //7.4
    /*wall = PP.shapes.rectangle_add(s, 9222, 610, 1556, 1090, "0x000000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);*/

    //7.5
    wall = PP.shapes.rectangle_add(s, 8080, 795, 746, 714, "0x000000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    //7.6
    wall = PP.shapes.rectangle_add(s, 7185, 500, 1055, 125, "0x000000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    //7.7
    wall = PP.shapes.rectangle_add(s, 6560, 530, 207, 58, "0x000000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    //7.6
    wall = PP.shapes.rectangle_add(s, 9990+50, 3220, 160, 4200, "0x000000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);


    //PIATTAFORMA 8
    wall = PP.shapes.rectangle_add(s, 6230, 2265, 1620, 325, "0x000000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    //8.1
    wall = PP.shapes.rectangle_add(s, 6755, 2050, 575, 120, "0x000000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    //8.2
    wall = PP.shapes.rectangle_add(s, 6840, 1920, 400, 130, "0x000000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    //8.3
    wall = PP.shapes.rectangle_add(s, 6935, 1790, 210, 140, "0x000000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);


    //PIATTAFORMA 9
    wall = PP.shapes.rectangle_add(s, 8080, 1945, 720, 985, "0x000000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    //SPRUZZINI
    //superiori
    wall = PP.shapes.rectangle_add(s, 7096, 110, 124, 43, "0x000000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    wall = PP.shapes.rectangle_add(s, 7430, 110, 124, 43, "0x000000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);
   
    //inferiori
    wall = PP.shapes.rectangle_add(s, 6900, 416, 124, 43, "0x000000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    wall = PP.shapes.rectangle_add(s, 7252, 416, 124, 43, "0x000000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    wall = PP.shapes.rectangle_add(s, 7585, 416, 124, 43, "0x000000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    //EX LIVELLO 2 
    // BLOCCO A
    wall = PP.shapes.rectangle_add(s, 8885, 3100, 1630, 580, "0x000000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    // BLOCCO B 
    wall = PP.shapes.rectangle_add(s, 8990, 3885, 1980, 295, "0x000000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    // BLOCCO C
    wall = PP.shapes.rectangle_add(s, 9350, 4300, 1360, 530, "0x000000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    // BLOCCO D
    wall = PP.shapes.rectangle_add(s, 6610, 3585, 1540, 880, "0x000000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    // BLOCCO E
    wall = PP.shapes.rectangle_add(s, 7500, 4720, 5020, 325, "0x000000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    // BLOCCO F
    wall = PP.shapes.rectangle_add(s, 4540, 4050, 430, 2500, "0x000000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);
    
    // BLOCCO pavimento
    wall = PP.shapes.rectangle_add(s, 7400, 5255, 5300, 130, "0x000000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    //piattaforme statiche gruppo 1 
    wall = PP.shapes.rectangle_add(s, 7845, 3535, 190, 60, "0x000000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    wall = PP.shapes.rectangle_add(s, 7590, 3310, 190, 60, "0x000000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    //piattaforme statiche gruppo 2
    wall = PP.shapes.rectangle_add(s, 5575, 3140, 155, 88, "0x000000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    wall = PP.shapes.rectangle_add(s, 5180, 3300, 155, 88, "0x000000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    wall = PP.shapes.rectangle_add(s, 5440, 3605, 155, 88, "0x000000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    wall = PP.shapes.rectangle_add(s, 5075, 3825, 155, 88, "0x000000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    wall = PP.shapes.rectangle_add(s, 5510, 4185, 390, 82, "0x000000", 0); 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall); 
}

function update_structure(s, player) {
    

}

function destroy_structure(s, player) {
    
}






