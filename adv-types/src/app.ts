type Admin = {
  name: string;
  privileges: string[]
}

type Employee = {
  name: string;startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Cam',
  privileges: ['create-server'],
  startDate: new Date()
}

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;


function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInfo(employee: UnknownEmployee) {
  if('privileges' in employee) {
    console.log(`Privileges: ${employee.privileges}`)
  }

  if('startDate' in employee) {
    console.log(`Start date: ${employee.startDate}`)
  }
}

printEmployeeInfo(e1);


interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch(animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
      break;
  }

  console.log(`Moving at speed: ${speed}`);
}

moveAnimal({ type: 'bird', flyingSpeed: 50 })


const userInputEl = <HTMLInputElement>document.getElementById('user-input')!;
// const userInputEl = document.getElementById('user-input')! as HTMLInputElement;

userInputEl.value = 'Hi there';