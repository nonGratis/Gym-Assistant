import { View, ScrollView, Text } from "react-native";
import type { PropsWithChildren, ReactElement } from "react";
import { ScreenHeader } from "./ScreenHeader";
type Props = PropsWithChildren<{
  header: ReactElement;
  scrollable?: boolean;
}>;

export const Screen = ({ children, header, scrollable = true }: Props) => {
  let content;

  if (scrollable) {
    content = (
      <ScrollView style={{ marginBottom: 100 }} scrollEventThrottle={16}>
        {children}
      </ScrollView>
    );
  } else {
    content = <View style={{ marginBottom: 100 }}>{children}</View>;
  }

  return (
    <View style={{ flex: 1, marginTop: 20 }}>
      <ScreenHeader>{header}</ScreenHeader>
      {content}
    </View>
  );
};
