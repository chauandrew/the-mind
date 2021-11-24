import Game from game.js

// create deck, numbers 1-100
let DECK_100 = Array.from(Array(100).keys()).map(x => x++)

class Round {
    constructor () {
        this.running = true;
        this.centerPile = [];
        this.game = new Game();
    }

    // resets the deck to 0-100
    refillDeck() {
        DECK_100 = []
        DECK_100 = Array.from(Array(100).keys()).map(x => x++)
    }


    // initialize all player's hands
    initHand(players, playerCount) {
        for (let i = 0; i < players.length(); i++) {
            for (let j = 0; j < 5; j++){
                // last card from the randomized deck
                let toAdd = DECK_100.pop(0)
                players[i].hand.push(toAdd)
            }
        }
        return players;
    }

    // remove card from player hand and add card to centerPile
    playCard(player, card) {
        
    }

    // out: bool
    // determines if move is a valid move
    isValidMove(player, card){
        if (card > this.centerPile[this.centerPile.length()]) {
            this.playCard(player, card);
            return true;
        }
        return false;
    }

    // returns total number of cards in all player's hands
    countCards(players) {
        let sum = 0;
        players.forEach(element => {
            sum += element.hand.length()
        });

        return sum;
    }

    // determines if round is over. returns true if all player hands are empty, or an invalid move is played.
    roundOver() {
        if (this.countCards(this.game.players) === 0) {
            return true;
        }
        else if (isValidMove === false) {
            return true;
        }
        else {
            return false;
        }
    }


}

export default Round;