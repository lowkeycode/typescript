class Department {
  protected employees: string[] = [];

  constructor(public name: string, private readonly id: number) {
  }

  describe(this: Department) {
    console.log(this.name)
  };

  addEmployee(employee: string) {
    this.employees.push(employee)
  }

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class AdminDept extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if(this.lastReport) {
      return this.lastReport;
    } else {
      throw new Error('No report found');
    }
  }

  constructor(id: number, public admins: string[], private reports: string[]){
    super('Admin Department', id);
    this.lastReport = reports[0];
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  addEmployee(name: string) {
    if(name === 'Cam') {
      console.log(`Cam can't work here, sorry! He's in tech!`);
      return;
    }

    this.employees.push(name);
  }

  describe() {
    console.log('I am the admin dept')
  }
}

const adminDept = new AdminDept(2, ['Cam'], []);

const techDept = new Department('Technology', 1);

// techDept.addEmployee('Cam');
// techDept.addEmployee('Matt');
// techDept.describe();
// // techDept.employees.pop();
// techDept.printEmployeeInfo();


adminDept.addReport('Reporting for duty')

console.log(adminDept.mostRecentReport)

adminDept.addEmployee('Cam');
adminDept.addEmployee('Matt');

console.log(adminDept);