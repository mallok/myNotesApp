import React, { useContext } from "react";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { View } from "react-native";
import NoteForm from "../components/NoteForm";
import { Context } from  "../context/NoteContext";
import { NoteFormType } from "../components/NoteForm";

const FormScreen: NavigationStackScreenComponent = ({ navigation }) => {

  const { addNote, editNote, state } = useContext<any>(Context);

  const noteId = navigation.getParam("id");
  let note: NoteFormType;
  if (noteId) {
    note = state.find(n => n.id === noteId);
  }

  const onSubmit = navigation.getParam("id") ? editNote : addNote;

  return (
    <View>
      <NoteForm onSubmit={onSubmit} initialValues={note} />
    </View>
  );
}

FormScreen.navigationOptions = ({ navigation }) : any => {

  const prefix = navigation.getParam("id") ? "Edit" : "Add";
  return {
      title: `${prefix} Note`
  }
}

export default FormScreen;