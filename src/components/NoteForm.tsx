import React, { useState } from "react";
import { Note, Colors } from "../context/NoteContext";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { withNavigation, NavigationInjectedProps } from "react-navigation";

export type NoteFormType = Omit<Note, "id"> & {
  id?: string
}

interface NoteFormProps {
  onSubmit: (NoteFormType) => void;
  initialValues?: NoteFormType
}

const NoteForm: React.FunctionComponent<NoteFormProps & NavigationInjectedProps> = ({
  onSubmit,
  initialValues,
  navigation
}) => {
  const [note, setNote] = useState<NoteFormType>({ ...initialValues });
  const [showColors, setShowColors] = useState(false);

  return (
    <View style={styles.formContainer}>
      <Text style={styles.label}>
        Title
      </Text>
      <TextInput
        autoCorrect={false}
        autoCompleteType="off"
        onChangeText={(text) => setNote({ ...note, title: text })}
        value={note.title}
        style={styles.inputTextStyle}
      />
      <Text style={styles.label}>
        Description
      </Text>
      <TextInput
        autoCorrect={false}
        autoCompleteType="off"
        onChangeText={(text) => setNote({ ...note, description: text })}
        value={note.description}
        style={styles.inputTextAreaStyle}
        multiline={true}
      />
      <View style={styles.colorWrapper}>
        <Text style={styles.label}>
          Color
        </Text>
        <TouchableOpacity onPress={() => { setShowColors(!showColors) }}>
          <View style={{ ...styles.currentColor, backgroundColor: note.color }}></View>
        </TouchableOpacity>
        {showColors &&
          Object.values(Colors).map(c => {
            if (c === note.color) {
              return null;
            }
            return (
              <TouchableOpacity key={c} onPress={() => { setNote({...note, color: c}); setShowColors(false) }}>
                <View style={{ ...styles.currentColor, backgroundColor: c }}></View>
              </TouchableOpacity>
            )
          })}
      </View>
      <Button title="Save Note" onPress={() => {
        onSubmit(note);
        navigation.goBack();
      }} />
    </View>
  );
};

NoteForm.defaultProps = {
  initialValues: {
    title: "",
    description: "",
    color: Colors.Blue
  }
}

const styles = StyleSheet.create({
  formContainer: {
    margin: 10,
    padding: 10
  },
  label: {
    fontSize: 18,
    fontWeight: "bold"
  },
  inputTextStyle: {
    borderColor: "#CACACA",
    borderWidth: 1,
    height: 30,
    fontSize: 16,
    marginVertical: 10
  },
  inputTextAreaStyle: {
    borderColor: "#CACACA",
    borderWidth: 1,
    height: 100,
    fontSize: 16,
    marginVertical: 10,
    textAlignVertical: "top"
  },
  colorWrapper: {
    flexDirection: "row",
    paddingBottom: 10
  },
  currentColor: {
    width: 25,
    height: 25,
    borderColor: "#CACACA",
    borderWidth: 1,
    marginHorizontal: 5
  }
})


export default withNavigation<NoteFormProps>(NoteForm);
