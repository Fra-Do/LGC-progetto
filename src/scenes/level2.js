function preload(s) {
    preload_player
}

function create(s) {
    create_player
}

function update(s) {
    update_player
}

function destroy(s) {
    destroy_player
}

PP.scenes.add("level2", preload, create, update, destroy);