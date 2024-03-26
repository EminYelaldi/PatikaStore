import React from "react";
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
const SearchBar =() =>{
    return(
        <View style={styles.container}>
            <TextInput
          style={styles.input}
          placeholder="Ara..." 
          
        />
        </View> 
        

    );
}

export default SearchBar;
const styles = StyleSheet.create({
    container: {
      margin: 10,
      justifyContent: "flex-start",
      height:60,
      resizeMode:'stretch',
      flexDirection: "row",
      backgroundColor:'#eceff1',
      borderRadius:5,

  
    },
    input: {
        fontSize: 20,
        marginLeft: 10,
        width: "90%",
      },
});