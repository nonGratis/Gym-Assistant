import { Pressable, View, TouchableOpacity } from "react-native";
import { PropsWithChildren } from "react";
type Props = PropsWithChildren<{
  onPress: () => void;
  style?: Record<string, unknown>;
  backgroundColor: string;
}>;
export const Button = ({
  children,
  onPress,
  style,
  backgroundColor,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[{ backgroundColor: backgroundColor, padding: 5 }, style]}
    >
      {children}
    </TouchableOpacity>
  );
};
