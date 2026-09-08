import React from "react";
import {
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const FIELD_IMAGE =
  "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=85";

const TOMATO_IMAGE =
  "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=1000&q=85";

const COLORS = {
  bg: "#F3F4EE",
  paper: "#FFFFFF",
  dark: "#172019",
  green: "#315D3A",
  green2: "#4E8B55",
  lime: "#B8D84A",
  text: "#263128",
  muted: "#727B73",
  line: "#D6DBD4",
  soft: "#E7EBE3",
  warning: "#D89B2B",
  danger: "#C95745",
  blue: "#4E7894",
};

function SectionHeader({
  eyebrow,
  title,
  action,
  onAction,
}: {
  eyebrow: string;
  title: string;
  action?: string;
  onAction?: () => void;
}) {
  return (
    <View style={styles.sectionHeader}>
      <View style={{ flex: 1 }}>
        <Text style={styles.eyebrow}>{eyebrow}</Text>
        <Text style={styles.sectionTitle}>{title}</Text>
      </View>

      {action && onAction ? (
        <Pressable onPress={onAction} style={styles.headerAction}>
          <Text style={styles.headerActionText}>{action}</Text>
          <Ionicons name="arrow-forward" size={15} color={COLORS.green} />
        </Pressable>
      ) : null}
    </View>
  );
}

function Metric({
  icon,
  label,
  value,
  unit,
  status,
  tone = "green",
}: {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  value: string;
  unit?: string;
  status: string;
  tone?: "green" | "warning" | "blue";
}) {
  const iconColor =
    tone === "warning"
      ? COLORS.warning
      : tone === "blue"
        ? COLORS.blue
        : COLORS.green;

  return (
    <View style={styles.metricCard}>
      <View style={styles.metricTop}>
        <View style={styles.metricIcon}>
          <Ionicons name={icon} size={18} color={iconColor} />
        </View>
        <View
          style={[
            styles.statusDot,
            {
              backgroundColor:
                tone === "warning" ? COLORS.warning : COLORS.green2,
            },
          ]}
        />
      </View>

      <Text style={styles.metricLabel}>{label}</Text>
      <View style={styles.metricValueRow}>
        <Text style={styles.metricValue}>{value}</Text>
        {unit ? <Text style={styles.metricUnit}>{unit}</Text> : null}
      </View>
      <Text style={styles.metricStatus}>{status}</Text>
    </View>
  );
}

export default function Dashboard() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* HEADER / FIELD IDENTITY */}
        <View style={styles.topBar}>
          <View>
            <Text style={styles.brand}>AGRISHIELD</Text>
            <Text style={styles.brandSub}>PRECISION CROP INTELLIGENCE</Text>
          </View>

          <Pressable
            style={styles.iconButton}
            onPress={() => router.push("/sensors")}
          >
            <Ionicons name="hardware-chip-outline" size={20} color={COLORS.dark} />
          </Pressable>
        </View>

        {/* HERO */}
        <ImageBackground
          source={{ uri: FIELD_IMAGE }}
          style={styles.hero}
          imageStyle={styles.heroImage}
        >
          <View style={styles.heroShade} />

          <View style={styles.heroTop}>
            <View style={styles.livePill}>
              <View style={styles.liveDot} />
              <Text style={styles.liveText}>FIELD ONLINE</Text>
            </View>

            <View style={styles.heroFieldId}>
              <Text style={styles.heroFieldLabel}>FIELD</Text>
              <Text style={styles.heroFieldValue}>01</Text>
            </View>
          </View>

          <View style={styles.heroBottom}>
            <View style={{ flex: 1 }}>
              <Text style={styles.heroCrop}>TOMATO</Text>
              <Text style={styles.heroLocation}>Ramanagara · Karnataka</Text>
              <Text style={styles.heroArea}>2.4 ACRES · LAST SCAN 10:42 AM</Text>
            </View>

            <View style={styles.healthRing}>
              <Text style={styles.healthNumber}>92</Text>
              <Text style={styles.healthOf}>/100</Text>
              <Text style={styles.healthLabel}>HEALTH</Text>
            </View>
          </View>
        </ImageBackground>

        {/* QUICK ACTIONS */}
        <View style={styles.quickActions}>
          <Pressable
            style={styles.primaryAction}
            onPress={() => router.push("/scan")}
          >
            <Ionicons name="scan-outline" size={20} color={COLORS.dark} />
            <View style={{ flex: 1 }}>
              <Text style={styles.actionTitle}>Scan crop</Text>
              <Text style={styles.actionSub}>Detect visible symptoms</Text>
            </View>
            <Ionicons name="arrow-forward" size={18} color={COLORS.dark} />
          </Pressable>

          <Pressable
            style={styles.secondaryAction}
            onPress={() => router.push("/map")}
          >
            <Ionicons name="map-outline" size={20} color={COLORS.green} />
            <View style={{ flex: 1 }}>
              <Text style={styles.secondaryTitle}>Open field map</Text>
              <Text style={styles.actionSub}>Monitor zones & conditions</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color={COLORS.green} />
          </Pressable>
        </View>

        {/* EXPORT READINESS */}
        <View style={styles.section}>
          <SectionHeader
            eyebrow="EXPORT READINESS"
            title="Destination compliance"
            action="DETAILS"
            onAction={() => router.push("/alerts")}
          />

          <View style={styles.exportPanel}>
            <View style={styles.exportScoreBlock}>
              <Text style={styles.exportScore}>92</Text>
              <Text style={styles.exportScoreOf}>/100</Text>
            </View>

            <View style={styles.exportCopy}>
              <View style={styles.readyRow}>
                <View style={styles.readyDot} />
                <Text style={styles.readyText}>LOW RISK</Text>
              </View>
              <Text style={styles.exportTitle}>Currently within limits</Text>
              <Text style={styles.exportBody}>
                Residue readings are within the configured destination threshold.
              </Text>
            </View>
          </View>

          <View style={styles.destinationRow}>
            <View>
              <Text style={styles.smallLabel}>DESTINATION</Text>
              <Text style={styles.destinationValue}>EU MARKET</Text>
            </View>
            <View style={styles.destinationDivider} />
            <View>
              <Text style={styles.smallLabel}>RESIDUE</Text>
              <Text style={styles.destinationValue}>SAFE</Text>
            </View>
            <View style={styles.destinationDivider} />
            <View>
              <Text style={styles.smallLabel}>HARVEST</Text>
              <Text style={styles.destinationValue}>18 DAYS</Text>
            </View>
          </View>
        </View>

        {/* FIELD MAP PREVIEW */}
        <View style={styles.section}>
          <SectionHeader
            eyebrow="GEOSPATIAL MONITORING"
            title="Field condition map"
            action="OPEN MAP"
            onAction={() => router.push("/map")}
          />

          <Pressable style={styles.mapPreview} onPress={() => router.push("/map")}>
            <View style={styles.mapGrid}>
              <View style={[styles.fieldBlock, styles.fieldA]} />
              <View style={[styles.fieldBlock, styles.fieldB]} />
              <View style={[styles.fieldBlock, styles.fieldC]} />
              <View style={[styles.fieldBlock, styles.fieldD]} />
              <View style={[styles.fieldBlock, styles.fieldE]} />
              <View style={[styles.fieldBlock, styles.fieldF]} />
              <View style={styles.fieldRoad} />
              <View style={styles.fieldWater} />

              <View style={[styles.mapPin, { left: "47%", top: "42%" }]}>
                <Ionicons name="location" size={24} color={COLORS.danger} />
              </View>

              <View style={styles.mapLegend}>
                <View style={styles.legendRow}>
                  <View style={[styles.legendDot, { backgroundColor: COLORS.green2 }]} />
                  <Text style={styles.legendText}>Healthy</Text>
                </View>
                <View style={styles.legendRow}>
                  <View style={[styles.legendDot, { backgroundColor: COLORS.warning }]} />
                  <Text style={styles.legendText}>Watch</Text>
                </View>
                <View style={styles.legendRow}>
                  <View style={[styles.legendDot, { backgroundColor: COLORS.danger }]} />
                  <Text style={styles.legendText}>Risk</Text>
                </View>
              </View>

              <View style={styles.mapLabel}>
                <Text style={styles.mapLabelTop}>FIELD 01</Text>
                <Text style={styles.mapLabelMain}>92% healthy area</Text>
              </View>
            </View>
          </Pressable>
        </View>

        {/* WEATHER */}
        <View style={styles.section}>
          <SectionHeader
            eyebrow="FIELD WEATHER"
            title="Next 24 hours"
            action="FULL FORECAST"
            onAction={() => router.push("/map")}
          />

          <View style={styles.weatherPanel}>
            <View style={styles.weatherMain}>
              <Ionicons name="partly-sunny-outline" size={38} color={COLORS.green} />
              <View style={{ marginLeft: 13 }}>
                <Text style={styles.weatherTemp}>28°</Text>
                <Text style={styles.weatherCondition}>Partly cloudy</Text>
              </View>
            </View>

            <View style={styles.weatherStats}>
              <View>
                <Text style={styles.smallLabel}>RAIN</Text>
                <Text style={styles.weatherStatValue}>18%</Text>
              </View>
              <View>
                <Text style={styles.smallLabel}>HUMIDITY</Text>
                <Text style={styles.weatherStatValue}>67%</Text>
              </View>
              <View>
                <Text style={styles.smallLabel}>WIND</Text>
                <Text style={styles.weatherStatValue}>11 km/h</Text>
              </View>
            </View>
          </View>

          <View style={styles.forecastStrip}>
            {[
              ["NOW", "28°", "partly-sunny-outline"],
              ["15:00", "29°", "sunny-outline"],
              ["18:00", "26°", "cloud-outline"],
              ["21:00", "23°", "moon-outline"],
            ].map(([time, temp, icon]) => (
              <View key={time} style={styles.forecastItem}>
                <Text style={styles.forecastTime}>{time}</Text>
                <Ionicons
                  name={icon as keyof typeof Ionicons.glyphMap}
                  size={19}
                  color={COLORS.green}
                />
                <Text style={styles.forecastTemp}>{temp}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* SENSOR STATUS */}
        <View style={styles.section}>
          <SectionHeader
            eyebrow="SENSOR NETWORK"
            title="Field station status"
            action="VIEW SENSOR"
            onAction={() => router.push("/sensors")}
          />

          <View style={styles.sensorHeader}>
            <View>
              <Text style={styles.sensorStation}>NODE AS-01</Text>
              <Text style={styles.sensorMeta}>Connected · 8 min ago</Text>
            </View>
            <View style={styles.battery}>
              <Ionicons name="battery-half-outline" size={18} color={COLORS.green} />
              <Text style={styles.batteryText}>84%</Text>
            </View>
          </View>

          <View style={styles.metricGrid}>
            <Metric
              icon="water-outline"
              label="SOIL MOISTURE"
              value="72"
              unit="%"
              status="OPTIMAL"
            />
            <Metric
              icon="thermometer-outline"
              label="SOIL TEMP"
              value="24.6"
              unit="°C"
              status="NORMAL"
              tone="blue"
            />
            <Metric
              icon="flask-outline"
              label="SOIL PH"
              value="6.4"
              status="SUITABLE"
            />
            <Metric
              icon="pulse-outline"
              label="RESIDUE SIGNAL"
              value="0.31"
              unit="mg/kg"
              status="WITHIN LIMIT"
            />
          </View>

          <Pressable
            style={styles.sensorDetailButton}
            onPress={() => router.push("/sensors")}
          >
            <View>
              <Text style={styles.sensorDetailTitle}>Sensor health 96%</Text>
              <Text style={styles.sensorDetailText}>
                Battery, signal, calibration and last transmission
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color={COLORS.green} />
          </Pressable>
        </View>

        {/* RISK INTELLIGENCE */}
        <View style={styles.section}>
          <SectionHeader
            eyebrow="RISK INTELLIGENCE"
            title="What needs attention?"
            action="VIEW ALL"
            onAction={() => router.push("/alerts")}
          />

          <View style={styles.riskList}>
            <View style={styles.riskRow}>
              <View style={[styles.riskIndicator, { backgroundColor: COLORS.green2 }]} />
              <View style={styles.riskText}>
                <Text style={styles.riskName}>DISEASE</Text>
                <Text style={styles.riskDescription}>No major visible signs detected</Text>
              </View>
              <Text style={styles.lowStatus}>LOW</Text>
            </View>

            <View style={styles.riskRow}>
              <View style={[styles.riskIndicator, { backgroundColor: COLORS.warning }]} />
              <View style={styles.riskText}>
                <Text style={styles.riskName}>PEST</Text>
                <Text style={styles.riskDescription}>Weather may increase activity</Text>
              </View>
              <Text style={styles.watchStatus}>WATCH</Text>
            </View>

            <View style={styles.riskRow}>
              <View style={[styles.riskIndicator, { backgroundColor: COLORS.green2 }]} />
              <View style={styles.riskText}>
                <Text style={styles.riskName}>RESIDUE</Text>
                <Text style={styles.riskDescription}>Sensor reading remains within limit</Text>
              </View>
              <Text style={styles.lowStatus}>SAFE</Text>
            </View>
          </View>
        </View>

        {/* CROP SCAN IMAGE */}
        <Pressable style={styles.scanFeature} onPress={() => router.push("/scan")}>
          <Image source={{ uri: TOMATO_IMAGE }} style={styles.scanImage} />
          <View style={styles.scanShade} />
          <View style={styles.scanFeatureContent}>
            <View style={styles.scanTag}>
              <Ionicons name="scan-outline" size={14} color="#FFFFFF" />
              <Text style={styles.scanTagText}>VISUAL ANALYSIS</Text>
            </View>

            <View>
              <Text style={styles.scanFeatureTitle}>Check your crop</Text>
              <Text style={styles.scanFeatureBody}>
                Capture a leaf, fruit or affected area for AI-assisted analysis.
              </Text>

              <View style={styles.scanCta}>
                <Text style={styles.scanCtaText}>START SCAN</Text>
                <Ionicons name="arrow-forward" size={17} color={COLORS.dark} />
              </View>
            </View>
          </View>
        </Pressable>

        {/* RECOMMENDATION */}
        <View style={styles.recommendation}>
          <View style={styles.recommendationTop}>
            <View style={styles.recommendationIcon}>
              <Ionicons name="bulb-outline" size={20} color={COLORS.lime} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.recommendationEyebrow}>AGRISHIELD GUIDANCE</Text>
              <Text style={styles.recommendationTitle}>Monitor pest activity</Text>
            </View>
            <Text style={styles.recommendationPriority}>WATCH</Text>
          </View>

          <Text style={styles.recommendationText}>
            Current weather conditions may increase pest activity during the next
            72 hours. Continue field observation before applying treatment.
          </Text>

          <Pressable
            style={styles.guidanceButton}
            onPress={() => router.push("/alerts")}
          >
            <Text style={styles.guidanceButtonText}>VIEW GUIDANCE</Text>
            <Ionicons name="arrow-forward" size={17} color="#FFFFFF" />
          </Pressable>
        </View>

        {/* HEALTH TREND */}
        <View style={styles.section}>
          <SectionHeader eyebrow="CROP PERFORMANCE" title="Health trend" />

          <View style={styles.trendSummary}>
            <Text style={styles.trendScore}>92</Text>
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.trendChange}>+4.2%</Text>
              <Text style={styles.trendCaption}>LAST 7 DAYS</Text>
            </View>
          </View>

          <View style={styles.chart}>
            {[40, 80, 120].map((top) => (
              <View key={top} style={[styles.chartGrid, { top }]} />
            ))}

            <View style={[styles.chartPoint, { left: "4%", top: 100 }]} />
            <View style={[styles.chartPoint, { left: "20%", top: 91 }]} />
            <View style={[styles.chartPoint, { left: "36%", top: 96 }]} />
            <View style={[styles.chartPoint, { left: "52%", top: 74 }]} />
            <View style={[styles.chartPoint, { left: "68%", top: 79 }]} />
            <View style={[styles.chartPoint, { left: "84%", top: 58 }]} />
            <View style={[styles.chartPoint, styles.lastPoint, { left: "95%", top: 46 }]} />
          </View>

          <View style={styles.chartLabels}>
            {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((day) => (
              <Text key={day} style={styles.chartLabel}>{day}</Text>
            ))}
          </View>
        </View>

        {/* RECENT ACTIVITY */}
        <View style={styles.section}>
          <SectionHeader
            eyebrow="FIELD HISTORY"
            title="Recent activity"
            action="VIEW HISTORY"
            onAction={() => router.push("/history")}
          />

          {[
            ["scan-outline", "Crop scan completed", "Today · 10:42 AM", "HEALTHY"],
            ["pulse-outline", "Residue signal recorded", "Today · 09:18 AM", "SAFE"],
            ["water-outline", "Soil moisture updated", "Yesterday · 06:32 PM", "72%"],
          ].map(([icon, title, time, result]) => (
            <View style={styles.activityRow} key={title}>
              <View style={styles.activityIcon}>
                <Ionicons
                  name={icon as keyof typeof Ionicons.glyphMap}
                  size={18}
                  color={COLORS.green}
                />
              </View>
              <View style={styles.activityCopy}>
                <Text style={styles.activityTitle}>{title}</Text>
                <Text style={styles.activityTime}>{time}</Text>
              </View>
              <Text style={styles.activityResult}>{result}</Text>
            </View>
          ))}
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerBrand}>AGRISHIELD</Text>
          <Text style={styles.footerText}>
            Detect · Understand · Predict · Act · Monitor · Verify
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: COLORS.bg },
  container: { flex: 1, backgroundColor: COLORS.bg },
  content: { paddingBottom: 45 },

  topBar: {
    paddingHorizontal: 22,
    paddingTop: 14,
    paddingBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  brand: {
    fontSize: 14,
    fontWeight: "900",
    letterSpacing: 2.2,
    color: COLORS.dark,
  },
  brandSub: {
    marginTop: 4,
    fontSize: 7,
    fontWeight: "800",
    letterSpacing: 1.3,
    color: COLORS.muted,
  },
  iconButton: {
    width: 42,
    height: 42,
    borderWidth: 1,
    borderColor: COLORS.line,
    backgroundColor: COLORS.paper,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 21,
  },

  hero: {
    height: 360,
    marginHorizontal: 14,
    overflow: "hidden",
    padding: 20,
    justifyContent: "space-between",
  },
  heroImage: { borderRadius: 26 },
  heroShade: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(12, 31, 17, 0.50)",
  },
  heroTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  livePill: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.35)",
    backgroundColor: "rgba(0,0,0,0.16)",
  },
  liveDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: COLORS.lime,
    marginRight: 6,
  },
  liveText: {
    fontSize: 8,
    fontWeight: "900",
    letterSpacing: 1,
    color: "#FFFFFF",
  },
  heroFieldId: { alignItems: "flex-end" },
  heroFieldLabel: {
    fontSize: 8,
    fontWeight: "800",
    letterSpacing: 1.2,
    color: "#D9E5D5",
  },
  heroFieldValue: {
    marginTop: 1,
    fontSize: 26,
    fontWeight: "800",
    color: "#FFFFFF",
  },
  heroBottom: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  heroCrop: {
    fontSize: 43,
    lineHeight: 47,
    fontWeight: "800",
    letterSpacing: -1.3,
    color: "#FFFFFF",
  },
  heroLocation: {
    marginTop: 6,
    fontSize: 12,
    color: "#E1EADD",
  },
  heroArea: {
    marginTop: 8,
    fontSize: 8,
    fontWeight: "800",
    letterSpacing: 1,
    color: "#C5D2C1",
  },
  healthRing: {
    width: 82,
    height: 82,
    borderWidth: 1,
    borderColor: "rgba(184,216,74,0.65)",
    backgroundColor: "rgba(14,37,20,0.50)",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 15,
  },
  healthNumber: {
    fontSize: 29,
    lineHeight: 31,
    fontWeight: "900",
    color: COLORS.lime,
  },
  healthOf: { fontSize: 9, color: "#DDE7D8" },
  healthLabel: {
    marginTop: 3,
    fontSize: 7,
    fontWeight: "900",
    letterSpacing: 1,
    color: "#DDE7D8",
  },

  quickActions: { marginHorizontal: 14, marginTop: 10 },
  primaryAction: {
    minHeight: 72,
    paddingHorizontal: 17,
    backgroundColor: COLORS.lime,
    flexDirection: "row",
    alignItems: "center",
  },
  secondaryAction: {
    minHeight: 66,
    marginTop: 1,
    paddingHorizontal: 17,
    backgroundColor: COLORS.paper,
    borderWidth: 1,
    borderColor: COLORS.line,
    flexDirection: "row",
    alignItems: "center",
  },
  actionTitle: {
    marginLeft: 13,
    fontSize: 15,
    fontWeight: "800",
    color: COLORS.dark,
  },
  secondaryTitle: {
    marginLeft: 13,
    fontSize: 14,
    fontWeight: "800",
    color: COLORS.dark,
  },
  actionSub: {
    marginLeft: 13,
    marginTop: 3,
    fontSize: 10,
    color: COLORS.muted,
  },

  section: { marginTop: 34, marginHorizontal: 22 },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 16,
  },
  eyebrow: {
    fontSize: 8,
    fontWeight: "900",
    letterSpacing: 1.6,
    color: "#707970",
  },
  sectionTitle: {
    marginTop: 5,
    fontSize: 21,
    lineHeight: 25,
    fontWeight: "800",
    letterSpacing: -0.4,
    color: COLORS.dark,
  },
  headerAction: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 3,
  },
  headerActionText: {
    marginRight: 5,
    fontSize: 8,
    fontWeight: "900",
    letterSpacing: 0.8,
    color: COLORS.green,
  },

  exportPanel: {
    padding: 18,
    backgroundColor: COLORS.paper,
    borderWidth: 1,
    borderColor: COLORS.line,
    flexDirection: "row",
  },
  exportScoreBlock: { width: 105 },
  exportScore: {
    fontSize: 58,
    lineHeight: 60,
    fontWeight: "900",
    letterSpacing: -3,
    color: COLORS.green,
  },
  exportScoreOf: {
    marginTop: -4,
    fontSize: 10,
    color: COLORS.muted,
  },
  exportCopy: {
    flex: 1,
    borderLeftWidth: 1,
    borderLeftColor: COLORS.line,
    paddingLeft: 15,
  },
  readyRow: { flexDirection: "row", alignItems: "center" },
  readyDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: COLORS.green2,
    marginRight: 6,
  },
  readyText: {
    fontSize: 8,
    fontWeight: "900",
    letterSpacing: 1,
    color: COLORS.green,
  },
  exportTitle: {
    marginTop: 7,
    fontSize: 15,
    fontWeight: "800",
    color: COLORS.text,
  },
  exportBody: {
    marginTop: 5,
    fontSize: 10,
    lineHeight: 15,
    color: COLORS.muted,
  },
  destinationRow: {
    minHeight: 64,
    marginTop: 1,
    paddingHorizontal: 15,
    backgroundColor: COLORS.soft,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  smallLabel: {
    fontSize: 7,
    fontWeight: "900",
    letterSpacing: 1,
    color: "#838C84",
  },
  destinationValue: {
    marginTop: 4,
    fontSize: 10,
    fontWeight: "800",
    color: COLORS.text,
  },
  destinationDivider: { width: 1, height: 25, backgroundColor: COLORS.line },

  mapPreview: {
    height: 250,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: COLORS.line,
    backgroundColor: "#DCE4D3",
  },
  mapGrid: {
    flex: 1,
    position: "relative",
    overflow: "hidden",
    backgroundColor: "#DDE5D8",
  },
  fieldBlock: { position: "absolute", borderWidth: 2, borderColor: "#B9C9AD" },
  fieldA: { left: "-8%", top: "-15%", width: "43%", height: "55%", backgroundColor: "#A9C78A", transform: [{ rotate: "-8deg" }] },
  fieldB: { left: "28%", top: "-12%", width: "35%", height: "47%", backgroundColor: "#88B875", transform: [{ rotate: "5deg" }] },
  fieldC: { right: "-8%", top: "-8%", width: "43%", height: "55%", backgroundColor: "#B8D095", transform: [{ rotate: "-6deg" }] },
  fieldD: { left: "-10%", top: "38%", width: "48%", height: "45%", backgroundColor: "#91BD79", transform: [{ rotate: "7deg" }] },
  fieldE: { left: "34%", top: "31%", width: "35%", height: "55%", backgroundColor: "#B1C98D", transform: [{ rotate: "-4deg" }] },
  fieldF: { right: "-7%", top: "42%", width: "43%", height: "45%", backgroundColor: "#79A969", transform: [{ rotate: "8deg" }] },
  fieldRoad: {
    position: "absolute",
    left: "-10%",
    top: "57%",
    width: "125%",
    height: 17,
    backgroundColor: "#B6B39B",
    transform: [{ rotate: "-12deg" }],
  },
  fieldWater: {
    position: "absolute",
    left: "72%",
    top: "12%",
    width: 55,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#80AFC0",
  },
  mapPin: { position: "absolute" },
  mapLegend: {
    position: "absolute",
    left: 12,
    bottom: 12,
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: "rgba(255,255,255,0.90)",
    borderWidth: 1,
    borderColor: "#D2D8CE",
  },
  legendRow: { flexDirection: "row", alignItems: "center", marginVertical: 2 },
  legendDot: { width: 7, height: 7, borderRadius: 4, marginRight: 6 },
  legendText: { fontSize: 8, color: COLORS.text },
  mapLabel: {
    position: "absolute",
    right: 12,
    bottom: 12,
    padding: 10,
    backgroundColor: COLORS.dark,
  },
  mapLabelTop: {
    fontSize: 7,
    fontWeight: "900",
    letterSpacing: 1,
    color: "#AEBBAA",
  },
  mapLabelMain: {
    marginTop: 4,
    fontSize: 11,
    fontWeight: "800",
    color: "#FFFFFF",
  },

  weatherPanel: {
    padding: 18,
    backgroundColor: COLORS.paper,
    borderWidth: 1,
    borderColor: COLORS.line,
  },
  weatherMain: { flexDirection: "row", alignItems: "center" },
  weatherTemp: {
    fontSize: 34,
    lineHeight: 36,
    fontWeight: "800",
    color: COLORS.dark,
  },
  weatherCondition: { marginTop: 2, fontSize: 10, color: COLORS.muted },
  weatherStats: {
    marginTop: 18,
    paddingTop: 14,
    borderTopWidth: 1,
    borderTopColor: COLORS.line,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  weatherStatValue: {
    marginTop: 4,
    fontSize: 12,
    fontWeight: "800",
    color: COLORS.text,
  },
  forecastStrip: {
    height: 68,
    marginTop: 1,
    paddingHorizontal: 12,
    backgroundColor: COLORS.soft,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  forecastItem: { alignItems: "center", minWidth: 55 },
  forecastTime: {
    marginBottom: 4,
    fontSize: 7,
    fontWeight: "900",
    letterSpacing: 0.7,
    color: COLORS.muted,
  },
  forecastTemp: {
    marginTop: 3,
    fontSize: 10,
    fontWeight: "800",
    color: COLORS.text,
  },

  sensorHeader: {
    padding: 15,
    backgroundColor: COLORS.dark,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sensorStation: {
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 1,
    color: "#FFFFFF",
  },
  sensorMeta: { marginTop: 4, fontSize: 9, color: "#AEBBAA" },
  battery: { flexDirection: "row", alignItems: "center" },
  batteryText: {
    marginLeft: 6,
    fontSize: 10,
    fontWeight: "800",
    color: COLORS.lime,
  },
  metricGrid: {
    paddingTop: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  metricCard: {
    width: "49.5%",
    minHeight: 142,
    marginBottom: 1,
    padding: 14,
    backgroundColor: COLORS.paper,
    borderWidth: 1,
    borderColor: COLORS.line,
  },
  metricTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  metricIcon: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: COLORS.soft,
    justifyContent: "center",
    alignItems: "center",
  },
  statusDot: { width: 7, height: 7, borderRadius: 4 },
  metricLabel: {
    marginTop: 14,
    fontSize: 7,
    fontWeight: "900",
    letterSpacing: 0.8,
    color: "#7C857D",
  },
  metricValueRow: { flexDirection: "row", alignItems: "flex-end" },
  metricValue: {
    marginTop: 5,
    fontSize: 22,
    fontWeight: "800",
    color: COLORS.text,
  },
  metricUnit: { marginLeft: 3, marginBottom: 3, fontSize: 9, color: COLORS.muted },
  metricStatus: {
    marginTop: 2,
    fontSize: 8,
    fontWeight: "800",
    color: COLORS.green,
  },
  sensorDetailButton: {
    marginTop: 1,
    padding: 15,
    backgroundColor: "#EEF1EB",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sensorDetailTitle: {
    fontSize: 12,
    fontWeight: "800",
    color: COLORS.text,
  },
  sensorDetailText: {
    marginTop: 3,
    fontSize: 9,
    color: COLORS.muted,
  },

  riskList: { borderTopWidth: 1, borderTopColor: COLORS.line },
  riskRow: {
    minHeight: 70,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.line,
    flexDirection: "row",
    alignItems: "center",
  },
  riskIndicator: { width: 4, height: 34, marginRight: 13 },
  riskText: { flex: 1 },
  riskName: {
    fontSize: 8,
    fontWeight: "900",
    letterSpacing: 1,
    color: COLORS.text,
  },
  riskDescription: { marginTop: 4, fontSize: 10, color: COLORS.muted },
  lowStatus: {
    fontSize: 8,
    fontWeight: "900",
    letterSpacing: 1,
    color: COLORS.green2,
  },
  watchStatus: {
    fontSize: 8,
    fontWeight: "900",
    letterSpacing: 1,
    color: "#B57A17",
  },

  scanFeature: {
    height: 325,
    marginTop: 36,
    marginHorizontal: 14,
    overflow: "hidden",
  },
  scanImage: { width: "100%", height: "100%" },
  scanShade: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(9, 27, 14, 0.46)",
  },
  scanFeatureContent: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 20,
    justifyContent: "space-between",
  },
  scanTag: {
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.4)",
    flexDirection: "row",
    alignItems: "center",
  },
  scanTagText: {
    marginLeft: 6,
    fontSize: 8,
    fontWeight: "900",
    letterSpacing: 1,
    color: "#FFFFFF",
  },
  scanFeatureTitle: {
    fontSize: 30,
    fontWeight: "800",
    letterSpacing: -0.7,
    color: "#FFFFFF",
  },
  scanFeatureBody: {
    marginTop: 6,
    maxWidth: 285,
    fontSize: 11,
    lineHeight: 17,
    color: "#DDE7D8",
  },
  scanCta: {
    alignSelf: "flex-start",
    height: 43,
    marginTop: 15,
    paddingHorizontal: 15,
    backgroundColor: COLORS.lime,
    flexDirection: "row",
    alignItems: "center",
  },
  scanCtaText: {
    marginRight: 10,
    fontSize: 8,
    fontWeight: "900",
    letterSpacing: 1,
    color: COLORS.dark,
  },

  recommendation: {
    marginTop: 1,
    marginHorizontal: 14,
    padding: 20,
    backgroundColor: COLORS.dark,
  },
  recommendationTop: { flexDirection: "row", alignItems: "center" },
  recommendationIcon: {
    width: 42,
    height: 42,
    marginRight: 11,
    backgroundColor: "#26372A",
    justifyContent: "center",
    alignItems: "center",
  },
  recommendationEyebrow: {
    fontSize: 7,
    fontWeight: "900",
    letterSpacing: 1.1,
    color: "#9CA99B",
  },
  recommendationTitle: {
    marginTop: 4,
    fontSize: 18,
    fontWeight: "800",
    color: "#FFFFFF",
  },
  recommendationPriority: {
    fontSize: 8,
    fontWeight: "900",
    letterSpacing: 1,
    color: COLORS.lime,
  },
  recommendationText: {
    marginTop: 17,
    fontSize: 11,
    lineHeight: 18,
    color: "#BCC7BB",
  },
  guidanceButton: {
    height: 43,
    marginTop: 18,
    backgroundColor: COLORS.green,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  guidanceButtonText: {
    marginRight: 9,
    fontSize: 8,
    fontWeight: "900",
    letterSpacing: 1,
    color: "#FFFFFF",
  },

  trendSummary: { flexDirection: "row", alignItems: "center" },
  trendScore: {
    fontSize: 43,
    lineHeight: 45,
    fontWeight: "900",
    letterSpacing: -2,
    color: COLORS.green,
  },
  trendChange: { fontSize: 12, fontWeight: "900", color: COLORS.green2 },
  trendCaption: {
    marginTop: 3,
    fontSize: 7,
    fontWeight: "800",
    letterSpacing: 0.8,
    color: COLORS.muted,
  },
  chart: {
    height: 160,
    marginTop: 17,
    position: "relative",
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.line,
  },
  chartGrid: {
    position: "absolute",
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: "#DEE2DB",
  },
  chartPoint: {
    position: "absolute",
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: COLORS.green,
  },
  lastPoint: { backgroundColor: COLORS.lime },
  chartLabels: {
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  chartLabel: {
    fontSize: 7,
    fontWeight: "800",
    color: "#899189",
  },

  activityRow: {
    minHeight: 70,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.line,
    flexDirection: "row",
    alignItems: "center",
  },
  activityIcon: {
    width: 38,
    height: 38,
    backgroundColor: COLORS.soft,
    justifyContent: "center",
    alignItems: "center",
  },
  activityCopy: { flex: 1, paddingHorizontal: 12 },
  activityTitle: { fontSize: 11, fontWeight: "700", color: COLORS.text },
  activityTime: { marginTop: 4, fontSize: 9, color: COLORS.muted },
  activityResult: {
    fontSize: 8,
    fontWeight: "900",
    letterSpacing: 0.8,
    color: COLORS.green2,
  },

  footer: {
    marginTop: 45,
    marginHorizontal: 22,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: COLORS.line,
  },
  footerBrand: {
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 1.8,
    color: COLORS.green,
  },
  footerText: { marginTop: 6, fontSize: 9, color: COLORS.muted },
});
