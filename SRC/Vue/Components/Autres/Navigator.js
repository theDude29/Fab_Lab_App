import React from 'react'
import {Image, StyleSheet, TouchableOpacity, Dimensions} from 'react-native'

class Navigator extends React.Component {

    constructor(props) {
    super(props)

    this.navigation = this.props.navigation
  }


    render() {
        return (
            <TouchableOpacity
                style={styles.main_container}
                onPress={this.navigation.openDrawer}
            >
                <Image style={styles.image} source={require('../../ressources/icon/list.png')} />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        width: (Dimensions.get('window').width / 8),
        height: (Dimensions.get('window').width / 8)
    },
    main_container: {
        width: (Dimensions.get('window').width / 8) + 10,
        height: (Dimensions.get('window').width / 8) + 10,
        backgroundColor: 'rgba(100,100,200,0.5)',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    }
})

export default Navigator
