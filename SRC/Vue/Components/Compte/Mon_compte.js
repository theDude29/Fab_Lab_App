import React from 'react'
import {View, Text, StyleSheet, ImageBackground, ScrollView, TextInput, TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'

class MonCompte extends React.Component {

    constructor(props) {
    super(props)
  }


    render() {
        return (
            <ImageBackground
                style={styles.image}
                source={require('../../ressources/images/mon_compte.png')}
            >
                <View style={styles.main_container}>
                    <Text>Bienvenu à toi {this.props.pseudo} ! Tu peux maintenant poster des messages sur le forum.</Text>
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
        margin: 20,
        padding: 10,
        backgroundColor: 'rgba(0,100,0,0.2)',
        borderRadius: 20,
    },
})

const mapStateToProps = (state) => {
  return {
      connecte: state.connecte,
      pseudo: state.pseudo
  }
}

export default connect(mapStateToProps)(MonCompte)
