let cart = 0;

function addToCart(name) {
  document.getElementById('cart-count').textContent = ++cart;
  alert(`${name} added to cart!`);
}