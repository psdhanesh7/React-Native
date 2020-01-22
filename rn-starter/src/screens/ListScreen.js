import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
    const friends = [
        // {name : "Friend #1", key : '1'},
        // {name : "Friend #2", key : '2'},
        // {name : "Friend #3", key : '3'},
        // {name : "Friend #4", key : '4'},
        // {name : "Friend #5", key : '5'},
        // {name : "Friend #6", key : '6'},
        // {name : "Friend #7", key : '7'},
        // This is one way of adding the key property
        // This can also be done along with the flatlist component
        {name : "Friend #1"},
        {name : "Friend #2"},
        {name : "Friend #3"},
        {name : "Friend #4"},
        {name : "Friend #5"},
        {name : "Friend #6"},
        {name : "Friend #7"},
    ];

    return (
        <FlatList 
            data = {friends} 
            // renderItem = {(element) => {
            //     // element === {item : {name : "Friend #1"}, index : 0 }
            //     // here element is not really the object that we want, it contains more information that required
            //     // to avoid that we use the following syntax
            // }}/>
            renderItem = {({item}) => {
                //item === {name : "Friend #1"}
                return <Text style = {styles.textStyle}>{item.name}</Text>
            }}

            keyExtractor = {(friend) => {
                return friend.name;
            }}

            horizontal
            showsHorizontalScrollIndicator = {false}
            
            />
    );
};

const styles = StyleSheet.create({
    textStyle : {
        marginVertical : 50
    }
});

export default ListScreen;