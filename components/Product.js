import { View, StyleSheet, Text, Pressable, Image } from "react-native";
import { useContext, useState } from "react";
import Button from "./UI/Button";
import { useNavigation } from "@react-navigation/native";
import { quantityCount, isInCart } from "../util/functions";
import { Ionicons } from "@expo/vector-icons";
import { CartContext } from "../store/cart-context";

const Product = ({ id, title, price, category, image }) => {
  const { state, dispatch } = useContext(CartContext);

  const productData = { id, title, price };
  const navigation = useNavigation();
  const readMoreHandler = () => {
    navigation.navigate("ReadMoreScreen", {
      id: id,
    });
  };
  return (
    <Pressable style={styles.productDiv}>
      <View style={styles.containerOfProductImage}>
        <Image
          style={styles.productImage}
          className=""
          source={{ uri: image }}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
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
        {quantityCount(state, productData.id) === 1 && (
          <Button
            onPress={() =>
              dispatch({ type: "REMOVE_ITEM", payload: productData })
            }
          >
            <Ionicons name="trash" size={15} color="white" />
          </Button>
        )}
        {quantityCount(state, productData.id) > 1 && (
          <Button
            onPress={() => dispatch({ type: "DECREASE", payload: productData })}
          >
            -
          </Button>
        )}
        {quantityCount(state, productData.id) > 0 && (
          <Text className={styles.counter}>
            {quantityCount(state, productData.id)}
          </Text>
        )}
        {isInCart(state, productData.id) ? (
          <Button
            onPress={() => dispatch({ type: "INCREASE", payload: productData })}
          >
            +
          </Button>
        ) : (
          <Button
            onPress={() => dispatch({ type: "ADD_ITEM", payload: productData })}
          >
            Add to Cart
          </Button>
        )}
      </View>
      {/* <View>
        <Text>{description}</Text>
      </View> */}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  productDiv: {
    marginVertical: 15,
    justifyContent: "center",
    alignItems: "center",
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
  },
  productImage: {
    width: 250,
    height: 250,
    resizeMode: "center",
  },
});

export default Product;
