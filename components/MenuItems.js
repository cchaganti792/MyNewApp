import React from 'react';

import {StyleSheet,View,Text,ScrollView} from 'react-native';

const MenuItemsToDisplay=['Hummus \n Falafel \n Pasta \n Pizza \n Tiramisu \n Salad \n Lentil Soup \n Baklava \n Bruschetta \n Stuffed Grape Leaves \n Moussaka \n Fattoush \n Kofta \n Shawarma \n Tabbouleh \n'

];

const MenuItems=()=>{
    return(
        <View style={styles.container}>
            <ScrollView indicatorStyle={"white"} style={styles.scrollView}>
                <Text style={styles.menuTitle}>
                Menu Items
                </Text>
                <Text style={styles.menuItems }>
                {MenuItemsToDisplay[0]}
                </Text>
        
            </ScrollView>
            </View>
   );
};
export default MenuItems;
const styles=StyleSheet.create({
    container: {
        flex: .75,
        backgroundColor: 'black',
        padding: 20
    },
    scrollView: {
        paddingHorizontal: 40,
        paddingVertical: 40,
        backgroundColor: 'black'
    },
    menuTitle: {
        color: 'white',
        fontSize: 40,
        flexWrap: 'wrap'
    },
    menuItems: {
        color: '#F4CE14',
        fontSize: 36
    }
});
