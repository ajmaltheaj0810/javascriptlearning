// functions are the block of code that performs the specific tasks 

// syntax for the function are
// function functionname(){}

function greet(){
    console.log("hello,james");
}
greet();

// parameters are the variables that are declared in the function definitions

// arguments are the the passing within the function.

function great(fname,lname){
    console.log(fname+"-"+lname);
}
great("ajmal","work");//passing of arguments
great("ajmal");//less arguments

//function returns

function sum(a,b){
    return a+b;
}
console.log(sum(2,3));

setTimeout(function sum(a,b){
    console.log(2+3);
},2000);