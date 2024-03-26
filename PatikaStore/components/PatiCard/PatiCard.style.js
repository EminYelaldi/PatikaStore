import {Dimensions, StyleSheet} from 'react-native';
export default StyleSheet.create({
    container:{
      backgroundColor: '#eceff1',
      margin:10,
      borderRadius:10,
      flex : 1,
      justifyContent: 'center',
      maxWidth : 200,
     
  
    },
    image:{
      height: Dimensions.get('window').height / 4,
      width: Dimensions.get('window').width / 2.5,
      borderRadius:5,
      backgroundColor:'white',
      resizeMode: 'stretch',
      margin: 10,
      alignItems:'center',
  
    },
    title:{
      fontWeight:'bold',
      minHeight:40,
      fontSize:20,
      color:'black',
      margin:10,
  
    },
    text:{
      color:'gray',
      fontWeight:'bold',
      margin:10,
      fontSize:18,

    },
    stock:{
        fontWeight:'bold',
        fontSize:15,
        color:'red',
        left:10,
        bottom:10

    }
});

    