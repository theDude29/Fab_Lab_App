import React from 'react'
import {View, Text, StyleSheet, ImageBackground} from 'react-native'
import * as Font from 'expo-font' ;

class Presentation extends React.Component {

    constructor(props) {
    super(props)
    this.state = {
      fontLoaded: false,
    }
  }

  async componentDidMount() {
      await Font.loadAsync({
        'futuriste': require('../ressources/police/future_weknow/FUTURE.otf'),
      });

      this.setState({ fontLoaded: true });
    }

    _displayDescription() {
        return (
            <Text>Descrioption</Text>
        )
    }

    render() {
        return (
            <ImageBackground
                style={styles.image}
                source={require('../ressources/images/presentation.jpg')}
            >
            {
                this.state.fontLoaded ? (
                    <View style={styles.main_container}>
                        <Text style={styles.default_text}>Bienvenue dans l'application du fab lab !</Text>
                        <Text style={styles.default_text}>{this._displayDescription()}</Text>
                        //<Text style={styles.default_text}>{this._displayLastArticle()}</Text>
                    </View>
                    ) : null
            }
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%'
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
