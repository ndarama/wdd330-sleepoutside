import { getLocalStorage } from "./utils.mjs";
import  setLocalStorage  from "./utils.mjs";
import ShoppingCart from "./ShoppingCart.mjs";

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");

//week 2 individual task Bettina

  if (cartItems.length === 0) {
    document.querySelector(".product-list").innerHTML = "<p>Your cart is empty.</p>";
    return;
  }
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");
}

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}

renderCartContents();

const cartList = document.querySelector(".product-list"); 
const cart = new ShoppingCart("so-cart", cartList);
cart.init();

//Week 2 Clear Cart Function
function clearCart() {
  localStorage.removeItem("so-cart"); // Remove items from storage
  renderCartContents(); // Refresh the UI
}

document.getElementById("clearCart").addEventListener("click", clearCart);

renderCartContents();

