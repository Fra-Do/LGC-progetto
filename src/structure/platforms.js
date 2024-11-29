let img_platforms;
let platforms;
let pl_1_speed = 250;
let pl_2_speed = 150;
let pl_3_speed = 250;
let pl_5_speed = 300;
let pl_8_speed = 350;


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

    //-----------------------------------------------------------------------------
    //piattaforma gruppo 2 (diagonale)
    pl_2 = PP.shapes.rectangle_add(s, 3100, 2080, 235, 50, "0xFF0000", 0);
    PP.physics.add(s, pl_2, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(pl_2, true);
    PP.physics.set_allow_gravity(pl_2, false);    
    PP.physics.add_collider_f(s, player, pl_2, collision_platform);
    PP.physics.set_velocity_x(pl_2, pl_2_speed);
    PP.physics.set_velocity_y(pl_2, pl_2_speed);


    //Qua ho provato a dare una soluzione invano
    //pl_2 = PP.shapes.rectangle_add(s, 3100, 2080, 235, 50, "0xFF0000", 0);
    //PP.physics.add(s, pl_2_diagonal, PP.physics.type.DYNAMIC); 
    //PP.physics.set_immovable(pl_2_diagonal, true);
    //PP.physics.set_allow_gravity(pl_2_diagonal, false);    
    //PP.physics.add_collider_f(s, player, pl_2_diagonal, collision_platform);
    //PP.physics.set_velocity_y(pl_2_diagonal, -pl_2_speed);

    //-----------------------------------------------------------------------------


    //piattaforma gruppo 3
    pl_3 = PP.shapes.rectangle_add(s, 3700, 2130, 410, 65, "0xFF0000", 0);
    PP.physics.add(s, pl_3, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(pl_3, true);
    PP.physics.set_allow_gravity(pl_3, false);    
    PP.physics.add_collider_f(s, player, pl_3, collision_platform);
    PP.physics.set_velocity_x(pl_3, pl_3_speed);

    //piattaforma gruppo 5
    //5.1
    pl_5 = PP.shapes.rectangle_add(s, 4000, 1510, 149, 86, "0xFF0000", 0);
    PP.physics.add(s, pl_5, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(pl_5, true);
    PP.physics.set_allow_gravity(pl_5, false);    
    PP.physics.add_collider_f(s, player, pl_5, collision_platform);
    PP.physics.set_velocity_x(pl_5, pl_5_speed);

    //5.2
    pl_5_2 = PP.shapes.rectangle_add(s, 5000, 1510, 149, 86, "0xFF0000", 0);
    PP.physics.add(s, pl_5_2, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(pl_5_2, true);
    PP.physics.set_allow_gravity(pl_5_2, false);    
    PP.physics.add_collider_f(s, player, pl_5_2, collision_platform);
    PP.physics.set_velocity_x(pl_5_2, pl_5_speed);

    //Piattaforme 8
    //8.1
    pl_8 = PP.shapes.rectangle_add(s, 7400, 416, 381, 42, "0xFF0000", 0);
    PP.physics.add(s, pl_8, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(pl_8, true);
    PP.physics.set_allow_gravity(pl_8, false);    
    PP.physics.add_collider_f(s, player, pl_8, collision_platform);
    PP.physics.set_velocity_y(pl_8, pl_8_speed);

    //8.2
    pl_8_2 = PP.shapes.rectangle_add(s, 8750, 3000, 381, 42, "0xFF0000", 0);
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

    

    //piattaforme gruppo 2      fa cose strane non sono riuscita a farlo andare in diagonale domani riprovo
    if(pl_2.geometry.x >= 3250) {
        PP.physics.set_velocity_x(pl_2, -pl_2_speed);
    }
    else if(pl_2.geometry.x <= 2800) {
        PP.physics.set_velocity_x(pl_2, pl_2_speed);
    }

    if(pl_2.geometry.y >= 4900) {
        PP.physics.set_velocity_y(pl_2, pl_2_speed);
    }
    else if(pl_2.geometry.y <= 4600) {
        PP.physics.set_velocity_y(pl_2, -pl_2_speed);
    }

    //ci ho riprovato ma invano
    //if(pl_2.geometry.x >= 3250) {
        //PP.physics.set_velocity_x(pl_diagonal, -pl_2_speed); 
    //}
    //else if(pl_2.geometry.x <= 2800) {
        //PP.physics.set_velocity_x(pl_diagonal, pl_2_speed);  
   // }

    //if(pl_2.geometry.y >= 2080) {
        //PP.physics.set_velocity_x(pl_diagonal, -pl_2_speed); 
    //}
    //else if(pl_2.geometry.y <= 1900) {
        //PP.physics.set_velocity_y(pl_2, pl_2_speed);
    //}


    //piattaforme gruppo 3
    if(pl_3.geometry.x >= 5000) {
        PP.physics.set_velocity_x(pl_3, -pl_3_speed);
    }
    else if(pl_3.geometry.x <= 3700) {
        PP.physics.set_velocity_x(pl_3, pl_3_speed);
    }

    //piattaforme gruppo 5 
    //5.1
    if(pl_5.geometry.x >= 4545) {
        PP.physics.set_velocity_x(pl_5, -pl_5_speed);
    }
    else if(pl_5.geometry.x <= 4400) {
        PP.physics.set_velocity_x(pl_5, pl_5_speed);
    }

    //5.2
    if(pl_5_2.geometry.x >= 4880) {
        PP.physics.set_velocity_x(pl_5_2, -pl_5_speed);
    }
    else if(pl_5_2.geometry.x <= 4690) {
        PP.physics.set_velocity_x(pl_5_2, pl_5_speed);
    }

    //8.1
    if(pl_8.geometry.y >= 1570) {
        PP.physics.set_velocity_y(pl_8, -pl_8_speed);
    }
    else if(pl_8.geometry.y <= 800) {
        PP.physics.set_velocity_y(pl_8, pl_8_speed);
    }

    //8.2
    if(pl_8_2.geometry.y >= 2500) {
        PP.physics.set_velocity_y(pl_8_2, -pl_8_speed);
    }
    else if(pl_8_2.geometry.y <= 1000) {
        PP.physics.set_velocity_y(pl_8_2, pl_8_speed);
    }



    


    

}

function destroy_platforms(s) {

}