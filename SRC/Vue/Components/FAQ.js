import React from 'react'
import {View, Text, StyleSheet, ImageBackground} from 'react-native'
import FaqItem from './FAQItem'

class Faq extends React.Component {
    render() {
        return (
            <ImageBackground
                style={styles.image}
                source={require('../ressources/images/faq.jpg')}
            >
                <View style={styles.main_container}>
                    <FaqItem />
                    <FaqItem />
                    <FaqItem />
                    <FaqItem />
                    <FaqItem />
                    <FaqItem />
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
    }
})

export default Faq
