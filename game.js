const prompt=require("prompt-sync")();
let a =Math.round(Math.random()*101);
let guess=0;
let i=prompt("Enter no.")
  let chances=100;
while(i!=a){
  if(i<a){
    console.log("no. is bigger than" + i)
  }else{
    console.log("no. is smaller than" + i)
  }
  
  i=prompt("Enter no.")
  guess++;
  chances=chances-guess;
}
console.log("you got the no."+ a +" \n your score is" + chances);
