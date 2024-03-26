import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './PatiCard.style';
const PatiCard =({pati}) => {
    return(
        <View style={styles.container}>
            <Image style={styles.image} source= {{uri: pati.imgURL}}/>
            <View>
                <Text style={styles.title}>{pati.title}</Text>
                <Text style={styles.text}>{pati.price}</Text>
                {pati.inStock===false && (<Text style={styles.stock}>STOKTA YOK</Text>)}
            </View>
        </View>

    );
}
export default PatiCard;