import React, {useState} from "react";
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Header from './components/Header';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
    const [items, setItems] = useState([
        {id: uuidv4(), text: 'Potatoes'},
        {id: uuidv4(), text: 'Eggs'},
        {id: uuidv4(), text: 'Yogurt'},
        {id: uuidv4(), text: 'Cucumber'},
    ])

    return (
        <View style={styles.container}>
            <Header />
            <FlatList data={items}
                      renderItem={({item}) => <Text>{item.text}</Text>}
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