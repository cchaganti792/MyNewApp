import { StyleSheet,View ,FlatList} from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
/*import MenuItems from './components/MenuItems';*/
import MenuItems from './components/FlatListMenu';
import WelcomeScreen from './WelcomeScreen';
/*import {  FlatList }  from 'react-native-web';*/  
/* below is for  scrollview when we watned to test flatlist */
export default function App() {
  return (
    <View style={styles.container}>
      <LittleLemonHeader />
      <WelcomeScreen />
      <MenuItems /> 
      <LittleLemonFooter />
    </View>
  );
}
  

/* 
export default function App() {
  return (
    <View style={styles.container}>
      <LittleLemonHeader />
      <WelcomeScreen />
      <FlatListMenu />
      <LittleLemonFooter />
    </View>
  );
}
  * */
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'space-between',
  },
});
