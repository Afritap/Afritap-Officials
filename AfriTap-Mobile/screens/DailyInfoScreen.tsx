import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Linking,
  StyleSheet,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { useNavigation } from '@react-navigation/native';


interface NewsItem {
  id: string;
  title: string;
  source: string;
  url: string;
}

const newsData: NewsItem[] = [
  {
    id: "1",
    title: "Tony Elumelu Foundation opens $5,000 grant for Nigerian startups",
    source: "TEF",
    url: "https://www.tonyelumelufoundation.org",
  },
  {
    id: "2",
    title: "Bank of Industry announces ₦10B fund for SMEs",
    source: "BOI",
    url: "https://www.boi.ng/sme-fund/",
  },
  {
    id: "3",
    title: "Lagos State hosts Tech Expo for local entrepreneurs",
    source: "TechPoint Africa",
    url: "https://techpoint.africa/2024/09/12/lagos-tech-expo/",
  },
  {
    id: "4",
    title: "CBN rolls out new loan scheme for women-led businesses",
    source: "Nairametrics",
    url: "https://nairametrics.com",
  },
  {
    id: "5",
    title: "Africa Fintech Summit to be held in Abuja this year",
    source: "BusinessDay",
    url: "https://businessday.ng",
  },
  {
    id: "6",
    title: "NITDA funds 50 Nigerian startups with ₦1.5B innovation grant",
    source: "NITDA",
    url: "https://nitda.gov.ng",
  },
  {
    id: "7",
    title: "Access Bank launches ₦50B loan program for SMEs",
    source: "Access Bank",
    url: "https://www.accessbankplc.com",
  },
  {
    id: "8",
    title: "She Leads Africa opens new accelerator for female founders",
    source: "SLA",
    url: "https://sheleadsafrica.org",
  },
  {
    id: "9",
    title: "Flutterwave to support 100 new African startups in 2025",
    source: "TechCabal",
    url: "https://techcabal.com",
  },
  {
    id: "10",
    title: "BOI & Mastercard Foundation launch ₦30B youth employment fund",
    source: "BOI",
    url: "https://www.boi.ng/mastercard-partnership/",
  },
  {
    id: "11",
    title: "Google for Startups Africa offers mentorship to Nigerian founders",
    source: "Google Africa",
    url: "https://startup.google.com/programs/africa/",
  },
  {
    id: "12",
    title: "Agri-Tech Fair in Abuja set to boost food startups",
    source: "Agric Today",
    url: "https://agric-today.com",
  },
  {
    id: "13",
    title: "Microsoft launches Founders Hub in Lagos",
    source: "Microsoft Africa",
    url: "https://foundershub.startups.microsoft.com",
  },
  {
    id: "14",
    title: "NEXIM Bank launches Export Development Fund",
    source: "NEXIM",
    url: "https://neximbank.com.ng/export-fund/",
  },
  {
    id: "15",
    title: "UBA Foundation launches Campus Ambassador Programme",
    source: "UBA Foundation",
    url: "https://www.ubagroup.com/csr/education/",
  },
  {
    id: "16",
    title: "NACCIMA partners with international donors to fund SMEs",
    source: "NACCIMA",
    url: "https://naccima.com/news/",
  },
  {
    id: "17",
    title: "Nigeria Startup Act boosts tech policy support in 2025",
    source: "Tech Economy",
    url: "https://techeconomy.ng",
  },
  {
    id: "18",
    title: "African Development Bank invests $20M in Nigerian agribusiness",
    source: "AfDB",
    url: "https://www.afdb.org",
  },
  {
    id: "19",
    title: "Women in Tech Nigeria hosts funding bootcamp in Lagos",
    source: "WIT Nigeria",
    url: "https://www.womenintech.org",
  },
  {
    id: "20",
    title: "Naira redesign to impact local business operations",
    source: "Punch Nigeria",
    url: "https://punchng.com",
  },
  {
    id: "21",
    title: "Fintech Association of Nigeria opens 2025 innovation challenge",
    source: "FintechNGR",
    url: "https://fintechng.org",
  },
  {
    id: "22",
    title: "Sterling Bank launches digital lending app for traders",
    source: "Sterling Bank",
    url: "https://sterling.ng",
  },
  {
    id: "23",
    title: "MTN Nigeria supports tech education via ₦2.5B initiative",
    source: "MTN Foundation",
    url: "https://foundation.mtnonline.com",
  },
  {
    id: "24",
    title: "African Union’s youth fund opens call for Nigerian applicants",
    source: "AU Youth Envoy",
    url: "https://auyouthenvoy.org",
  },
  {
    id: "25",
    title: "NIRSAL launches agro-credit guarantee scheme for farmers",
    source: "NIRSAL",
    url: "https://nirsal.com.ng",
  },
  {
    id: "26",
    title: "YouWin Connect rebranded with ₦5M grant opportunity",
    source: "YouWin",
    url: "https://youwinconnect.org.ng",
  },
  {
    id: "27",
    title:
      "Small businesses in Northern Nigeria to benefit from new USAID fund",
    source: "USAID Nigeria",
    url: "https://www.usaid.gov/nigeria",
  },
  {
    id: "28",
    title:
      "Nigerian Diaspora Commission offers mentorship for returnee entrepreneurs",
    source: "NiDCOM",
    url: "https://nidcom.gov.ng",
  },
  {
    id: "29",
    title: "PwC Nigeria opens application for 2025 accelerator program",
    source: "PwC Nigeria",
    url: "https://www.pwc.com/ng",
  },
  {
    id: "30",
    title: "SMEDAN releases new business toolkit for micro-enterprises",
    source: "SMEDAN",
    url: "https://smedan.gov.ng",
  },
  {
    id: "31",
    title: "NITDA & GIZ partner to train 5,000 tech talents in Nigeria",
    source: "NITDA",
    url: "https://nitda.gov.ng",
  },
  {
    id: "32",
    title: "FATE Foundation launches entrepreneur bootcamp for youth",
    source: "FATE Foundation",
    url: "https://fatefoundation.org",
  },
];

const shuffleArray = (array: NewsItem[]) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const DailyInfoScreen = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();


  useEffect(() => {
    setTimeout(() => {
      setNews(shuffleArray(newsData));
      setLoading(false);
    }, 2000);
  }, []);

  const openLink = async (url: string) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      alert("Unable to open the link.");
    }
  };

  const renderItem = ({ item }: { item: NewsItem }) => (
    <TouchableOpacity style={styles.card} onPress={() => openLink(item.url)}>
      <Feather name="globe" size={24} color="#FF8142" style={styles.icon} />
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.source}>Source: {item.source}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderSkeleton = () => (
    <View style={styles.card}>
      <Feather name="globe" size={24} color="#ccc" style={styles.icon} />
      <View style={styles.textWrapper}>
        <View style={styles.skeletonLine} />
        <View style={[styles.skeletonLine, { width: "40%", marginTop: 6 }]} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={24} color="#FF8142" />
        </TouchableOpacity>
        <Text style={styles.heading}>📢 Business Updates in Nigeria</Text>
      </View>
      {loading ? (
        <FlatList
          data={Array.from({ length: 10 })}
          renderItem={renderSkeleton}
          keyExtractor={(_, index) => index.toString()}
        />
      ) : (
        <FlatList
          data={news}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
        />
      )}
    </View>
  );
};

export default DailyInfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FB",
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginLeft: 10,
  },
  
  // heading: {
  //   fontSize: 22,
  //   fontWeight: "bold",
  //   marginBottom: 20,
  //   color: "#1A1A1A",
  // },
  list: {
    paddingBottom: 100,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 14,
    marginBottom: 12,
    alignItems: "center",
    elevation: 2,
  },
  icon: {
    marginRight: 14,
  },
  textWrapper: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: "500",
    color: "#333",
  },
  source: {
    fontSize: 12,
    color: "#888",
    marginTop: 4,
  },
  skeletonLine: {
    height: 10,
    backgroundColor: "#E0E0E0",
    borderRadius: 5,
    width: "80%",
  },
});
