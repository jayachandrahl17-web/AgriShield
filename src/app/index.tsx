import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const FIELD_IMAGE =
  "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85";

const TOMATO_IMAGE =
  "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=900&q=85";

export default function Dashboard() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* =====================================================
            HERO
        ===================================================== */}

        <View style={styles.heroWrapper}>
          <ImageBackground
            source={{ uri: FIELD_IMAGE }}
            style={styles.hero}
            imageStyle={styles.heroImage}
          >
            <View style={styles.heroOverlay} />

            <View style={styles.heroTop}>
              <View>
                <Text style={styles.heroBrand}>AGRISHIELD</Text>

                <Text style={styles.heroEyebrow}>
                  PRECISION CROP INTELLIGENCE
                </Text>
              </View>

              <Pressable style={styles.profileButton}>
                <Ionicons
                  name="person-outline"
                  size={18}
                  color="#FFFFFF"
                />
              </Pressable>
            </View>

            <View style={styles.heroBottom}>
              <View>
                <Text style={styles.heroField}>
                  FIELD 01
                </Text>

                <Text style={styles.heroTitle}>
                  Tomato
                </Text>

                <View style={styles.heroLocation}>
                  <Ionicons
                    name="location-outline"
                    size={13}
                    color="#DDE9D8"
                  />

                  <Text style={styles.heroLocationText}>
                    Ramanagara, Karnataka
                  </Text>
                </View>
              </View>

              <View style={styles.heroHealth}>
                <Text style={styles.heroHealthLabel}>
                  FIELD HEALTH
                </Text>

                <Text style={styles.heroHealthValue}>
                  92
                </Text>

                <Text style={styles.heroHealthUnit}>
                  /100
                </Text>
              </View>
            </View>
          </ImageBackground>
        </View>

        {/* =====================================================
            EXPORT READINESS
        ===================================================== */}

        <View style={styles.exportBlock}>
          <View style={styles.sectionTop}>
            <View>
              <Text style={styles.eyebrow}>
                EXPORT READINESS
              </Text>

              <Text style={styles.sectionTitle}>
                Ready for destination checks
              </Text>
            </View>

            <View style={styles.readyBadge}>
              <View style={styles.greenDot} />

              <Text style={styles.readyText}>
                READY
              </Text>
            </View>
          </View>

          <View style={styles.exportMain}>
            <View style={styles.exportScore}>
              <Text style={styles.bigScore}>92</Text>

              <View>
                <Text style={styles.scoreOf}>/100</Text>

                <Text style={styles.scoreCaption}>
                  EXPORT SCORE
                </Text>
              </View>
            </View>

            <View style={styles.exportMessage}>
              <Text style={styles.messageTitle}>
                Low compliance risk
              </Text>

              <Text style={styles.messageText}>
                Residue readings remain within the
                configured destination limit.
              </Text>
            </View>
          </View>

          <View style={styles.exportMetrics}>
            <View style={styles.exportMetric}>
              <Text style={styles.metricLabel}>
                RESIDUE
              </Text>

              <Text style={styles.metricValue}>
                Within limit
              </Text>
            </View>

            <View style={styles.verticalLine} />

            <View style={styles.exportMetric}>
              <Text style={styles.metricLabel}>
                CROP
              </Text>

              <Text style={styles.metricValue}>
                Stable
              </Text>
            </View>

            <View style={styles.verticalLine} />

            <View style={styles.exportMetric}>
              <Text style={styles.metricLabel}>
                RISK
              </Text>

              <Text style={styles.metricValue}>
                Low
              </Text>
            </View>
          </View>
        </View>

        {/* =====================================================
            FIELD IMAGE / VISUAL CHECK
        ===================================================== */}

        <View style={styles.visualSection}>
          <Image
            source={{ uri: TOMATO_IMAGE }}
            style={styles.cropImage}
          />

          <View style={styles.imageOverlay} />

          <View style={styles.imageContent}>
            <View style={styles.imageTag}>
              <Ionicons
                name="scan-outline"
                size={13}
                color="#FFFFFF"
              />

              <Text style={styles.imageTagText}>
                VISUAL ANALYSIS
              </Text>
            </View>

            <View>
              <Text style={styles.imageTitle}>
                Check your crop
              </Text>

              <Text style={styles.imageDescription}>
                Capture a leaf, fruit or affected area
                to detect visible crop risks.
              </Text>

              <Pressable style={styles.scanButton}>
                <Text style={styles.scanButtonText}>
                  SCAN CROP
                </Text>

                <Ionicons
                  name="arrow-forward"
                  size={17}
                  color="#172019"
                />
              </Pressable>
            </View>
          </View>
        </View>

        {/* =====================================================
            LIVE SENSOR DATA
        ===================================================== */}

        <View style={styles.sensorSection}>
          <View style={styles.sectionTop}>
            <View>
              <Text style={styles.eyebrow}>
                FIELD SENSOR
              </Text>

              <Text style={styles.sectionTitle}>
                Live conditions
              </Text>
            </View>

            <View style={styles.online}>
              <View style={styles.greenDot} />

              <Text style={styles.onlineText}>
                ONLINE
              </Text>
            </View>
          </View>

          <Text style={styles.lastUpdated}>
            Updated 8 minutes ago
          </Text>

          <View style={styles.sensorGrid}>
            <View style={styles.sensorCard}>
              <View style={styles.sensorIcon}>
                <Ionicons
                  name="shield-checkmark-outline"
                  size={20}
                  color="#315D3A"
                />
              </View>

              <Text style={styles.sensorLabel}>
                RESIDUE
              </Text>

              <Text style={styles.sensorValue}>
                SAFE
              </Text>

              <Text style={styles.sensorHint}>
                Within limit
              </Text>
            </View>

            <View style={styles.sensorCard}>
              <View style={styles.sensorIcon}>
                <Ionicons
                  name="water-outline"
                  size={20}
                  color="#315D3A"
                />
              </View>

              <Text style={styles.sensorLabel}>
                MOISTURE
              </Text>

              <Text style={styles.sensorValue}>
                72%
              </Text>

              <Text style={styles.sensorHint}>
                Optimal
              </Text>
            </View>

            <View style={styles.sensorCard}>
              <View style={styles.sensorIcon}>
                <Ionicons
                  name="thermometer-outline"
                  size={20}
                  color="#315D3A"
                />
              </View>

              <Text style={styles.sensorLabel}>
                TEMP
              </Text>

              <Text style={styles.sensorValue}>
                28°C
              </Text>

              <Text style={styles.sensorHint}>
                Normal
              </Text>
            </View>

            <View style={styles.sensorCard}>
              <View style={styles.sensorIcon}>
                <Ionicons
                  name="flask-outline"
                  size={20}
                  color="#315D3A"
                />
              </View>

              <Text style={styles.sensorLabel}>
                SOIL PH
              </Text>

              <Text style={styles.sensorValue}>
                6.4
              </Text>

              <Text style={styles.sensorHint}>
                Suitable
              </Text>
            </View>
          </View>
        </View>

        {/* =====================================================
            RISK INTELLIGENCE
        ===================================================== */}

        <View style={styles.riskSection}>
          <View style={styles.sectionTop}>
            <View>
              <Text style={styles.eyebrow}>
                RISK INTELLIGENCE
              </Text>

              <Text style={styles.sectionTitle}>
                What needs attention?
              </Text>
            </View>

            <Ionicons
              name="pulse-outline"
              size={22}
              color="#687169"
            />
          </View>

          {/* Disease */}

          <View style={styles.riskItem}>
            <View style={styles.riskLeft}>
              <View
                style={[
                  styles.riskBar,
                  { backgroundColor: "#4E8B55" },
                ]}
              />

              <View>
                <Text style={styles.riskName}>
                  DISEASE
                </Text>

                <Text style={styles.riskDescription}>
                  No major signs detected
                </Text>
              </View>
            </View>

            <Text style={styles.lowStatus}>
              LOW
            </Text>
          </View>

          {/* Pest */}

          <View style={styles.riskItem}>
            <View style={styles.riskLeft}>
              <View
                style={[
                  styles.riskBar,
                  { backgroundColor: "#D89B2B" },
                ]}
              />

              <View>
                <Text style={styles.riskName}>
                  PEST
                </Text>

                <Text style={styles.riskDescription}>
                  Conditions becoming favourable
                </Text>
              </View>
            </View>

            <Text style={styles.watchStatus}>
              WATCH
            </Text>
          </View>

          {/* Residue */}

          <View style={styles.riskItem}>
            <View style={styles.riskLeft}>
              <View
                style={[
                  styles.riskBar,
                  { backgroundColor: "#4E8B55" },
                ]}
              />

              <View>
                <Text style={styles.riskName}>
                  RESIDUE
                </Text>

                <Text style={styles.riskDescription}>
                  Current level remains safe
                </Text>
              </View>
            </View>

            <Text style={styles.lowStatus}>
              SAFE
            </Text>
          </View>
        </View>

        {/* =====================================================
            RECOMMENDATION
        ===================================================== */}

        <View style={styles.recommendation}>
          <View style={styles.recommendationHeader}>
            <View style={styles.recommendationIcon}>
              <Ionicons
                name="bulb-outline"
                size={20}
                color="#B8D84A"
              />
            </View>

            <View>
              <Text style={styles.recommendationEyebrow}>
                AGRISHIELD GUIDANCE
              </Text>

              <Text style={styles.recommendationTitle}>
                Monitor pest activity
              </Text>
            </View>
          </View>

          <Text style={styles.recommendationText}>
            Weather conditions may increase pest activity
            during the next 72 hours. Continue observation
            before applying treatment.
          </Text>

          <Pressable style={styles.guidanceButton}>
            <Text style={styles.guidanceButtonText}>
              VIEW GUIDANCE
            </Text>

            <Ionicons
              name="arrow-forward"
              size={17}
              color="#FFFFFF"
            />
          </Pressable>
        </View>

        {/* =====================================================
            HEALTH TREND
        ===================================================== */}

        <View style={styles.trendSection}>
          <View style={styles.sectionTop}>
            <View>
              <Text style={styles.eyebrow}>
                CROP PERFORMANCE
              </Text>

              <Text style={styles.sectionTitle}>
                Health trend
              </Text>
            </View>

            <Text style={styles.trendPercentage}>
              +4.2%
            </Text>
          </View>

          <View style={styles.chartContainer}>
            <View style={styles.chartHorizontal1} />
            <View style={styles.chartHorizontal2} />
            <View style={styles.chartHorizontal3} />

            <View style={styles.chartLine}>
              <View style={[styles.chartPoint, styles.point1]} />
              <View style={[styles.chartPoint, styles.point2]} />
              <View style={[styles.chartPoint, styles.point3]} />
              <View style={[styles.chartPoint, styles.point4]} />
              <View style={[styles.chartPoint, styles.point5]} />
              <View style={[styles.chartPoint, styles.point6]} />
              <View style={[styles.chartPoint, styles.point7]} />
            </View>
          </View>

          <View style={styles.chartLabels}>
            <Text>MON</Text>
            <Text>TUE</Text>
            <Text>WED</Text>
            <Text>THU</Text>
            <Text>FRI</Text>
            <Text>SAT</Text>
            <Text>SUN</Text>
          </View>
        </View>

        {/* =====================================================
            RECENT ACTIVITY
        ===================================================== */}

        <View style={styles.activitySection}>
          <View style={styles.sectionTop}>
            <Text style={styles.eyebrow}>
              FIELD HISTORY
            </Text>

            <Pressable>
              <Text style={styles.viewAll}>
                VIEW ALL
              </Text>
            </Pressable>
          </View>

          <View style={styles.activityItem}>
            <View style={styles.activityIcon}>
              <Ionicons
                name="scan-outline"
                size={18}
                color="#315D3A"
              />
            </View>

            <View style={styles.activityText}>
              <Text style={styles.activityTitle}>
                Crop scan completed
              </Text>

              <Text style={styles.activityTime}>
                Today · 10:42 AM
              </Text>
            </View>

            <Text style={styles.activityResult}>
              HEALTHY
            </Text>
          </View>

          <View style={styles.activityItem}>
            <View style={styles.activityIcon}>
              <Ionicons
                name="flask-outline"
                size={18}
                color="#315D3A"
              />
            </View>

            <View style={styles.activityText}>
              <Text style={styles.activityTitle}>
                Residue reading recorded
              </Text>

              <Text style={styles.activityTime}>
                Today · 09:18 AM
              </Text>
            </View>

            <Text style={styles.activityResult}>
              SAFE
            </Text>
          </View>

          <View style={styles.activityItem}>
            <View style={styles.activityIcon}>
              <Ionicons
                name="water-outline"
                size={18}
                color="#315D3A"
              />
            </View>

            <View style={styles.activityText}>
              <Text style={styles.activityTitle}>
                Soil moisture updated
              </Text>

              <Text style={styles.activityTime}>
                Yesterday · 06:32 PM
              </Text>
            </View>

            <Text style={styles.activityResult}>
              72%
            </Text>
          </View>
        </View>

        {/* =====================================================
            FOOTER
        ===================================================== */}

        <View style={styles.footer}>
          <Text style={styles.footerBrand}>
            AGRISHIELD
          </Text>

          <Text style={styles.footerText}>
            Monitor · Predict · Act · Verify
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

/* =============================================================
   STYLES
============================================================= */

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F3F4EE",
  },

  container: {
    flex: 1,
    backgroundColor: "#F3F4EE",
  },

  content: {
    paddingBottom: 50,
  },

  /* =========================================================
     HERO
  ========================================================= */

  heroWrapper: {
    marginHorizontal: 14,
    marginTop: 10,
  },

  hero: {
    height: 390,
    justifyContent: "space-between",
    padding: 22,
    overflow: "hidden",
  },

  heroImage: {
    borderRadius: 24,
  },

  heroOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(14, 34, 20, 0.48)",
  },

  heroTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  heroBrand: {
    fontSize: 13,
    fontWeight: "800",
    letterSpacing: 2,
    color: "#FFFFFF",
  },

  heroEyebrow: {
    marginTop: 6,
    fontSize: 8,
    fontWeight: "700",
    letterSpacing: 1.4,
    color: "#C9D8C3",
  },

  profileButton: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.4)",
    backgroundColor: "rgba(0,0,0,0.18)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },

  heroBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },

  heroField: {
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 1.5,
    color: "#D4E1D0",
  },

  heroTitle: {
    marginTop: 3,
    fontSize: 46,
    lineHeight: 50,
    fontWeight: "700",
    letterSpacing: -1.5,
    color: "#FFFFFF",
    textTransform: "capitalize",
  },

  heroLocation: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },

  heroLocationText: {
    marginLeft: 5,
    fontSize: 11,
    color: "#DDE9D8",
  },

  heroHealth: {
    alignItems: "flex-end",
  },

  heroHealthLabel: {
    fontSize: 8,
    fontWeight: "700",
    letterSpacing: 1.1,
    color: "#C9D8C3",
  },

  heroHealthValue: {
    marginTop: 2,
    fontSize: 42,
    lineHeight: 45,
    fontWeight: "800",
    color: "#B8D84A",
  },

  heroHealthUnit: {
    marginTop: -5,
    fontSize: 10,
    color: "#DDE9D8",
  },

  /* =========================================================
     EXPORT
  ========================================================= */

  exportBlock: {
    marginTop: 28,
    marginHorizontal: 24,
  },

  sectionTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  eyebrow: {
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1.6,
    color: "#69736B",
  },

  sectionTitle: {
    marginTop: 6,
    fontSize: 21,
    fontWeight: "700",
    letterSpacing: -0.3,
    color: "#172019",
  },

  readyBadge: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 4,
  },

  greenDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: "#4E8B55",
    marginRight: 6,
  },

  readyText: {
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1,
    color: "#315D3A",
  },

  exportMain: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },

  exportScore: {
    flexDirection: "row",
    alignItems: "flex-end",
    minWidth: 120,
  },

  bigScore: {
    fontSize: 66,
    lineHeight: 68,
    fontWeight: "800",
    letterSpacing: -3,
    color: "#315D3A",
  },

  scoreOf: {
    fontSize: 12,
    color: "#858D86",
    marginBottom: 9,
  },

  scoreCaption: {
    fontSize: 7,
    fontWeight: "800",
    letterSpacing: 1,
    color: "#858D86",
    marginBottom: 1,
  },

  exportMessage: {
    flex: 1,
    paddingLeft: 15,
    borderLeftWidth: 1,
    borderLeftColor: "#D2D7CF",
  },

  messageTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#263128",
  },

  messageText: {
    marginTop: 5,
    fontSize: 11,
    lineHeight: 16,
    color: "#737C75",
  },

  exportMetrics: {
    marginTop: 20,
    paddingTop: 15,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#D5DAD2",
    paddingBottom: 15,
    flexDirection: "row",
    alignItems: "center",
  },

  exportMetric: {
    flex: 1,
  },

  verticalLine: {
    height: 28,
    width: 1,
    backgroundColor: "#D5DAD2",
  },

  metricLabel: {
    fontSize: 8,
    fontWeight: "800",
    letterSpacing: 1,
    color: "#8A928B",
  },

  metricValue: {
    marginTop: 5,
    fontSize: 11,
    fontWeight: "600",
    color: "#263128",
  },

  /* =========================================================
     VISUAL CROP SECTION
  ========================================================= */

  visualSection: {
    marginTop: 34,
    marginHorizontal: 14,
    height: 340,
    overflow: "hidden",
  },

  cropImage: {
    width: "100%",
    height: "100%",
  },

  imageOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(11, 30, 17, 0.42)",
  },

  imageContent: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 22,
    justifyContent: "space-between",
  },

  imageTag: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.4)",
    backgroundColor: "rgba(0,0,0,0.15)",
    paddingHorizontal: 10,
    paddingVertical: 7,
  },

  imageTagText: {
    marginLeft: 6,
    fontSize: 8,
    fontWeight: "800",
    letterSpacing: 1,
    color: "#FFFFFF",
  },

  imageTitle: {
    fontSize: 31,
    fontWeight: "700",
    letterSpacing: -0.8,
    color: "#FFFFFF",
  },

  imageDescription: {
    marginTop: 7,
    maxWidth: 280,
    fontSize: 12,
    lineHeight: 18,
    color: "#E0E9DD",
  },

  scanButton: {
    marginTop: 16,
    alignSelf: "flex-start",
    height: 43,
    paddingHorizontal: 16,
    backgroundColor: "#B8D84A",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  scanButtonText: {
    fontSize: 9,
    fontWeight: "900",
    letterSpacing: 1,
    color: "#172019",
  },

  /* =========================================================
     SENSOR
  ========================================================= */

  sensorSection: {
    marginTop: 36,
    marginHorizontal: 24,
  },

  online: {
    flexDirection: "row",
    alignItems: "center",
  },

  onlineText: {
    fontSize: 8,
    fontWeight: "800",
    letterSpacing: 1,
    color: "#315D3A",
  },

  lastUpdated: {
    marginTop: 5,
    fontSize: 10,
    color: "#8A928B",
  },

  sensorGrid: {
    marginTop: 18,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },

  sensorCard: {
    width: "48%",
    minHeight: 145,
    padding: 15,
    backgroundColor: "#E7EBE3",
    borderWidth: 1,
    borderColor: "#D4DAD1",
  },

  sensorIcon: {
    width: 35,
    height: 35,
    backgroundColor: "#F4F5F0",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 18,
  },

  sensorLabel: {
    marginTop: 15,
    fontSize: 8,
    fontWeight: "800",
    letterSpacing: 1,
    color: "#7F8881",
  },

  sensorValue: {
    marginTop: 5,
    fontSize: 22,
    fontWeight: "700",
    color: "#263128",
  },

  sensorHint: {
    marginTop: 2,
    fontSize: 10,
    color: "#7B847C",
  },

  /* =========================================================
     RISK
  ========================================================= */

  riskSection: {
    marginTop: 38,
    marginHorizontal: 24,
  },

  riskItem: {
    minHeight: 74,
    borderBottomWidth: 1,
    borderColor: "#D7DCD5",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  riskLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  riskBar: {
    width: 4,
    height: 36,
    marginRight: 13,
  },

  riskName: {
    fontSize: 9,
    fontWeight: "900",
    letterSpacing: 1,
    color: "#263128",
  },

  riskDescription: {
    marginTop: 4,
    fontSize: 11,
    color: "#7B847C",
  },

  lowStatus: {
    fontSize: 8,
    fontWeight: "900",
    letterSpacing: 1,
    color: "#4E8B55",
  },

  watchStatus: {
    fontSize: 8,
    fontWeight: "900",
    letterSpacing: 1,
    color: "#B57A17",
  },

  /* =========================================================
     RECOMMENDATION
  ========================================================= */

  recommendation: {
    marginTop: 38,
    marginHorizontal: 14,
    padding: 22,
    backgroundColor: "#172019",
  },

  recommendationHeader: {
    flexDirection: "row",
    alignItems: "center",
  },

  recommendationIcon: {
    width: 42,
    height: 42,
    backgroundColor: "#26372A",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  recommendationEyebrow: {
    fontSize: 8,
    fontWeight: "800",
    letterSpacing: 1.2,
    color: "#9CA99B",
  },

  recommendationTitle: {
    marginTop: 4,
    fontSize: 19,
    fontWeight: "700",
    color: "#FFFFFF",
  },

  recommendationText: {
    marginTop: 17,
    fontSize: 12,
    lineHeight: 19,
    color: "#BBC5BA",
  },

  guidanceButton: {
    marginTop: 19,
    height: 43,
    backgroundColor: "#315D3A",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },

  guidanceButtonText: {
    fontSize: 9,
    fontWeight: "900",
    letterSpacing: 1,
    color: "#FFFFFF",
  },

  /* =========================================================
     TREND
  ========================================================= */

  trendSection: {
    marginTop: 40,
    marginHorizontal: 24,
  },

  trendPercentage: {
    fontSize: 13,
    fontWeight: "800",
    color: "#4E8B55",
  },

  chartContainer: {
    height: 160,
    marginTop: 20,
    position: "relative",
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#D5DAD2",
  },

  chartHorizontal1: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 40,
    height: 1,
    backgroundColor: "#DEE2DB",
  },

  chartHorizontal2: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 80,
    height: 1,
    backgroundColor: "#DEE2DB",
  },

  chartHorizontal3: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 120,
    height: 1,
    backgroundColor: "#DEE2DB",
  },

  chartLine: {
    position: "absolute",
    left: 15,
    right: 15,
    top: 0,
    bottom: 0,
  },

  chartPoint: {
    position: "absolute",
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: "#315D3A",
  },

  point1: {
    left: "3%",
    top: 92,
  },

  point2: {
    left: "18%",
    top: 82,
  },

  point3: {
    left: "33%",
    top: 87,
  },

  point4: {
    left: "48%",
    top: 66,
  },

  point5: {
    left: "63%",
    top: 72,
  },

  point6: {
    left: "78%",
    top: 52,
  },

  point7: {
    left: "93%",
    top: 42,
    backgroundColor: "#B8D84A",
  },

  chartLabels: {
    marginTop: 9,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  /* =========================================================
     ACTIVITY
  ========================================================= */

  activitySection: {
    marginTop: 40,
    marginHorizontal: 24,
  },

  viewAll: {
    fontSize: 8,
    fontWeight: "900",
    letterSpacing: 1,
    color: "#315D3A",
  },

  activityItem: {
    minHeight: 72,
    borderBottomWidth: 1,
    borderColor: "#D7DCD5",
    flexDirection: "row",
    alignItems: "center",
  },

  activityIcon: {
    width: 38,
    height: 38,
    backgroundColor: "#E7EBE3",
    justifyContent: "center",
    alignItems: "center",
  },

  activityText: {
    flex: 1,
    paddingHorizontal: 12,
  },

  activityTitle: {
    fontSize: 12,
    fontWeight: "600",
    color: "#263128",
  },

  activityTime: {
    marginTop: 4,
    fontSize: 10,
    color: "#858D86",
  },

  activityResult: {
    fontSize: 8,
    fontWeight: "900",
    letterSpacing: 0.8,
    color: "#4E8B55",
  },

  /* =========================================================
     FOOTER
  ========================================================= */

  footer: {
    marginTop: 45,
    paddingTop: 22,
    marginHorizontal: 24,
    borderTopWidth: 1,
    borderColor: "#D7DCD5",
  },

  footerBrand: {
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 1.8,
    color: "#315D3A",
  },

  footerText: {
    marginTop: 6,
    fontSize: 10,
    color: "#858D86",
  },
});