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


function traverseArr(arr) {
var isWork=prompt("do you have a jop?");
var isMarried=prompt("Are you Married?");
var isParent=prompt("Do you have kids?");
arr.push(isWork,isMarried,isParent);
}
   

function isEmpty(arr){
    for(var i=arr[i]; i<arr.length; i++){
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

traverseArr(allAnswerArr);
isEmpty(allAnswerArr);
printArr(allAnswerArr);


