var BOARD_SIZE = 16;

// GLOBALS
var board = new Board(BOARD_SIZE);
var player = new Player();


// =============================================================================
// OBJECTS
// =============================================================================

// -----------------------------------------------------------------------------
//
// -----------------------------------------------------------------------------
function Board(size) {
    this.tiles = create_array(size);
    for (var i = 0; i < BOARD_SIZE; i++) {
        for (var j = 0; j < BOARD_SIZE; j++) {
            this.tiles[i][j] = Math.floor(Math.random() * 99999999);
        }
    }
}


// -----------------------------------------------------------------------------
//
// -----------------------------------------------------------------------------
function Player() {
    this.x = 0;
    this.y = 0;

    this.health = 100;
    this.mana = 10;

    this.strength = 10;
    this.dexterity = 10;
    this.magic = 10;
    this.defense = 10;
}


// -----------------------------------------------------------------------------
//
// -----------------------------------------------------------------------------
function Monster() {
    this.strength = 5;
    this.defense = 5;
}


// =============================================================================
// FUNCTIONS
// =============================================================================

// -----------------------------------------------------------------------------
//
// -----------------------------------------------------------------------------
function random_encounter() {
    return Math.random() > .75;
}


// -----------------------------------------------------------------------------
//
// -----------------------------------------------------------------------------
function fight_monster(monster) {
    console.log("Fighting monster");

    if (window.player.strength > monster.strength) {
        console.log("Player wins!");
    }
}


// -----------------------------------------------------------------------------
//
// -----------------------------------------------------------------------------
function generate_monster() {
    return new Monster();
}


// -----------------------------------------------------------------------------
//
// -----------------------------------------------------------------------------
function create_array(length) {
    var retval = new Array(length);

    for (i = 0; i < length; i++) {
        retval[i] = new Array(length);
    }

    return retval;
}


// -----------------------------------------------------------------------------
//
// -----------------------------------------------------------------------------
function move_player(direction) {

    switch(direction) {
	// Left
    case 1:
        if (window.player.x > 0) {
	    window.player.x--;
	}
	break;
	// Up
    case 2:
	if (window.player.y > 0) {
	    window.player.y--;
	}
	break;
	// Right
    case 3:
	if (window.player.x < (BOARD_SIZE - 1)) {
	    window.player.x++;
	}
	break;
	// Down
    case 4:
	if (window.player.y < (BOARD_SIZE - 1)) {
	    window.player.y++;
	}
	break;
    default:
	break;
    }

    var player_x = window.player.x;
    var player_y = window.player.y;

    console.log("Player position: (" + player_x + ", " + player_y + ")");
    console.log("Tile value: " + window.board.tiles[player_x][player_y]);

    // fight monster if exists
    if (random_encounter()) {
        console.log("Encountered a monster");

        var monster = generate_monster();

        fight_monster(monster);
    }
}


// -----------------------------------------------------------------------------
// EXAMPLE CODE
// -----------------------------------------------------------------------------
function change_cell() {
    document.getElementById("cell_1").innerHTML = "floop";
}
