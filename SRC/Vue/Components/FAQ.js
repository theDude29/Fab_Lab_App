import React from 'react'
import {View, Text, StyleSheet, ImageBackground, FlatList} from 'react-native'
import FaqItem from './FAQItem'
import * as InfoFaq from '../../Controleur/infoFAQ'

class Faq extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            listQuestions: undefined
        }

        this._chargerQuestions = this._chargerQuestions.bind(this)
        this._chargerQuestions()
    }

    render() {
        return (
            <ImageBackground
                style={styles.image}
                source={require('../ressources/images/faq.jpg')}
            >
                <View style={styles.main_container}>
                <FlatList
                    style={styles.list}
                    data={this.state.listQuestions}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => (
                        <FaqItem
                            question={item}
                        />
                    )}
                />
                </View>
            </ImageBackground>
        )
    }

    _chargerQuestions() {
        InfoFaq.getListQuestions().then(data => {
            this.setState({listQuestions: data})
        })
    }
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%'
    },
    main_container: {
        marginTop: 20
    },
    list: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30,
    }
})

export default Faq
