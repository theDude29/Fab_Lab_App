import React from 'react'
import {View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image, FlatList} from 'react-native'
import Message from './Message'
import {getDiscussion} from '../../../Controleur/infoForum'

class Discussion extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            listMessages: undefined
        }

        this.nom = this.props.navigation.state.params.nom

        this._chargerMessages = this._chargerMessages.bind(this)
        this._chargerMessages()
    }

    render() {

        return (
            <ImageBackground
                style={styles.image}
                source={require('../../ressources/images/fond_messages.jpg')}
            >

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
        getDiscussion(this.nom).then(data => {
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
})

export default Discussion
