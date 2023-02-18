import { View, StyleSheet, Text } from "react-native";
import { useState } from "react";
import { CartContext } from "../store/cart-context";

const CartScreen = () => {
  const { state, dispatch } = useContext(CartContext);

  return (
    <View style={styles.cartTable}>
      <View style={styles.cartTableHeader}>
        <Text style={styles.tableHeaderTitle}>Product</Text>
        <Text style={styles.tableHeaderTitle}>Price</Text>
        <Text style={styles.tableHeaderTitle}>Count</Text>
        <Text style={styles.tableHeaderTitle}>Total</Text>
      </View>

      <View style={styles.cartTableBody}>
        {state.selectedItems.map((item) => (
          <View style={styles.cartTableData}>
            <Text style={styles.cartTableDataText}>{item.title}</Text>
            <Text style={styles.cartTableDataText}>{item.price}</Text>
            <Text style={styles.cartTableDataText}>{item.count}</Text>
            <Text style={styles.cartTableDataText}>{item.price}</Text>
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
  },
  cartTableDataText: {
    width: 75,
    textAlign: "center",
  },
});

export default CartScreen;
