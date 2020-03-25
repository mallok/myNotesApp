import React from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from "./src/context/NoteContext";
import NotesScreen from "./src/screens/NotesScreen";
import FormScreen from "./src/screens/FormScreen";


const navigator = createStackNavigator({
  Home: NotesScreen,
  FormNoteScreen: FormScreen
}, {
  initialRouteName: "Home",
  defaultNavigationOptions: {
    headerBackTitle: "",
    title: "My Notes App"
  }
});

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
}