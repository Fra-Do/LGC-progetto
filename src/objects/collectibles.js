let panel;
let img_kit;
let kit_1;
let kit_2;
let kit_3;
let img_pergamena;
let pergamena;

function preload_collectibles(s) {
    img_kit = PP.assets.image.load(s, "assets/images/kit.png", 35, 30);
    img_pergamena = PP.assets.image.load(s, "assets/images/pergamena.png", 35, 30);
    

}

function get_kit (s, player) {
    if(PP.interactive.kb.is_key_down(s, PP.key_codes.E)) {
        console.log ("Hai ottenuto kit");
        //PP.assets.destroy(obj2);
    }
    
}

function get_pergamena (s, player) {
    if(PP.interactive.kb.is_key_down(s, PP.key_codes.E)) {
        console.log ("Hai ottenuto pergamena");
        //PP.assets.destroy(obj2);
    }
    
}

function create_collectibles(s, player) {
    kit_1 = PP.assets.image.add(s, img_kit, 1350, 330, 0, 0);
    kit_2 = PP.assets.image.add(s, img_kit, 5575, 1430, 0, 0);
    kit_2 = PP.assets.image.add(s, img_kit, 8080, 1965, 0, 0);
    pergamena = PP.assets.image.add(s, img_pergamena, 1600, 330, 0, 0);
   
    
    

}

function upload_collectibles(s) {
    

}

function destroy_collectibles(s) {
    

}