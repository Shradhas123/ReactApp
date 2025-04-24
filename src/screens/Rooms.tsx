import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, StatusBar } from 'react-native';

const DEVICESOPTIONS = ['Critical', 'Non-Critical', 'Warning'];

const dummyAlarms = [
  {
    id: '1',
    condition: 'Critical Condition',
    message: 'Bulb is turned ON',
    location: 'Master Bedroom',
    date: '22/07/2024',
    time: '10:30PM',
  },
  {
    id: '2',
    condition: 'Critical Condition',
    message: 'Bulb is turned ON',
    location: 'Kitchen Room',
    date: '22/07/2024',
    time: '10:30PM',
  },
  {
    id: '3',
    condition: 'Critical Condition',
    message: 'Bulb is turned ON',
    location: 'Balcony Area',
    date: '22/07/2024',
    time: '10:30PM',
  },
  {
    id: '4',
    condition: 'Critical Condition',
    message: 'Bulb is turned ON',
    location: 'Bathroom 1',
    date: '22/07/2024',
    time: '10:30PM',
  }
];

const RoomsScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Critical');
  const renderTab = (tab: string) => (
    <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)} style={styles.tab}>
      <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
        {tab}
      </Text>
      {activeTab === tab && <View style={styles.activeIndicator} />}
    </TouchableOpacity>
  );

  const renderAlarm = ({ item }: { item: typeof dummyAlarms[0] }) => (
    <View style={styles.card}>
      <Text style={styles.condition}>{item.condition}</Text>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.viewButton}>
          <Text style={styles.buttonText}>View</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dismissButton}>
          <Text style={styles.buttonText}>Dismiss</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.message}>
        {item.message} <Text style={styles.onText}></Text>
      </Text>
      <Text style={styles.location}>{item.location}</Text>
      <View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.datetime}>{item.date}   {item.time}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.header}>Alarms</Text>

      <View style={styles.tabs}>
        {DEVICESOPTIONS.map(renderTab)}
      </View>
      <FlatList
        data={dummyAlarms}
        keyExtractor={(item) => item.id}
        renderItem={renderAlarm}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

export default RoomsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  tab: {
    alignItems: 'center',
  },
  tabText: {
    fontSize: 16,
    color: '#888',
  },
  activeTabText: {
    color: '#1E90FF',
    fontWeight: 'bold',
  },
  activeIndicator: {
    marginTop: 4,
    height: 2,
    width: 30,
    backgroundColor: '#1E90FF',
    borderRadius: 2,
  },
  listContent: {
    paddingBottom: 100,
  },
  card: {
    backgroundColor: '#1C1C1E',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  condition: {
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  message: {
    color: '#ccc',
    fontSize: 14,
  },
  onText: {
    color: '#00FF7F',
  },
  location: {
    color: '#666',
    marginTop: 2,
    marginBottom: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  datetime: {
    color: '#ccc',
    fontSize: 13,
  },
  actions: {
    flexDirection: 'row',
    gap: 8,
    left: 250,
    top: 3
  },
  viewButton: {
    backgroundColor: '#1E90FF',
    borderRadius: 6,
    paddingHorizontal: 14,
    paddingVertical: 6,
  },
  dismissButton: {
    backgroundColor: '#1E90FF',
    borderRadius: 6,
    paddingHorizontal: 14,
    paddingVertical: 6,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 13,
  }
});

