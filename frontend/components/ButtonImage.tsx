import { Pressable, View, Image, TouchableOpacity } from "react-native";
import { PropsWithChildren } from "react";
import { Ionicons } from "@expo/vector-icons";
type Props = PropsWithChildren<{
  onPress: () => void;
  style?: Record<string, unknown>;
  name: string;
  color: string;
  backgroundColor: string;
  size?: number;
}>;
export const ButtonImage = ({
  onPress,
  style,
  name,
  color,
  backgroundColor,
  size = 25,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[{ padding: 5, backgroundColor: backgroundColor }, style]}
    >
      <Ionicons size={size} name={name} color={color} />
    </TouchableOpacity>
  );
};
