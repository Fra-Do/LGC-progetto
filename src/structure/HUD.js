let ss_counter_health;

let counter_health;

let player_health;

let health;

let img_health; 

function preload_HUD(s) {
  ss_counter_health = PP.assets.sprite.load_spritesheet(s, "assets/images/HUD/spriteskit.png", 70, 51);}

function create_HUD(s) {
  // Variabili HUD
  health = 3;

  // Creazione counter cuori
  counter_health = PP.assets.sprite.add(s, ss_counter_health, 100, 50, 0, 0);
  counter_health.tile_geometry.scroll_factor_x = 0;
  counter_health.tile_geometry.scroll_factor_y = 0;

    PP.assets.sprite.animation_add(counter_health, "health: 5", 5, 5, 1, 0); 
    PP.assets.sprite.animation_add(counter_health, "health: 4", 4, 4, 1, 0);
    PP.assets.sprite.animation_add(counter_health, "health: 3", 3, 3, 1, 0); 
    PP.assets.sprite.animation_add(counter_health, "health: 2", 2, 2, 1, 0);
    PP.assets.sprite.animation_add(counter_health, "health: 1", 1, 1, 1, 0);
    PP.assets.sprite.animation_add(counter_health, "health: 0", 0, 0, 1, 0);
    PP.assets.sprite.animation_play(counter_health, "health: 0");
}

// Funzione update per aggiornare l'HUD quando la salute cambia
function update_HUD(s, player, kit) {
   // Gestione ss_counter_health
   if (health == 5) {
    PP.assets.sprite.animation_stop(counter_health, "health: 0");
    PP.assets.sprite.animation_play(counter_health, "health: 5");    
}

if (health == 4) {
    PP.assets.sprite.animation_stop(counter_health, "health: 5");
    PP.assets.sprite.animation_play(counter_health, "health: 4");    
}

if (health == 3) {
    PP.assets.sprite.animation_stop(counter_health, "health: 4");
    PP.assets.sprite.animation_play(counter_health, "health: 3");    
}

if (health == 2) {
    PP.assets.sprite.animation_stop(counter_health, "health: 3");
    PP.assets.sprite.animation_play(counter_health, "health: 2");
}

if (health == 1) {
    PP.assets.sprite.animation_stop(counter_health, "health: 2");
    PP.assets.sprite.animation_play(counter_health, "health: 1");
}

if (health == 0) {
    PP.assets.sprite.animation_stop(counter_health, "health: 1");
    PP.assets.sprite.animation_play(counter_health, "health: 0");
}
}

// Funzione per distruggere l'HUD
function destroy_HUD(s) {
  
}
