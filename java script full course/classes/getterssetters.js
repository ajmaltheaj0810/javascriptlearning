class person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
   changename(newname){
        this.name=newname;
    }

}
const p1=new person("elon", 7);

p1.changename("musk");
console.log(p1);

// it is nothing but it is a writing of function

class person2{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
  set changename(newname){
        this.name=newname;
    }

}
const p2=new person2("elon", 7);

p2.changename="master";
console.log(p2)

class person1{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
  set changename(newname){
        this.name=newname;
    }
  get changename(){
    return this.name
  } 

}
const p3=new person1("elon", 7);
p3.changename="ajmal";
console.log(p3);

//class name declaration

