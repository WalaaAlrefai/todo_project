var userName=prompt("add your name");
console.log(userName);
var userGender=prompt("what is your gender?");
console.log(userGender);
var userAge=prompt("add your age");
while (userAge<=0){
    alert("the age is less than or equal to zero.");
    prompt("add your age");
    break;
} 
var userAnser;
userAnswer=confirm("confirm if you want to skip the welcoming message.");
if(userAnswer===false){
    var title;
    if (userGender =="male"){
        alert("welcome Mr")+userName
    }
    else if (userGender =="female") {
        alert("welcome Ms "+userName)

    } else{
        alert("welcome");
    }

}

