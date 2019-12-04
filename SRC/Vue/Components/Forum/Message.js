import React from 'react'
import {View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image, FlatList} from 'react-native'

class Message extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (
            <View style={this.props.message.auteur == "REMI" ? styles.main_containerA : styles.main_containerB}>
                <View style={this.props.message.auteur == "REMI" ? styles.message_containerA : styles.message_containerB}>
                    <Text>{this.props.message.content}</Text>
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
        padding: 20
    },
    message_containerA: {
        backgroundColor: 'rgba(0,200,0,0.5)',
        borderWidth: 2,
        borderRadius: 15,
        padding: 10
    },
    message_containerB: {
        backgroundColor: 'rgba(0,250,250,0.5)',
        borderWidth: 2,
        borderRadius: 15,
        padding: 10
    }
})

export default Message
