import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { Colors } from "@/constants/Colors";
import { largeFontSize } from "@/constants/Sizes";

export default function ExerciseScreen() {
  const navigation = useNavigation();
  const { exercise } = useLocalSearchParams();
  const title = exercise.slice(0, 1).toUpperCase() + exercise.slice(1);
  const [weight, setWeight] = useState("0");
  const [reps, setReps] = useState("0");

  useEffect(() => {
    if (exercise) {
      navigation.setOptions({
        title: title,
      });
    }
  }, [exercise, navigation]);
  return (
    <View style={styles.container}>
      <View style={styles.containerContent}>
        <Text style={styles.title}>{title}</Text>
        {/* <Image
        source={{ uri: "https://via.placeholder.com/150" }}
        style={styles.image}
      /> */}
        <View style={styles.bodyCategory}>
          <View
            style={{
              flex: 1,
              paddingVertical: 15,
              backgroundColor: Colors.default.background,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                color: Colors.default.textLight,
                textAlign: "center",
                fontSize: largeFontSize,
              }}
            >
              Weight
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="Weight"
              value={weight}
              onChangeText={setWeight}
            />
          </View>
        </View>
        <View style={styles.bodyCategory}>
          <View
            style={{
              flex: 1,
              paddingVertical: 15,
              backgroundColor: Colors.default.background,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                color: Colors.default.textLight,
                textAlign: "center",
                fontSize: largeFontSize,
              }}
            >
              Reps
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="Reps"
              value={reps}
              onChangeText={setReps}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add Set to Workout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 60,
  },
  containerContent: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: Colors.default.backgroundLight,
    margin: 40,
    borderRadius: 20,
  },
  title: {
    fontSize: 24,
    color: Colors.default.text,
    fontWeight: "bold",
    marginBottom: 20,
  },
  //   image: {
  //     width: 150,
  //     height: 150,
  //     marginBottom: 20,
  //   },
  input: {
    width: "80%",
    padding: 15,
    backgroundColor: Colors.default.background,
    color: "white",
    borderRadius: 10,
    marginVertical: 10,
    textAlign: "center",
    fontSize: largeFontSize,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#34C759",
    padding: 15,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  bodyCategory: {
    marginBottom: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20,
  },
});
