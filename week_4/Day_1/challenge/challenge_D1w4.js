let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}
const displayGroceries=()=>{
     groceries.fruits.forEach(fruit => {
        console.log(fruit)
        
    });
}
const cloneGroceries=()=>{
    user=client
    client="Betty"//no, the user variable keep the old value "john" because the change happen after the assignement
    shopping=groceries
    groceries.totalPrice="35$"//yes will change also because shopping and groceries are objects have the same reference id in the memory.
    shopping.paid=false//yes, now every change in both objects apears in both.
    console.log("shopping:", shopping);
  console.log("groceries:", groceries);
}
displayGroceries()
cloneGroceries()
