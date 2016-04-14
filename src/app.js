export class App {
  constructor() {
     this.firstName = 'Shuhel'
     this.lastName = 'Shuhel'
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
