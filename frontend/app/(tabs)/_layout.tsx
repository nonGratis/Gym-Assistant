import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { smallFontSize } from "@/constants/Sizes";
export default function TabLayout() {
  const colorScheme = useColorScheme();

  const listOfTabs = [
    {
      name: "index",
      title: "Tracker",
      icon: "heart-circle",
      iconOutline: "heart-circle-outline",
    },
    {
      name: "calculator",
      title: "Calculator",
      icon: "calculator",
      iconOutline: "calculator-outline",
    },
    {
      name: "library",
      title: "Library",
      icon: "library",
      iconOutline: "library-outline",
    },
    {
      name: "menu",
      title: "Menu",
      icon: "menu",
      iconOutline: "menu-outline",
    },
  ];

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.default.tint,
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 20,
          marginHorizontal: 20,
          borderRadius: 15,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
          elevation: 5,
          height: 60,
        },
        tabBarItemStyle: {
          marginVertical: 5,
        },
      }}
    >
      {listOfTabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarLabelStyle: {
              color: Colors.default.text,
              fontSize: smallFontSize,
            },
            tabBarIcon: ({ focused }) => (
              <TabBarIcon
                name={focused ? tab.icon : tab.iconOutline}
                color={focused ? Colors.default.tint : Colors.default.text}
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
