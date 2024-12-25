import { Image, StyleSheet, Platform, View, Text } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Screen } from "@/components/Screen";
import { Colors } from "@/constants/Colors";
import { ScreenHeader } from "@/components/ScreenHeader";
import { largeFontSize, mediumFontSize } from "@/constants/Sizes";
import { Fragment, useMemo, useState } from "react";
import { ButtonImage } from "@/components/ButtonImage";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { TrackerBodyItem } from "@/components/TrackerComponents/TrackerBodyItem";

const HIGHT_BUTTON = 100;
export default function TrackerScreen() {
  const header = useMemo(
    () => (
      <View>
        <View style={styles.headerComponents}>
          <View style={{ display: "flex", alignItems: "center" }}>
            <Text style={styles.headerActiveComponent}>1234</Text>
            <Text style={styles.headerConstComponent}>kcal</Text>
          </View>
          <View style={{ display: "flex", alignItems: "center" }}>
            <Text style={styles.headerActiveComponent}>1234</Text>
            <Text style={styles.headerConstComponent}>step</Text>
          </View>
          <View style={{ display: "flex", alignItems: "center" }}>
            <Text style={styles.headerActiveComponent}>1234</Text>
            <Text style={styles.headerConstComponent}>km</Text>
          </View>
        </View>
        <View></View>
      </View>
    ),
    []
  );

  const goalList = [
    {
      title: "Goal",
      count: 20,
      type: "plank",
    },
    {
      title: "Goal",
      count: 11,
      type: "push-up",
    },
    {
      title: "Goal",
      count: 13,
      type: "squat",
    },
  ];

  const [goals, setGoals] = useState(goalList);

  const handleAddGoal = () => {
    const sportTypes = ["push-up", "pull-up", "squat", "jump-rope"];

    const randomType =
      sportTypes[Math.floor(Math.random() * sportTypes.length)];
    const randomCount = Math.floor(Math.random() * 199) + 1;
    setGoals((prev) => [
      ...prev,
      {
        title: "Goal",
        count: randomCount,
        type: randomType,
      },
    ]);
  };

  return (
    <Fragment>
      <Screen header={header} scrollable={false}>
        <View style={styles.body}>
          <View>
            <Text style={styles.headerBody}>Today's goal</Text>
          </View>
          <View style={styles.bodyItemHeader}>
            <Text style={styles.bodyItemHeaderText}>Times</Text>
            <Text style={styles.bodyItemHeaderText}>Type</Text>
          </View>
          <FlatList
            style={{ marginTop: 10 }}
            data={goals}
            renderItem={({ item }) => (
              <TrackerBodyItem
                title={item.title}
                count={item.count}
                type={item.type}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </Screen>
      <View
        style={{
          position: "absolute",
          bottom: HIGHT_BUTTON,
          right: 25,
        }}
      >
        <ButtonImage
          name="add"
          backgroundColor={Colors.default.backgroundLight}
          onPress={() => {
            handleAddGoal();
          }}
          color={Colors.default.text}
          style={{
            padding: 8,
            borderRadius: 15,
          }}
          size={34}
        />
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  headerComponents: {
    height: 70,
    backgroundColor: Colors.default.background,
    marginHorizontal: 30,
    borderRadius: 15,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
  headerActiveComponent: {
    fontSize: largeFontSize,
    color: Colors.default.textActive,
    fontWeight: "bold",
  },
  headerConstComponent: {
    fontSize: mediumFontSize,
    color: Colors.default.textLight,
    fontWeight: "bold",
  },
  body: {
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 20,
    paddingVertical: 20,
    display: "flex",
    flexDirection: "column",
    backgroundColor: Colors.default.backgroundLight,
    height: 610 - HIGHT_BUTTON,
  },
  headerBody: {
    fontSize: largeFontSize,
    color: Colors.default.textLight,
    fontWeight: "bold",
    backgroundColor: Colors.default.background,
    width: "100%",
    textAlign: "center",
    paddingVertical: 8,
  },
  bodyItemHeader: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    backgroundColor: Colors.default.background,
    padding: 4,
    paddingHorizontal: 20,
    marginHorizontal: 16,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  bodyItemHeaderText: {
    fontSize: 18,
    color: Colors.default.textLight,
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
  },
});
