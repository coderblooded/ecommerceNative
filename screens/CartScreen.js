import { View, StyleSheet, Text, Image } from "react-native";
import { useContext, useState } from "react";
import { CartContext } from "../store/cart-context";
import { quantityCount, shorten } from "../util/functions";

const CartScreen = () => {
  const { state, dispatch } = useContext(CartContext);

  return (
    <View style={styles.cartTable}>
      <View style={styles.cartTableHeader}>
        <Text style={styles.tableHeaderTitle}>Image</Text>
        <Text style={styles.tableHeaderTitle}>Product</Text>
        <Text style={styles.tableHeaderTitle}>Price</Text>
        <Text style={styles.tableHeaderTitle}>Count</Text>
        <Text style={styles.tableHeaderTitle}>Total</Text>
      </View>

      <View style={styles.cartTableBody}>
        {state.selectedItems.map((item) => (
          <View key={item.id} style={styles.cartTableData}>
            <View style={styles.cartTableDataImage}>
              <Image
                source={{ uri: item.image }}
                style={{ width: 40, height: 40 }}
              />
            </View>

            <Text style={styles.cartTableDataText}>{shorten(item.title)}</Text>
            <Text style={styles.cartTableDataText}>${item.price}</Text>
            <Text style={styles.cartTableDataText}>
              {quantityCount(state, item.id)}
            </Text>
            <Text style={styles.cartTableDataText}>
              ${item.price * quantityCount(state, item.id)}
            </Text>
          </View>
        ))}
        {/* // Loop */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartTable: {
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  tableHeaderTitle: {
    width: 75,
    textAlign: "center",
  },
  cartTableBody: {},
  cartTableHeader: {
    flexDirection: "row",
    borderColor: "#2ecc71",
    borderBottomWidth: 2,
    borderCurve: 4,
    paddingBottom: 6,
    marginVertical: 15,
  },
  cartTableData: {
    flexDirection: "row",
    marginVertical: 12,
  },
  cartTableDataText: {
    width: 75,
    textAlign: "center",
  },
  cartTableDataImage: {
    width: 40,
    height: 40,
  },
});

export default CartScreen;
