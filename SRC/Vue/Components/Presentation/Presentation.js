import React from 'react'
import {View, Text, StyleSheet, ImageBackground, ScrollView, WebView} from 'react-native'
import * as InfoPresentation from '../../../Controleur/infoPresentation'
import Navigator from '../Autres/Navigator'
import {convertHTMLtoText, encadreHTML} from '../../../Controleur/utilitaire'
import HTMLView from 'react-native-htmlview'

class Presentation extends React.Component {

    constructor(props) {
    super(props)

        this.state = {
          description_app: ""
        }

        this._chargerDescription = this._chargerDescription.bind(this)
        this._chargerDescription()
    }

    render() {

        return (
            <ImageBackground style={styles.image} source={require('../../ressources/images/presentation.jpg')}>
            <ScrollView>
            <Navigator navigation={this.props.navigation}/>
                    <View style={styles.main_container}>
                        <Text style={styles.title_text}>Bienvenue dans l'application du fab lab !</Text>
                        <HTMLView value={encadreHTML(this.state.description_app)} stylesheet={stylesHTML}/>
                    </View>
            </ScrollView>
            </ImageBackground>
        )
    }

    _chargerDescription() {
        InfoPresentation.getDescription().then(data => {
          this.setState({
            description_app: data[0].description_app
          })
      })
  }
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%'
    },
    title_text: {
        color: "rgb(250,250,200)",
        fontSize: 35,
        fontFamily: "CharlemagneStd-Bold"
    },
    main_container: {
        margin: 20,
        padding: 15,
        backgroundColor: 'rgba(100,100,100,0.5)',
        borderRadius: 20,
    },
})

const stylesHTML = StyleSheet.create({
    p: {
        color: "white",
        fontSize: 30,
        fontFamily: "CharlemagneStd-Bold"
    },
    a: {
        color: 'cyan',
        fontFamily: "CharlemagneStd-Bold"
    }
})

export default Presentation
