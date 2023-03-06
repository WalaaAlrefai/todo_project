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
const allAnswerArr=[];

function askQuestion(question){
    return prompt(question);
}
function answerSaver(arr){
    var isWork= askQuestion("do you have a jop?");
    var isMarried=askQuestion("Are you Married?");
    var isParent=askQuestion("Do you have kids?");
    arr.push(isWork,isMarried,isParent);
}

function isEmpty(arr){
    for(let i=0; i<arr.length; i++){
    if (arr[i]=="yes" || arr[i]=="no"){
       arr[i]=arr[i];
    }else{
        arr[i]="invalid";
    }
   
}
}
function printArr(arr){
    for(let i=0;i<arr.length;i++){
      console.log(arr[i]);
    }
}

answerSaver(allAnswerArr);
isEmpty(allAnswerArr);
printArr(allAnswerArr);


