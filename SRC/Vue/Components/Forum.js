import React from 'react'
import {View, Text, StyleSheet, ImageBackground} from 'react-native'

class Forum extends React.Component {
    render() {
        return (
            <ImageBackground
                style={styles.image}
                source={require('../ressources/images/forums.jpg')}
            >
                <View style={styles.main_container}>
                    <Text style={styles.default_text}>Forum !!!</Text>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%'
    },
    default_text: {
        color: "white",
        fontSize: 30,
        fontFamily: 'matrix'
    },
    main_container: {
        margin: 20,
        padding: 15,
        backgroundColor: 'rgba(100,100,100,0.5)',
        borderRadius: 20,
    }
})

export default Forum
