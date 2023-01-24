// class uomo {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// function whosOlder() {
//   console.log(
//     `ciao il mio nome è ` +
//       uomo.name +
//       `e la mia età è di ` +
//       uomo.age +
//       ` anni`
//   );
// }
// console.log(whosOlder(p1));

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  whosOlder(persona) {
    if (this.age > persona.age) {
      return console.log(
        "ciao sono " + this.name + " sono piu vecchio di " + persona.name
      );
    } else {
      console.log(" è piu giovane");
    }
  }
}

const p1 = new Person("Mario", "96");
const p2 = new Person("Giovanni", "142");
const p3 = new Person("Arturo", "58");
const p4 = new Person("Alfredo", "33");
const p5 = new Person("Mauro", "18");
const p6 = new Person("Dario", "2");
const p7 = new Person("Samuele", "2343");
const p8 = new Person("Costantino", "34");
const p9 = new Person("Giuseppe", "3434");
const p10 = new Person("Luca", "23");
p8.whosOlder(p6);

class ShowPeople {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
