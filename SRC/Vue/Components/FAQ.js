import React from 'react'
import {View, Text, StyleSheet, ImageBackground, FlatList} from 'react-native'
import FaqItem from './FAQItem'
import * as InfoFaq from '../../Controleur/infoFAQ'

class Faq extends React.Component {

    constructor(props) {
        super(props)

        this._majListQuestions = this._majListQuestions.bind(this)

        this.state = {
            listQuestions: undefined
        }

        InfoFaq.getListQuestions(this._majListQuestions)
    }

    _majListQuestions(data) {
        this.setState({listQuestions: data})
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
