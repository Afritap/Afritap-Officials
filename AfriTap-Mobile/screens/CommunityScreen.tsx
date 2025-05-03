import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import GoBackHeader from './components/GoBackHeader';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const VenderListScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <GoBackHeader title='Community' />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('VenderListScreen')}
      >
        <Text style={styles.buttonText}>Find a Vendor</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('CreateCommunityScreen')}
      >
        <Text style={styles.buttonText}>Create a Community</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('JoinCommunityScreen')}
      >
        <Text style={styles.buttonText}>Join a Community</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VenderListScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#FFF8F0',
  },
  heading: {
    fontSize: 24,
    marginBottom: 40,
    fontWeight: '600',
  },
  button: {
    width: '100%',
    backgroundColor: '#FFF',
    paddingVertical: 15,
    borderRadius: 8,
    marginBottom: 15,
    alignItems: 'center',
    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Android shadow
    elevation: 3,
  },
  
  buttonText: {
    color: '#3A3A3A',
    fontSize: 16,
    fontWeight: '500',
  },
});
