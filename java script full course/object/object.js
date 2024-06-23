//object in javascript

const high={
    fname:"nh2",
    dname:"dpi",
    years:35
}

high.fname="nh4";
console.log(high["fname"]);
// we can also use dot property to execute the code

// now adding of property to the object
const high={
    fname:"nh2",
    dname:"dpi",
    years:35
}
high.paid=52455;
console.log(high);

// deletion 

const high={
    fname:"nh2",
    dname:"dpi",
    years:35
}

delete high.dname;

console.log(high);

// nested objects

const high={
    fname:"nh2",
    dname:"dpi",
    years:35,
    address:{
        street:"kanda",
        door:54,
        country:"India"
    }
}
console.log(high);
console.log(high.address.door);
console.log("years" in high);//it is used to check whether the property is present in the object or not.

// for getting all property we can use for loop for printing the statements.

const high={
    fname:"nh2",
    dname:"dpi",
    years:35
}

for(let pro in high){
    console.log(pro);
}

const high={
    fname:"nh2",
    dname:"dpi",
    years:35
}

for(let pro in high){
    console.log(high[pro]);
}
// for displaying the values
