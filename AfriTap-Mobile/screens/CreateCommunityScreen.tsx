import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import GoBackHeader from './components/GoBackHeader';

const CreateCommunityScreen = () => {
  const handleCreateCommunity = () => {
    console.log('Create Community Button Pressed');
  };

  return (
    <View style={styles.container}>
      <GoBackHeader title="Create a Community" />

      <View style={styles.content}>
        <TouchableOpacity style={styles.button} onPress={handleCreateCommunity}>
          <Feather name="edit" size={18} color="#3A3A3A" style={styles.icon} />
          <Text style={styles.buttonText}>Create a Community</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateCommunityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8F0',
  },
  content: {
    flex: 1,
    // justifyContent: 'center',
    paddingHorizontal: 20,
  },
  button: {
    flexDirection: 'row',
    gap: 10,
    backgroundColor: '#FFF',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Android shadow
    elevation: 3,
  },
  icon: {
    marginRight: 8,
  },
  buttonText: {
    color: '#3A3A3A',
    fontSize: 16,
    fontWeight: '500',
  },
});
