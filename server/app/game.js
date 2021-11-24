import Player from player.js

// create deck, numbers 1-100
const DECK_100 = Array.from(Array(100).keys()).map(x => x++)


class Game {
    constructor() {
        this.gameCode = gameCode;
        this.inProgress = false;
        this.currentRound;
        this.playerCount = 0;
        this.players = [];
        this.host;
    }

    newPlayer(name, socket) {
        return new Player(name, socket, this.getNextId());
    }
    

    addPlayer (name, socket) {
        const newPlayer = this.newPlayer(name, socket);
        this.initPlayer(newPlayer);

        this.players.push(newPlayer);
        this.sendUpdatedPlayersList();
        return newPlayer;
    }

    removePlayer(id) {
        const player = this.getPlayer(id);

        const index = this.players.indexOf(player);
        if (index > -1) {
            this.players.splice(index, 1);
        }

        //if there are no players left
        if (this.players.length === 0) {
            this.onEmpty();
        }
    }

    initPlayer(newPlayer) {

    }

    getPlayer(id) {
        for(let i = 0; i < this.players.length; i++){
            if (this.players[i].id === id) {
                return this.players[i]
            }
        }

        return false;
    }
}


export default Round;