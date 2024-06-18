import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const EventDetail = () => {
  const handleImagePress = (eventName) => {
    Alert.alert(`${eventName} Image Clicked`);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.bookedEvent}>
        <Text style={styles.sectionTitle}>BOOKED EVENT</Text>

        {/* Event 1 */}
        <View style={styles.eventCard}>
          <View style={styles.eventHeader}>
            <Text style={styles.eventTitle}>Mr./Mrs./Ms./Sir/Madam</Text>
          </View>
          <View style={styles.infoRow}>
            <View style={styles.eventInfoBox}>
              <Icon name="calendar" size={16} color="#000" />
              <Text style={styles.eventInfoText}>08/15/2024</Text>
            </View>
            <View style={styles.eventInfoBox}>
              <Icon name="time" size={16} color="#000" />
              <Text style={styles.eventInfoText}>10:00 AM</Text>
            </View>
            <View style={styles.eventInfoBox}>
              <Icon name="calendar-outline" size={16} color="#000" />
              <Text style={styles.eventInfoText}>Wedding</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => handleImagePress('Wedding')}>
            <Image style={styles.mapImage} source={require('./res/map1.png')} />
          </TouchableOpacity>
          <View style={styles.eventDetail}>
            <Text style={styles.eventTitle}>Wedding Event</Text>
            <Text style={styles.detailText}>This is a wedding event description.</Text>
            <Text style={styles.detailText}>Event location: Event Conference Center, City, State (postcode)</Text>
            <Text style={styles.detailText}>Phone Number: (XXX) XXX-XXXX</Text>
            <Text style={styles.detailText}>Dates: Event start to end dates</Text>
            <Text style={styles.detailText}>Parking: Parking information</Text>
            <Text style={styles.detailTitle}>People to Invite:</Text>
            <Text style={styles.detailText}>• Person 1</Text>
            <Text style={styles.detailText}>• Person 2</Text>
            <Text style={styles.detailText}>• Person 3</Text>
          </View>
        </View>

        {/* Event 2 */}
        <View style={styles.eventCard}>
          <View style={styles.eventHeader}>
            <Text style={styles.eventTitle}>Mr./Mrs./Ms./Sir/Madam</Text>
          </View>
          <View style={styles.infoRow}>
            <View style={styles.eventInfoBox}>
              <Icon name="calendar" size={16} color="#000" />
              <Text style={styles.eventInfoText}>08/15/2024</Text>
            </View>
            <View style={styles.eventInfoBox}>
              <Icon name="time" size={16} color="#000" />
              <Text style={styles.eventInfoText}>10:00 AM</Text>
            </View>
            <View style={styles.eventInfoBox}>
              <Icon name="calendar-outline" size={16} color="#000" />
              <Text style={styles.eventInfoText}>Meeting</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => handleImagePress('Meeting')}>
            <Image style={styles.mapImage} source={require('./res/map1.png')} />
          </TouchableOpacity>
          <View style={styles.eventDetail}>
            <Text style={styles.eventTitle}>Meeting Event</Text>
            <Text style={styles.detailText}>This is a meeting event description.</Text>
            <Text style={styles.detailText}>Event location: Event Conference Center, City, State (postcode)</Text>
            <Text style={styles.detailText}>Phone Number: (XXX) XXX-XXXX</Text>
            <Text style={styles.detailText}>Dates: Event start to end dates</Text>
            <Text style={styles.detailText}>Parking: Parking information</Text>
            <Text style={styles.detailTitle}>People to Invite:</Text>
            <Text style={styles.detailText}>• Person 1</Text>
            <Text style={styles.detailText}>• Person 2</Text>
            <Text style={styles.detailText}>• Person 3</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },

  bookedEvents: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
    marginTop:30,
    marginLeft:10,

  },
  eventCard: {
    backgroundColor: '#1c1c1c',
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
  },
  eventHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 10,
  },
  eventInfoBox: {
    backgroundColor: '#FFC42B',
    padding: 5,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  eventInfoText: {
    fontSize: 12,  // Smaller font size for longer text
    fontWeight: 'bold',
    marginLeft: 5,
  },
  mapImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginVertical: 10,
  },
  eventDetail: {
    marginTop: 10,
  },
  detailTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 10,
  },
  detailText: {
    fontSize: 14,
    color: '#cccccc',
    marginVertical: 2,
  },
});

export default EventDetail;