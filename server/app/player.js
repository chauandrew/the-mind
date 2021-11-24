class Player {

    constructor (id, name, socket, round) {
        this.id = id;
        this.name = name;
        this.socket = socket;
        this.isConnected = true;
        this.isHost = false;
        this.hand = [];
    }

    // Makes Player the host of the game 
    makeHost() {
        this.isHost = true;
    }


}

export default Player;