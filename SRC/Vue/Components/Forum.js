import React from 'react'
import {View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image, FlatList} from 'react-native'
import * as InfoForums from '../../Controleur/infoForum.js'
import ForumItem from './ForumItem'

class Forum extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            listSujets: undefined
        }

        this._chargerSujets = this._chargerSujets.bind(this)
        this._chargerSujets()
    }

    render() {
        return (
            <ImageBackground
                style={styles.image}
                source={require('../ressources/images/forums.jpg')}
            >
                <FlatList
                  data={this.state.listSujets}
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={({item}) => (
                    <ForumItem
                      sujet={item}
                    />
                  )}
                />

                <View style={styles.containerA}>
                    <TouchableOpacity
                        style={styles.add_container}
                        onPress={() => this.props.navigation.navigate('CreationTopic')}
                    >
                        <Image style={styles.icon} source={require('../ressources/icon/plus.png')} />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }

    _chargerSujets() {
        InfoForums.getListSujets().then(data => {
            this.setState({listSujets: data})
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
    add_container: {
        margin: 25,
    },
    containerA: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    default_text: {
        color: "white",
        fontSize: 30,
        fontFamily: 'futuriste'
    },
    main_container: {
        margin: 20,
        padding: 15,
        backgroundColor: 'rgba(100,100,100,0.5)',
        borderRadius: 20,
    }
})

export default Forum
