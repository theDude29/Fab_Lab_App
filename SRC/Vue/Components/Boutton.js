import React from 'react'
import {View, Text, StyleSheet, ImageBackground, ScrollView, TouchableOpacity} from 'react-native'

class Boutton extends React.Component {

    constructor(props) {
    super(props)
  }


    render() {
        return (
            <TouchableOpacity style={styles.main_container}>
                <Text style={styles.default_text}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    default_text: {
        color: "black",
        fontSize: 20,
        textAlign: 'center'
        //fontFamily: 'futuriste'
    },
    main_container: {
        backgroundColor: 'rgba(0,0,100,0.5)',
        borderRadius: 20,
        padding: 5,
    }
})

export default Boutton
