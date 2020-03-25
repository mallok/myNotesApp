import React, { useContext } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity, FlatList } from "react-native-gesture-handler";
import { Context, Note } from "../context/NoteContext";
import NoteCard from "../components/NoteCard";

const NotesScreen: NavigationStackScreenComponent = ({ navigation }) => {
  const { state, deleteNote } = useContext<any>(Context);

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item: Note) => item.id}
        data={state}
        renderItem={({ item }) => {
          const onEdit = () => {
            navigation.navigate("FormNoteScreen", { id: item.id });
          };

          const onDelete = () => {
            Alert.alert(
              'Delete note',
              'Are you sure you want to delete this note?',
              [
                { text: 'Cancel' },
                { text: 'Ok', onPress: () => { deleteNote(item.id) } }
              ]
            );
          }

          return (
            <NoteCard
              note={item}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
});

NotesScreen.navigationOptions = ({ navigation }) : any => {
  return {
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate("FormNoteScreen")}>
          <Feather name="plus" size={30} />
        </TouchableOpacity>
      )
  }
}

export default NotesScreen;