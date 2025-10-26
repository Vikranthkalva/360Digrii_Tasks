console.log("Students scoring above 75:");
for (let i = 0; i < students.length; i++) {
  if (students[i].marks > 75) {
    console.log(students[i].name);
  }
}

// OR using filter:
let topStudents = students.filter(student => student.marks > 75);
console.log("Filtered:", topStudents);
