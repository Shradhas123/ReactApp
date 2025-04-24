import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const DeviceScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
       <View style={styles.card}>
          <Text style={styles.cardTitle}>Energy Usage</Text>
          <Text style={styles.cardSubtitle}>30% Energy Usage</Text>
        </View>
    </ScrollView>
  );
};

export default DeviceScreen;

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff' },
  card: {
    backgroundColor: '#DDF4FF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 50
  },
  cardTitle: { fontSize: 36, fontWeight: '600' },
  cardSubtitle: { color: '#0066FF', marginTop: 50 },
});