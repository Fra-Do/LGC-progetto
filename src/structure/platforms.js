let img_pl1;
let img_diagonal;
let img_pl3;
let img_spuntoni;
let img_pl5d;
let img_pl5s;

let pl_1;
let pl_3;
let platforms;

let pl_1_speed = 250;
let pl_2_speed = 150;
let pl_3_speed = 250;
let pl_4_speed = 100;
let pl_5_speed = 100;
let pl_7_speed = 400;
let pl_8_speed = 350;


function preload_platforms(s) {
    img_pl1      = PP.assets.image.load(s, "assets/images/tubo_mob_1.png");
    img_diagonal = PP.assets.image.load(s, "assets/images/tubo_mob_2.png");
    img_pl3      = PP.assets.image.load(s, "assets/images/tubo_mob_3.png");
    img_spuntoni = PP.assets.image.load(s, "assets/images/tubo_mob_4.png");
    img_pl5d      = PP.assets.image.load(s, "assets/images/movable_5d.png");
    img_pl5s      = PP.assets.image.load(s, "assets/images/movable_05s.png");
    img_pl8       = PP.assets.image.load(s, "assets/images/tubo_mob_8.png");
    img_pl7       = PP.assets.image.load(s, "assets/images/tubo_mob_7.png");


}

function collision_platform(s, player, platforms) {
    player.is_on_platform = true;
}

function create_platforms(s) {
    // Piattaforma mobile

    //piattaforme gruppo 1
    //1.1
    pl_1 = PP.assets.image.add(s, img_pl1, 3260-30, 200, 0, 0);
    PP.physics.add(s, pl_1, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(pl_1, true);
    PP.physics.set_allow_gravity(pl_1, false);    
    PP.physics.add_collider_f(s, player, pl_1, collision_platform);
    PP.physics.set_velocity_y(pl_1, pl_1_speed);

    //1.2
    pl_1_2 = PP.assets.image.add(s, img_pl1, 3500-60, 630, 0, 0);
    PP.physics.add(s, pl_1_2, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(pl_1_2, true);
    PP.physics.set_allow_gravity(pl_1_2, false);    
    PP.physics.add_collider_f(s, player, pl_1_2, collision_platform);
    PP.physics.set_velocity_y(pl_1_2, pl_1_speed);

    //1.3
    pl_1_3 = PP.assets.image.add(s, img_pl1, 3720-60, 900, 0, 0);
    PP.physics.add(s, pl_1_3, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(pl_1_3, true);
    PP.physics.set_allow_gravity(pl_1_3, false);    
    PP.physics.add_collider_f(s, player, pl_1_3, collision_platform);
    PP.physics.set_velocity_y(pl_1_3, pl_1_speed);

    //-----------------------------------------------------------------------------
    //piattaforma gruppo 2 (diagonale)
    pl_2 = PP.assets.image.add(s, img_diagonal, 3250, 2080, 0, 0);
    PP.physics.add(s, pl_2, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(pl_2, true);
    PP.physics.set_allow_gravity(pl_2, false);    
    PP.physics.add_collider_f(s, player, pl_2, collision_platform);
    PP.physics.set_velocity_x(pl_2, pl_2_speed);
    PP.physics.set_velocity_y(pl_2, pl_2_speed);

    //-----------------------------------------------------------------------------


    //piattaforma gruppo 3
    pl_3 = PP.assets.image.add(s, img_pl3, 3700, 2130, 0, 0);
    
    //pl_3 = PP.shapes.rectangle_add(s, //img_pl1, 3700, 2130, 410, 65, "0xFF0000", 0);
    PP.physics.add(s, pl_3, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(pl_3, true);
    PP.physics.set_allow_gravity(pl_3, false);    
    PP.physics.add_collider_f(s, player, pl_3, collision_platform);
    PP.physics.set_velocity_x(pl_3, pl_3_speed);

    // piattaforme gruppo 4 (spuntoni)
    // primo gruppo
    //4.1
    pl_4_1 = PP.assets.image.add(s, img_spuntoni, 3970-10, 350, 0, 0); 
    //pl_4_1 = PP.shapes.rectangle_add(s, 3970, 350, 30, 150, "0xFF0000", 0);
    PP.physics.add(s, pl_4_1, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(pl_4_1, true);
    PP.physics.set_allow_gravity(pl_4_1, false);    
    PP.physics.add_collider_f(s, player, pl_4_1, collision_platform);
    PP.physics.set_velocity_y(pl_4_1, pl_4_speed);
    
    //4.2
    pl_4_2 = PP.assets.image.add(s, img_spuntoni, 4015-10, 250, 0, 0); 
    PP.physics.add(s, pl_4_2, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(pl_4_2, true);
    PP.physics.set_allow_gravity(pl_4_2, false);    
    PP.physics.add_collider_f(s, player, pl_4_2, collision_platform);
    PP.physics.set_velocity_y(pl_4_2, pl_4_speed);

    //4.3
    pl_4_3 = PP.assets.image.add(s, img_spuntoni, 4060-10, 300, 0, 0); 
    PP.physics.add(s, pl_4_3, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(pl_4_3, true);
    PP.physics.set_allow_gravity(pl_4_3, false);    
    PP.physics.add_collider_f(s, player, pl_4_3, collision_platform);
    PP.physics.set_velocity_y(pl_4_3, pl_4_speed);

    //4.4
    pl_4_4 = PP.assets.image.add(s, img_spuntoni, 4105-10, 220, 0, 0); 
    PP.physics.add(s, pl_4_4, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(pl_4_4, true);
    PP.physics.set_allow_gravity(pl_4_4, false);    
    PP.physics.add_collider_f(s, player, pl_4_4, collision_platform);
    PP.physics.set_velocity_y(pl_4_4, pl_4_speed);

    //4.5
    pl_4_5 = PP.assets.image.add(s, img_spuntoni, 4150-10, 340, 0, 0); 
    PP.physics.add(s, pl_4_5, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(pl_4_5, true);
    PP.physics.set_allow_gravity(pl_4_5, false);    
    PP.physics.add_collider_f(s, player, pl_4_5, collision_platform);
    PP.physics.set_velocity_y(pl_4_5, pl_4_speed);

    //secondo gruppo
    //4.6
    pl_4_6 = PP.assets.image.add(s, img_spuntoni, 4740-20, 340, 0, 0);
    PP.physics.add(s, pl_4_6, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(pl_4_6, true);
    PP.physics.set_allow_gravity(pl_4_6, false);    
    PP.physics.add_collider_f(s, player, pl_4_6, collision_platform);
    PP.physics.set_velocity_y(pl_4_6, pl_4_speed);
    
    //4.7
    pl_4_7 = PP.assets.image.add(s, img_spuntoni, 4785-20, 220, 0, 0);
    PP.physics.add(s, pl_4_7, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(pl_4_7, true);
    PP.physics.set_allow_gravity(pl_4_7, false);    
    PP.physics.add_collider_f(s, player, pl_4_7, collision_platform);
    PP.physics.set_velocity_y(pl_4_7, pl_4_speed);

    //4.8
    pl_4_8 = PP.assets.image.add(s, img_spuntoni, 4830-20, 300, 0, 0);
    PP.physics.add(s, pl_4_8, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(pl_4_8, true);
    PP.physics.set_allow_gravity(pl_4_8, false);    
    PP.physics.add_collider_f(s, player, pl_4_8, collision_platform);
    PP.physics.set_velocity_y(pl_4_8, pl_4_speed);

    //4.9
    pl_4_9 = PP.assets.image.add(s, img_spuntoni, 4875-20, 250, 0, 0);
    PP.physics.add(s, pl_4_9, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(pl_4_9, true);
    PP.physics.set_allow_gravity(pl_4_9, false);    
    PP.physics.add_collider_f(s, player, pl_4_9, collision_platform);
    PP.physics.set_velocity_y(pl_4_9, pl_4_speed);

    //4.10
    pl_4_10 = PP.assets.image.add(s, img_spuntoni, 4920-20, 350, 0, 0);
    PP.physics.add(s, pl_4_10, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(pl_4_10, true);
    PP.physics.set_allow_gravity(pl_4_10, false);    
    PP.physics.add_collider_f(s, player, pl_4_10, collision_platform);
    PP.physics.set_velocity_y(pl_4_10, pl_4_speed);

    
    //piattaforma gruppo 5
    //5.1
    pl_5_1 = PP.assets.image.add(s, img_pl5s, 4540, 1505, 0, 0);
    PP.physics.add(s, pl_5_1, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(pl_5_1, true);
    PP.physics.set_allow_gravity(pl_5_1, false);    
    PP.physics.add_collider_f(s, player, pl_5_1, collision_platform);
    PP.physics.set_velocity_x(pl_5_1, pl_5_speed);

    //5.2
    pl_5_2 = PP.assets.image.add(s, img_pl5d, 4690, 1505, 0, 0);
    PP.physics.add(s, pl_5_2, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(pl_5_2, true);
    PP.physics.set_allow_gravity(pl_5_2, false);    
    PP.physics.add_collider_f(s, player, pl_5_2, collision_platform);
    PP.physics.set_velocity_x(pl_5_2, pl_5_speed);

    //5.3
    pl_5_3 = PP.assets.image.add(s, img_pl5s, 5140, 1505, 0, 0);
    PP.physics.add(s, pl_5_3, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(pl_5_3, true);
    PP.physics.set_allow_gravity(pl_5_3, false);    
    PP.physics.add_collider_f(s, player, pl_5_3, collision_platform);
    PP.physics.set_velocity_x(pl_5_3, pl_5_speed);

    //5.4
    pl_5_4 = PP.assets.image.add(s, img_pl5d, 5290, 1505, 0, 0);
    PP.physics.add(s, pl_5_4, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(pl_5_4, true);
    PP.physics.set_allow_gravity(pl_5_4, false);    
    PP.physics.add_collider_f(s, player, pl_5_4, collision_platform);
    PP.physics.set_velocity_x(pl_5_4, pl_5_speed);

    // piattaforme guuppo 6 --> animazioni acido spruzzato

    //piattaforme gruppo 7
    //7.1
    pl_7_1 = PP.assets.image.add(s, img_pl7, 7900, 100, 0, 0);
    PP.physics.add(s, pl_7_1, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(pl_7_1, true);
    PP.physics.set_allow_gravity(pl_7_1, false);    
    PP.physics.add_collider_f(s, player, pl_7_1, collision_platform);
    PP.physics.set_velocity_y(pl_7_1, pl_7_speed);

    //7.2
    pl_7_2 = PP.assets.image.add(s, img_pl7, 8300, -200, 0, 0);
    PP.physics.add(s, pl_7_2, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(pl_7_2, true);
    PP.physics.set_allow_gravity(pl_7_2, false);    
    PP.physics.add_collider_f(s, player, pl_7_2, collision_platform);
    PP.physics.set_velocity_y(pl_7_2, pl_7_speed);

    //Piattaforme gruppo 8
    //8.1
    pl_8_1 = PP.assets.image.add(s, img_pl8, 7175, 416, 0, 0);
    PP.physics.add(s, pl_8_1, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(pl_8_1, true);
    PP.physics.set_allow_gravity(pl_8_1, false);    
    PP.physics.add_collider_f(s, player, pl_8_1, collision_platform);
    PP.physics.set_velocity_y(pl_8_1, pl_8_speed);

    //8.2
    pl_8_2 = PP.assets.image.add(s, img_pl8, 8550, 1500, 0, 0);
    PP.physics.add(s, pl_8_2, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(pl_8_2, true);
    PP.physics.set_allow_gravity(pl_8_2, false);    
    PP.physics.add_collider_f(s, player, pl_8_2, collision_platform);
    PP.physics.set_velocity_y(pl_8_2, pl_8_speed);

    
}

function update_platforms(s) {
    //piattaforme gruppo 1
    //1.1
    if(pl_1.geometry.y >= 1500) {
        PP.physics.set_velocity_y(pl_1, -pl_1_speed);
    }
    else if(pl_1.geometry.y <= 200) {
        PP.physics.set_velocity_y(pl_1, pl_1_speed);
    }

    // 1.2
    if(pl_1_2.geometry.y >= 1500) {
        PP.physics.set_velocity_y(pl_1_2, -pl_1_speed);
    }
    else if(pl_1_2.geometry.y <= 200) {
        PP.physics.set_velocity_y(pl_1_2, pl_1_speed);
    }
    
    //1.3
    if(pl_1_3.geometry.y >= 1500) {
        PP.physics.set_velocity_y(pl_1_3, -pl_1_speed);
    }
    else if(pl_1_3.geometry.y <= 200) {
        PP.physics.set_velocity_y(pl_1_3, pl_1_speed);
    }

    
    //piattaforme gruppo 2      
    if(pl_2.geometry.x >= 3250) {
        PP.physics.set_velocity_x(pl_2, -pl_2_speed);
    }
    else if(pl_2.geometry.x <= 2800) {
        PP.physics.set_velocity_x(pl_2, pl_2_speed);
    }

    if(pl_2.geometry.y >= 2080) {
        PP.physics.set_velocity_y(pl_2, -pl_2_speed);
    }
    else if(pl_2.geometry.y <= 2080-450) {
        PP.physics.set_velocity_y(pl_2, pl_2_speed);
    }


    //piattaforme gruppo 3
    if(pl_3.geometry.x >= 5000) {
        PP.physics.set_velocity_x(pl_3, -pl_3_speed);
    }
    else if(pl_3.geometry.x <= 3700) {
        PP.physics.set_velocity_x(pl_3, pl_3_speed);
    }

// piattaforme gruppo 4 (spuntoni)
    // primo gruppo 
    //4.1
    if(pl_4_1.geometry.y >= 340-100) {
        PP.physics.set_velocity_y(pl_4_1, -pl_4_speed);
    }
    else if(pl_4_1.geometry.y <= 200-50) {
        PP.physics.set_velocity_y(pl_4_1, pl_4_speed);
    }
    
    //4.2
    if(pl_4_2.geometry.y >= 340-100) {
        PP.physics.set_velocity_y(pl_4_2, -pl_4_speed);
    }
    else if(pl_4_2.geometry.y <= 220-50) {
        PP.physics.set_velocity_y(pl_4_2, pl_4_speed);
    }
    
    //4.3
    if(pl_4_3.geometry.y >= 340-100) {
        PP.physics.set_velocity_y(pl_4_3, -pl_4_speed);
    }
    else if(pl_4_3.geometry.y <= 220-50) {
        PP.physics.set_velocity_y(pl_4_3, pl_4_speed);
    }

    //4.4
    if(pl_4_4.geometry.y >= 340-100) {
        PP.physics.set_velocity_y(pl_4_4, -pl_4_speed);
    }
    else if(pl_4_4.geometry.y <= 220-50) {
        PP.physics.set_velocity_y(pl_4_4, pl_4_speed);
    }

    //4.5
    if(pl_4_5.geometry.y >= 340-100) {
        PP.physics.set_velocity_y(pl_4_5, -pl_4_speed);
    }
    else if(pl_4_5.geometry.y <= 220-50) {
        PP.physics.set_velocity_y(pl_4_5, pl_4_speed);
    }


    // secondo gruppo 
    //4.6
    if(pl_4_6.geometry.y >= 340-100) {
        PP.physics.set_velocity_y(pl_4_6, -pl_4_speed);
    }
    else if(pl_4_6.geometry.y <= 220-50) {
        PP.physics.set_velocity_y(pl_4_6, pl_4_speed);
    }
    
    //4.7
    if(pl_4_7.geometry.y >= 340-100) {
        PP.physics.set_velocity_y(pl_4_7, -pl_4_speed);
    }
    else if(pl_4_7.geometry.y <= 220-50) {
        PP.physics.set_velocity_y(pl_4_7, pl_4_speed);
    }
    
    //4.8
    if(pl_4_8.geometry.y >= 340-100) {
        PP.physics.set_velocity_y(pl_4_8, -pl_4_speed);
    }
    else if(pl_4_8.geometry.y <= 220-50) {
        PP.physics.set_velocity_y(pl_4_8, pl_4_speed);
    }

    //4.9
    if(pl_4_9.geometry.y >= 340-100) {
        PP.physics.set_velocity_y(pl_4_9, -pl_4_speed);
    }
    else if(pl_4_9.geometry.y <= 220-50) {
        PP.physics.set_velocity_y(pl_4_9, pl_4_speed);
    }

    //4.10
    if(pl_4_10.geometry.y >= 340-100) {
        PP.physics.set_velocity_y(pl_4_10, -pl_4_speed);
    }
    else if(pl_4_10.geometry.y <= 220-50) {
        PP.physics.set_velocity_y(pl_4_10, pl_4_speed);
    }

    //piattaforme gruppo 5 
    //5.1
    if(pl_5_1.geometry.x >= 4540) {
        PP.physics.set_velocity_x(pl_5_1, -pl_5_speed);
    }
    else if(pl_5_1.geometry.x <= 4380) {
        PP.physics.set_velocity_x(pl_5_1, pl_5_speed);
    }

    //5.2
    if(pl_5_2.geometry.x >= 4850) {
        PP.physics.set_velocity_x(pl_5_2, -pl_5_speed);
    }
    else if(pl_5_2.geometry.x <= 4690) {
        PP.physics.set_velocity_x(pl_5_2, pl_5_speed);
    }

    //5.3
    if(pl_5_3.geometry.x >= 5140) {
        PP.physics.set_velocity_x(pl_5_3, -pl_5_speed);
    }
    else if(pl_5_3.geometry.x <= 4980) {
        PP.physics.set_velocity_x(pl_5_3, pl_5_speed);
    }

    //5.4
    if(pl_5_4.geometry.x >= 5450) {
        PP.physics.set_velocity_x(pl_5_4, -pl_5_speed);
    }
    else if(pl_5_4.geometry.x <= 5290) {
        PP.physics.set_velocity_x(pl_5_4, pl_5_speed);
    }


    // piattaforme 6 --> acido spruzzato animazione 
    
    //piattaforme gruppo 7 
    // 7.1
    if(pl_7_1.geometry.y >= 1260 || pl_7_1.geometry.y <= 900) {
        pl_7_speed = -pl_7_speed;
    }

    PP.physics.set_velocity_y(pl_7_1, pl_7_speed);

    

    // 7.2
    if(pl_7_2.geometry.y >= 1260) {
        PP.physics.set_velocity_y(pl_7_2, -pl_7_speed);
    }
    else if(pl_7_2.geometry.y <= 900) {
        PP.physics.set_velocity_y(pl_7_2, pl_7_speed);
    }
    else {
        PP.physics.set_velocity_y(pl_7_2, -pl_7_speed);
    }

    //piattaforme gruppo 8
    //8.1
    if(pl_8_1.geometry.y >= 1570) {
        PP.physics.set_velocity_y(pl_8_1, -pl_8_speed);
    }
    else if(pl_8_1.geometry.y <= 800) {
        PP.physics.set_velocity_y(pl_8_1, pl_8_speed);
    }

    //8.2
    if(pl_8_2.geometry.y >= 2000) {
        PP.physics.set_velocity_y(pl_8_2, -pl_8_speed);
    }
    else if(pl_8_2.geometry.y <= 1250) {
        PP.physics.set_velocity_y(pl_8_2, pl_8_speed);
    }

    
}

function destroy_platforms(s) {

}