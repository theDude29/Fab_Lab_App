import React from 'react'
import {View, Text, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native'
import Boutton from '../Autres/Boutton'
import Navigator from '../Autres/Navigator'

class PasConnecte extends React.Component {

    constructor(props) {
    super(props)

    this.navigation = this.props.navigation
  }

    render() {
        return (
            <ImageBackground
                style={styles.image}
                source={require('../../ressources/images/mon_compte.png')}
            >
            <Navigator navigation={this.navigation} />
                <View style={styles.main_container}>
                    <Text style={styles.title_text}>Bonjour malheureusement aucun compte n'est lié à l'application.</Text>
                    <TouchableOpacity
                        style={styles.lien_container}
                        onPress={() => this.props.connection()}
                    >
                        <Text style={styles.default_text}>Connectez-vous si vous possédez déjà un compte</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.lien_container}
                        onPress={() => this.props.creation()}
                    >
                        <Text style={styles.default_text}>Vous ne possédez pas de compte ? Créez en un simplement en cliquant ici !</Text>
                    </TouchableOpacity>
                    <Text>Avoir un compte vous permez de poser des questions sur le forum.</Text>
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
        fontSize: 20,
        fontFamily: "CharlemagneStd-Bold"
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
        backgroundColor: 'rgba(0,0,120,.8)',
        borderRadius: 15,
    }
})

export default PasConnecte
