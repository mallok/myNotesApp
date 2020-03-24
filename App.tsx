import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import NotesScreen from "./src/screens/NotesScreen";

const navigator = createStackNavigator({
  Home: NotesScreen
}, {
  initialRouteName: "Home",
  defaultNavigationOptions: {
    title: "My Notes App"
  }
});

export default createAppContainer(navigator);
