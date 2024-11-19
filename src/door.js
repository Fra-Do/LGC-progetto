let img_door;
let door;

function preload_door (s) {
    img_door = PP.assets.image.load(s, "assets/images/porta_provvisoria.png")
}

function goto_level2 (s) {
    PP.scenes.start("level2");
}

function create_door (s) {
    door = PP.assets.image.add(s, img_door, 1000, 800, 1, 1);
    
    PP.physics.add(s, door, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, door, player, goto_level2);
}
