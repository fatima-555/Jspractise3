  //p,3
var percentage = +prompt("Enter your percentage");

if(percentage <= 50){
    alert("Your grade is D");
}

else if(percentage <= 60){
    alert("Your grade is C");
}

else if(percentage <= 70){
    alert("Your grade is B");
}

else if(percentage <= 79){
    alert("Your grade is A");
}

else if(percentage <= 100){
    alert("Your grade is A+");
}

else{
    alert("Invalid result!");
}
