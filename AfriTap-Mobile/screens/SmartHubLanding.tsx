import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Feather from "react-native-vector-icons/Feather";

const SmartHubLanding = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to AfriTap</Text>
      <Text style={styles.subText}>
        Empowering your business decisions with AI
      </Text>

      <View style={styles.cardContainer}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("DailyInfoScreen")}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/6062/6062644.png",
            }}
            style={styles.image}
          />
          <Text style={styles.cardTitle}>Business Insights</Text>
          <Text style={styles.cardSubtitle}>
            Stay updated with the latest grants, loans, expos, and news to grow
            your business .
          </Text>
          <Feather
            name="arrow-right"
            size={20}
            color="#FF8142"
            style={styles.icon}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("FinancialAdvisorScreen")}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/318/318477.png",
            }}
            style={styles.image}
          />
          <Text style={styles.cardTitle}>Smart Financial Advisor</Text>
          <Text style={styles.cardSubtitle}>
            Get personalized financial reports, insights, and budgeting tips
            powered by AI.
          </Text>
          <Feather
            name="arrow-right"
            size={20}
            color="#FF8142"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SmartHubLanding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    justifyContent: "center",
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1A1A1A",
    textAlign: "center",
    marginBottom: 8,
  },
  subText: {
    fontSize: 14,
    textAlign: "center",
    color: "#555",
    marginBottom: 30,
  },
  cardContainer: {
    gap: 20,
  },
  card: {
    backgroundColor: "#F9F9F9",
    padding: 20,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 4,
    position: "relative",
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#1A1A1A",
    marginTop: 10,
  },
  cardSubtitle: {
    fontSize: 13,
    color: "#777",
    marginTop: 6,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  icon: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
});
