import React from 'react'
import {View, Text, StyleSheet, ImageBackground} from 'react-native'

class Presentation extends React.Component {
    render() {
        return (
            <ImageBackground
                style={styles.image}
                source={require('../ressources/images/presentation.jpg')}
            >
                <View style={styles.main_container}>
                    <Text style={styles.default_text}>Bienvenu dans l'application du fab lab !</Text>
                    <Text style={styles.default_text}>texte de prsentation qsdfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</Text>
                    <Text style={styles.default_text}>Dernier publication : sqdfffffffdddddddddddddddddddddddddd</Text>
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
        fontSize: 30
    },
    main_container: {
        margin: 20,
        padding: 15,
        backgroundColor: 'rgba(100,100,100,0.5)',
        borderRadius: 20,
    }
})

export default Presentation
