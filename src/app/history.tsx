import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";

export default function HistoryScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        <Text style={styles.title}>Scan History</Text>

        <Text style={styles.subtitle}>
          View your previous crop analyses.
        </Text>

        <View style={styles.card}>
          <Text style={styles.crop}>🍅 Tomato</Text>
          <Text style={styles.date}>September 5, 2026</Text>

          <View style={styles.row}>
            <Text style={styles.disease}>Healthy</Text>
            <Text style={styles.status}>87% confidence</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.crop}>🥥 Coconut</Text>
          <Text style={styles.date}>September 2, 2026</Text>

          <View style={styles.row}>
            <Text style={styles.disease}>No disease detected</Text>
            <Text style={styles.status}>94%</Text>
          </View>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7FAF5",
  },

  content: {
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "800",
    color: "#173B1F",
  },

  subtitle: {
    marginTop: 8,
    color: "#687568",
    fontSize: 15,
  },

  card: {
    marginTop: 20,
    backgroundColor: "#FFFFFF",
    padding: 18,
    borderRadius: 18,
  },

  crop: {
    fontSize: 18,
    fontWeight: "700",
    color: "#173B1F",
  },

  date: {
    marginTop: 5,
    color: "#8A938A",
  },

  row: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  disease: {
    color: "#2E7D32",
    fontWeight: "700",
  },

  status: {
    color: "#788278",
  },
});