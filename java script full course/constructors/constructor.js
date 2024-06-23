function Person(first,last){
    this.fname=first,
    this.lname=last
}

const p1= new Person("kavin","raj");//constructor which helps to construct another object
const p2= new Person("kirhsna","jeeva");

console.log(p1);
console.log(p2);

// addition of property

function Person(first,last){
    this.fname=first,
    this.lname=last
}

const p1= new Person("kavin","raj");//constructor which helps to construct another object
// const p2= new Person("kirhsna","jeeva");
p1.age=90;
console.log(p1);

function Person(first,last){
    this.fname=first,
    this.lname=last,
   this.greet = function(){
        console.log("hello i am using js "+this.fname+this.lname);
    }
}
const p1= new Person("kavin","raj");//constructor which helps to construct another object
const p2= new Person("kirhsna","jeeva");
console.log(p1.greet());
console.log(p2.greet())