import React from 'react'
import {View, Text, StyleSheet, ImageBackground, ScrollView, TextInput, TouchableOpacity} from 'react-native'
import Boutton from '../Autres/Boutton'
import PasConnecte from './PasConnecte'
import MonCompte from './Mon_compte'
import { connect } from 'react-redux'

class AcceuilCompte extends React.Component {

    constructor(props) {
    super(props)

    this._forceMaj = this._forceMaj.bind(this)
    this._allerALaCreationCompte = this._allerALaCreationCompte.bind(this)
    this._allerALaConnectionCompte = this._allerALaConnectionCompte.bind(this)
  }

  _allerALaCreationCompte() {
      this.props.navigation.navigate('CreationCompte')
  }

  _allerALaConnectionCompte() {
      this.props.navigation.navigate('ConnectionCompte')
  }

  _forceMaj() {
      this.forceUpdate()
  }

    render() {
        return (
            this._displayScreenAdapte()
        )
    }

    _displayScreenAdapte () {
        if(this.props.connecte) {
            return <MonCompte navigation={this.props.navigation}/>
        }
        else {
            return <PasConnecte connection={this._allerALaConnectionCompte} creation={this._allerALaCreationCompte} navigation={this.props.navigation}/>
        }
    }
}

const mapStateToProps = (state) => {
  return {
      connecte: state.connecte
  }
}

export default connect(mapStateToProps)(AcceuilCompte)
