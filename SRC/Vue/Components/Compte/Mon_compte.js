import React from 'react'
import {View, Text, StyleSheet, ImageBackground} from 'react-native'
import { connect } from 'react-redux'
import Boutton from '../Autres/Boutton'
import Navigator from '../Autres/Navigator'

class MonCompte extends React.Component {

    constructor(props) {
    super(props)

    this._deconnection = this._deconnection.bind(this)

    this.navigation = this.props.navigation
  }

  _deconnection() {
      var action = {type: "DECONNECTION"}
      this.props.dispatch(action)
  }

    render() {
        return (
            <ImageBackground
                style={styles.image}
                source={require('../../ressources/images/mon_compte.png')}
            >
            <Navigator navigation={this.navigation}/>
                <View style={styles.main_container}>
                    <Text style={styles.default_text}>Bienvenu à toi {this.props.pseudo} ! Tu peux maintenant poster des messages sur le forum.</Text>
                    <Text style={styles.default_text}>{'\n'}Clique sur le bouton en dessous pour te déconnecter.</Text>
                    <Boutton title="Se déconnecter" onPress={this._deconnection} />
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
    default_text: {
        fontSize: 20
    }
})

const mapStateToProps = (state) => {
  return {
      connecte: state.connecte,
      pseudo: state.pseudo
  }
}

export default connect(mapStateToProps)(MonCompte)
