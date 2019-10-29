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
            <Text>{this.state.description_app + '\n'}</Text>
        )
    }

    _displayLastArticle() {
        return (
            <View>
                <Text style={styles.default_text}>Dernier article: </Text>
                {InfoPresentation.getLastArticle()}
            </View>
        )
    }

    render() {
        return (
            <ImageBackground
                style={styles.image}
                source={require('../ressources/images/presentation.jpg')}
            >
            <ScrollView>
            {
                this.state.fontLoaded ? (
                    <View style={styles.main_container}>
                        <Text style={styles.title_text}>Bienvenue dans l'application du fab lab !</Text>
                        <Text style={styles.default_text}>{this._displayDescription()}</Text>
                        {this._displayLastArticle()}
                    </View>
                    ) : null
            }
            </ScrollView>
            </ImageBackground>
        )
    }

    async componentDidMount() {
        await Font.loadAsync({
          'futuriste': require('../ressources/police/future_weknow/FUTURE.otf'),
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
        fontFamily: 'futuriste',
        fontSize: 40
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

export default Presentation
