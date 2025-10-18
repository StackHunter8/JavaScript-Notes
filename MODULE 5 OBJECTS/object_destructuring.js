// Object destructuring is nothing bt to destructrure a object in such a way that we only pick out thoose
//  value from the object that we actually need.

let user = {
    name: "Parnika",
    age : 22,
    // city :"Pune"

}

// let {name, city} = user;

// after = ssign the name should be same as that of the object name

// console.log(name);
// console.log(city);
// in this we can only have a direct access to the keys that we have mmentuioned during destructuring else 
//  if we try to use the other keys directly just like the destructured values iyt simply gives the ReferenceError of value not found


// console.log(age);
// here we will get the reference error for this line

// to overcome thiss error we can write 
console.log(user.age);

// modifying the data by destructuringh of object 

// renaming variables
// key cha bname change karaicha asel tr :
let {name : usernaame} = user;
console.log(usernaame);

// And set default values:
// vaalue set karaichi asel tr eaual to sign
let {city =  "Chenni"} = user;
console.log(city);
// in this if there is no city variable or key is present in 
// the object then in that case if we still access the key and if
//  we have declared the key  with default value while destructuring 
// of object the that value gets printed when we access that key







