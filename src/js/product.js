//import { getLocalStorage, setLocalStorage } from "./utils.mjs";
import ExternalServices from "./ExternalServices.mjs";
import { getParam } from "./utils.mjs";
import ProductDetails from "./ProductDetails.mjs";



const dataSource = new ExternalServices("tents");
const productId = getParam('product');//week 2

const product = new ProductDetails(productId, dataSource);
product.init();


/*function addProductToCart(product) {
  let cartItems = getLocalStorage("so-cart") || []; // Ensuring cart is an array
  console.log("cartItems:", cartItems, "Type:", typeof cartItems); // Debugging

  if (!Array.isArray(cartItems)) {
    console.warn("cartItems is not an array, resetting to []");
    cartItems = []; // Reset to empty array
  }

  cartItems.push(product);
  setLocalStorage("so-cart", cartItems);
  console.log("Cart updated:", cartItems); 
}
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(productId);//(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);

*/