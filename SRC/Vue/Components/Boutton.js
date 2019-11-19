import React from 'react'
import {Text, StyleSheet, TouchableOpacity} from 'react-native'

class Boutton extends React.Component {

    constructor(props) {
    super(props)
  }


    render() {
        return (
            <TouchableOpacity style={this.props.disabled ? styles.main_container_disabled : styles.main_container}
                onPress={this.props.onPress}
                disabled={this.props.disabled}
            >
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
    },
    main_container_disabled: {
        backgroundColor: 'rgba(100,100,100,0.4)',
        borderRadius: 20,
        padding: 5,
    },
    icon: {
        width: 20,
        height: 20,
        marginTop: 5,
        marginLeft: 5
    },
})

export default Boutton
