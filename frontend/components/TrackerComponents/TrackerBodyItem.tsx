import { Colors } from "@/constants/Colors";
import { View, Text, StyleSheet } from "react-native";

type TrackerBodyItemProps = {
  title: string;
  count: number;
  type: string;
};

export const TrackerBodyItem = ({
  title,
  count,
  type,
}: TrackerBodyItemProps) => {
  return (
    <View style={styles.item}>
      <Text
        style={[
          styles.itemText,
          { fontWeight: "bold", color: Colors.default.tint },
        ]}
      >
        {count}
      </Text>
      <Text style={styles.itemText}>{type}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    backgroundColor: Colors.default.background,
    padding: 20,
    marginVertical: 6,
    marginHorizontal: 16,
    borderRadius: 15,
  },
  itemText: {
    fontSize: 18,
    color: Colors.default.textLight,
    flex: 1,
    textAlign: "center",
  },
});
