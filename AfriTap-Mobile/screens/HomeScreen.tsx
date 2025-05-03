import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Modal,
  Animated,
  Easing,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import WalletBalanceCard from './components/WalletBalanceCard';
import ReceiversPopup from './ReceiversPopup';

const HomeScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const pulseAnim = useRef(new Animated.Value(1)).current;

  const [showPopup, setShowPopup] = useState(false);  // Initially false to hide
  const [selectedReceiver, setSelectedReceiver] = useState(null);

  const walletBalance = 15000;

  const transactions = [
    { id: '1', title: 'Received from Sarah', amount: 5000 },
    { id: '2', title: 'Top-Up via Card', amount: 10000 },
    { id: '3', title: 'Sent to John', amount: -2000 },
  ];

  useEffect(() => {
    // Show the popup after 10 seconds
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 15000); // 10 seconds delay

    return () => clearTimeout(timer); // Clean up the timer if the component unmounts
  }, []);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.2,
          duration: 800,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 800,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      {/* Wallet Balance */}
      <WalletBalanceCard balance={15000} />

      {/* Actions */}
      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton} onPress={() => setShowModal(true)}>
          <Ionicons name="download-outline" size={24} color="#007aff" />
          <Text style={styles.actionLabel}>Receive</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="add-circle-outline" size={24} color="#007aff" />
          <Text style={styles.actionLabel}>Top-Up</Text>
        </TouchableOpacity>
      </View>

      {/* Transactions */}
      <Text style={styles.historyTitle}>Transaction History</Text>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.transactionItem}>
            <View style={styles.transactionLeft}>
              <Ionicons
                name={item.amount > 0 ? 'arrow-up-outline' : 'arrow-down-outline'}
                size={20}
                color={item.amount > 0 ? 'green' : 'red'}
                style={{ marginRight: 10 }}
              />
              <Text style={styles.transactionTitle}>{item.title}</Text>
            </View>
            <Text style={[styles.transactionAmount, { color: item.amount > 0 ? 'green' : 'red' }]}>
              {item.amount > 0 ? '+' : '-'}₦{Math.abs(item.amount).toLocaleString()}
            </Text>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 40 }}
      />

      {/* Receive Modal */}
      <Modal
        visible={showModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Animated.View style={[styles.pulseCircle, { transform: [{ scale: pulseAnim }] }]}>
              <Ionicons name="wifi" size={48} color="#007aff" />
            </Animated.View>
            <Text style={styles.awaitingText}>Awaiting sender...</Text>
            <TouchableOpacity onPress={() => setShowModal(false)} style={styles.closeButton}>
              <Text style={{ color: '#007aff', fontWeight: '600' }}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Receivers Popup will show after 10 seconds */}
      <ReceiversPopup
        visible={showPopup}
        onClose={() => setShowPopup(false)}
        onSelectReceiver={(receiver, { amount, description, password }) => {
          console.log('Send to:', receiver.name, amount, description, password);
          // handle transfer logic here
        }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8F0',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  balanceCard: {
    backgroundColor: '#2E7D32',
    padding: 24,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 24,
    elevation: 3,
  },
  balanceLabel: {
    fontSize: 16,
    color: '#fff',
  },
  balanceAmount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 8,
    backgroundColor: "#14C11D",
    padding: 20,
    borderRadius: 30
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 32,
  },
  actionButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e5f0ff',
    width: 90,
    height: 90,
    borderRadius: 45,
    elevation: 2,
  },
  actionLabel: {
    marginTop: 6,
    color: '#007aff',
    fontWeight: '500',
  },
  historyTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: '#1e1e2f',
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
    elevation: 1,
  },
  transactionTitle: {
    fontSize: 16,
    color: '#333',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 32,
    alignItems: 'center',
  },
  pulseCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#e5f0ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  awaitingText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e1e2f',
    marginBottom: 20,
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
  },
});
