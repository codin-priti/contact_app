import React from "react";
import { View, Text, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { removeContact } from "../redux/contactActions";
import { useNavigation } from "@react-navigation/native";

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  // Delete confirmation
  const handleDelete = () => {
    Alert.alert(
      "Delete Contact",
      "Are you sure you want to delete this contact?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Delete", onPress: () => dispatch(removeContact(contact.id)) }
      ]
    );
  };

  return (
    <View style={styles.container}>
      {/* Contact Details */}
      <View style={styles.details}>
        <Text style={styles.name}>{contact.name}</Text>
        <Text style={styles.phone}>{contact.phone}</Text>
      </View>

      {/* Action Buttons */}
      <View style={styles.actions}>
        <TouchableOpacity
          style={[styles.button, styles.editButton]}
          onPress={() => navigation.navigate("Contact Form", { contact })}
        >
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.deleteButton]}
          onPress={handleDelete}
        >
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ContactItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    marginVertical: 8,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  phone: {
    fontSize: 16,
    color: "#666",
  },
  actions: {
    flexDirection: "row",
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
    marginLeft: 10,
  },
  editButton: {
    backgroundColor: "#4CAF50",
  },
  deleteButton: {
    backgroundColor: "#FF5733",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
