import { View, StyleSheet, Text, Pressable, Image } from "react-native";
import { useContext, useState } from "react";
import Button from "./UI/Button";
import { useNavigation } from "@react-navigation/native";
import { quantityCount, isInCart, shorten } from "../util/functions";
import { Ionicons } from "@expo/vector-icons";
import { CartContext } from "../store/cart-context";

const Product = ({ id, title, price, category, image }) => {
  const { state, dispatch } = useContext(CartContext);
  const productData = { id, title, price, image, category };
  const navigation = useNavigation();
  const readMoreHandler = () => {
    navigation.navigate("ReadMoreScreen", {
      id: id,
    });
  };
  return (
    <View style={styles.productDiv}>
      <View style={styles.containerOfProductImage}>
        <Image
          style={styles.productImage}
          className=""
          source={{ uri: image }}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{shorten(title)}</Text>
        <Text style={styles.price}>${price}</Text>
        <Text style={styles.category}>Category: {category}</Text>
        <Button
          onPress={readMoreHandler}
          style={{
            marginTop: 10,
            fontWeight: "bold",
          }}
        >
          Read More
        </Button>
        <View style={styles.buttons}>
          {quantityCount(state, productData.id) === 1 && (
            <Button
              onPress={() =>
                dispatch({ type: "REMOVE_ITEM", payload: productData })
              }
              style={{ marginTop: 10, width: "40%" }}
              buttonColor={{ backgroundColor: "#c0392b" }}
            >
              <Ionicons name="trash" size={15} color="white" />
            </Button>
          )}
          {quantityCount(state, productData.id) > 1 && (
            <Button
              onPress={() =>
                dispatch({ type: "DECREASE", payload: productData })
              }
              style={{ marginTop: 10, width: "40%" }}
              buttonColor={{ backgroundColor: "#c0392b" }}
            >
              -
            </Button>
          )}
          {quantityCount(state, productData.id) > 0 && (
            <View style={styles.counter}>
              <Text>{quantityCount(state, productData.id)}</Text>
            </View>
          )}
          {isInCart(state, productData.id) ? (
            <Button
              onPress={() =>
                dispatch({ type: "INCREASE", payload: productData })
              }
              style={{ marginTop: 10, width: "40%" }}
              buttonColor={{ backgroundColor: "#3498db" }}
            >
              +
            </Button>
          ) : (
            <Button
              onPress={() =>
                dispatch({ type: "ADD_ITEM", payload: productData })
              }
              style={{
                marginTop: 10,
                width: "80%",
              }}
              buttonColor={{
                backgroundColor: "#2980b9",
              }}
            >
              Add to Cart
            </Button>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productDiv: {
    marginVertical: 24,
    justifyContent: "center",
    alignItems: "center",
    elevation: 9,
    backgroundColor: "white",
    paddingVertical: 24,
    paddingHorizontal: 10,
  },
  containerOfProductImage: {
    marginBottom: 10,
  },
  title: { textAlign: "center", fontSize: 18, fontWeight: "bold" },
  price: { textAlign: "center", marginTop: 5, color: "green" },
  category: {
    textAlign: "center",
    marginTop: 5,
    fontSize: 14,
    color: "gray",
  },
  productImage: {
    width: 250,
    height: 250,
    resizeMode: "center",
    borderRadius: 24,
    padding: 8,
  },
  counter: {
    width: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttons: {
    flexDirection: "row",
    width: "100%",
  },
});

export default Product;
