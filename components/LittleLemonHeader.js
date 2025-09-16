import { StyleSheet, View, Text } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={styles.container}>
      <Text
        style={styles.header}>
        Little Lemon
      </Text>
    </View>
  );
}




const styles = StyleSheet.create({
  container: { 
    flex: .3, 
    backgroundColor: '#EE9972',
  },
  header: { 
    padding: 40,
    fontSize: 30, 
    color: 'black', 
    textAlign: 'center',
  },
});
