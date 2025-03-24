import { getParam } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./productDetails.mjs";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

const dataSource = new ProductData("tents");
const productId = getParam("product");
console.log(dataSource.findProductById(productId));

const product = new ProductDetails(productId, dataSource);
product.init();

// // Add to cart button event handler
// async function addToCartHandler(e) {
//   const product = await dataSource.findProductById(e.target.dataset.id);
//   addProductToCart(product);
// }

// // Add listener to "Add to Cart" button
// document
//   .getElementById("addToCart")
//   .addEventListener("click", addToCartHandler);
