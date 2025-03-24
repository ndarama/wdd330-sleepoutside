import { loadHeaderFooter } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductList from "./productList.mjs";

document.addEventListener("DOMContentLoaded", () => {
  loadHeaderFooter();
});

const dataSource = new ProductData("tents");
const element = document.querySelector(".product-list");
const productList = new ProductList("Tents", dataSource, element);
productList.init();
