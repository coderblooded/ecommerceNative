import { View, StyleSheet, Text, FlatList } from "react-native";
import { useState } from "react";
import Product from "./Product";

function renderProductItem(itemData) {
  return <Product {...itemData.item} />;
}

const Products = ({ products }) => {
  return (
    <View
      style={{
        marginVertical: 20,
      }}
    >
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
        // scrollEnabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Products;
