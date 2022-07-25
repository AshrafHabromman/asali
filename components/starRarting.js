import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {FontAwesome} from 'react-native-vector-icons';

//colors
import { Colors } from '../components/styles'

const { primary_1, darkPrimary, secondary, tertiary } = Colors


const StarRating = (props) =>{

    let stars = [];

    for(var i = 1; i <= 5; i++) {
        let name = 'star';

        if(i > props.rating){
            name = 'star-o';
        }
        stars.push((<FontAwesome name={name} size={15} style={styles.star} key={i}/>));
    }

    return(
        <View style={styles.container}>
            {stars}
            <Text style={styles.text}>{props.reviews}</Text>
        </View>
    )

}

export default StarRating;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	star: {
		color: secondary    
	},
	text: {
		fontSize: 12,
        marginLeft: 5,
        color: secondary,
	}
});

