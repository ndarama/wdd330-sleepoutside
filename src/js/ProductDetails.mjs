import { setLocalStorage } from "./utils.mjs";

function productDetailsTemplate(product) {
  return `<section class="product-detail"> <h3>${product.Brand.Name}</h3>
    <h2 class="divider">${product.NameWithoutBrand}</h2>
    <img
      class="divider"
      src="${product.Image}"
      alt="${product.NameWithoutBrand}"
    />
    <p class="product-card__price">$${product.FinalPrice}</p>
    <p class="product__color">${product.Colors[0].ColorName}</p>
    <p class="product__description">
    ${product.DescriptionHtmlSimple}
    </p>
    <div class="product-detail__add">
      <button id="addToCart" data-id="${product.Id}">Add to Cart</button>
    </div></section>`;
}



export default class ProductDetails {
    constructor(productId, dataSource) {
      this.productId = productId; // e.g., "880RR"
      this.product = {}; // Will store product details
      this.dataSource = dataSource; // Instance of ProductData
    }


async init() {
  
  this.product = await this.dataSource.findProductById(this.productId);
  
  
  this.renderProductDetails(selector);
  
  
  document.getElementById('addToCart')
    .addEventListener('click', this.addProductToCart.bind(this));
}

addProductToCart() {
  const cartItems = getLocalStorage("so-cart") || [];
  cartItems.push(this.product);
  setLocalStorage("so-cart", cartItems);
}

renderProductDetails(selector) {
  const element = document.querySelector(selector);
  element.insertAdjacentHTML(
    "afterBegin",
    productDetailsTemplate(this.product)
  );
}
}

