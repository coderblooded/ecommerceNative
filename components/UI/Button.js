import { View, Pressable, StyleSheet, Text } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function Button({
  children,
  onPress,
  mode,
  style,
  buttonTextColor,
  buttonColor,
  pressedStyle,
}) {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          pressed
            ? [styles.button, buttonColor, pressedStyle]
            : [styles.button, buttonColor],
        ]}
      >
        <Text
          style={[
            styles.buttonText,
            buttonTextColor,
            mode === "flat" && styles.flatText,
          ]}
        >
          {children}
        </Text>
      </Pressable>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    // padding: 6,
    backgroundColor: "rgba(5,150,105,1)",
  },
  flat: { backgroundColor: "transparent" },
  buttonText: {
    color: "white",
    fontSize: 12,
    textAlign: "center",
  },
  flatText: {
    color: GlobalStyles.colors.primary200, // light purple color
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: "red",
  },
});
