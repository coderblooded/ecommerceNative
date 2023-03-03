import { View, StyleSheet, Text, TextInput, Pressable } from "react-native";
import { useContext, useState } from "react";
import { ProductsContext } from "../store/products-context";
import Products from "../components/Products";
import { Ionicons } from "@expo/vector-icons";
import IconButton from "../components/UI/IconButton";

const ProductsScreen = () => {
  const productsCtx = useContext(ProductsContext);
  if (productsCtx.isFetching) return <Text>Loading...</Text>;

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.containerTextInput}>
          <Ionicons
            name="search"
            size={20}
            color="#576574"
            style={{ marginLeft: 14 }}
          />
          <TextInput
            style={styles.textInput}
            placeholder="What are you looking for?"
          />
        </View>
      </View>

      <View>
        <Text
          style={{
            marginTop: 30,
            paddingLeft: 36,
            fontSize: 15,
          }}
        >
          Categories
        </Text>

        <View style={styles.categoriesContainer}>
          <View style={styles.categoryItem}>
            <IconButton
              icon="logo-electron"
              size={22}
              userStyle={styles.categoryItemImage}
              pressedStyle={styles.categoryItemPressed}
            />
            <Text style={styles.categoryTitle}>Eletronics</Text>
          </View>
          <View style={styles.categoryItem}>
            <IconButton
              icon="logo-electron"
              size={22}
              userStyle={styles.categoryItemImage}
              pressedStyle={styles.categoryItemPressed}
            />
            <Text style={styles.categoryTitle}>Jewelry</Text>
          </View>
          <View style={styles.categoryItem}>
            <IconButton
              icon="shirt-outline"
              size={22}
              userStyle={styles.categoryItemImage}
              pressedStyle={styles.categoryItemPressed}
            />
            <Text style={styles.categoryTitle}>Shirts</Text>
          </View>
          <View style={styles.categoryItem}>
            <IconButton
              icon="woman-outline"
              size={22}
              userStyle={styles.categoryItemImage}
              pressedStyle={styles.categoryItemPressed}
            />
            <Text style={styles.categoryTitle}>Dress</Text>
          </View>
        </View>
      </View>

      <Products products={productsCtx.products} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 18,
  },
  containerTextInput: {
    flexDirection: "row",
    backgroundColor: "#dfe6e9",
    width: "80%",
    borderRadius: 21,
    paddingVertical: 8,
    alignItems: "center",
    elevation: 2,
  },
  textInput: {
    paddingLeft: 12,
    fontSize: 12,
    color: "#576574",
  },
  categoriesContainer: {
    marginTop: 17,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: "auto",
  },
  categoryItem: {
    marginHorizontal: 8,
    alignItems: "center",
  },
  categoryItemImage: {
    backgroundColor: "#dfe6e9",
    width: 45,
    borderRadius: 12,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
  },
  categoryItemPressed: {
    backgroundColor: "rgba(5,150,105,1)",
    width: 45,
    borderRadius: 12,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
  },
  categoryTitle: {
    fontSize: 10,
    marginTop: 7,
    color: "#4b6584",
  },
});

export default ProductsScreen;
