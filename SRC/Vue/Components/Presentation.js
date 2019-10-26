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
        'matrix': require('../ressources/police/matrix.ttf'),
      });

      this.setState({ fontLoaded: true });
    }

    render() {
        return (
            <ImageBackground
                style={styles.image}
                source={require('../ressources/images/presentation.jpg')}
            >
                <View style={styles.main_container}>
                {
                    this.state.fontLoaded ? (
                        <Text style={styles.default_text}>Bienvenu dans l application du fab lab !</Text>
                    ) : null
                }
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
    default_text: {
        color: "white",
        fontSize: 30,
        fontFamily: 'matrix'
    },
    main_container: {
        margin: 20,
        padding: 15,
        backgroundColor: 'rgba(100,100,100,0.5)',
        borderRadius: 20,
    }
})

export default Presentation
