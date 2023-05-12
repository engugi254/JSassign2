let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
let o = ["th","st","nd","rd"];

//expected output
// "1st choice is Blue ."
// "2nd choice is Green."
// "3rd choice is Red."
for(let i = 0; i < color.length; i++){
    if(color[i] === "Blue"){
        console.log(`${i+1}${o[1]} choice is ${color[i]}`);
    }
    else if(color[i] === "Green"){
        console.log(`${i+1}${o[2]} choice is ${color[i]}`);
    }
    else if(color[i] === "Red"){
        console.log(`${i+1}${o[3]} choice is ${color[i]}`);
    }
    else{
        console.log(`${i+1}${o[0]} choice is ${color[i]}`);
    }
}