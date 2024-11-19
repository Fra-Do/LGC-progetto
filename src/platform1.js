let img_platform
let platform;

function preload_platform1 (s) {
    img_platform   = PP.assets.image.load(s, "assets/images/platform1.png");
}

function create_platform1 (s) {
    platform = PP.assets.image.add(s, img_platform, 0, 300, 0, 0);
    PP.physics.add(s, platform, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform, collision_platform);
    

}

function update_platform1 (s) {
    
    
}

function destroy_platform1 (s) {

}