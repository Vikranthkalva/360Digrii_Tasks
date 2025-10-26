let totalMarks = 0;

for (let i = 0; i < students.length; i++) {
  totalMarks += students[i].marks;
}

let average = totalMarks / students.length;
console.log("Average Marks:", average.toFixed(2));

