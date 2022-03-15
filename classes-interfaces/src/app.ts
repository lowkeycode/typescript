interface Greetable {
  name: string;

  greet(phrase: string): void; 
}

class Person implements Greetable {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
}

let user1: Greetable;


user1 = new Person('Cam')

user1.greet('Hello');

console.log(user1);
