const high = {
    fname:"nh2",
    dname:"dpi",
    years:35,
    greet1:function(){
        console.log("hello i am using js");
    }
}
high.greet1();

// it is called as object method

const high1={
    fname:"nh2",
    dname:"dpi",
    years:35,
}

function greet(){
    console.log("hello i am using js");
}
high1.greeting=greet;
console.log(high1);

console.log(high1.greeting());
//this keyword to acces other property inside the function we can use this keyword.

const high2={
    fname:"nh2",
    dname:"dpi",
    years:35,
    greet:function(){
        console.log("hello i am using js"+this.fname);
    }
}
console.log(high2.greet());

// if we use this keyword alone it will replay it as a global objects

console.log(this);
