let img_crediti;
let crediti;

function preload_credits (s) {
    img_crediti = PP.assets.image.load(s, "assets/images/cover/crediti.png");

}

function create_credits (s) {
    crediti  = PP.assets.image.add(s, img_crediti, 0, 0, 0, 0);

}

function update_credits (s) {
    
}

function destroy_credits (s) {
    
}

PP.scenes.add("crediti", preload_credits, create_credits, update_credits, destroy_credits);