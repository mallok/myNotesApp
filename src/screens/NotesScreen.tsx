import React from "react";
import { View, Text, StyleSheet } from "react-native";

const NotesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Placeholder notes.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(230, 100, 100)"
  }
});

export default NotesScreen;