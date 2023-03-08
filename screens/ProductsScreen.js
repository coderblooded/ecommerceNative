import { View, StyleSheet, Text, TextInput, Pressable } from "react-native";
import { useContext, useState } from "react";
import { ProductsContext } from "../store/products-context";
import Products from "../components/Products";
import IconButton from "../components/UI/IconButton";
import Categories from "../components/Categories";
import SearchForm from "../components/SearchForm";
import { Ionicons } from "@expo/vector-icons";

const ProductsScreen = () => {
  const productsCtx = useContext(ProductsContext);
  const [search, setSearch] = useState("");

  const searchHandler = (event) => {
    setSearch(event);
  };

  const searchedProducts = productsCtx.products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );
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
            value={search}
            onChangeText={searchHandler}
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
      </View>

      <Categories />

      <Products products={searchedProducts} />
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
});

export default ProductsScreen;
