import { getLocalStorage } from "./utils.mjs";

export default class ShoppingCart {
  constructor(key, listElement) {
    this.key = key; // Local storage key
    this.listElement = listElement; // The product list container
    this.cart = getLocalStorage(this.key) || []; // Retrieve stored cart data
  }

  cartItemTemplate(item) {
    return `<li class="cart-card divider">
      <a href="#" class="cart-card__image">
        <img src="${item.Image}" alt="${item.Name}" />
      </a>
      <a href="#">
        <h2 class="card__name">${item.Name}</h2>
      </a>
      <p class="cart-card__color">${item.Colors[0].ColorName}</p>
      <p class="cart-card__quantity">qty: 1</p>
      <p class="cart-card__price">$${item.FinalPrice.toFixed(2)}</p>
    </li>`;
  }

  renderCartContents() {
    if (this.cart.length === 0) {
      this.listElement.innerHTML = "<p>Your cart is empty.</p>";
    } else {
      const htmlItems = this.cart.map(item => this.cartItemTemplate(item));
      this.listElement.innerHTML = htmlItems.join("");
    }
  }

  init() {
    this.renderCartContents();
  }
}