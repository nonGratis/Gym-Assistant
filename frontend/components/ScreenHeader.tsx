import { View, ScrollView, Text } from "react-native";
import type { PropsWithChildren, ReactElement } from "react";
import { Colors } from "../constants/Colors";
type Props = PropsWithChildren<{}>;

export const ScreenHeader = ({ children }: Props) => {
  return (
    <View
      style={{
        backgroundColor: Colors.default.backgroundLight,
        height: 100,
        marginHorizontal: 20,
        borderRadius: 20,
        marginTop: 20,
        display: "flex",
        justifyContent: "center",
      }}
    >
      {children}
    </View>
  );
};
