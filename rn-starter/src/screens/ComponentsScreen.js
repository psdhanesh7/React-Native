import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {

    const greeting = <Text>Hello there!</Text>;
    return (
        <View>
            <Text  style = {styles.textStyle}>This is the component screen</Text>
            {greeting}
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize : 20
    }
});

export default ComponentsScreen;