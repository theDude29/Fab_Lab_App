import React from 'react'
import {View, Text, StyleSheet, ImageBackground, ScrollView, TextInput, TouchableOpacity} from 'react-native'
import Boutton from './Boutton'
import PasConnecte from './PasConnecte'
import MonCompte from './Mon_compte'
import { connect } from 'react-redux'

class AcceuilCompte extends React.Component {

    constructor(props) {
    super(props)

    this._allerALaCreationCompte = this._allerALaCreationCompte.bind(this)
    this._allerALaConnectionCompte = this._allerALaConnectionCompte.bind(this)
  }

  _allerALaCreationCompte() {
      this.props.navigation.navigate('CreationCompte')
  }

  _allerALaConnectionCompte() {
      this.props.navigation.navigate('ConnectionCompte')
}

    render() {
        return (
                this._displayScreenAdapte()
        )
    }

    _displayScreenAdapte () {
        if(this.props.connecte) {
            return <MonCompte />
        }
        else {
            return <PasConnecte connection={this._allerALaConnectionCompte} creation={this._allerALaCreationCompte}/>
        }
    }
}

const mapStateToProps = (state) => {
  return {
      connecte: state.connecte
  }
}

export default connect(mapStateToProps)(AcceuilCompte)
