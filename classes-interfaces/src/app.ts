class Department {
  protected employees: string[] = [];

  constructor(public name: string, private readonly id: number) {
  }

  describe(this: Department) {
    console.log(`This is the ${this.name} department. Department #${this.id}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee)
  }

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class AdminDept extends Department {
  constructor(id: number, public admins: string[]){
    super('Admin Department', id);
  }

  addEmployee(name: string) {
    if(name === 'Cam') {
      console.log(`Cam can't work here, sorry! He's in tech!`);
      return;
    }

    this.employees.push(name);
  }
}

const adminDept = new AdminDept(2, ['Cam']);

const techDept = new Department('Technology', 1);

techDept.addEmployee('Cam');
techDept.addEmployee('Matt');
techDept.describe();
// techDept.employees.pop();
techDept.printEmployeeInfo();



adminDept.addEmployee('Cam');
adminDept.addEmployee('Matt');

console.log(adminDept);