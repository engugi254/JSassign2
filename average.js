const students = {
    David: 80,
    Vinoth: 77,
    Divya: 88,
    Ishitha: 95,
    Thomas: 68
}

const sum = Object.values(students).reduce((a, b) => a + b);
const average = sum/Object.keys(students).length;

if(average <= 60 ){
    console.log("F");
}
else if(average <= 70 ){
    console.log("D");
}
else if(average <= 80 ){
    console.log("C");
}
else if(average <= 90 ){
    console.log("B");
}
else{
    console.log("A");
}