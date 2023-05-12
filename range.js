let num = Number(prompt("Enter a number:"));
const minRange = 50;
const maxRange = 100;
if(num<minRange){
    console.log(false);
}
else if(num>maxRange){
    console.log(false);
}
else{
    console.log(true);
}