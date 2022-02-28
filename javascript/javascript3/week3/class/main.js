//Create a user class
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getUserFirstName() {
    //   return this.firstName
    const x = `${this.firstName}`;
    return x;
  }
  getUserLastName() {
    return this.lastName;
  }
  getFullName() {
    const fullName = `${this.firstName} ${this.lastName}`;
    return fullName;
  }
}

const user = new User("Tatjana", "Ocedova");

console.log(user);
console.log(user.getUserFirstName(user));
console.log(user.getUserLastName(user));
console.log(user.getFullName(user));

//Creating a CV class
class Job {
  constructor(id, title, description, startDate, endDate) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}
class Education {
  constructor(id, title, school, address, startDate, endDate) {
    this.id = id;
    this.title = title;
    this.school = school;
    this.address = address;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}
// const jobs = new Job(1, "account", "work with accounts", ".01.03.2022", "")
class CV extends Job {
  constructor(email) {
    super();
    this.jobs = [];
    this.educations = [];
    //this.email = ?
  }

  addJob(job) {
    // add functionality here
    return this.job(new Job(id, title, description, startDate, endDate));
  }

  removeJob(job) {
    // add functionality here
  }

  addEducation(education) {
    // add functionality here
  }

  removeEducation(education) {
    // add functionality here
  }
}

const job = new Job(1, "account", "work with accounts", "01.03.2022", "");
const job1 = new Job();
console.job(job1.addJob(job));
