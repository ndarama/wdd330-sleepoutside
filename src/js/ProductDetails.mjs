import { getLocalStorage, setLocalStorage } from "./utils.mjs";


export default class ProductDetails {
    constructor(productId, dataSource) {
      this.productId = productId; // e.g., "880RR"
      this.product = {}; // Will store product details
      this.dataSource = dataSource; // Instance of ProductData
    }


async init() {
  
  this.product = await this.dataSource.findProductById(this.productId);
  
  
  this.renderProductDetails();
  
  
  document.getElementById('add-To-Cart')
  document.addEventListener('click', this.addProductToCart.bind(this));
}

addProductToCart() {
  const cartItems = getLocalStorage("so-cart") || [];
  cartItems.push(this.product);
  setLocalStorage("so-cart", cartItems);
}

renderProductDetails() {    
  productDetailsTemplate(this.product)
 
}
}

/*function productDetailsTemplate(product) {
  return `<section class="product-detail"> <h3>${product.Brand.Name}</h3>
    <h2 class="divider">${product.NameWithoutBrand}</h2>
    <img
      class="divider"
      src="${product.Images.PrimaryExtraLarge}"
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
*/

function productDetailsTemplate(product) {
  document.querySelector("h2").textContent = product.Category.charAt(0).toUpperCase() + product.Category.slice(1);
  document.querySelector("#p-brand").textContent = product.Brand.Name;
  document.querySelector("#p-name").textContent = product.NameWithoutBrand;

  const productImage = document.querySelector("#p-image");
  productImage.src = product.Images.PrimaryExtraLarge;
  productImage.alt = product.NameWithoutBrand;
  const euroPrice = new Intl.NumberFormat('de-DE',
    {
      style: 'currency', currency: 'EUR',
    }).format(Number(product.FinalPrice) * 0.85);
  document.querySelector("#p-price").textContent = `${euroPrice}`;
  document.querySelector("#p-color").textContent = product.Colors[0].ColorName;
  document.querySelector("#p-description").innerHTML = product.DescriptionHtmlSimple;

  document.querySelector("#add-to-cart").dataset.id = product.Id;
}