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
