// code reusability will takes place here

class person{
    constructor(name,age){
        this.name=name;
    }
    greet(){
        console.log("hello "+this.name);
    }
}
class student extends person{
    constructor(name){
        super(name);
    }
}
const s1= new student("ajmal");

console.log(s1.greet());

//super method are used to call the parent class from the child class