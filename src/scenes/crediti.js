let img_story_1

function preload_credits (s) {
    img_story_1 = PP.assets.image.load(s, "assets/images/cover/provvisorie/tavola4.png");

}

function create_credits (s) {
    
}

function update_credits (s) {
    
}

function destroy_credits (s) {
    
}

PP.scenes.add("crediti", preload_credits, create_credits, update_credits, destroy_credits);