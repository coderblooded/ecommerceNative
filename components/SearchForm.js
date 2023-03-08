import { View, StyleSheet, Text, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

const SearchForm = ({ products, setSearchedProducts }) => {
  const [search, setSearch] = useState("");

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  const searchedProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  setSearchedProducts(searchedProducts);
  return (
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
          onChange={searchHandler}
        />
      </View>
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

export default SearchForm;
