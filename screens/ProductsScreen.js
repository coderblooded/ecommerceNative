import { View, StyleSheet, Text } from "react-native";
import { useContext, useState } from "react";
import { ProductsContext } from "../store/products-context";
import Products from "../components/Products";

const ProductsScreen = () => {
  const productsCtx = useContext(ProductsContext);
  if (productsCtx.isFetching) return <Text>Loading...</Text>;

  return (
    <View>
      <Products products={productsCtx.products} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ProductsScreen;
