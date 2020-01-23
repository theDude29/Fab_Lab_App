import React from 'react'
import {View, Text, StyleSheet, ImageBackground, TextInput, Image} from 'react-native'
import Boutton from '../Autres/Boutton'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {creerNouveauCompte, pseudoLibre, emailValide, mdpValide} from '../../../Controleur/creerNouveauCompte'
import { connect } from 'react-redux'

class CreationCompte extends React.Component {

    constructor(props) {
    super(props)

    this._connectionFaite = this._connectionFaite.bind(this)
    this._allerAMonCompte = this._allerAMonCompte.bind(this)
    this._majPseudoValide = this._majPseudoValide.bind(this)
    this._majEmailValide = this._majEmailValide.bind(this)
    this._majMdpValide = this._majMdpValide.bind(this)
    this._majWarningText = this._majWarningText.bind(this)

    this.textPseudo = ""
    this.textMail = ""
    this.textMdp = ""

    this.state = {
        pseudoLibre: {etat: false, text: "Vous devez remplir le champ 'pseudo'.\n"},
        emailValide: {etat: true, text: ""},
        mdpValide: {etat: false, text: "Vous devez remplir le champ 'mot de passe'.\n"},
        warning_text: "",
        infos_correcte: false
    }
  }

  componentDidMount() {
      this._majWarningText()
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

      mdpValide(this.textMdp, this._majMdpValide)
  }

  _majWarningText() {

      var infoMauvaise = false

      var textWarning = ""

      if(!this.state.pseudoLibre.etat) {
          textWarning += this.state.pseudoLibre.text
          infoMauvaise = true
      }
      if(!this.state.emailValide.etat) {
          textWarning += "\n\n" + this.state.emailValide.text
          infoMauvaise = true
      }
      if(!this.state.mdpValide.etat) {
          textWarning += "\n\n" + this.state.mdpValide.text
          infoMauvaise = true
      }

      this.setState({warning_text: textWarning, infos_correcte: !infoMauvaise})
  }

  _allerAMonCompte() {
      this._connectionFaite()

      this.props.navigation.navigate('AcceuilCompte')
  }

    render() {
        return (
            <ImageBackground
                style={styles.image}
                source={require('../../ressources/images/mon_compte.png')}
            >
            <KeyboardAwareScrollView>
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
                            {this._displayMessageValidite(this.state.pseudoLibre.etat)}
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
                                textContentType='emailAddress'
                                keyboardType='email-address'
                                onChangeText={(text) => this._mailTextInputChanged(text)}
                            />
                            {this._displayMessageValidite(this.state.emailValide.etat)}
                        </View>
                    </View>

                    <View style={styles.info_container}>
                        <Text style={styles.default_text}>Mot de passe: </Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.textInput}
                                placeholderTextColor= '#111111'
                                placeholder='Votre mot de passe'
                                returnKeyType='next'
                                textContentType='password'
                                onChangeText={(text) => this._mdpTextInputChanged(text)}
                            />
                            {this._displayMessageValidite(this.state.mdpValide.etat)}
                        </View>
                    </View>

                    {this._displayBouttonConfirmer()}
                </View>
                {this._displayWarningText()}
            </KeyboardAwareScrollView>
            </ImageBackground>
        )
    }

    _displayMessageValidite(valide) {
        if(valide) {
            return <Image style={styles.icon} source={require("../../ressources/icon/check.png")}/>
        }
        else {
            return <Image style={styles.icon} source={require("../../ressources/icon/uncheck.png")}/>
        }
    }

    _displayWarningText() {

        if(!this.state.infos_correcte) {
            return (
                <View style={styles.warning_container}>
                    <Text style={styles.warning_text}>{this.state.warning_text}</Text>
                </View>
            )
        }

        else {
            return null
        }
    }

    _displayBouttonConfirmer() {
        if(this.state.infos_correcte) {
            return (<Boutton title="Confirmer" disabled={false} onPress={() => creerNouveauCompte(this.textPseudo, this.textMdp, this.textMail, this._allerAMonCompte)}/>)
        }
        else {
            return (<Boutton title="Confirmer" disabled={true} onPress={() => creerNouveauCompte(this.textPseudo, this.textMdp, this.textMail, this._allerAMonCompte)}/>)
        }
    }

    _majPseudoValide(data) {
        this.setState({pseudoLibre: data}, this._majWarningText)
    }

    _majEmailValide(data) {
        this.setState({emailValide: data}, this._majWarningText)
    }

    _majMdpValide(data) {
        this.setState({mdpValide: data}, this._majWarningText)
    }

    _connectionFaite() {
        const action = { type: "CONNECTION", value: {pseudo: this.textPseudo}}
        this.props.dispatch(action)
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
    icon: {
        width: 20,
        height: 20,
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
    warning_container: {
        margin: 20,
        backgroundColor: 'rgba(255,0,0,0.2)',
        borderRadius: 15,
        borderWidth: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        borderWidth: 2,
        borderRadius: 5,
        padding: 3,
        margin: 2,
        fontSize: 15,
        width: '95%'
    },
    warning_text: {
        color: "red",
        fontSize: 20,
        margin: 10,
        fontFamily: "CharlemagneStd-Bold"
    },
    inputContainer: {
        flexDirection: 'row'
    },
})

export default connect()(CreationCompte)
