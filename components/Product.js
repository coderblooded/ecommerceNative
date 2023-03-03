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
        <Text style={styles.category}>Category: {category}</Text>
        <Text style={styles.title}>{shorten(title)}</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={styles.price}>${price}</Text>
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
                  width: 35,
                }}
                buttonColor={{
                  backgroundColor: "#f1f2f6",
                  borderRadius: 50,
                }}
                buttonTextColor={{
                  color: "black",
                  fontWeight: "bold",
                  fontSize: 15,
                }}
              >
                +
              </Button>
            )}
          </View>
        </View>
        {/* <Button
          onPress={readMoreHandler}
          style={{
            marginTop: 10,
            fontWeight: "bold",
            width: 80,
          }}
        >
          Read More
        </Button> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productDiv: {
    width: 160,
    marginVertical: 16,
    marginHorizontal: 6,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
    backgroundColor: "white",
    paddingVertical: 30,
    paddingHorizontal: 10,
    borderRadius: 23,
  },
  containerOfProductImage: {
    marginBottom: 10,
  },
  title: { marginTop: 4, fontSize: 14, fontWeight: "bold" },
  price: { marginTop: 5, color: "green" },
  category: {
    marginTop: 5,
    fontSize: 10,
    color: "gray",
  },
  productImage: {
    width: 140,
    height: 140,
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
    // width: "100%",
    justifyContent: "flex-end",
    marginTop: 10,
  },
});

export default Product;
