let student = {
    name: "Rahul",
    age : 21,
    marks: [{Maths:85}, {Science:90}, {English:88}]
}
let sum=0;
let avg=0;
for(let i=0; i<student.marks.length; i++){
    sum=sum+Object.values(student.marks[i])[0];
     
}
avg=sum/student.marks.length;
console.log(student.name);
console.log(avg.toFixed(2));