import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Toast from "react-native-toast-message";

function Account({ navigation }) {
  const name = navigation.getParam("name");

  function sendNotification() {
    Toast.show({
      text1: "Notification",
      text2: `Notification from ${name}`,
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.account}>
        <Text style={styles.label}>This page is for {name}</Text>
        <TouchableOpacity onPress={sendNotification} style={styles.button}>
          <Text style={styles.buttonText}>SEND NOTIFICATION</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e5e6F0",
    flex: 1,
  },
  account: {
    backgroundColor: "rgb(253, 247, 227)",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "darkgray",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    minWidth: 180,
    minHeight: 150,
    shadowColor: "darkgray",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
  },
  label: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
  },
  button: {
    backgroundColor: "darkblue",
    padding: 10,
    borderRadius: 4,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
});

export default Account;
