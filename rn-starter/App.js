import { createAppContainer, createStackNavigator } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ComponentsScreen2 from './src/screens/ComponentsScreen2';
import ListScreen from './src/screens/ListScreen';
import ListFriends from './src/screens/ListScreenExercise';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColourScreen from './src/screens/ColourScreen';
import SquareScreen from './src/screens/Squarescreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components1 : ComponentsScreen,
    Components2 : ComponentsScreen2,
    List : ListScreen,
    List2 : ListFriends,
    Images : ImageScreen,
    Counter : CounterScreen,
    Colour : ColourScreen,
    Square : SquareScreen,

  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
