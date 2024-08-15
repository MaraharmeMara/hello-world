import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello world</Text>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View
          style={{ width: 100, height: 100, backgroundColor: "red" }}
        ></View>
        ;
        <View
          style={{ width: 100, height: 100, backgroundColor: "blue" }}
        ></View>
        ;
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#hhh",
    alignItems: "center",
    justifyContent: "center",
  },
});
