import React, {useState} from 'react';
import {Text, StyleSheet, Button, View} from 'react-native';

const SquareDetails = ({color, onIncrease, onDecrease}) => {

    return (
        <View>
            <Text>{color}</Text>
            <Button title = {`Increase ${color}`} onPress = {() => onIncrease()} />
            <Button title = {`Decrease ${color}`} onPress = {() => onDecrease()} />
        </View>
    );
};

const styles = StyleSheet.create({

});

export default SquareDetails;