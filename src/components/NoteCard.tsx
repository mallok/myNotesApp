import React from "react";
import { Note } from "../context/NoteContext";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";

interface NoteCardProps {
  note: Note,
  onEdit: () => void,
  onDelete: () => void
}

const NoteCard: React.FunctionComponent<NoteCardProps> = ({
  note,
  onEdit,
  onDelete
}) => {
  return (
    <View style={{ ...styles.cardContainer, backgroundColor: note.color}}>
      <Text style={styles.titleStyle}>{note.title}</Text>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.descriptionStyle}>{note.description}</Text>
      </ScrollView>
      <View style={styles.actionsStyle}>
        <TouchableOpacity onPress={onEdit}>
          <FontAwesome name="edit" style={styles.editButton} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete}>
          <FontAwesome name="trash-o" style={styles.deleteButton} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    height: 170,
    minHeight: 100,
    margin: 10,
    borderRadius: 10
  },
  titleStyle: {
    padding: 10,
    fontSize: 18,
    fontWeight: "bold"
  },
  descriptionContainer: {
    height: 40,
    borderTopColor: "#FFFFFF",
    borderTopWidth: 1
  },
  descriptionStyle: {
    margin: 5,
    paddingBottom: 10,
    paddingHorizontal: 10
  },
  actionsStyle: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    alignSelf: "flex-end",
    flex: 1
  },
  editButton: {
    paddingHorizontal: 10,
    fontSize: 28
  },
  deleteButton: {
    paddingRight: 10,
    fontSize: 28
  }
})

export default NoteCard;
