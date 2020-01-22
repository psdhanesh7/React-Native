import React, {useState} from 'react';
import { Text, StyleSheet, View, Button, FlatList } from 'react-native';

const ColourScreen = () => {

    const [colors, setcolors] = useState([]);
    
    console.log(colors);

    return (
        <View>
            <Button  
                title = "Add a color"
                onPress = {() => {
                    setcolors([...colors, randomRgb()]);
                }} 
            />

            <FlatList 
                data = {colors}
                renderItem = {({item}) => {
                    return (
                        <View 
                            style = {{ height : 100, width : 100, backgroundColor : item }}
                        />
                    );
    
                }}

                keyExtractor = {(color) =>{
                    return color;
                }}
            />

        </View>
    );
};

const randomRgb = () =>{
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);

    return `rgb(${red}, ${green}, ${blue})`;
}
const styles = StyleSheet.create({


});

export default ColourScreen;