import { View, StyleSheet, Text, Image, ScrollView } from "react-native";
import { useContext, useState } from "react";
import { ProductsContext } from "../store/products-context";
import Button from "../components/UI/Button";

const ReadMore = ({ route, navigation }) => {
  const productId = route.params?.id;
  const productsCtx = useContext(ProductsContext);

  // if (productsCtx.isFetching) return <Text>Loading...</Text>;

  const products = productsCtx.products;
  const selectedProduct = products.find((product) => product.id === productId);

  // navigation.goBack();
  return (
    <>
      <ScrollView>
        <View style={styles.productDiv}>
          <View style={styles.containerOfProductImage}>
            <Image
              style={styles.productImage}
              className=""
              source={{ uri: selectedProduct.image }}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{selectedProduct.title}</Text>
            <Text style={styles.price}>${selectedProduct.price}</Text>
            <Text style={styles.category}>
              Category: {selectedProduct.category}
            </Text>
          </View>
          <View>
            <Text style={styles.description}>
              {selectedProduct.description}
            </Text>
          </View>
          <Button
            onPress={() => navigation.goBack()}
            style={{
              width: 230,
              marginTop: 14,
              marginBottom: 30,
            }}
            buttonColor={{ paddingVertical: 4 }}
          >
            Back
          </Button>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  productDiv: {
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
    fontSize: 14,
  },
  productImage: {
    width: 400,
    height: 400,
    resizeMode: "center",
  },
  description: {
    marginTop: 20,
    marginHorizontal: 12,
    textAlign: "center",
    color: "gray",
    lineHeight: 21,
  },
});

export default ReadMore;
