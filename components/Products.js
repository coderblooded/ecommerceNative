import {
  View,
  StyleSheet,
  Text,
  FlatList,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useState } from "react";
import Product from "./Product";

function renderProductItem(itemData) {
  return <Product {...itemData.item} />;
}

const Products = ({ products }) => {
  return (
    <View
      style={{
        marginTop: 20,
        marginBottom: 40,
      }}
    >
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Products;
