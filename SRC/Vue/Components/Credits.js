import React from 'react'
import {View, Text, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native'
import A from 'react-native-a'

class Credits extends React.Component {
    render() {
        return (
            <ImageBackground
                style={styles.image}
                source={require('../ressources/images/credits.jpg')}
            >
                <View style={styles.main_container}>
                    <Text style={styles.default_text}>Cette application est dévellopée par Rémi Pérenne et est sous license "GNU GENERAL PUBLIC LICENSE"</Text>
                    <A href="https://www.gnu.org/licenses/gpl-3.0.txt">Lien de la license</A>
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
    title_text: {
        color: 'white',
        fontSize: 30
    },
    default_text: {
        color: "white",
        fontSize: 15,
        //fontFamily: 'futuriste'
    },
    main_container: {
        margin: 20,
        padding: 15,
        backgroundColor: 'rgba(100,100,100,0.5)',
        borderRadius: 20,
    }
})

export default Credits
