import {View,Text,StyleSheet,FlatList} from 'react-native';

const menuItemsToDisplay=[
    {name:'Pizza',price:'$10.99',id:'1'},
    {name:'Burger',price:'$8.99',id:'2'},
    {name:'Pasta',price:'$12.99',id:'3'},
    {name:'Salad',price:'$7.99',id:'4'},
    {name:'Dessert',price:'$5.99',id:'5'},
    {name:'Soda',price:'$2.99',id:'6'},
    {name:'Coffee',price:'$3.99',id:'7'},
    {name:'Tea',price:'$2.49',id:'8'},
    {name:'Puice',price:'$3.49',id:'9'},
    {name:'Water',price:'$1.99',id:'10'},
    {name:'Steak',price:'$15.99',id:'11'},
    {name:'Lamb',price:'$18.99',id:'12'},
    {name:'Chicken',price:'$12.99',id:'13'},
    {name:'Fish',price:'$14.99',id:'14'},
    {name:'Vegetarian',price:'$9.99',id:'15'},
    {name:'Vegan',price:'$10.99',id:'16'},
    {name:'Gluten-Free',price:'$11.99',id:'17'},
];

/*
const menuItemsToDisplay=[
    {name:'Pizza',id:'1'},
    {name:'Burger',id:'3'},
    {name:'Pasta',id:'2'},
    {name:'Salad',id:'4'},
    {name:'Dessert',id:'5'},
    {name:'Soda',id:'6'},
    {name:'Coffee',id:'7'},
    {name:'Tea',id:'8'},
    {name:'Juice',id:'9'},
    {name:'Water',id:'10'},
    {name:'Steak',id:'11'},
    {name:'Lamb',id:'12'},
    {name:'Chicken',id:'13'},
    {name:'Fish',id:'14'},
    {name:'Vegetarian',id:'15'},
    {name:'Vegan',id:'16'},
    {name:'Gluten-Free',id:'17'},
];
*/
const Separator = () => <View style={menuStyles.separator} />;
const Item = ({name,price}) => (
        <View style={menuStyles.innerContainer}>
            <Text style={menuStyles.itemText}>{name}</Text>
            <Text style={menuStyles.itemText}>{price}</Text>
        </View>
    );

const MenuItems = () => {
    const renderItem = ({item}) => <Item name={item.name} price={item.price} />;
        return (
            <View style={menuStyles.container}>
                <Text style={menuStyles.headerText}>View Menu</Text>
                <FlatList 
                    data={menuItemsToDisplay}
                    keyExtractor={item => item.id}
                    renderItem={renderItem}
                    ItemSeparatorComponent={<Separator />}></FlatList>

            </View>
        );
    };



const menuStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerContainer: {
        paddingHorizontal: 40,
        paddingVertical: 20,
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerText: {
        color: 'white',
        fontSize: 25,
        flexWrap: 'wrap',
        textAlign: 'center',
    },
    itemText: {
        color: '#F4CE14',
        fontSize: 27,
    },
    separator: {
        borderBottomWidth: 1,
        borderColor: '#EDEFEE',
    },

});

export default MenuItems;
