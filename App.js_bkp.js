import { View } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';

export default function App() {
  return (
    <View style={{
        flex: 2,
        backgroundColor: '#495E57',
      }}>
    <View>
      <LittleLemonHeader />
    </View>
    <View>
      <LittleLemonFooter />
    </View>
    </View>
  );
}
