import { View, StyleSheet, Text, FlatList } from "react-native";
import { useState } from "react";
import Product from "./Product";

function renderProductItem(itemData) {
  return <Product {...itemData.item} />;
}

const Products = ({ products }) => {
  return (
    <FlatList
      data={products}
      renderItem={renderProductItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({});

export default Products;
