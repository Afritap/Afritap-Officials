import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import { Svg, Circle } from "react-native-svg";
import Feather from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

const screenWidth = Dimensions.get("window").width;

const timeOptions = ["Week", "Month", "Year"];

const dummyData = {
  Week: { income: 150000, expense: 90000 },
  Month: { income: 600000, expense: 400000 },
  Year: { income: 7200000, expense: 5000000 },
};

const ProgressCircle = ({
  percentage,
  color,
}: {
  percentage: number;
  color: string;
}) => {
  const radius = 40;
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (circumference * percentage) / 100;

  return (
    <Svg width={100} height={100}>
      <Circle
        stroke="#eee"
        fill="none"
        cx={50}
        cy={50}
        r={radius}
        strokeWidth={strokeWidth}
      />
      <Circle
        stroke={color}
        fill="none"
        cx={50}
        cy={50}
        r={radius}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
        rotation="-90"
        origin="50, 50"
      />
    </Svg>
  );
};

const InsightCard = ({ label, value, percentage, color }: any) => (
  <View style={styles.card}>
    <ProgressCircle percentage={percentage} color={color} />
    <View style={{ marginLeft: 20 }}>
      <Text style={styles.cardLabel}>{label}</Text>
      <Text style={styles.cardValue}>₦{value.toLocaleString()}</Text>
      <Text style={[styles.cardPercent, { color }]}>{percentage}%</Text>
    </View>
  </View>
);
const FinancialAdvisorScreen = () => {
  const [activeTab, setActiveTab] = useState<"Week" | "Month" | "Year">("Week");
  const navigation = useNavigation();

  const data = dummyData[activeTab];
  const total = data.income;
  const insights = [
    {
      label: "Inflow",
      value: data.income,
      percentage: 100,
      color: "#4CAF50",
    },
    {
      label: "Outflow",
      value: data.expense,
      percentage: Math.round((data.expense / total) * 100),
      color: "#F44336",
    },
  ];

  const tips = [
    data.expense > total * 0.8
      ? "Consider reducing non-essential expenses to save more."
      : "Your spending is in check, keep up the good work!",
    data.expense > 50000
      ? `Your largest expense for the week was paid to Olatubosun Geoffery for services rendered. Consider negotiating or reviewing contracts before renewal.`
      : "You're managing your expenses well this week. Keep it up!",
    data.expense > 30000
      ? "You spent significantly on food delivery services. Try cooking at home or meal prepping to save money."
      : "Your spending on food delivery services is low this week. Keep up with this healthy trend!",
    data.expense > 20000
      ? "You paid a large amount to rent this month. Consider exploring more affordable housing options if possible."
      : "Your rent payments are stable this month. Good job maintaining your housing expenses!",
  ];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={24} color="#FF8142" />
        </TouchableOpacity>
        <Text style={styles.heading}>📊 Smart Financial Advisor</Text>
      </View>

      <View style={styles.tabs}>
        {timeOptions.map((option) => (
          <TouchableOpacity
            key={option}
            style={[styles.tab, activeTab === option && styles.activeTab]}
            onPress={() => setActiveTab(option as any)}>
            <Text
              style={[
                styles.tabText,
                activeTab === option && styles.activeTabText,
              ]}>
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={insights}
        keyExtractor={(item) => item.label}
        renderItem={({ item }) => <InsightCard {...item} />}
        contentContainerStyle={{ paddingBottom: 50 }}
        showsVerticalScrollIndicator={false}
      />

      {/* Financial Health Tips Section */}
      <View style={styles.tipsContainer}>
        <Text style={styles.tipsHeading}>Financial Health Tips</Text>
        {tips.map((tip, index) => (
          <Text key={index} style={styles.tip}>
            - {tip}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default FinancialAdvisorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1A1A1A",
    marginLeft: 10,
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 30,
    borderRadius: 8,
    backgroundColor: "#eee",
    padding: 6,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  activeTab: {
    backgroundColor: "#FF8142",
  },
  tabText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#555",
  },
  activeTabText: {
    color: "#fff",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    alignItems: "center",
    elevation: 2,
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  cardLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  cardValue: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 4,
    color: "#000",
  },
  cardPercent: {
    marginTop: 4,
    fontSize: 14,
    fontWeight: "500",
  },
  tipsContainer: {
    marginTop: 30,
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
  },
  tipsHeading: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
    color: "#333",
  },
  tip: {
    fontSize: 14,
    color: "#555",
    marginBottom: 6,
  },
});
