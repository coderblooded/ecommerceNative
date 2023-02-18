import { createContext, useEffect, useReducer, useState } from "react";
import { fetchProducts } from "../util/http";

export const ProductsContext = createContext();

function ProductsContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const fetchAPI = async () => {
      setProducts(await fetchProducts());
      setIsFetching(false);
    };

    fetchAPI();
  }, []);

  const productsState = {
    isFetching: isFetching,
    products: products,
  };
  return (
    <ProductsContext.Provider value={productsState}>
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsContextProvider;
