class Student {
  constructor(name) {
    this.name = name;       // Student's name
    this.grades = [];       // Empty array to store grades
  }

  // Method to add a grade
  addGrade(grade) {
    this.grades.push(grade);
  }

  // Method to calculate the average grade
  getAverage() {
    let total = 0;

    // Add up all the grades
    for (let i = 0; i < this.grades.length; i++) {
      total += this.grades[i];
    }

    // Calculate average
    let average = total / this.grades.length;
    return average;
  }
}

// 👇 Example: How to use this class

let student1 = new Student("John");  // Create a new student named John

student1.addGrade(80);   // Add some grades
student1.addGrade(90);
student1.addGrade(70);

console.log("Average grade of", student1.name, "is", student1.getAverage());