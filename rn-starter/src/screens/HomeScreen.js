import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = (props) => {

  // console.log(props);

  return (
    <View>
        <Text style={styles.text}>HomeScreen</Text>

        <Button 
          title = "Go to Component Screen"
          onPress = {() => props.navigation.navigate('Components1')}
        />

        <Button 
          title = "Go to List Demo"  
          onPress = {() => props.navigation.navigate('List')} 
        />

        <Button 
          title = "Go to Image Screen"  
          onPress = {() => props.navigation.navigate('Images')} 
        />

        <Button 
          title = "Go to Counter Screen"
          onPress = {() => props.navigation.navigate('Counter')}
        />

        <Button 
          title = "Go to Colour Screen"
          onPress = {() => props.navigation.navigate('Colour')}
        />

        <Button 
          title = "Go to Square Screen"
          onPress = {() => props.navigation.navigate('Square')}
        />

        
    </View>
  ); 
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
