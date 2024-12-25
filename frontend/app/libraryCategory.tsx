import { useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter, useLocalSearchParams, useNavigation } from "expo-router";
import { Colors } from "@/constants/Colors";

const exercises = {
  chest: ["Push-ups", "Bench press", "Incline bench press"],
  back: ["Pull-ups", "Deadlift", "Rows"],
  arms: ["Bicep curls", "Tricep dips", "Hammer curls"],
  legs: ["Squats", "Lunges", "Leg press"],
  core: ["Plank", "Crunches", "Twists"],
};

export default function CategoryScreen() {
  const router = useRouter();
  const navigation = useNavigation();
  const { category } = useLocalSearchParams();

  if (typeof category !== "string" || !(category in exercises)) {
    return (
      <View style={styles.container}>
        <Text style={styles.buttonText}>Invalid category</Text>
      </View>
    );
  }
  useEffect(() => {
    if (category) {
      navigation.setOptions({
        title: category.charAt(0).toUpperCase() + category.slice(1),
      });
    }
  }, [category, navigation]);

  return (
    <View style={styles.container}>
      {exercises[category].map((exercise) => (
        <TouchableOpacity
          key={exercise}
          style={styles.button}
          onPress={() =>
            router.push({
              pathname: `/categoryExersice`,
              params: { exercise: exercise.toLowerCase() },
            })
          }
        >
          <Text style={styles.buttonText}>{exercise}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 40,
  },
  button: {
    width: "100%",
    padding: 20,
    marginVertical: 10,
    backgroundColor: Colors.default.backgroundLight,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: Colors.default.text,
    fontSize: 18,
    fontWeight: "bold",
  },
});
