import React from 'react'
import {View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image, FlatList} from 'react-native'
import * as InfoForums from '../../../Controleur/infoForum.js'
import ForumItem from './ForumItem'
import { connect } from 'react-redux'
import WarningPasConnecte from '../Autres/WarningPasConnecte'
import Navigator from '../Autres/Navigator'

class Forum extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            listSujets: undefined
        }

        this._chargerSujets = this._chargerSujets.bind(this)
        this._allerALADiscussion = this._allerALADiscussion.bind(this)

        this._chargerSujets()
    }

    render() {
        setTimeout(this._chargerSujets, 1000*1)

        return (
            <ImageBackground
                style={styles.image}
                source={require('../../ressources/images/forums.jpg')}
            >
            <Navigator navigation={this.props.navigation}/>
                <FlatList
                    style={styles.list}
                  data={this.state.listSujets}
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={({item}) => (
                    <ForumItem
                      sujet={item}
                      onPress={this._allerALADiscussion}
                    />
                  )}
                />

                {this._displayBouttonCreationTopic()}

            </ImageBackground>
        )
    }

    _chargerSujets() {
        InfoForums.getListSujets().then(data => {
            this.setState({listSujets: data})
        })
    }

    _allerALADiscussion(sujet) {
        this.props.navigation.navigate('Discussion', {sujet: sujet})
    }

    _displayBouttonCreationTopic() {
        if(this.props.connecte) {
            return (
                <View>
                    <TouchableOpacity
                        style={styles.add_container}
                        onPress={() => this.props.navigation.navigate('CreationTopic')}
                    >
                        <Image style={styles.icon} source={require('../../ressources/icon/plus.png')} />
                    </TouchableOpacity>
                </View>
            )
        }

        else {
            return (
                <WarningPasConnecte />
            )
        }
    }
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%'
    },
    list: {
        height: '75%'
    },
    icon: {
        width: 64,
        height: 64
    },
    add_container: {
        margin: 25,
        width: 64,
        height: 64
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

const mapStateToProps = (state) => {
  return {
      connecte: state.connecte
  }
}

export default connect(mapStateToProps)(Forum)
