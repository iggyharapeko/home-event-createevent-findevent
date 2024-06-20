import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Image } from "react-native";
import { Avatar, Provider as PaperProvider } from "react-native-paper";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function App() {
  const handleViewAllPress = (section) => {
    console.log(`View All ${section} clicked`);
  };

  const [likedEvents, setLikedEvents] = useState({});
  const [buttonStates, setButtonStates] = useState([false, false, false, false]);

  const toggleLike = (eventId) => {
    setLikedEvents(prevState => ({
      ...prevState,
      [eventId]: !prevState[eventId]
    }));
  };

  const handleButtonPress = (index) => {
    setButtonStates(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const events = [
    {
      id: 1,
      image: require("./res/event1.png"),
      title: "Mr. & Mrs. Malik Wedding",
      date: "23 Sept, 25",
      location: "Cagayan de Oro City"
    },
    {
      id: 2,
      image: require("./res/event2.png"),
      title: "Barbella’s Birthday",
      date: "12 August, 23",
      location: "Cagayan de Oro City"
    },
    {
      id: 3,
      image: require("./res/event3.png"),
      title: "Class of 1979 Reunion",
      date: "25-27 July, 23",
      location: "Cagayan de Oro City"
    }
  ];

  return (
    <PaperProvider>
      <View style={styles.container}>
        <View style={styles.profileSection}>
          <Avatar.Image
            size={50}
            source={require("./res/pro_pic.png")}
            style={styles.profilePicture}
          />

          <View style={styles.welcomeUsername}>
            <Text style={styles.welcomeText}>Welcome</Text>
            <Text style={styles.usernameText}>Username</Text>
          </View>

          <View style={styles.spacer} />

          <View style={styles.locationContainer}>
            <Text style={styles.locationText}>Cagayan de Oro</Text>
            <MaterialCommunityIcons
              name="map-marker"
              color="#FFC42B"
              size={23}
              style={styles.locationIcon}
            />
          </View>
        </View>

        <View style={styles.searchContainer}>
          <TouchableOpacity style={styles.findEventsButton}>
            <MaterialCommunityIcons name="magnify" color="#000" size={20} />
            <Text style={styles.findEventsButtonText}>Find Events</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.createButton}>
            <MaterialCommunityIcons name="plus" color="#000" size={20} />
            <Text style={styles.createButtonText}>Create</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionText}>Popular Events</Text>
          <TouchableOpacity onPress={() => handleViewAllPress("Popular Events")}>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollView}>
          {events.map(event => (
            <View key={event.id} style={styles.eventCard}>
              <Image source={event.image} style={styles.eventImage} />
              <TouchableOpacity onPress={() => toggleLike(event.id)} style={[styles.heartIcon, likedEvents[event.id] ? styles.heartLiked : null]}>
                <MaterialCommunityIcons 
                  name={likedEvents[event.id] ? "heart" : "heart-outline"} 
                  color={likedEvents[event.id] ? "#FF0000" : "#888"} 
                  size={20} 
                />
              </TouchableOpacity>
              <Text style={styles.eventTitle}>{event.title}</Text>
              <View style={styles.eventDetailRow}>
                <View style={styles.eventDetailContainer}>
                  <MaterialCommunityIcons name="calendar" color="#2A93D5" size={16} />
                  <Text style={styles.eventDetailText}>{event.date}</Text>
                </View>
                <View style={styles.eventDetailContainer}>
                  <MaterialCommunityIcons name="map-marker" color="#2A93D5" size={16} />
                  <Text style={styles.eventDetailText}>{event.location}</Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
        <View style={styles.chooseEventContainer}>
          <Text style={styles.sectionTextChooseEvent}>Choose Event</Text>
          <TouchableOpacity onPress={() => handleViewAllPress("Choose Event")}>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.buttonScrollView}>
          {["Wedding", "Birthday", "Reunion", "Debut"].map((buttonLabel, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.buttonContainer,
                buttonStates[index] ? styles.buttonPressed : styles.buttonNormal
              ]}
              onPress={() => handleButtonPress(index)}
            >
              <Text
                style={[
                  styles.buttonText,
                  buttonStates[index] ? styles.buttonTextPressed : styles.buttonTextNormal
                ]}
              >
                {buttonLabel}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View style={styles.boxContainer}>
          <Image source={require("./res/event3.png")} style={styles.boxImage} />
          <View style={styles.boxTextContainer}>
            <Text style={styles.boxTitle}>Mr. & Mrs. Ambot Lang 2024</Text>
            <View style={styles.boxDetailRow}>
              <MaterialCommunityIcons name="calendar" color="#2A93D5" size={16} />
              <Text style={styles.boxDetailText}>25 July, 24</Text>
            </View>
            <View style={styles.boxDetailRow}>
              <MaterialCommunityIcons name="map-marker" color="#2A93D5" size={16} />
              <Text style={styles.boxDetailText}>LK Luxe Hotel</Text>
            </View>
          </View>
        </View>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 20,
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  profilePicture: {
    marginRight: 10,
    marginTop: 20,
  },
  welcomeUsername: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    marginRight: "auto",
    marginTop: 20,
  },
  welcomeText: {
    fontSize: 12,
    color: "#FFF",
  },
  usernameText: {
    fontSize: 12,
    color: "#FFF",
    fontWeight: "600",
  },
  spacer: {
    flex: 1,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    fontSize: 12,
    color: "#FFF",
    textDecorationLine: "underline",
    marginRight: 5,
    marginTop: 20,
  },
  locationIcon: {
    marginRight: 5,
    marginTop: 20,
  },
  searchContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Center horizontally
  },
  findEventsButton: {
    backgroundColor: "#FFC42B",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginRight: 10,
  },
  findEventsButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 5,
  },
  createButton: {
    backgroundColor: "#FFC42B",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  createButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 5,
  },
  sectionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  sectionText: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "600",
  },
  chooseEventContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20, 
  },
  sectionTextChooseEvent: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "600",
  },
  scrollView: {
    marginTop: 10,
  },
  eventCard: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    marginRight: 10,
    padding: 10,
    width: 200,
    alignItems: "center",
    position: "relative",
    height: 230,
  },
  eventImage: {
    width: "100%",
    height: 100,
    borderRadius: 10,
  },
  heartIcon: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#DADADA",
    borderRadius: 50,
    width: 26,
    height: 26,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#000",
    marginTop: 4,
    marginRight: 4,
  },
  heartLiked: {
    backgroundColor: "#DADADA",
    borderRadius: 50,
    width: 26,
    height: 26,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#000",
    marginTop: 4,
    marginRight: 4, 
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  eventDetailRow: {
    width: "100%",
    marginTop: 5,
  },
  eventDetailContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  eventDetailText: {
    fontSize: 12,
    color: "#888",
    marginLeft: 3,
  },
  viewAllText: {
    fontSize: 14,
    color: "#FFC42B",
    marginRight: 10,
  },
  buttonScrollView: {
    marginTop: 10,
  },
  buttonContainer: {
    borderWidth: 1,
    borderColor: "#FFC42B",
    padding: 10,
    borderRadius: 20,
    marginRight: 10,
    alignSelf: "flex-start",
  },
  buttonNormal: {
    backgroundColor: "#000",
  },
  buttonPressed: {
    backgroundColor: "#FFC42B",
  },
  buttonText: {
    fontSize: 16,
  },
  buttonTextNormal: {
    color: "#FFC42B",
  },
  buttonTextPressed: {
    color: "#000",
  },
  boxContainer: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    alignItems: "center",
    width: "100%",
    height: 150, 
    flexDirection: "row", 
  },
  boxImage: {
    width: 120, 
    height: "100%",
    borderRadius: 10,
  },
  boxTextContainer: {
    marginLeft: 10,
    justifyContent: "center",
    flex: 1,
  },
  boxTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  boxDetailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  boxDetailText: {
    fontSize: 12,
    color: "#888",
    marginLeft: 3,
  },
});
