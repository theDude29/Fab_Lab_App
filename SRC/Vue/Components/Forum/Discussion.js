import React from 'react'
import {View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image, ListView, TextInput, KeyboardAvoidingView} from 'react-native'
import Message from './Message'
import {getDiscussion, envoyerMessage} from '../../../Controleur/infoForum'
import moment from 'moment'
import { connect } from 'react-redux'
import WarningPasConnecte from '../Autres/WarningPasConnecte'

class Discussion extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            listMessages: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        }

        this.list = React.createRef();
        this.textInput = React.createRef();
        this.textMessage = ""
        this.sujet = this.props.navigation.state.params.sujet
        this.messageTelecharges = false

        this._messageTextInputChanged = this._messageTextInputChanged.bind(this)
        this._envoyerMessage = this._envoyerMessage.bind(this)
        this._chargerMessages = this._chargerMessages.bind(this)

        this._chargerMessages()
    }

    render() {

        return (
            <ImageBackground
                style={styles.image}
                source={require('../../ressources/images/fond_messages.jpg')}
            >
            <KeyboardAvoidingView
              style={styles.container}
              behavior="height"
            >

                <View style={styles.title_container}>
                    <Text style={styles.title_text}>{this.sujet.nom + " par " + this.sujet.auteur + " le " + moment(new Date(this.sujet.date)).format('DD/MM/YYYY')}</Text>
                </View>

                <ListView
                    style={styles.list}
                    ref={component => this.list = component}
                    dataSource={this.state.listMessages}
                    renderRow={(rowData) => <Message message={rowData} monPseudo={this.props.pseudo}/>}
                    onContentSizeChange={(w,h) => {
                        if(this.messageTelecharges == true) {
                            this.list.scrollToEnd()
                        }
                    }}
                />

                {this._displayTextInput()}

            <View style={{ height: 50 }} />
            </KeyboardAvoidingView>
            </ImageBackground>
        )
    }

    _envoyerMessage() {
        envoyerMessage(this.textMessage, this.props.pseudo, this.sujet.nom)

        setTimeout(() => {
            this._chargerMessages(true)
        }, 100)

        this.textInput.clear()
    }

    _messageTextInputChanged(text) {
        this.textMessage = text
    }

    _chargerMessages(nouveauMessage) {
        getDiscussion(this.sujet.nom).then(data => {
            this.setState({listMessages: this.state.listMessages.cloneWithRows(data)}, nouveauMessage == true ? () => {this.messageTelecharges = true} : null)
        })
    }

    _displayTextInput() {
        if(this.props.connecte == true) {
            return (
                <View style={styles.input_container}>
                    <TextInput
                        ref={component => this.textInput = component}
                        style={styles.textInput}
                        onChangeText={(text) => this._messageTextInputChanged(text)}
                        multiline={true}
                    />
                    <TouchableOpacity
                        style={styles.icon_container}
                        onPress={this._envoyerMessage}
                    >
                        <Image
                            source={require('../../ressources/icon/send-message.png')}
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                </View>
            )
        }

        else {
            return (
                <WarningPasConnecte />
            )
        }
    }
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
    },
    input_container: {
        flexDirection: 'row',
    },
    icon_container: {
        marginTop: 5
    },
    textInput: {
        borderWidth: 2,
        borderRadius: 5,
        padding: 3,
        fontSize: 20,
        width: '75%',
        margin: '5%',
        marginTop: 5
    },
    icon: {
        width: 32,
        height: 32,
    },
    list: {
        height: '70%'
    },
    title_text: {
        fontSize: 20,
        textAlign: 'center'
    },
    title_container: {
        borderWidth: 3,
        borderRadius: 5,
        margin: 20,
        marginBottom: 5,
        padding: 10
    },
})

const mapStateToProps = (state) => {
  return {
      pseudo: state.pseudo,
      connecte: state.connecte
  }
}

export default connect(mapStateToProps)(Discussion)
