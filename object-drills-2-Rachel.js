'use strict'

// const dictionary = {
//     a: 2,
//     b: 3,
//     c: 4,
//     d: 5
// }


// function decode(word){
//     let decodedCharacter;
//     switch (word[0]) {
//     case 'a' : {
//       decodedCharacter = word[dictionary['a']-1];
//       break;
//     }
//     case 'b' : {
//       decodedCharacter = word[dictionary['b']-1];
//       break;
//     }
//     case 'c' : {
//       decodedCharacter = word[dictionary['c']-1];
//       break;
//     }
//     case 'd' : {
//       decodedCharacter = word[dictionary['d']-1];
//       break;
//     }
//     default : {
//       decodedCharacter = ' ';
//     }
  
//     }
  
//     return decodedCharacter;
//   };

 
// const decodeWords = phrase => { 
//     let words = phrase.split(' ');
//     //console.log(words); 
//     let decodeWordsArray = words.map(decode);
//     //console.log(decodeWordsArray);
//     return decodeWordsArray.join("");
// }
// let result = decodeWords('craft block argon meter bells brown croon droop');
// console.log(result);

//Factory Functions with LOTR


// make a factory function called createCharacter
let createCharacter = (name, nickname, race, origin, attack, defense) => {

    return {
        name: name,
        nickname: nickname,
        race: race,
        origin: origin,
        attack: attack,
        defense: defense,
        describe: function() {
            console.log(`${this.name} is a ${this.race} from ${this.origin}.`)
        }, 
        evaluateFight: function(character) {
            const x = (character.defense > this.attack) ? 0 : this.attack - character.defense;
            const y = (this.defense > character.attack) ? 0 : character.attack - this.defense;
            return `Your opponent takes ${x} damage and you receive ${y} damage`;
           
        }
    }  
}
const gandalf = createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10 , 6);
const bilbo = createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1);
// it must build characters as objects
// each character object has 6 attributes, name, nickname, race, origin, attack, defense
// each character object has a method called describe() that prints a string "{name} is a {race} from {origin}."
gandalf.describe();
console.log(bilbo.evaluateFight(gandalf));
// each character object has a method called evaluateFight(character) and returns a string 

// "Your opponent takes {x} damage and you receive {y} damage"
// if x = 10 and y = 5, you take 5 damage
// if x = 5 and y = 10, you take 0 damage
// so, if x < y take 0 damage
// if y > x take .. difference damage?

// create characters array using array literal syntax
// it will call the original factory function for each character object 
//  ???????for each character in the table above with the relevant parameters. Your characters array should now have 5 objects in it.
const characters = [
    createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10 , 6),
    createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1),
    createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2),
    createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8),
    createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5) 
]
    characters.push(createCharacter('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendell', 4, 5))

//  add a new character to character object

//  use .find() to retrieve aragorn character and then call the describe method inside the aragorn character

let aragorn = characters.find((obj) => obj.nickname === 'aragorn');

aragorn.describe();

//  use .filter to create new array characters race hobbit

let hobs = characters.filter((item) => item.race === 'Hobbit');

//  use .filter to create new array characters attack value >5

let greaterThanFive = characters.filter((item) => item.attack > 5);
console.log(greaterThanFive);

