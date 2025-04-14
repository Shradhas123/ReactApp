import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const HomeScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Hi, xxxx</Text>
      <Text style={styles.subheader}>Total Power Input</Text>

      <View style={styles.usageRow}>
        <View style={styles.usageBox}>
          <Text style={styles.usageTitle}>Today</Text>
          <Text style={styles.usageValue}>60.2 kWh</Text>
        </View>
        <View style={styles.usageBox}>
          <Text style={styles.usageTitle}>Yesterday</Text>
          <Text style={styles.usageValue}>70.2 kWh</Text>
        </View>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Energy Usage</Text>
        <Text style={styles.cardSubtitle}>30% Energy Usage</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Devices</Text>
        {['Bulb', 'Fan', 'TV', 'Fridge'].map((device, i) => (
          <View key={i} style={styles.deviceRow}>
            <Text>{device}</Text>
            <Text>Status: On</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff' },
  header: { fontSize: 35, fontWeight: 'bold' },
  subheader: { fontSize: 25, color: '#666', marginBottom: 10 },
  usageRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  usageBox: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 15,
    margin: 5,
    borderRadius: 10,
    alignItems: 'center',
  },
  usageTitle: { color: '#666' },
  usageValue: { fontSize: 18, fontWeight: 'bold' },
  card: {
    backgroundColor: '#DDF4FF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  cardTitle: { fontSize: 36, fontWeight: '600' },
  cardSubtitle: { color: '#0066FF', marginTop: 5 },
  section: { marginBottom: 20 },
  sectionTitle: { fontSize: 35, fontWeight: 'bold', marginBottom: 10 },
  deviceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
});

export default HomeScreen;
