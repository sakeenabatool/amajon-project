export let cart = [
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 2,
  },
];

export function removeFromCart(productId) {
  const newCart = [];
  cart.forEach((item) => {
    if (item.id !== productId) {
      newCart.push(item);
    }
  });
  cart = newCart;
}

export function addToCart(productId) {
  let matchingitem;
  cart.forEach((item) => {
    if (productId === item.id) {
      matchingitem = item;
    }
  });
  if (matchingitem) {
    matchingitem.quantity += 1;
    console.log(cart);
  } else {
    cart.push({
      id: productId,
      quantity: 1,
    });
  }
}
