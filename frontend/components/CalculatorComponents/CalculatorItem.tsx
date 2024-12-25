import React from "react";
import { View, Text } from "react-native";
import { Colors } from "@/constants/Colors";
import { ButtonImage } from "@/components/ButtonImage";
import { Pressable, TouchableOpacity } from "react-native";
type CalculatorItemProps = {
  item: {
    name: string;
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    gramme: number;
  };
  index: number;
};

export const CalculatorItem = ({ item, index }: CalculatorItemProps) => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 15,
          paddingHorizontal: 20,
          backgroundColor: Colors.default.background,
          borderRadius: 15,
          marginVertical: 5,
        }}
      >
        <Text
          style={{
            color: Colors.default.textLight,
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          {item.name}
        </Text>
        <Text
          style={{
            color: Colors.default.textLight,
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          {item.calories} kcal
        </Text>
        {/* <ButtonImage
        name="remove"
        backgroundColor={Colors.default.background}
        onPress={() => onRemove(index)}
        color={Colors.default.textLight}
        style={{
          padding: 8,
          borderRadius: 15,
        }}
        size={34}
      /> */}
      </View>
    </TouchableOpacity>
  );
};
