import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import Toast from "react-native-toast-message";

import api from "../services/api";

function Main({ navigation }) {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    async function loadAccounts() {
      try {
        const { data } = await api.get("accounts");

        setAccounts(data);
      } catch (err) {
        Toast.show({
          text1: "ERROR",
          text2: "Somenthing went wrong!",
          type: "error",
        });
      }
    }

    loadAccounts();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        {accounts.map((account) => (
          <View key={account._id} style={styles.account}>
            <View>
              <Text style={styles.label}>ID</Text>
              <Text style={styles.labelDescription}>{account._id}</Text>
            </View>
            <View>
              <Text style={styles.label}>NAME</Text>
              <Text style={styles.labelDescription}>{account.name}</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Account", { name: account.name });
              }}
            >
              <Text style={styles.buttonText}>SHOW</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e5e6F0",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  account: {
    backgroundColor: "rgb(253, 247, 227)",
    justifyContent: "space-between",
    borderColor: "darkgray",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    width: 180,
    height: 150,
    marginLeft: 10,
    marginTop: 10,
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
  },
  labelDescription: {
    textAlign: "center",
  },
  buttonText: {
    color: "blue",
    textAlign: "center",
  },
});

export default Main;
