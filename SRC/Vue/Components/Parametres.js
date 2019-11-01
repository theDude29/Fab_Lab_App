import React from 'react'
import {View, Text, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native'

class Parametres extends React.Component {

    _allerAuxCredits() {
        this.props.navigation.navigate('Credits')
    }

    render() {
        return (
            <ImageBackground
                style={styles.image}
                source={require('../ressources/images/parametres.png')}
            >
                <View style={styles.main_container}>
                    <TouchableOpacity
                        style={styles.item_container}
                        onPress={() => this._allerAuxCredits()}
                    >
                        <Text style={styles.default_text}>Crédits</Text>
                    </TouchableOpacity>
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
        fontSize: 20,
        //fontFamily: 'futuriste'
    },
    main_container: {
        margin: 10,
        //backgroundColor: 'rgba(100,100,100,0.2)',
        //borderRadius: 20,
    },
    item_container: {
        backgroundColor: 'rgba(0,0,130,0.5)',
        padding: 10,
        margin: 20,
        borderRadius: 10
    }
})

export default Parametres
