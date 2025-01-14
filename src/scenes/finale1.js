let img_finale1;
let finale1;

function preload_finale1(s) {
    img_finale1  = PP.assets.image.load(s, "assets/images/finali/finale1.png");
}

function create_finale1(s) {
    finale1 = PP.assets.image.add(s, img_finale1, 0, 0, 0, 0); 

}

function update_finale1(s) {

}

function destroy_finale1(s) {

}

PP.scenes.add("finale1", preload_finale1, create_finale1, update_finale1, destroy_finale1);