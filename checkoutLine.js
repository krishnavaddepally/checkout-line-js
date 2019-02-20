let eggs = {
  itemName: 'dozen eggs',
  quantity: 2,
  price: 0.99
}

let milk = {
  itemName: 'gallon of milk',
  quantity: 1,
  price: 2.99
}

let bread = {
  itemName: 'loaf of bread',
  quantity: 1,
  price: 3.50
}

let coffee = {
  itemName: 'lbs. of coffee',
  quantity: 10,
  price: 8.99
}

let shoppingCart = [eggs, milk, bread, coffee]
shoppingCart.forEach((item)=>{

  if(item===milk){
    console.log(item.quantity+" "+ item.itemName + " is in the shopping cart" )

    }
    if(item===coffee){
      console.log(item.price + " is the price of 1 lb of coffee")
  }

})
finalTotal=0
const taxValue= 6.25
shoppingCart.forEach((item) =>{

total1 = item.quantity*item.price
finalTotal=total1+finalTotal


})
console.log("before tax : " + finalTotal)
console.log("after tax : " + (finalTotal*(1+(taxValue/100))))


// your code, here
