export function ADD_PRODUCT (state, selectedProduct) {
  let found = state.productsInBasket.find(product => product.id === selectedProduct.id);
  if (found) {
   found.quantity ++;
    found.totalPrice = found.quantity * found.price;
  } else {
    state.productsInBasket.push(selectedProduct);
    selectedProduct.totalPrice = selectedProduct.price

  }
  state.cartCount++;
  console.log(state.cartCount)
}
export function ADD_COUNT (state, selectedProduct) {
  let found = state.productsInBasket.find(product => product.id === selectedProduct.id);
  if (found) {
    found.quantity ++;
    found.totalPrice = found.quantity * found.price;
  } else {
    selectedProduct.totalPrice = selectedProduct.price
  }
  state.cartCount++;
  console.log(state.cartCount)
}
export function DETAILS (state, selectedProduct) {
    state.memory.push(selectedProduct);
  console.log(this.state.memory)
}
export function DELETE_PRODUCT(state, delProduct) {
  let index = state.productsInBasket.indexOf(delProduct);

  if (index > -1) {
    let product = state.productsInBasket[index];
    state.cartCount -= product.cartCount;
    state.productsInBasket.splice(index, 1);
  }

}
export function REDUCE (state, selectedProduct) {
  let found = state.productsInBasket.find(product => product.id === selectedProduct.id);
  if (found && found.quantity > 1) {
    found.quantity --;
    found.totalPrice = found.quantity * found.price;
  }
  else if (found.quantity === 1 ) {
    let index = state.productsInBasket.indexOf(found);
      let product = state.productsInBasket[index];
      state.cartCount -= product.cartCount;
      state.productsInBasket.splice(index, 1);
  }
  else {
    selectedProduct.totalPrice = selectedProduct.price
  }

}
export function CLEAR_ALL(state) {
    state.productsInBasket = []
  }
export function CLEAR_MEM_ALL(state) {
  state.memory = []
}
export function PRODUCT_MUTATION(state,products) {
  return(state.products = products)

}
