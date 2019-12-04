import React from 'react'
import {View, Text, ImageBackground, StyleSheet, FlatList, TextInput} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Boutton from '../Autres/Boutton'
import {creerNouveauTopic} from '../../../Controleur/infoForum'

class CreationTopic extends React.Component {

    constructor(props) {
        super(props)

        this._retourAcceuil = this._retourAcceuil.bind(this)

        this.textSujet = ""
        this.textDescription = ""

        this.state = {
            textInexistant: true
        }
    }

    render() {
        return (
            <ImageBackground style={styles.image} source={require('../../ressources/images/question.png')}>
            <KeyboardAwareScrollView>

                <View style={styles.input_container}>
                    <Text style={styles.title_text}>Entrez le nom de votre sujet: </Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(text) => this._sujetTextInputChanged(text)}
                    />
                </View>

                <View style={styles.input_container}>
                    <Text style={styles.title_text}>Entrez la description de votre sujet: </Text>
                    <TextInput
                        style={styles.textInput}
                        multiline={true}
                        onChangeText={(text) => this._descriptionTextInputChanged(text)}
                    />
                </View>

                <View style={styles.boutton_container}>
                    <Boutton title="Confirmer" disabled={this.state.textInexistant} onPress={() => creerNouveauTopic(this.textSujet, "Singe20199", this._retourAcceuil, this.textDescription)} />
                </View>

                <View style={styles.text_container}>
                    <Text style={styles.title_text}>Cette section est destinée à receuillir vos questions concerant des sujets tels que la programmation, la modélisation 3D, Veillez à bien respecter les règles suivantes afin que votre question soit au mieu prise en compte:</Text>
                    <Text style={styles.default_text}>  -Donnez un titre court, clair et précis à votre sujet par exemple mettez "Comment programmer en python" plutôt que "je ne comprend pas comment faire pour coder un programme en snt avec le language python".</Text>
                    <Text style={styles.default_text}>  -Essayez de vérifier votre orthographe au maximum.</Text>
                    <Text style={styles.default_text}>  -Restez poli.</Text>
                    <Text style={styles.default_text}>  -Quand un sujet est résolu marquez le comme tel avec l'icon "check"</Text>
                </View>

            </KeyboardAwareScrollView>
            </ImageBackground>
        )
    }

    _sujetTextInputChanged(text) {
        this.textSujet = text
        if(this.textSujet != "") {
            this.setState({textInexistant: false})
        }
        else {
            this.setState({textInexistant: true})
        }
    }

    _descriptionTextInputChanged(text) {
        this.textDescription = text
    }

    _retourAcceuil() {
        this.props.navigation.navigate('Acceuil')
    }
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
    },
    list: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 110,
    },
    default_text: {
        fontSize: 17,
        color: 'white'
    },
    title_text: {
            fontSize: 20,
            color: 'white'
    },
    text_container: {
        margin: 15,
        padding: 10,
        backgroundColor: 'rgba(100,155,105,0.8)',
        borderRadius: 10
    },
    input_container: {
        margin: 15,
        padding: 10,
        backgroundColor: 'rgba(200,105,155,0.8)',
        borderRadius: 10
    },
    boutton_container: {
        margin: 15
    },
    textInput: {
        borderWidth: 2,
        borderRadius: 5,
        padding: 3,
        margin: 2,
        fontSize: 15,
        width: '100%'
    }
})

export default CreationTopic
