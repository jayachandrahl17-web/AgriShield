import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";

export default function AlertsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        <Text style={styles.title}>Alerts</Text>

        <Text style={styles.subtitle}>
          Important updates about your farm.
        </Text>

        <View style={styles.alert}>
          <Text style={styles.icon}>🟡</Text>

          <View style={styles.textContainer}>
            <Text style={styles.alertTitle}>Pest Risk Detected</Text>
            <Text style={styles.description}>
              Moderate pest risk expected in the next 3 days.
            </Text>
          </View>
        </View>

        <View style={styles.alert}>
          <Text style={styles.icon}>🌦️</Text>

          <View style={styles.textContainer}>
            <Text style={styles.alertTitle}>Weather Warning</Text>
            <Text style={styles.description}>
              High humidity may increase disease risk.
            </Text>
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

  alert: {
    marginTop: 20,
    padding: 18,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    gap: 15,
  },

  icon: {
    fontSize: 28,
  },

  textContainer: {
    flex: 1,
  },

  alertTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#263526",
  },

  description: {
    marginTop: 6,
    color: "#788278",
    lineHeight: 20,
  },
});