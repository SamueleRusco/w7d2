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

p1 = new Person("Mario", "96");
p2 = new Person("Giovanni", "142");
p3 = new Person("Arturo", "58");
p4 = new Person("Alfredo", "33");
p5 = new Person("Mauro", "18");
p6 = new Person("Dario", "2");
p7 = new Person("Samuele", "2343");
p8 = new Person("Costantino", "34");
p9 = new Person("Giuseppe", "3434");
p10 = new Person("Luca", "23");

p8.whosOlder(p6);

// ESERCIZIO 2
