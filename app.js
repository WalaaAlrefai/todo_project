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
var userAnswer;
userAnswer=confirm("confirm if you want to skip the welcoming message.");
if(userAnswer===false){
    var title;
    if (userGender =="male"){
        alert("welcome Mr "+userName)
    }
    else if (userGender =="female") {
        alert("welcome Ms "+userName)

    } else{
        alert("welcome");
    }

}
var allAnswerArr=[];
var isWork=prompt("do you have a jop?");
var isMarried=prompt("Are you Married?");
var isParent=prompt("Do you have kids?");
function isEmpty(string){
    if (string=="yes" || string=="no"){
       string=string;
    }else {
        string="invalid";
    }
    return string;
}

var employeed=isEmpty(isWork);
var married=isEmpty(isMarried);
var parent=isEmpty(isParent);
allAnswerArr=[employeed,married,parent];
console.log (allAnswerArr);

