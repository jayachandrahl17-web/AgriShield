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
  danger: "#C95745",
};

export default function FieldMap() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Pressable onPress={() => router.back()} style={styles.back}>
            <Ionicons name="arrow-back" size={21} color={C.dark} />
          </Pressable>
          <View style={{ flex: 1 }}>
            <Text style={styles.eyebrow}>GEOSPATIAL MONITORING</Text>
            <Text style={styles.title}>Field map</Text>
          </View>
          <View style={styles.online}>
            <View style={styles.dot} />
            <Text style={styles.onlineText}>LIVE</Text>
          </View>
        </View>

        <View style={styles.map}>
          <View style={[styles.block, styles.a]} />
          <View style={[styles.block, styles.b]} />
          <View style={[styles.block, styles.c]} />
          <View style={[styles.block, styles.d]} />
          <View style={[styles.block, styles.e]} />
          <View style={[styles.block, styles.f]} />
          <View style={styles.road} />
          <View style={styles.water} />

          <View style={[styles.pin, { left: "45%", top: "39%" }]}>
            <Ionicons name="location" size={30} color={C.danger} />
          </View>

          <View style={styles.pinCard}>
            <Text style={styles.pinEyebrow}>FIELD 01 · TOMATO</Text>
            <Text style={styles.pinTitle}>92% healthy area</Text>
            <Text style={styles.pinSub}>Ramanagara, Karnataka</Text>
          </View>

          <View style={styles.legend}>
            <Text style={styles.legendTitle}>FIELD CONDITION</Text>
            <View style={styles.legendRow}><View style={[styles.legendDot, { backgroundColor: C.green2 }]} /><Text>Healthy</Text></View>
            <View style={styles.legendRow}><View style={[styles.legendDot, { backgroundColor: C.warning }]} /><Text>Watch</Text></View>
            <View style={styles.legendRow}><View style={[styles.legendDot, { backgroundColor: C.danger }]} /><Text>Risk</Text></View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.eyebrow}>FIELD ZONES</Text>
          <Text style={styles.sectionTitle}>Zone monitoring</Text>

          {[
            ["ZONE A", "Healthy", "94%", C.green2],
            ["ZONE B", "Watch", "81%", C.warning],
            ["ZONE C", "Healthy", "96%", C.green2],
            ["ZONE D", "Healthy", "91%", C.green2],
          ].map(([zone, status, score, color]) => (
            <View style={styles.zone} key={zone}>
              <View style={[styles.zoneBar, { backgroundColor: color as string }]} />
              <View style={{ flex: 1 }}>
                <Text style={styles.zoneName}>{zone}</Text>
                <Text style={styles.zoneStatus}>{status}</Text>
              </View>
              <Text style={styles.zoneScore}>{score}</Text>
              <Ionicons name="chevron-forward" size={17} color={C.muted} />
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.eyebrow}>FIELD CONDITIONS</Text>
          <Text style={styles.sectionTitle}>Weather & environment</Text>

          <View style={styles.grid}>
            {[
              ["thermometer-outline", "TEMPERATURE", "28°C", "NORMAL"],
              ["rainy-outline", "RAIN PROBABILITY", "18%", "LOW"],
              ["water-outline", "HUMIDITY", "67%", "NORMAL"],
              ["leaf-outline", "WIND", "11 km/h", "SAFE"],
            ].map(([icon, label, value, status]) => (
              <View style={styles.card} key={label}>
                <Ionicons name={icon as keyof typeof Ionicons.glyphMap} size={20} color={C.green} />
                <Text style={styles.cardLabel}>{label}</Text>
                <Text style={styles.cardValue}>{value}</Text>
                <Text style={styles.cardStatus}>{status}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: C.bg },
  header: {
    padding: 18,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: C.paper,
    borderBottomWidth: 1,
    borderBottomColor: C.line,
  },
  back: {
    width: 40, height: 40, marginRight: 12, borderRadius: 20,
    backgroundColor: C.bg, justifyContent: "center", alignItems: "center",
  },
  eyebrow: { fontSize: 8, fontWeight: "900", letterSpacing: 1.5, color: "#737C74" },
  title: { marginTop: 4, fontSize: 23, fontWeight: "800", color: C.dark },
  online: { flexDirection: "row", alignItems: "center" },
  dot: { width: 7, height: 7, borderRadius: 4, backgroundColor: C.green2, marginRight: 5 },
  onlineText: { fontSize: 8, fontWeight: "900", letterSpacing: 1, color: C.green },

  map: { height: 460, position: "relative", overflow: "hidden", backgroundColor: "#DDE5D8" },
  block: { position: "absolute", borderWidth: 2, borderColor: "#B9C9AD" },
  a: { left: "-8%", top: "-8%", width: "43%", height: "40%", backgroundColor: "#A9C78A", transform: [{ rotate: "-8deg" }] },
  b: { left: "30%", top: "-5%", width: "34%", height: "39%", backgroundColor: "#88B875", transform: [{ rotate: "5deg" }] },
  c: { right: "-8%", top: "-4%", width: "43%", height: "43%", backgroundColor: "#B8D095", transform: [{ rotate: "-6deg" }] },
  d: { left: "-9%", top: "34%", width: "47%", height: "43%", backgroundColor: "#91BD79", transform: [{ rotate: "7deg" }] },
  e: { left: "34%", top: "31%", width: "35%", height: "50%", backgroundColor: "#B1C98D", transform: [{ rotate: "-4deg" }] },
  f: { right: "-7%", top: "39%", width: "43%", height: "44%", backgroundColor: "#79A969", transform: [{ rotate: "8deg" }] },
  road: { position: "absolute", left: "-10%", top: "54%", width: "125%", height: 18, backgroundColor: "#B6B39B", transform: [{ rotate: "-12deg" }] },
  water: { position: "absolute", left: "70%", top: "10%", width: 70, height: 38, borderRadius: 20, backgroundColor: "#80AFC0" },
  pin: { position: "absolute" },
  pinCard: {
    position: "absolute", right: 15, top: 15, padding: 13,
    backgroundColor: C.dark, minWidth: 160,
  },
  pinEyebrow: { fontSize: 7, fontWeight: "900", letterSpacing: 1, color: "#AEBBAA" },
  pinTitle: { marginTop: 5, fontSize: 13, fontWeight: "800", color: "#FFFFFF" },
  pinSub: { marginTop: 4, fontSize: 9, color: "#BFCBBE" },
  legend: {
    position: "absolute", left: 14, bottom: 14, padding: 12,
    backgroundColor: "rgba(255,255,255,0.94)", borderWidth: 1, borderColor: C.line,
  },
  legendTitle: { fontSize: 7, fontWeight: "900", letterSpacing: 1, marginBottom: 5, color: C.muted },
  legendRow: { flexDirection: "row", alignItems: "center", marginVertical: 3 },
  legendDot: { width: 7, height: 7, borderRadius: 4, marginRight: 7 },

  section: { marginTop: 30, marginHorizontal: 20 },
  sectionTitle: { marginTop: 5, marginBottom: 15, fontSize: 21, fontWeight: "800", color: C.dark },
  zone: {
    minHeight: 68, borderBottomWidth: 1, borderBottomColor: C.line,
    flexDirection: "row", alignItems: "center",
  },
  zoneBar: { width: 4, height: 35, marginRight: 12 },
  zoneName: { fontSize: 9, fontWeight: "900", letterSpacing: 1, color: C.dark },
  zoneStatus: { marginTop: 4, fontSize: 10, color: C.muted },
  zoneScore: { marginRight: 14, fontSize: 17, fontWeight: "800", color: C.green },

  grid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" },
  card: {
    width: "49%", minHeight: 135, padding: 14, marginBottom: 2,
    backgroundColor: C.paper, borderWidth: 1, borderColor: C.line,
  },
  cardLabel: { marginTop: 14, fontSize: 7, fontWeight: "900", letterSpacing: 0.8, color: C.muted },
  cardValue: { marginTop: 5, fontSize: 22, fontWeight: "800", color: C.dark },
  cardStatus: { marginTop: 3, fontSize: 8, fontWeight: "800", color: C.green2 },
});
