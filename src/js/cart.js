import { getLocalStorage, loadHeaderFooter } from "./utils.mjs";


loadHeaderFooter();

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart") || [];
  cartSuperscript(cartItems);
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");
  cartTotal(cartItems);
}

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Images.PrimarySmall}"
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
//function to compute total items and total price
function cartTotal(items) {
  const cartCard = document.querySelector(".list-footer");
  const cartCountElem = document.querySelector(".cart-count");
  const cartSubtotalElem = document.querySelector(".cart-subtotal");

  if (!cartCard || !cartCountElem || !cartSubtotalElem) {
    console.error("Missing cart elements in HTML!");
    return;
  }

  if (items.length <= 0) {
    cartCard.classList.add("hide"); 
  } else {
    cartCard.classList.remove("hide"); 
    const subtotal = items.reduce((acc, item) => acc + item.FinalPrice, 0);
    const cartCount = items.length;

    cartCountElem.textContent = cartCount > 1 ? `${cartCount} items` : `${cartCount} item`;
    cartSubtotalElem.textContent = `$${subtotal.toFixed(2)}`;
  }
}

renderCartContents();