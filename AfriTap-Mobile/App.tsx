import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

// Tab Screens
import HomeScreen from "./screens/HomeScreen";
import CommunityScreen from "./screens/CommunityScreen";
import ProfileScreen from "./screens/ProfileScreen";

// Additional Screens
// import FindVendorScreen from './screens/FindVendorScreen';
import CreateCommunityScreen from "./screens/CreateCommunityScreen";
import VenderListScreen from "./screens/VenderListScreen";
import JoinCommunityScreen from "./screens/JoinCommunityScreen";
import ChatScreen from "./screens/ChatScreen";
import SmartHubLanding from "./screens/SmartHubLanding";
import DailyInfoScreen from "./screens/DailyInfoScreen";
import FinancialAdvisorScreen from "./screens/FinancialAdvisorScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Bottom Tab Navigator
const TabNavigator = () => (
  <Tab.Navigator
    initialRouteName="Home"
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ color, size }) => {
        let iconName: any;
        if (route.name === "Home") iconName = "home-outline";
        else if (route.name === "Community") iconName = "people-outline";
        else if (route.name === "Profile") iconName = "person-outline";
        else if (route.name === "Smart Hub") iconName = "analytics";
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: "#2E7D32",
      tabBarInactiveTintColor: "gray",
      tabBarStyle: {
        paddingBottom: 6,
        height: 60,
      },
    })}>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Community" component={CommunityScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
    <Tab.Screen name="Smart Hub" component={SmartHubLanding} />
  </Tab.Navigator>
);

// Main App with Stack Navigation
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Main Tabs */}
        <Stack.Screen name="MainTabs" component={TabNavigator} />

        {/* Additional Community Navigation Screens */}
        {/* <Stack.Screen name="FindVendorScreen" component={FindVendorScreen} /> */}
        <Stack.Screen
          name="CreateCommunityScreen"
          component={CreateCommunityScreen}
        />
        <Stack.Screen
          name="JoinCommunityScreen"
          component={JoinCommunityScreen}
        />
        <Stack.Screen name="VenderListScreen" component={VenderListScreen} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="DailyInfoScreen" component={DailyInfoScreen} />
        <Stack.Screen name="FinancialAdvisorScreen" component={FinancialAdvisorScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
