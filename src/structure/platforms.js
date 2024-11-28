let img_platforms;
let platforms;
let pl_1_speed = 250;
<<<<<<< HEAD
let pl_3_speed = 250;

=======
let pl_2_speed = 150;
let pl_3_speed = 250;


>>>>>>> 50ac91b5ca1501d01b2497c9baaaa7352d993a01

function preload_platforms(s) {

}

function collision_platform(s, player, platform) {
    player.is_on_platform = true;
}

function create_platforms(s) {
    // Piattaforma mobile

    //piattaforme gruppo 1
    //1.1
    pl_1 = PP.shapes.rectangle_add(s, 3280, 200, 110, 20, "0xFF0000", 0);
    PP.physics.add(s, pl_1, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(pl_1, true);
    PP.physics.set_allow_gravity(pl_1, false);    
    PP.physics.add_collider_f(s, player, pl_1, collision_platform);
    PP.physics.set_velocity_y(pl_1, pl_1_speed);

    //1.2
    pl_1_2 = PP.shapes.rectangle_add(s, 3500, 630, 110, 20, "0xFF0000", 0);
    PP.physics.add(s, pl_1_2, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(pl_1_2, true);
    PP.physics.set_allow_gravity(pl_1_2, false);    
    PP.physics.add_collider_f(s, player, pl_1_2, collision_platform);
    PP.physics.set_velocity_y(pl_1_2, pl_1_speed);

    //1.3
    pl_1_3 = PP.shapes.rectangle_add(s, 3720, 900, 110, 20, "0xFF0000", 0);
    PP.physics.add(s, pl_1_3, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(pl_1_3, true);
    PP.physics.set_allow_gravity(pl_1_3, false);    
    PP.physics.add_collider_f(s, player, pl_1_3, collision_platform);
    PP.physics.set_velocity_y(pl_1_3, pl_1_speed);


    //piattaforma gruppo 2 (diagonale)
    pl_2 = PP.shapes.rectangle_add(s, 3100, 2080, 235, 50, "0xFF0000", 0);
    PP.physics.add(s, pl_2, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(pl_2, true);
    PP.physics.set_allow_gravity(pl_2, false);    
    PP.physics.add_collider_f(s, player, pl_2, collision_platform);
    PP.physics.set_velocity_x(pl_2, pl_2_speed);
    PP.physics.set_velocity_y(pl_2, pl_2_speed);


    //piattaforma gruppo 3
    pl_3 = PP.shapes.rectangle_add(s, 3700, 2130, 410, 65, "0xFF0000", 0);
    PP.physics.add(s, pl_3, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(pl_3, true);
    PP.physics.set_allow_gravity(pl_3, false);    
    PP.physics.add_collider_f(s, player, pl_3, collision_platform);
    PP.physics.set_velocity_x(pl_3, pl_3_speed);
    




    // platform_2 = PP.assets.image.add(s, img_platform, 800, 200, 0, 0);
    // PP.physics.add(s, platform_2, PP.physics.type.DYNAMIC); 
    // PP.physics.set_immovable(platform_2, true);
    // PP.physics.set_allow_gravity(platform_2, false);    
    // PP.physics.add_collider_f(s, player, platform_2, collision_platform);
    // PP.physics.set_velocity_x(platform_2, 100);

    //piattaforma 3
    pl_3 = PP.shapes.rectangle_add(s, 3473, 2100, 409, 65, "0xFF0000", 0);
    PP.physics.add(s, pl_3, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(pl_3, true);
    PP.physics.set_allow_gravity(pl_3, false);    
    PP.physics.add_collider_f(s, player, pl_3, collision_platform);
    PP.physics.set_velocity_x(pl_3, pl_1_speed);

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

    //3 !!DA RIVEDERE!!
    if(pl_3.geometry.y >= 1600) {
        PP.physics.set_velocity_y(pl_1_3, -pl_1_speed);
    }
    else if(pl_3.geometry.y <= 5000) {
        PP.physics.set_velocity_y(pl_1_3, pl_1_speed);
    }
    

    //piattaforme gruppo 2      fa cose strane non sono riuscitta a farlo andare in diagonale domani riprovo
    if(pl_2.geometry.x >= 3250) {
        PP.physics.set_velocity_x(pl_2, -pl_2_speed);
    }
    else if(pl_2.geometry.x <= 2800) {
        PP.physics.set_velocity_x(pl_2, pl_2_speed);
    }

    if(pl_2.geometry.y >= 2080) {
        PP.physics.set_velocity_y(pl_2, -pl_2_speed);
    }
    else if(pl_2.geometry.y <= 1900) {
        PP.physics.set_velocity_y(pl_2, pl_2_speed);
    }


    //piattaforme gruppo 3
    if(pl_3.geometry.x >= 5000) {
        PP.physics.set_velocity_x(pl_3, -pl_3_speed);
    }
    else if(pl_3.geometry.x <= 3700) {
        PP.physics.set_velocity_x(pl_3, pl_3_speed);
    }


    


    // Aggiorno la velocita' della piattaforma mobile nel
    // caso in cui si trovi al limite destro o il limite sinistro
    // scelto (800 - 1200)

    //if(platform_2.geometry.x >= 1200) {
        //PP.physics.set_velocity_x(platform_2, -100);
   // }
    //else if(platform_2.geometry.x <= 800) {
        //PP.physics.set_velocity_x(platform_2, 100);
    //}

}

function destroy_platforms(s) {

}