import { Pressable, View, Image } from "react-native";
import { PropsWithChildren } from "react";
import { Ionicons } from "@expo/vector-icons";
type Props = PropsWithChildren<{
  onPress: () => void;
  style?: Record<string, unknown>;
  name: string;
  color: string;
  backgroundColor: string;
}>;
export const ButtonImage = ({
  onPress,
  style,
  name,
  color,
  backgroundColor,
}: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={[{ padding: 5, backgroundColor: backgroundColor }, style]}
    >
      <Ionicons size={25} name={name} color={color} />
    </Pressable>
  );
};
