import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {convertHTMLtoText} from '../../../Controleur/utilitaire'

class FaqItem extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            afficherReponse: false
        }
    }

    _displayReponse() {
        if(this.state.afficherReponse == true) {
            return <Text style={styles.reponse_text}>{this.props.question.answer}</Text>
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
                <Text style={styles.default_text}>{this.props.question.question}</Text>
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
        color: "orange",
        fontSize: 20,
        textDecorationLine: 'underline',
        fontFamily: "CharlemagneStd-Bold"
    },
    reponse_text: {
        color: "orange",
        fontSize: 20,
        marginLeft: 10,
        fontFamily: "CharlemagneStd-Bold"
    },
    main_container: {
        padding: 15,
        margin: 15,
        backgroundColor: 'rgba(20,20,200, 0.5)',
        borderRadius: 10,
    }
})

export default FaqItem
