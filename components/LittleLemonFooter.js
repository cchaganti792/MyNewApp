/*import {View,Text} from 'react-native';
export default function LittleLemonFooter() {
    return (
        <View style={{ flex: .15,padding: 10, backgroundColor: '#F4CE14' }}>
            <Text   style={{
          padding: 10,
          fontSize: 15,
          color: 'black',
          textAlign: 'center',
        }}>
                All rights reserved by Little Lemon ,2022
            </Text>

        </View>
    )
}*/

/*import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonFooter() {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>© 2025 Little Lemon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#F4CE14',
    padding: 15,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  footerText: {
    color: '#495E57',
    fontWeight: 'bold',
  },
});
*/

/*
import * as React from 'react';
import { View, Text } from 'react-native';

export default function LittleLemonFooter() {
  return (
    <View style={{ backgroundColor: '#F4CE14', padding: 15, alignItems: 'center' }}>
      <Text style={{ color: '#495E57', fontWeight: 'bold' }}>© 2025 Little Lemon</Text>
    </View>
  );
}
  */

import * as React from 'react';
import { View, Text } from 'react-native';
export default function LittleLemonFooter() {
    return (
        <View style={{ backgroundColor: '#F4CE14',
         marginBottom:0,padding:20,
        }}>
            <Text 
            style={{
                fontSize: 18,
                color: 'black',
                textAlign:'center',
                bottom:0,
            }}> 
            All rights reserved by Little Lemon, 2022{' '}
            </Text>
        </View>
    );
}