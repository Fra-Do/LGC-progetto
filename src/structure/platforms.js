let img_platforms;
let platforms;

function preload_platforms(s) {

}

function collision_platform(s, player, platform) {
    player.is_on_platform = true;
}

function create_platforms(s) {
    // Piattaforma mobile
    platform_2 = PP.assets.image.add(s, img_platform, 800, 200, 0, 0);
    PP.physics.add(s, platform_2, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(platform_2, true);
    PP.physics.set_allow_gravity(platform_2, false);    
    PP.physics.add_collider_f(s, player, platform_2, collision_platform);
    PP.physics.set_velocity_x(platform_2, 100);

}

function update_platforms(s) {
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