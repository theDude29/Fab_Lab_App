import React from 'react'
import {View, Text, ImageBackground, StyleSheet, ScrollView} from 'react-native'
import ArticleItem from './ArticleItem'
import loadFile from '../../Model/LoadFile'

class Articles extends React.Component {

    constructor(props) {
        super(props)

        this._majData = this._majData.bind(this)

        this.state = {
            data: loadFile("http://192.168.0.5/test/App/requeteSQL.php", this._majData)
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
            <ScrollView>
                <Text>{this.state.data}</Text>
            </ScrollView>
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
