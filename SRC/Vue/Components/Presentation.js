import React from 'react'
import {View, Text, StyleSheet, ImageBackground, ScrollView} from 'react-native'
import * as Font from 'expo-font' ;
import * as InfoPresentation from '../../Controleur/infoPresentation'
import ArticleItem from './ArticleItem'

class Presentation extends React.Component {

    constructor(props) {
    super(props)

    this._majDescription = this._majDescription.bind(this)

    this.state = {
      fontLoaded: false,
      description_app: ""
    }

    InfoPresentation.getDescription(this._majDescription)
  }

  _majDescription(data) {
      this.setState({description_app: data})
  }

    _displayDescription() {
        return (
            <Text>{InfoPresentation.getDescription() + '\n'}</Text>
        )
    }

    render() {
        return (
            <ImageBackground style={styles.image} source={require('../ressources/images/presentation.jpg')}>
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
