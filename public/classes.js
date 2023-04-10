class Student {
  constructor(name, email, level, projectCompleted = false) {
    this.name = name;
    this.email = email;
    this.level = level;
    this.projectCompleted = projectCompleted;
  }

  graduationStatus() {
    if (this.level >= 5 && this.projectCompleted === true) {
      console.log(`Congratulations ${this.name}, You have graduated!`);
    } else {
      console.log('You still have some years left');
    }
  }
}

const student1 = new Student('Abe', 'abe@gmail.com', 5);
const student2 = new Student('Caleb', 'cal@gmail.com', 5, true);
const student3 = new Student('Ekemini', 'eke@gmail.com', 3);

// Without Syntactic sugar

// 'Person' becomes the constructor function, it now rep our class
function Person(name, gender) {
  this.name = name;
  this.gender = gender;

  this.introduce = function () {
    console.log(`Hello, my name is ${this.name} and I'm a ${gender}`);
  };
}

const peace = new Person('Peace', 'female');

peace.introduce();
