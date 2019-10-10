var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
  cart.push({ itemName: item, itemPrice: Math.floor(Math.random() * 101)})
  return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if (cart.length === 0){
    return 'Your shopping cart is empty.'
  }

  if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
  let str = 'In your cart, you have '
  for (let i=0; i<cart.length; i++){
    if (cart.length === i+1){
      str = str.concat(`and ${cart[i].itemName} at $${cart[i].itemPrice}.`)
    } else {
      str = str.concat(`${cart[i].itemName} at $${cart[i].itemPrice}, `)
    }
  }
  return str
}

function total() {
  // write your code here
  return cart.reduce((total, currentValue) => { return total + currentValue.itemPrice }, 0);
}

function removeFromCart(item) {
  // write your code here

  let filteredCart = cart.filter(el => el.itemName !== item)
  if (filteredCart.length !== cart.length){
    cart = filteredCart
    return cart
  } else {
    return 'That item is not in your cart.'
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber){
    return `Sorry, we don't have a credit card on file for you.`
  }  

  let str = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
  cart = []
  return str
}
