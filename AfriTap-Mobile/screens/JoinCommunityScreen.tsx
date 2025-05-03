import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';
import GoBackHeader from './components/GoBackHeader';

const communityData = [
  { id: '1', name: 'Moms in Tech' },
  { id: '2', name: 'Kaduna Fashion Enthusiasts' },
  { id: '3', name: 'Local Farmers Network' },
  { id: '4', name: 'Startup Founders Hub' },
  { id: '5', name: 'Book Lovers Kaduna' },
  { id: '6', name: 'Youth Empowerment Circle' },
];

const JoinCommunityScreen = () => {
  const [search, setSearch] = useState('');
  const [filteredCommunities, setFilteredCommunities] = useState(communityData);

  const handleSearch = (text: string) => {
    setSearch(text);
    const filtered = communityData.filter((community) =>
      community.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredCommunities(filtered);
  };

  return (
    <View style={styles.container}>
      <GoBackHeader title="Join a Community" />

      <TextInput
        style={styles.searchInput}
        placeholder="Search communities..."
        value={search}
        onChangeText={handleSearch}
      />

      <FlatList
        data={filteredCommunities}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{item.name}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ paddingTop: 10, paddingBottom: 20 }}
      />
    </View>
  );
};

export default JoinCommunityScreen;

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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: '#3A3A3A',
    fontSize: 16,
    fontWeight: '500',
  },
});
