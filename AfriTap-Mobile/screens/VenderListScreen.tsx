import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';
import GoBackHeader from './components/GoBackHeader';
import { useNavigation } from '@react-navigation/native';

const vendorData = [
  { id: '1', name: 'Sunny Electronics' },
  { id: '2', name: 'Grace Fashion' },
  { id: '3', name: 'Jollof Express' },
  { id: '4', name: 'TechVerse Hub' },
  { id: '5', name: 'QuickFix Repairs' },
  { id: '6', name: 'Happy Feet Shoes' },
];

const VenderListScreen = () => {
    const navigation = useNavigation();
  
  const [search, setSearch] = useState('');
  const [filteredVendors, setFilteredVendors] = useState(vendorData);

  const handleSearch = (text: string) => {
    setSearch(text);
    const filtered = vendorData.filter((vendor) =>
      vendor.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredVendors(filtered);
  };

  return (
    <View style={styles.container}>
      <GoBackHeader title='List of Vendors' />
      <TextInput
        style={styles.searchInput}
        placeholder="Search vendors..."
        value={search}
        onChangeText={handleSearch}
      />

      <FlatList
        data={filteredVendors}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('ChatScreen', { vendor: item })}
          >
            <Text style={styles.buttonText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};


export default VenderListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#FFF8F0',
  },
  searchInput: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 2,
  },
  button: {
    width: '100%',
    backgroundColor: '#FFF',
    paddingVertical: 15,
    borderRadius: 8,
    marginBottom: 12,
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
