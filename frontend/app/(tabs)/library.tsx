import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { Screen } from "@/components/Screen";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { extraLargeFontSize } from "@/constants/Sizes";
const categories = ["Chest", "Back", "Arms", "Legs", "Core"];
export default function LibraryScreen() {
  const router = useRouter();
  const header = (
    <View style={{ alignItems: "center" }}>
      <Ionicons size={52} name="library" />
      <Text
        style={{ color: Colors.default.text, fontSize: 24, fontWeight: "bold" }}
      >
        Library
      </Text>
    </View>
  );
  return (
    <Screen header={header}>
      <View style={styles.container}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={styles.button}
            onPress={() =>
              router.push({
                pathname: `/libraryCategory`,
                params: { category: category.toLowerCase() },
              })
            }
          >
            <Text style={styles.buttonText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    width: "80%",
    padding: 20,
    marginVertical: 10,
    backgroundColor: Colors.default.backgroundLight,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: Colors.default.text,
    fontSize: extraLargeFontSize,
    fontWeight: "bold",
  },
});
