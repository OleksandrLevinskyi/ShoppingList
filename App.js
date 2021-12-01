import React, {useState} from "react";
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import {v4 as uuidv4} from 'uuid';

const App = () => {
    const [items, setItems] = useState([
        {id: uuidv4(), text: 'Potatoes'},
        {id: uuidv4(), text: 'Eggs'},
        {id: uuidv4(), text: 'Yogurt'},
        {id: uuidv4(), text: 'Cucumber'},
    ]);

    const deleteItem = (id) => {
        setItems(prevItems => {
            return prevItems.filter(item => item.id != id);
        });
    }

    return (
        <View style={styles.container}>
            <Header/>
            <FlatList data={items}
                      renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem}/>}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60
    }
});

export default App;