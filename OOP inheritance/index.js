class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
}

class Employee extends Person {
  constructor(name, surname, job, salary) {
    super(name, surname);
    this.job = job;
    this.salary = salary;
  }
  getData() {
    return this.name + " " + this.surname + " " + this.salary;
  }
  getSalary() {
    return this.salary;
  }
  increaseSalary() {
    this.salary = this.salary + this.salary * 0.1;
  }
}

class Developer extends Employee {
  constructor(name, surname, job, salary, specialization) {
    super(name, surname, job, salary);
    this.specialization = specialization;
  }
  getSpecialization() {
    return this.specialization;
  }
}

class Manager extends Employee {
  constructor(name, surname, job, salary, department) {
    super(name, surname, job, salary);
    this.department = department;
  }
  getDepartment() {
    return this.department;
  }
  changeDepartment(newDep) {
    this.department = newDep;
  }
}

var manager = new Manager("Sanja", "Milić", "Programer");
