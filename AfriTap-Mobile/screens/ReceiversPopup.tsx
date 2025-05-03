import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Pressable,
  TextInput,
} from 'react-native';
import LottieView from 'lottie-react-native';

type Receiver = {
  id: string;
  name: string;
  accountNumber: string;
  walletId: string;
};

const receivers: Receiver[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    accountNumber: '0123456789',
    walletId: 'WAL12345678',
  },
];

type Props = {
  visible: boolean;
  onClose: () => void;
  onSelectReceiver: (
    receiver: Receiver,
    data: { amount: string; description: string; password: string }
  ) => void;
};

const ReceiversPopup = ({ visible, onClose, onSelectReceiver }: Props) => {
  const [selectedReceiver, setSelectedReceiver] = useState<Receiver | null>(null);
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [password, setPassword] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = () => {
    if (selectedReceiver) {
      onSelectReceiver(selectedReceiver, { amount, description, password });
      setIsSuccess(true); // show Lottie

      setTimeout(() => {
        setIsSuccess(false);
        onClose();
        setSelectedReceiver(null);
        setAmount('');
        setDescription('');
        setPassword('');
      }, 1800); // close after 1.8s
    }
  };

  const renderItem = ({ item }: { item: Receiver }) => {
    const initials = item.name
      .split(' ')
      .map((word) => word[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();

    return (
      <TouchableOpacity
        style={styles.receiverCard}
        onPress={() => setSelectedReceiver(item)}
      >
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{initials}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.accountNumber}>{item.accountNumber}</Text>
          <Text style={styles.walletId}>{item.walletId}</Text>
          <Text style={styles.name}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.popupContainer}>
          {isSuccess ? (
            <View style={styles.successContainer}>
              <LottieView
                source={require('../assets/success.json')}
                autoPlay
                loop={false}
                style={styles.lottie}
              />
              <Text style={styles.successText}>Transfer Successful!</Text>
            </View>
          ) : !selectedReceiver ? (
            <>
              <Text style={styles.header}>Select Receiver</Text>
              <FlatList
                data={receivers}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={{ paddingBottom: 20 }}
              />
            </>
          ) : (
            <>
              <Text style={styles.header}>Send to {selectedReceiver.name}</Text>

              <TextInput
                placeholder="Amount"
                keyboardType="numeric"
                value={amount}
                onChangeText={setAmount}
                style={styles.input}
              />

              <TextInput
                placeholder="Description"
                value={description}
                onChangeText={setDescription}
                style={styles.input}
              />

              <TextInput
                placeholder="Enter Password"
                value={password}
                onChangeText={setPassword}
                keyboardType="numeric"
                secureTextEntry
                style={styles.input}
              />

              <Pressable onPress={handleSubmit} style={styles.sendButton}>
                <Text style={styles.sendText}>Send</Text>
              </Pressable>

              <Pressable
                onPress={() => {
                  setSelectedReceiver(null);
                  setAmount('');
                  setDescription('');
                  setPassword('');
                }}
                style={styles.backButton}
              >
                <Text style={styles.backText}>Back</Text>
              </Pressable>
            </>
          )}

          {!isSuccess && (
            <Pressable onPress={onClose} style={styles.closeButton}>
              <Text style={styles.closeText}>Close</Text>
            </Pressable>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default ReceiversPopup;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popupContainer: {
    width: '90%',
    maxHeight: '80%',
    backgroundColor: '#f4f6fc',
    borderRadius: 16,
    padding: 20,
    elevation: 5,
  },
  header: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 15,
    color: '#1e1e2f',
    textAlign: 'center',
  },
  receiverCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 1,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#d0e6d6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  avatarText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2E7D32',
  },
  info: {
    flex: 1,
  },
  accountNumber: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e1e2f',
  },
  walletId: {
    fontSize: 14,
    color: '#6e6e6e',
    marginTop: 2,
  },
  name: {
    fontSize: 14,
    color: '#333',
    marginTop: 4,
    fontStyle: 'italic',
  },
  closeButton: {
    marginTop: 10,
    alignSelf: 'center',
  },
  closeText: {
    fontSize: 16,
    color: '#2E7D32',
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    fontSize: 16,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  sendButton: {
    backgroundColor: '#2E7D32',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  sendText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  backButton: {
    marginTop: 10,
    alignSelf: 'center',
  },
  backText: {
    color: '#2E7D32',
    fontSize: 16,
    fontWeight: '600',
  },
  successContainer: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  successText: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
    color: '#2E7D32',
  },
  lottie: {
    width: 220,
    height: 220,
  },
});
