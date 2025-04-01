import { loadHeaderFooter, getParam } from "./Utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductList from "./productList.mjs";

loadHeaderFooter();

const category = getParam("category");
const dataSource = new ProductData("tents");
const element = document.querySelector(".product-list");
const mytList = new ProductList(category, dataSource, element);
mytList.init();
