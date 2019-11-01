import React from 'react'
import {View, Text, StyleSheet, ImageBackground, ScrollView, TextInput, TouchableOpacity} from 'react-native'
import Boutton from './Boutton'
import Mon_compte from './Mon_compte'

class AcceuilCompte extends React.Component {

    constructor(props) {
    super(props)
  }

    render() {
        return (
            <ImageBackground
                style={styles.image}
                source={require('../ressources/images/mon_compte.png')}
            >
                <View style={styles.main_container}>
                    <Text style={styles.title_text}>Bonjour malheureusement aucun compte n'est lié à l'application.</Text>
                    <TouchableOpacity style={styles.lien_container}>
                        <Text style={styles.default_text}>Connectez-vous si vous possédez déjà un compte</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.lien_container}>
                        <Text style={styles.default_text}>Vous ne possédez pas de compte ? Créez en un simplement en cliquant ici !</Text>
                    </TouchableOpacity>
                    <Text>Avoir un compte vous permeterez de poser des questions sur le forum</Text>
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
        color: "black",
        fontSize: 25,
    },
    default_text: {
        color: "white",
        fontSize: 20,
        //fontFamily: 'futuriste'
    },
    main_container: {
        margin: 20,
        padding: 10,
        backgroundColor: 'rgba(0,100,0,0.2)',
        borderRadius: 20,
    },
    lien_container: {
        margin: 20,
        padding: 10,
        backgroundColor: 'rgba(100,0,0,1)',
        borderRadius: 15,
    }
})

export default AcceuilCompte
