import { createDeck } from './deck.js';


class Player {
    constructor(id) {
      this.id = id;
      this.hand = [];
    }
    toString() {
        if (this.hand.length === 0) {
            return `Joueur ${this.id}: main vide`;
        }
        else{
            return `Joueur ${this.id}: ${this.hand[0].value} de ${this.hand[0].suit}, ${this.hand[1].value} de ${this.hand[1].suit}`;
        }
        return `Joueur ${this.id}:`;
    }
}



class Players {
    static numbersofplayers;
    players = [];
    constructor(numbersofplayers) {
        this.numbersofplayers = numbersofplayers;
        for (var i = 0; i < numbersofplayers;i++){
            this.players.push(new Player(i+1));
        }
    }
    toString() {
        return this.players.map(player => player.toString()).join('\n');
      }
    // Ajoute d'autres joueurs si nécessaire
}

  
  function dealCards(players, deck) {
    players.forEach(player => {
      player.hand = [deck.pop(), deck.pop()];  // Donne 2 cartes à chaque joueur
    });
  }
  

  let game = new Players(4);
  let deck = new createDeck();
  console.log(game.toString());

  dealCards(game.players, deck);
  console.log(game.toString());  // Affiche les mains des joueurs
