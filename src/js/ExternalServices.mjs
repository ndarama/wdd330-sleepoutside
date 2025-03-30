const baseURL = import.meta.env.VITE_SERVER_URL
async function convertToJson(res) { //converts API response to a Javascript object
  if (res.ok) { // Checks if the response is valid
    return res.json();
    }
    else{
      throw new { name: 'servicesError', message: jsonResponse };
    }
}


export default class ExternalServices {
  constructor() {
    //this.category = category;  //storing the product category ie (tents)
   // this.path = `../public/json/${this.category}.json`; // Constructs the path to the JSON file based on the category
    
  }
  async getData(category) {
    const response = await fetch(`${baseURL}products/search/${category}`);
    const data = await convertToJson(response);
    return data.Result;
  }
  async findProductById(id) {
    const response = await fetch(`${baseURL}product/${id}`);
    const data = await convertToJson(response);
    console.log(data.Result);
    return data.Result;
  }
  async checkout(payload) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };
    return await fetch(baseURL + "checkout/", options).then(convertToJson);
  }
  
}



