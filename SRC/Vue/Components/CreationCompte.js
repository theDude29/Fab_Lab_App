import React from 'react'
import {View, Text, StyleSheet, ImageBackground, TextInput, Image} from 'react-native'
import Boutton from './Boutton'
import {creerNouveauCompte, pseudoLibre, emailValide} from '../../Controleur/creerNouveauCompte'

class CreationCompte extends React.Component {

    constructor(props) {
    super(props)

    this._majPseudoValide = this._majPseudoValide.bind(this)
    this._majEmailValide = this._majEmailValide.bind(this)

    this.textPseudo = ""
    this.textMail = ""
    this.textMdp = ""

    this.state = {
        pseudoPris: false,
        emailValide: true
    }

    pseudoLibre(this.textPseudo, this._majPseudoValide)
  }

  _pseudoTextInputChanged(text)
  {
      this.textPseudo = text

      pseudoLibre(this.textPseudo, this._majPseudoValide)
  }

  _mailTextInputChanged(text)
  {
      this.textMail = text

      emailValide(this.textMail, this._majEmailValide)
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
                        <Text style={styles.default_text}>Pseudo: </Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.textInput}
                                placeholderTextColor= '#111111'
                                ppseudoPrislaceholder='Choisissez votre pseudo'
                                returnKeyType='next'
                                textContentType='username'
                                onChangeText={(text) => this._pseudoTextInputChanged(text)}
                            />
                            {this._displayMessageValidite(this.state.pseudoPris)}
                        </View>
                    </View>

                    <View style={styles.info_container}>
                        <Text style={styles.default_text}>Adresse mail (facultatif): </Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.textInput}
                                placeholderTextColor= '#111111'
                                placeholder='Votre adresse mail'
                                returnKeyType='next'
                                textContentType='emailAdresse'
                                keyboardType='email-address'
                                onChangeText={(text) => this._mailTextInputChanged(text)}
                            />
                            {this._displayMessageValidite(this.state.emailValide)}
                        </View>
                    </View>

                    <View style={styles.info_container}>
                        <Text style={styles.default_text}>Mot de passe: </Text>
                        <TextInput
                            style={styles.textInput}
                            placeholderTextColor= '#111111'
                            placeholder='Votre mot de passe'
                            returnKeyType='next'
                            textContentType='password'
                            secureTextEntry='true'
                            onChangeText={(text) => this._mdpTextInputChanged(text)}
                        />
                    </View>

                    <Boutton title="Confirmer" onPress={() => creerNouveauCompte(this.textPseudo, this.textMdp, this.textMail)}/>
                </View>
            </ImageBackground>
        )
    }

    _displayMessageValidite(valide) {
        if(valide) {
            return <Image style={styles.icon} source={require("../ressources/icon/check.png")}/>
        }
        else {
            return <Image style={styles.icon} source={require("../ressources/icon/uncheck.png")}/>
        }
    }

    _majPseudoValide(data) {
        this.setState({pseudoPris: data})
    }

    _majEmailValide(data) {
        this.setState({emailValide: data})
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
        //fontFamily: 'futuriste'
    },
    icon: {
        width: 20,
        heigh: 20,
        marginTop: 5,
        marginLeft: 5
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
        fontSize: 15,
        width: 200
    },
    warning_text: {
        color: "red",
        fontSize: 20,
    },
    inputContainer: {
        flexDirection: 'row'
    }
})

export default CreationCompte
