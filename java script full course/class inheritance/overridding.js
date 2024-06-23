class person{
    constructor(name,age){
        this.name=name;
    }
    greet(){
        console.log("hello "+this.name);
    }
}
class student extends person{
    greet(){
        console.log("hello students"+this.name);
    }
}
const p12= new student("peter");

p12.greet();
// override methods

// static method can be called in class not as object

class per{
    constructor(name){
        this.name=name;
    }
    static greet(){
        console.log("hello!");
    }
}
const p1= new per("elon");
per.greet();

// private methods are called within the class

class Person{
    constructor(fname,lname){
        this.fname=fname;
        this.lname=lname;
    }
   static #fullname(s){
        return s.fname+" "+s.lname;
    }
    display(){
        console.log(Person.#fullname(this));
    }
}
const per2=new Person("elon","musk");

console.log(per2.display());