import { View, StyleSheet, Text, FlatList } from "react-native";
import { useContext, useState } from "react";
import { ProductsContext } from "../store/products-context";
import Product from "../components/Product";

const CategoryScreen = ({ route }) => {
  function renderProductItem(itemData) {
    return <Product {...itemData.item} />;
  }

  const productCategory = route.params?.category;
  const productsCtx = useContext(ProductsContext);

  const products = productsCtx.products;
  const selectedProducts = products.filter(
    (product) => product.category === productCategory
  );

  return (
    <View>
      <FlatList
        data={selectedProducts}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CategoryScreen;
