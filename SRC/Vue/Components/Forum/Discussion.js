import React from 'react'
import {View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image, FlatList} from 'react-native'
import Message from './Message'

class Discussion extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (
            <ImageBackground
                style={styles.image}
                source={require('../../ressources/images/fond_messages.jpg')}
            >
                <Message monMessage={true}/>
                <Message monMessage={false}/>
                <Message monMessage={false}/>
                <Message monMessage={true}/>

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
})

export default Discussion
