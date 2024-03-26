import React from "react";
import { SafeAreaView,View,Text,StyleSheet,FlatList,ScrollView,Image,Dimensions } from "react-native";
import pati_data from './pati_data.json';
import PatiCard from "./components/PatiCard";
import SearchBar from "./components/PatiCard/SearchBar";

function App(){
return(
    <SafeAreaView style={{ flex: 1 }}>
       <Text style={styles.headerText}>PATIKASTORE</Text>
       <SearchBar/>
       <View style={{ flex: 1 }}>
       <FlatList 
       horizontal={false}
       numColumns={2}
       keyExtractor={item => item.id.toString()}
       data ={pati_data}
       renderItem={({item}) => <PatiCard pati={item}   />}
       />
      </View>
    </SafeAreaView>
);

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    headerText:{
        fontWeight: 'bold',
        fontSize: 40,
        color:'purple',
        paddingLeft: 10,
        
    },
})

export default App;