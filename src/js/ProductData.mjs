function convertToJson(res) { //converts API response to a Javascript object
  if (res.ok) { // Checks if the response is valid
    return res.json();
    
  }
}

export default class ProductData {
  constructor(category) {
    this.category = category;  //storing the product category ie (tents)
    this.path = `../public/json/${this.category}.json`; // Constructs the path to the JSON file based on the category
    
  }
  getData() {
    return fetch(this.path) // Fetches the JSON file from the constructed path
      .then(convertToJson) //Converts JSON text to a JS object
      .then((data) => data); //Now we can use the data as an object
  }
  async findProductById(id) {
    const products = await this.getData(); // Retrieves all products data
    return products.find((item) => item.Id === id); // Finds and returns the product with the matching ID
  }
}


