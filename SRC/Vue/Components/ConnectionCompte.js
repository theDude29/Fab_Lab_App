import React from 'react'
import {View, Text, StyleSheet, ImageBackground, ScrollView, TextInput} from 'react-native'
import Boutton from './Boutton'

class ConnectionCompte extends React.Component {

    constructor(props) {
    super(props)

    this.textPseudo = ""
    this.textMdp = ""
  }

  _pseudoTextInputChanged(text)
  {
      this.textPseudo = text
  }

  _mdpTextInputChanged(text)
  {
      this.textMdp = text
  }


    render() {
        return (
            <ImageBackground
                style={styles.image}
                source={require('../ressources/images/mon_compte.png')}
            >
                <View style={styles.main_container}>
                    <View style={styles.info_container}>
                        <Text style={styles.default_text}>Entrez votre pseudo: </Text>
                        <TextInput
                            style={styles.textInput}
                            returnKeyType='next'
                            textContentType='username'
                            onChangeText={(text) => this._pseudoTextInputChanged(text)}
                        />
                    </View>

                    <View style={styles.info_container}>
                        <Text style={styles.default_text}>Entrez votre de passe: </Text>
                        <TextInput
                            style={styles.textInput}
                            returnKeyType='next'
                            textContentType='password'
                            secureTextEntry='true'
                            onChangeText={(text) => this._mdpTextInputChanged(text)}
                        />
                    </View>

                    <Boutton title="Connection"/>

                    <Text style={styles.mdpOublie_text}>Mot de passe oublié ?</Text>
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
        color: "cyan",
        //fontFamily: 'futuriste',
        fontSize: 40,
    },
    default_text: {
        color: "white",
        fontSize: 20,
        //fontFamily: 'futuriste'
    },
    mdpOublie_text: {
        margin: 10,
        fontSize: 15
    },
    main_container: {
        margin: 20,
        padding: 10,
        backgroundColor: 'rgba(0,100,0,0.2)',
        borderRadius: 20,
    },
    info_container: {
        margin: 20,
        padding: 20,
        backgroundColor: 'rgba(100,0,0,0.8)',
        borderRadius: 20,
    },
    textInput: {
        borderWidth: 2,
        borderRadius: 5,
        padding: 3,
        margin: 2,
        fontSize: 15
    }
})

export default ConnectionCompte
