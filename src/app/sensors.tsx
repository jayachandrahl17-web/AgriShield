import React from "react";
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const C = {
  bg: "#F3F4EE",
  paper: "#FFFFFF",
  dark: "#172019",
  green: "#315D3A",
  green2: "#4E8B55",
  lime: "#B8D84A",
  muted: "#727B73",
  line: "#D6DBD4",
  warning: "#D89B2B",
};

export default function Sensors() {
  const router = useRouter();

  const readings = [
    ["water-outline", "SOIL MOISTURE", "72%", "Optimal", C.green2],
    ["thermometer-outline", "SOIL TEMPERATURE", "24.6°C", "Normal", C.green2],
    ["flask-outline", "SOIL PH", "6.4", "Suitable", C.green2],
    ["pulse-outline", "RESIDUE SIGNAL", "0.31 mg/kg", "Within limit", C.green2],
  ] as const;

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Pressable onPress={() => router.back()} style={styles.back}>
            <Ionicons name="arrow-back" size={21} color={C.dark} />
          </Pressable>
          <View style={{ flex: 1 }}>
            <Text style={styles.eyebrow}>SENSOR NETWORK</Text>
            <Text style={styles.title}>Field station</Text>
          </View>
          <View style={styles.online}><View style={styles.dot} /><Text style={styles.onlineText}>ONLINE</Text></View>
        </View>

        <View style={styles.station}>
          <View>
            <Text style={styles.stationLabel}>NODE AS-01</Text>
            <Text style={styles.stationName}>AgriShield Field Sensor</Text>
            <Text style={styles.stationMeta}>Field 01 · Ramanagara · Connected 8 min ago</Text>
          </View>
          <View style={styles.batteryCircle}>
            <Ionicons name="battery-half-outline" size={27} color={C.lime} />
            <Text style={styles.batteryValue}>84%</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.eyebrow}>SENSOR READINGS</Text>
          <Text style={styles.sectionTitle}>Live field conditions</Text>

          <View style={styles.grid}>
            {readings.map(([icon, label, value, status, color]) => (
              <View style={styles.card} key={label}>
                <View style={styles.cardTop}>
                  <View style={styles.iconCircle}>
                    <Ionicons name={icon} size={19} color={C.green} />
                  </View>
                  <View style={[styles.smallDot, { backgroundColor: color }]} />
                </View>
                <Text style={styles.label}>{label}</Text>
                <Text style={styles.value}>{value}</Text>
                <Text style={styles.status}>{status}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.eyebrow}>DEVICE HEALTH</Text>
          <Text style={styles.sectionTitle}>Is the sensor reliable?</Text>

          {[
            ["BATTERY HEALTH", "84%", "Good", C.green2],
            ["SIGNAL STRENGTH", "92%", "Strong", C.green2],
            ["CALIBRATION", "98%", "Valid", C.green2],
            ["DATA TRANSMISSION", "8 min", "Last sync", C.green2],
          ].map(([label, value, status, color]) => (
            <View style={styles.healthRow} key={label}>
              <View style={{ flex: 1 }}>
                <Text style={styles.healthLabel}>{label}</Text>
                <View style={styles.progressTrack}>
                  <View style={[styles.progress, { width: `${parseInt(value as string) || 85}%`, backgroundColor: color as string }]} />
                </View>
              </View>
              <View style={styles.healthValue}>
                <Text style={styles.healthNumber}>{value}</Text>
                <Text style={styles.healthStatus}>{status}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.note}>
          <Ionicons name="information-circle-outline" size={21} color={C.green} />
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={styles.noteTitle}>Sensor confidence</Text>
            <Text style={styles.noteText}>
              Stable battery, strong signal and valid calibration indicate that the
              latest field readings can be used by the risk engine.
            </Text>
          </View>
        </View>

        <View style={styles.footerSpace} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: C.bg },
  header: { padding: 18, flexDirection: "row", alignItems: "center", backgroundColor: C.paper, borderBottomWidth: 1, borderBottomColor: C.line },
  back: { width: 40, height: 40, marginRight: 12, borderRadius: 20, backgroundColor: C.bg, justifyContent: "center", alignItems: "center" },
  eyebrow: { fontSize: 8, fontWeight: "900", letterSpacing: 1.5, color: "#737C74" },
  title: { marginTop: 4, fontSize: 23, fontWeight: "800", color: C.dark },
  online: { flexDirection: "row", alignItems: "center" },
  dot: { width: 7, height: 7, borderRadius: 4, backgroundColor: C.green2, marginRight: 5 },
  onlineText: { fontSize: 8, fontWeight: "900", letterSpacing: 1, color: C.green },

  station: { padding: 20, backgroundColor: C.dark, flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  stationLabel: { fontSize: 8, fontWeight: "900", letterSpacing: 1.2, color: "#AEBBAA" },
  stationName: { marginTop: 5, fontSize: 18, fontWeight: "800", color: "#FFFFFF" },
  stationMeta: { marginTop: 6, fontSize: 9, color: "#B8C5B7" },
  batteryCircle: { width: 76, height: 76, borderWidth: 1, borderColor: "#536452", justifyContent: "center", alignItems: "center" },
  batteryValue: { marginTop: 3, fontSize: 10, fontWeight: "900", color: C.lime },

  section: { marginTop: 30, marginHorizontal: 20 },
  sectionTitle: { marginTop: 5, marginBottom: 15, fontSize: 21, fontWeight: "800", color: C.dark },
  grid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" },
  card: { width: "49%", minHeight: 155, padding: 14, marginBottom: 2, backgroundColor: C.paper, borderWidth: 1, borderColor: C.line },
  cardTop: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  iconCircle: { width: 35, height: 35, borderRadius: 18, backgroundColor: "#E7EBE3", justifyContent: "center", alignItems: "center" },
  smallDot: { width: 7, height: 7, borderRadius: 4 },
  label: { marginTop: 14, fontSize: 7, fontWeight: "900", letterSpacing: 0.8, color: C.muted },
  value: { marginTop: 5, fontSize: 21, fontWeight: "800", color: C.dark },
  status: { marginTop: 3, fontSize: 8, fontWeight: "800", color: C.green2 },

  healthRow: { minHeight: 72, paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: C.line, flexDirection: "row", alignItems: "center" },
  healthLabel: { fontSize: 8, fontWeight: "900", letterSpacing: 0.8, color: C.dark },
  progressTrack: { height: 6, marginTop: 9, backgroundColor: "#DEE3DC", overflow: "hidden" },
  progress: { height: 6 },
  healthValue: { width: 70, marginLeft: 15, alignItems: "flex-end" },
  healthNumber: { fontSize: 12, fontWeight: "900", color: C.dark },
  healthStatus: { marginTop: 2, fontSize: 8, color: C.green2 },

  note: { marginTop: 30, marginHorizontal: 20, padding: 16, backgroundColor: "#E7EBE3", flexDirection: "row" },
  noteTitle: { fontSize: 12, fontWeight: "800", color: C.dark },
  noteText: { marginTop: 5, fontSize: 10, lineHeight: 16, color: C.muted },
  footerSpace: { height: 45 },
});
