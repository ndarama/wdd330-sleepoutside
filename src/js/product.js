import { getLocalStorage, setLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";

const dataSource = new ProductData("tents");

function addProductToCart(product) {
  // Use `let` to allow reassignment
  let cartItems = getLocalStorage("so-cart");

  if (!Array.isArray(cartItems)) {
    cartItems = []; // Reset to an empty array
  }

  cartItems.push(product);
  setLocalStorage("so-cart", cartItems);
}

// Add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// Add listener to "Add to Cart" button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
