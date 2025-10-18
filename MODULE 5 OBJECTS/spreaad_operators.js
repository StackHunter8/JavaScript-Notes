// -spread operators helps us to make the copy of the object ,array,list,etc
// -the copies are treaated as shallow copies of the object , arry ,list,etc
// -shallow copies does noyt ccopiy the deep nested data
//- when we create the shallow copy of a particular array ,list,etc
//- it created a separate ddatatype likeise array ,list or aany other and gives it the different address.
//-when we the list ,obejvct or arry is nested  then in that case  the spread operator only stored the
//  reference of the nested arry,list,object and does not allocate new address gto them after making copy that means
//  it still points to the original one and thus the changes gets reflected.
// for using spreead operator u have to use the same braces used for the original one

let user = {
    name: " Parnika",
    age : 22,
    city : "Pune"
}

let comapny = ["Cagg","Tcs"]

let newUser = {...user};
console.log(newUser);

let newCompany = [...comapny]
console.log(newCompany);


// modifying data 

newUser.company = "TCs";
console.log(user);

console.log(newUser);
// in this the changes get reflected to the copy and not to the original one


let placement = {
     name : "Pari",
     company : ["Tcs","Capg"]
}

console.log(placement);
let newPalcement = {...placement}
console.log(newPalcement);

newPalcement.company[0] = "Cognizant";
console.log(placement);
console.log(newPalcement);


// like i mentioned above internal refernces for nested array ,object,function ,list remain same so the original one also gets modified

newPalcement.placed  = " Yes";
 console.log(placement);
 console.log(newPalcement);
 
//  see here when i modified the ouiter things the changes
//  didnt reflected in the original one bt got reflected in the copy
 


// MERGING TWO OBJECTS

let obj1 = {

    name : "Parnika",
    age : 22,
    phoneNo : 8010999343
}

let address = {
    city : "Pune",
    phoneNo : 9373670099
}

let mergedOne = {...obj1,...address}
console.log(mergedOne);

//If properties are repeated, the later object overwrites earlier ones.
// here phone no is repeated btr the preference is given to the key to which the alue is assigned  last among the repeated keys
