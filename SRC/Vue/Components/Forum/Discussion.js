import React from 'react'
import {View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image, FlatList} from 'react-native'
import Message from './Message'
import {getDiscussion} from '../../../Controleur/infoForum'
import moment from 'moment'

class Discussion extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            listMessages: undefined
        }

        this.sujet = this.props.navigation.state.params.sujet

        this._chargerMessages = this._chargerMessages.bind(this)
        this._chargerMessages()
    }

    render() {

        return (
            <ImageBackground
                style={styles.image}
                source={require('../../ressources/images/fond_messages.jpg')}
            >

            <View style={styles.title_container}>
                <Text style={styles.title_text}>{this.sujet.nom + " par " + this.sujet.auteur + " le " + moment(new Date(this.sujet.date)).format('DD/MM/YYYY')}</Text>
            </View>

            <FlatList
                style={styles.list}
              data={this.state.listMessages}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({item}) => (
                <Message
                    message={item}
                />
              )}
            />

                <View>
                    <TouchableOpacity
                        style={styles.newMessage_container}
                        //onPress={() => this.props.navigation.navigate('CreationTopic')}
                    >
                        <Image style={styles.icon} source={require('../../ressources/icon/speech-bubble.png')} />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }

    _chargerMessages() {
        getDiscussion(this.sujet.nom).then(data => {
            this.setState({listMessages: data})
        })
    }
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%'
    },
    icon: {
        width: 64,
        height: 64
    },
    newMessage_container: {
        margin: 25,
        width: 64,
        height: 64
    },
    list: {
        height: '75%'
    },
    title_text: {
        fontSize: 20,
        textAlign: 'center'
    },
    title_container: {
        backgroundColor: 'rgba(200,100,0,0.5)',
        borderWidth: 3,
        margin: 20,
        padding: 10
    }
})

export default Discussion
