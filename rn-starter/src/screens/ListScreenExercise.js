import React from 'react';
import {Text, StyleSheet, FlatList} from 'react-native';

const ListFriends = () => {
    const friends = [
        {name : 'Friend #1', age : 20},
        {name : 'Friend #2', age : 25},
        {name : 'Friend #3', age : 26},
        {name : 'Friend #4', age : 27},
        {name : 'Friend #5', age : 28},
        {name : 'Friend #6', age : 29},
        {name : 'Friend #7', age : 21},
    ];
    
    return (

        <FlatList  
            data = {friends}

            renderItem = {({item}) => {
                return <Text style = {styles.textStyle}>{item.name} - Age {item.age}</Text>;
            }}
        
            keyExtractor = {(friend) => {
                return friend.name;
            }}
       />
    );
};

const styles = StyleSheet.create({
    textStyle : {
        fontSize : 30,
        marginVertical : 20
    }
})

export default ListFriends;
