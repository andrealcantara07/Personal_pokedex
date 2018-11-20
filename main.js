// axios.get('http://fizal.me/pokeapi/api/v2/name/typhlosion.json')
//   .then(test);

//   function test(getter){
//     console.log(getter);
//   }

// test();


class Trainer {
  constructor(name){
  this.name= name;

  }

}


let typhlosion = new Trainer('typhlosion');
let volcanion = new Trainer('volcanion');
let giratina = new Trainer('giratina');

// console.log(typhlosion);
// console.log(volcanion);
// console.log(giratina);

class Pokemon {
  constructor(hp, attack,){
    this.hp = hp,
    this.attack = attack,
    this.defense = defense,
    this.abilities = abilities
  }
  
}
axios.get('http://fizal.me/pokeapi/api/v2/name/'+typhlosion.name+'.json')
  .then(run);
  

  function run (poke1){
    console.log(poke1.data.stats[5].base_stat);
  }