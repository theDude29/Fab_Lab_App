import React from 'react'
import {View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image, FlatList} from 'react-native'
import moment from 'moment'

class Message extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (
            <View style={this.props.message.auteur == this.props.monPseudo ? styles.main_containerA : styles.main_containerB}>
                <View style={this.props.message.auteur == this.props.monPseudo ? styles.message_containerA : styles.message_containerB}>
                    <Text style={styles.text_content}>{this.props.message.content + '\n'}</Text>
                    <View style={styles.info_container}>
                        <Text style={styles.text_info}>{this.props.message.auteur + " le " + moment(new Date(this.props.message.date)).format('DD/MM/YYYY')}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_containerA: {
        alignItems: 'flex-end',
        padding: 20,
    },
    main_containerB: {
        alignItems: 'flex-start',
        padding: 20,
    },
    message_containerA: {
        backgroundColor: 'rgba(0,200,0,0.5)',
        borderWidth: 2,
        borderRadius: 15,
        padding: 10,
        maxWidth: '80%'
    },
    message_containerB: {
        backgroundColor: 'rgba(0,250,250,0.5)',
        borderWidth: 2,
        borderRadius: 15,
        padding: 10,
        maxWidth: '80%'
    },
    info_container: {
        alignItems: 'flex-end'
    },
    text_info: {
        fontSize: 12
    },
    text_content: {
        fontSize: 18
    }
})

export default Message
