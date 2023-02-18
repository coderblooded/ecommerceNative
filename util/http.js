import axios from "axios";

const BACKEND_URL = "https://fakestoreapi.com";

export async function fetchProducts() {
  const response = await axios.get(BACKEND_URL + "/products");
  const products = [];

  for (const key in response.data) {
    const productsObj = {
      id: key,
      title: response.data[key].title,
      price: response.data[key].price,
      category: response.data[key].category,
      description: response.data[key].description,
      image: response.data[key].image,
    };
    products.push(productsObj);
  }

  return products;
}
