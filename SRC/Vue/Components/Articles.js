import React from 'react'
import {View, Text, ImageBackground, StyleSheet} from 'react-native'
import loadFile from '../../Model/LoadFile'

class Articles extends React.Component {

    constructor(props) {
        super(props)

        this._majData = this._majData.bind(this)

        this.state = {
            data: loadFile("http://remi.perenne.free.fr/site_world_of_colonies/vue/jouer.php", this._majData)
        }
    }

    _majData(data) {
        this.setState({data: data})
    }

    render() {
        return (
            <ImageBackground
                style={styles.image}
                source={require('../ressources/images/articles.jpg')}
            >
                <View style={styles.main_container}>
                <Text>
                    {
                        //this.setState({data: "singe"})
                        this.state.data
                    }
                </Text>
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
        fontFamily: 'futuriste'
    },
    main_container: {
        margin: 20,
        padding: 15,
        backgroundColor: 'rgba(100,100,100,0.5)',
        borderRadius: 20,
    }
})

export default Articles
