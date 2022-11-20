// function Enemy(life, name, level) {
//   this.life = life;
//   this.name = name;
//   this.level = level;
// }

// Enemy.prototype.getInfo = function () {
//   console.log(this.life, this.name, this.level);
// };
// Enemy.prototype.atack = function () {
//   console.log("${this.name} has attacled!");
// };
// Enemy.prototype.block = function () {
//   console.log("${this.name} has blocked");
// };

// function Dragon(life, name, level, color, spell) {
//   //Keyword this is going to reference the Dragon object
//   Enemy.call(this, life, name, level);
//   //Define it as normal
//   this.color = color;
//   this.spell = spell;
// }

// //Inherit Prototype
// Dragon.prototype = Object.create(Enemy.prototype);

// Dragon.prototype.fireBreath = function () {
//   console.log("Fire Breathhhh!");
// };

// const newDragon = new Dragon(100, "Dragon", 25, "green", "fire");

// console.log(newDragon);
// newDragon.getInfo();

class Enemy {
  constructor(life, name, level) {
    this.life = life;
    this.name = name;
    this.level = level;
  }

  getInfo() {
    console.log(this.life, this.name, this.level);
  }
}

class Bug extends Enemy {
  constructor(life, name, level, legs, dmg) {
    super(life, name, level);
    //
    this.legs = legs;
    this.dmg = dmg;
  }
}

const john = new Bug(10, "Buggy", 1, 6, 10);

console.log(john);
john.getInfo();
