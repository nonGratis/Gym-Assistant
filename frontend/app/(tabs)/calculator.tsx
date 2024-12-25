import Ionicons from "@expo/vector-icons/Ionicons";
import {
  StyleSheet,
  Image,
  Platform,
  View,
  Text,
  TextInput,
  FlatList,
} from "react-native";
import { Screen } from "@/components/Screen";
import { useMemo, useState } from "react";
import {
  largeFontSize,
  mediumFontSize,
  smallFontSize,
} from "@/constants/Sizes";
import { Colors } from "@/constants/Colors";
import { ButtonImage } from "@/components/ButtonImage";
import { CalculatorItem } from "@/components/CalculatorComponents/CalculatorItem";
export default function CalculatorScreen() {
  const calculatorItem = [
    {
      name: "Apple",
      calories: 52,
      protein: 0.26,
      carbs: 13.81,
      fat: 0.17,
      gramme: 100,
    },
    {
      name: "Banana",
      calories: 89,
      protein: 1.09,
      carbs: 22.84,
      fat: 0.33,
      gramme: 100,
    },
    {
      name: "Orange",
      calories: 47,
      protein: 0.94,
      carbs: 11.75,
      fat: 0.12,
      gramme: 100,
    },
    {
      name: "Pineapple",
      calories: 50,
      protein: 0.54,
      carbs: 13.12,
      fat: 0.12,
      gramme: 100,
    },
  ];

  const [calculatorItems, setCalculatorItems] = useState(calculatorItem);
  const [searchText, setSearchText] = useState("");

  // Фільтрований список на основі пошуку
  const filteredItems = useMemo(() => {
    if (!searchText.trim()) {
      return calculatorItems;
    }
    return calculatorItems.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [searchText, calculatorItems]);
  const handleAddCalculatorItem = () => {
    const newItem = {
      name: "Cake",
      calories: 50,
      protein: 0.54,
      carbs: 13.12,
      fat: 0.12,
      gramme: 100,
    };
    setCalculatorItems((prev) => [...prev, newItem]);
  };

  const allFats = useMemo(() => {
    const result = calculatorItems
      .reduce((acc, item) => acc + item.fat, 0)
      .toFixed(2);
    if (result === "NaN") {
      return 0;
    }
    if (result.slice(-3) === ".00") {
      return result.slice(0, -3);
    }
    return result;
  }, [calculatorItems]);

  const allProteins = useMemo(() => {
    const result = calculatorItems
      .reduce((acc, item) => acc + item.protein, 0)
      .toFixed(2);
    if (result === "NaN") {
      return 0;
    }
    if (result.slice(-3) === ".00") {
      return result.slice(0, -3);
    }
    return result;
  }, [calculatorItems]);

  const allCarbs = useMemo(() => {
    const result = calculatorItems
      .reduce((acc, item) => acc + item.carbs, 0)
      .toFixed(2);
    if (result === "NaN") {
      return 0;
    }
    if (result.slice(-3) === ".00") {
      return result.slice(0, -3);
    }
    return result;
  }, [calculatorItems]);

  const allCalories = useMemo(() => {
    const result = calculatorItems
      .reduce((acc, item) => acc + item.calories, 0)
      .toFixed(2);
    if (result === "NaN") {
      return 0;
    }
    if (result.slice(-3) === ".00") {
      return result.slice(0, -3);
    }
    return result;
  }, [calculatorItems]);

  const header = useMemo(
    () => (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginHorizontal: 20,
          gap: 20,
        }}
      >
        <View style={[styles.headerComponents, { flex: 4 }]}>
          <View style={{ display: "flex", alignItems: "center" }}>
            <Text style={styles.headerActiveComponent}>{allFats}</Text>
            <Text style={styles.headerConstComponent}>fat</Text>
          </View>
          <View style={{ display: "flex", alignItems: "center" }}>
            <Text style={styles.headerActiveComponent}>{allProteins}</Text>
            <Text style={styles.headerConstComponent}>protein</Text>
          </View>
          <View style={{ display: "flex", alignItems: "center" }}>
            <Text style={styles.headerActiveComponent}>{allCarbs}</Text>
            <Text style={styles.headerConstComponent}>carbs</Text>
          </View>
        </View>
        <View style={[styles.headerComponents, { flex: 1 }]}>
          <View style={{ display: "flex", alignItems: "center" }}>
            <Text
              style={[
                styles.headerActiveComponent,
                {
                  fontSize:
                    Number(String(allCalories).split(".")[1]) > 0
                      ? mediumFontSize
                      : largeFontSize,
                },
              ]}
            >
              {allCalories}
            </Text>
            <Text style={styles.headerConstComponent}>kcal</Text>
          </View>
        </View>
      </View>
    ),
    [calculatorItem, allFats, allProteins, allCarbs, allCalories]
  );
  return (
    <Screen header={header} scrollable={false}>
      <View style={styles.body}>
        <View
          style={{
            marginLeft: 30,
            marginRight: 20,
            marginTop: 20,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View style={{ flex: 3 }}>
              <TextInput
                style={styles.textInput}
                value={searchText}
                onChangeText={setSearchText}
              />
              <View
                style={{
                  position: "absolute",
                  top: 7,
                  left: 10,
                }}
              >
                <Ionicons name="search" size={34} color={Colors.default.text} />
              </View>
            </View>
            <View
              style={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            >
              <ButtonImage
                name="add"
                backgroundColor={Colors.default.background}
                onPress={() => {
                  handleAddCalculatorItem();
                }}
                color={Colors.default.textLight}
                style={{
                  padding: 8,
                  borderRadius: 15,
                }}
                size={34}
              />
            </View>
          </View>
        </View>
        <FlatList
          style={{
            marginTop: 10,
            marginLeft: 30,
            marginRight: 20,
          }}
          data={filteredItems}
          renderItem={({ item, index }) => (
            <CalculatorItem item={item} index={index} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  headerComponents: {
    height: 70,
    backgroundColor: Colors.default.background,
    marginLeft: 0,
    borderRadius: 15,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
  headerRightComponent: {
    height: 70,
    backgroundColor: Colors.default.background,
    marginHorizontal: 0,
    borderRadius: 15,
    display: "flex",
    justifyContent: "center",
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
    height: 510,
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
  textInput: {
    height: 50,
    paddingLeft: 50,
    paddingRight: 20,
    borderRadius: 15,
    backgroundColor: Colors.default.input,
    color: Colors.default.text,
    fontSize: largeFontSize,
  },
});
