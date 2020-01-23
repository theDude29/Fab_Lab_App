import React from 'react'
import {View, Text, StyleSheet, ImageBackground, TextInput} from 'react-native'
import Boutton from '../Autres//Boutton'
import {connection} from '../../../Controleur/connectionCompte'
import { connect } from 'react-redux'

class ConnectionCompte extends React.Component {

    constructor(props) {
    super(props)

    this._allerAMonCompte = this._allerAMonCompte.bind(this)
    this._majInfosConnection = this._majInfosConnection.bind(this)

    this.textPseudo = ""
    this.textMdp = ""

    this.state = {
        infos_connection: {etat: false, text: ""},
    }
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
                source={require('../../ressources/images/mon_compte.png')}
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
                            onChangeText={(text) => this._mdpTextInputChanged(text)}
                        />
                    </View>

                    <Boutton title="Connection" onPress={() => connection(this.textPseudo, this.textMdp, this._majInfosConnection, this._allerAMonCompte)}/>

                    <Text style={styles.mdpOublie_text}>Mot de passe oublié ?</Text>
                </View>

                {this._displayWarningText()}
            </ImageBackground>
        )
    }

    _allerAMonCompte() {
        this._connectionFaite()

        this.props.navigation.navigate('AcceuilCompte')
    }

    _displayWarningText() {

        if(this.state.infos_connection.text != "") {
            return (
                <View style={styles.warning_container}>
                    <Text style={styles.warning_text}>{this.state.infos_connection.text}</Text>
                </View>
            )
        }

        else {
            return null
        }
    }

    _majInfosConnection(data) {
        this.setState({infos_connection: data})
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
    mdpOublie_text: {
        margin: 10,
        fontSize: 15,
        fontFamily: "CharlemagneStd-Bold"
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
    },
    warning_text: {
        color: "red",
        fontSize: 20,
        margin: 10,
        fontFamily: "CharlemagneStd-Bold"
    },
    warning_container: {
        margin: 20,
        backgroundColor: 'rgba(255,0,0,0.2)',
        borderRadius: 15,
        borderWidth: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default connect()(ConnectionCompte)
