import React from 'react'
import {View, Text, StyleSheet, ImageBackground, ScrollView} from 'react-native'
import * as Font from 'expo-font' ;
import * as InfoPresentation from '../../../Controleur/infoPresentation'

class Presentation extends React.Component {

    constructor(props) {
    super(props)

    this.state = {
      fontLoaded: false,
      description_app: ""
    }

    this._chargerDescription = this._chargerDescription.bind(this)
    this._chargerDescription()
    }

    render() {
        return (
            <ImageBackground style={styles.image} source={require('../../ressources/images/presentation.jpg')}>
            <ScrollView>
            {
                this.state.fontLoaded ? (
                    <View style={styles.main_container}>
                        <Text style={styles.title_text}>Bienvenue dans l'application du fab lab !</Text>
                        <Text style={styles.default_text}>{this._displayDescription()}</Text>
                    </View>
                    ) : null
            }
            </ScrollView>
            </ImageBackground>
        )
    }

    _displayDescription() {
        return (
            <Text>{this.state.description_app + '\n'}</Text>
        )
    }

    _chargerDescription() {
        InfoPresentation.getDescription().then(data => {
          this.setState({
            description_app: data[0].description_app
          })
      })
  }

    async componentDidMount() {
        await Font.loadAsync({
          //'futuriste': require('../ressources/police/future_weknow/FUTURE.otf'),
        });

        this.setState({ fontLoaded: true });
      }
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%'
    },
    title_text: {
        color: "cyan",
        fontSize: 35,
    },
    default_text: {
        color: "white",
        fontSize: 25,
    },
    main_container: {
        margin: 20,
        padding: 15,
        backgroundColor: 'rgba(100,100,100,0.5)',
        borderRadius: 20,
    }
})

export default Presentation
