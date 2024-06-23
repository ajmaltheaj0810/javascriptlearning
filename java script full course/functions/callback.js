// when we use function as an argument in it we dont want to use bracket in it.

function display(result){
    console.log(result);
}
function add(n1,n2,cb){
    let sum=n1+n2;
    cb(sum);
}
console.log(add(9,4,display));

// anonymous functions
let fas=function(x,y){
    return x-y;
}
console.log(fas(2,1));

// settimeout is a javafunction that accepts one function and time in milliseconds
// it is a form of timer which execute when the timeout happens.
setTimeout(function(){
    console.log("hello,world!")
},6000);

// recursive function is a type of function where the function call itself in the process