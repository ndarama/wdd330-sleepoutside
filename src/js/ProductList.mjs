import { renderListWithTemplate } from "./utils.mjs";

export function productCardTemplate(product) {
  return `
    <div class="product-card">
      <img src="${product.Image}" alt="${product.Name}">
      <h3>${product.Name}</h3>
      <p>${product.price}</p>
      <button data-id="${product.id}">Add to Cart</button>
    </div>
  `;
}

export default class ProductList {
  constructor(category, dataSource, listElement) {
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
  }

  async init() {
    const list = await this.dataSource.getData();
    this.renderList(list);
  }

  renderList(list) {
    renderListWithTemplate(productCardTemplate, this.listElement, list);
  }
}
