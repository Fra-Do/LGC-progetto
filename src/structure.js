let wall;
let floor;
let cealing;


let verifica_floor;

function preload_structure(s) {

    
}

function collision_floor(s, player, floor) {
    verifica_floor = true;

}

function create_structure(s, player) {
    wall = PP.shapes.rectangle_add(s, 961, 34, 1920, 72.9117, "0xFF0000", 0);
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

}