import { View, StyleSheet, Text, Pressable } from "react-native";
import { useState } from "react";
import IconButton from "./UI/IconButton";
import { useNavigation } from "@react-navigation/native";

const Categories = () => {
  const navigation = useNavigation();

  const navigateToCategory = (category) => {
    navigation.navigate("CategoryScreen", {
      category: category,
    });
  };
  return (
    <View style={styles.categoriesContainer}>
      <View style={styles.categoryItem}>
        <IconButton
          icon="logo-electron"
          size={22}
          onPress={() => navigateToCategory("electronics")}
          userStyle={styles.categoryItemImage}
          pressedStyle={styles.categoryItemPressed}
        />
        <Text style={styles.categoryTitle}>Eletronics</Text>
      </View>
      <View style={styles.categoryItem}>
        <IconButton
          icon="logo-electron"
          size={22}
          onPress={() => navigateToCategory("jewelery")}
          userStyle={styles.categoryItemImage}
          pressedStyle={styles.categoryItemPressed}
        />
        <Text style={styles.categoryTitle}>Jewelry</Text>
      </View>
      <View style={styles.categoryItem}>
        <IconButton
          icon="shirt-outline"
          size={22}
          onPress={() => navigateToCategory("men's clothing")}
          userStyle={styles.categoryItemImage}
          pressedStyle={styles.categoryItemPressed}
        />
        <Text style={styles.categoryTitle}>Shirts</Text>
      </View>
      <View style={styles.categoryItem}>
        <IconButton
          icon="woman-outline"
          size={22}
          onPress={() => navigateToCategory("women's clothing")}
          userStyle={styles.categoryItemImage}
          pressedStyle={styles.categoryItemPressed}
        />
        <Text style={styles.categoryTitle}>Dress</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default Categories;
