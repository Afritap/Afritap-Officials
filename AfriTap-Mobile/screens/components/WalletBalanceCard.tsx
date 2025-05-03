import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const WalletBalanceCard = ({ balance }: { balance: number }) => {
  const [visible, setVisible] = useState(true);

  return (
    <View style={styles.balanceCard}>
      <View style={styles.balanceHeader}>
        <Text style={styles.balanceLabel}>Wallet Balance</Text>
        <TouchableOpacity onPress={() => setVisible(!visible)}>
          <Ionicons
            name={visible ? 'eye-outline' : 'eye-off-outline'}
            size={22}
            color="#fff"
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.balanceAmount}>
        {visible ? `₦${balance.toLocaleString()}` : '••••••••'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  balanceCard: {
    backgroundColor: '#2E7D32',
    padding: 24,
    borderRadius: 20,
    marginBottom: 24,
    elevation: 3,
  },
  balanceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  balanceLabel: {
    fontSize: 16,
    color: '#fff',
  },
  balanceAmount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 12,
    backgroundColor: '#14C11D',
    padding: 16,
    borderRadius: 30,
    textAlign: 'center',
  },
  
})

export default WalletBalanceCard;
