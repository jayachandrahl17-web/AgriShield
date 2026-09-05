import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function ScanScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        <Text style={styles.title}>Crop Scan</Text>

        <Text style={styles.subtitle}>
          Take a photo of your crop to detect diseases and pests.
        </Text>

        <View style={styles.cameraBox}>
          <Text style={styles.cameraIcon}>📷</Text>
          <Text style={styles.cameraTitle}>Scan your crop</Text>
          <Text style={styles.cameraText}>
            Position the affected leaf inside the frame.
          </Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>📷  Take Photo</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.galleryButton}>
          <Text style={styles.galleryText}>Choose from Gallery</Text>
        </TouchableOpacity>

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
    fontSize: 15,
    lineHeight: 22,
    color: "#687568",
  },

  cameraBox: {
    height: 330,
    marginTop: 30,
    borderRadius: 25,
    backgroundColor: "#DCEFD7",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#BBD7B6",
    borderStyle: "dashed",
  },

  cameraIcon: {
    fontSize: 55,
  },

  cameraTitle: {
    marginTop: 15,
    fontSize: 21,
    fontWeight: "700",
    color: "#173B1F",
  },

  cameraText: {
    marginTop: 8,
    color: "#687568",
    textAlign: "center",
    paddingHorizontal: 30,
  },

  button: {
    marginTop: 25,
    backgroundColor: "#1F6B36",
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },

  galleryButton: {
    marginTop: 12,
    paddingVertical: 15,
    borderRadius: 16,
    alignItems: "center",
    backgroundColor: "#E6F0E3",
  },

  galleryText: {
    color: "#1F6B36",
    fontWeight: "700",
  },
});