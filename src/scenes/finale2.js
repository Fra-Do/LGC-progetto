let img_finale2;
let finale2;

function preload_finale2(s) {
    img_finale2  = PP.assets.image.load(s, "assets/images/finali/finale2.png");
}

function create_finale2(s) {
    finale2 = PP.assets.image.add(s, img_finale2, 0, 0, 0, 0); 
}

function update_finale2(s) {

}

function destroy_finale2(s) {

}

PP.scenes.add("finale2", preload_finale2, create_finale2, update_finale2, destroy_finale2);