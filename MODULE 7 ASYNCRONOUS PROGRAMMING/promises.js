// earlier the problem of callback hell was faced and due to this it was hard to read the exact flow of code .
// so to resolve this issue promises  came.
//Promise is nothing bt a object in js.
// A Promise represents the future result of an async operation.
// it has three states resolve,reject,pending
// if the promise is sucesfull to do the work the state is resolve,if it fails the state is reject 
//  ,and if it is in process then the state is pending


// let us again take the example of pizza

// let promise = new Promise((resolve,reject)=>{
//         let isPizzaReady = true;
//         if (isPizzaReady) {
//             resolve("PIzza is ready");
//         }else{
//             reject("OOPs Pizza Burned OUt!!");
//         }
// })

// promise.then((message)=>{{
//         console.log(message);
        
// }}).catch((error)=>{
//     console.log(error);
    
// });


// how the promises solve the callback hell issue

function orderDish(){
    return new Promise((resolve,reject)=>{
        let isDishOdered = true;
        if (isDishOdered) {
            resolve("Dish orddered Successfully");
        } else {
            reject("unable to prepare order");
        }
    })
}


function eat(){
    return new Promise((resolve,reject)=>{
        let isEat = true;
        if (isEat) {
            resolve("Eating");
        } else {
            reject("dish not arrived");
        }
    })

}


function dishwash(){
    return new Promise ((resolve,reject)=>{
        isDishWashed = true;
        if (isDishWashed) {
            resolve("Dish is gettng washed");
        } else {
            reject("dish broken")
        }
    })

}

function checkout(){
    return new Promise ((resolve,reject)=>{
        let isCheckedOut = false;
        if (isCheckedOut) {
            resolve("off to home")
        } else {
            reject("ofo no chuttii")        }
    })
}

// promise chaining
// this overcomes the issue of callback hell by providing more reaadability
// here if the state is resolved the code goes in .then block and if the state is rejected then it goes in .catch block
orderDish().
            then((message)=>{
                console.log(message);
                return eat();
                
            }).
                then((message)=>{
                    console.log(message);
                    return dishwash();
                    
                }).
                    then((message)=>{
                        console.log(message);
                        return checkout();
                    }).
                        then((message)=>{
                            console.log(message);
                            
                        }).
                        catch((error)=>{
                            console.log(error);
                            
                        });


