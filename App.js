import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartScreen from "./screens/CartScreen";
import ProductsScreen from "./screens/ProductsScreen";
import LoginScreen from "./screens/LoginScreen";
import { Ionicons } from "@expo/vector-icons";
import ProductsContextProvider from "./store/products-context";
import ReadMoreScreen from "./screens/ReadMore";
import IconButton from "./components/UI/IconButton";
import CartContextProvider from "./store/cart-context";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const ShopOverview = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: "rgba(5,150,105,1)" },
        headerTitleStyle: {
          fontSize: 24,
          fontWeight: "bold",
        },
        headerTintColor: "white",
        tabBarStyle: {
          backgroundColor: "rgba(110,231,183,1)",
        },
        tabBarActiveTintColor: "red",
        tabBarLabelStyle: { fontSize: 15 },
        headerRight: ({ tintColor }) => (
          <IconButton
            icon="cart"
            size={24}
            color={tintColor}
            onPress={() => {
              navigation.navigate("CartScreen");
            }}
          />
        ),
      })}
    >
      <BottomTabs.Screen
        name="ProductsScreen"
        component={ProductsScreen}
        options={{
          title: "Shop",
          tabBarLabel: "Shop",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="hourglass" size={size} color={color} />;
          },
        }}
      />
      <BottomTabs.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          title: "Login",
          tabBarLabel: "Login",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="enter" size={size} color={color} />;
          },
        }}
      />
    </BottomTabs.Navigator>
  );
};
export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <ProductsContextProvider>
        <CartContextProvider>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="ShopOverview"
                component={ShopOverview}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="CartScreen"
                component={CartScreen}
                options={{
                  title: "Cart",
                }}
              />
              <Stack.Screen name="ReadMoreScreen" component={ReadMoreScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </CartContextProvider>
      </ProductsContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
