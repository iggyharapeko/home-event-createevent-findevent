import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, Provider as PaperProvider, TextInput } from "react-native-paper";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function App() {
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
          <Text style={styles.label}>Venue Location</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Venue Location"
            placeholderTextColor="#888"
          />
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
    marginBottom: 20,
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
  },
  label: {
    fontSize: 16,
    color: "#FFF",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#333",
    color: "#FFF",
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontSize: 14,
  },
  
});
