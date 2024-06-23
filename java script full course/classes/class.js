class Main{
 constructor(name, age){
    this.name=name;
    this.age=age;
}
}
const p1=new Main("elon",9);
const p2=new Main("musk",89);

console.log(p1);

class In{
    constructor(name,age){
        this.name=name;
        this.age;
    }
    greet(){
        return "hello"+this.name;
    }
}
const p0=new In("elon musk",45);

console.log(p0);