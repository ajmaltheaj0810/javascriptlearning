// destructuring object is used to assign the objects in different ways
const person={
    fname:"nandhu",
    lname:"gopal"
};

// let {property value;variable value,property value:variable value}

let{fname:f,lname:l}=person;

console.log(f);

const person2={
    fname:"nandhu",
    lname:"gopal"
};
let{fname,lname} = person2;
console.log(fname);

// when we try to use the parameters which is not inside the object property it will be undefined
