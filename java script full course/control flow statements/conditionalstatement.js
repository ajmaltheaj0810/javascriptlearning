// conditional staements are nothing but it is an if else statement


// if statements
let age=30;

if(age>18){
    console.log("you are eligible to vote");
}

// if else statements
let age1=9;

if(age1>17){
    console.log("you are major");
}
else{
    console.log("you are a minor");
}

// switch statements

let name=23;

switch (typeof name){
    case "string":
        console.log("it is a string");
        break;
    case "number":
        console.log("it is a number");
        break;
    case "boolean":
        console.log("it is a boolean");
        break;
    default:
        console.log("other");
        break;
}

let day=2;

switch(day){
    case 1:
        day="sun";
        break;
    case 2:
        day="mon";
        break;
    case 3:
        day="tues";
        break;
    case 4:
        day="wed";
        break;
    case 5:
        day="thurs";
        break;
    case 6:
        day="fri";
        break;
    case 7:
        day="sat";
        break;
    default:
        day="invalid";
}
console.log("the day is " +day );