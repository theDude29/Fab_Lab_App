import React from 'react'
import {View, Text, ImageBackground, StyleSheet, TouchableOpacity} from 'react-native'
import {convertHTMLtoText} from '../../Controleur/utilitaire'

class FaqItem extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            afficherReponse: false
        }
    }

    _displayReponse() {
        if(this.state.afficherReponse == true) {
            return <Text style={styles.reponse_text}>Réponseeeeeeeeeeeeeeeeeee</Text>
        }
        else {
            return null
        }
    }

    _questionClique() {
        if(this.state.afficherReponse == false) {
            this.setState({afficherReponse: true})
        }
        else {
            this.setState({afficherReponse: false})
        }
    }

    render() {
        return (
            <TouchableOpacity
            style={styles.main_container}
            onPress={() => this._questionClique()}
            >
                <Text style={styles.default_text}>Questionnnnnnnnnnnnnnnnn ?</Text>
                {this._displayReponse()}
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 200,
        padding: 20,
        margin: 25,
        borderWidth: 10
    },
    default_text: {
        color: "black",
        fontSize: 20,
        //fontFamily: 'futuriste'
    },
    reponse_text: {
        color: "black",
        fontSize: 20,
        textDecorationLine: 'underline',
        marginLeft: 10
    },
    main_container: {
        padding: 15,
        margin: 10,
        backgroundColor: 'rgba(200,50,200, 0.2)',
        borderRadius: 10,
    }
})

export default FaqItem
