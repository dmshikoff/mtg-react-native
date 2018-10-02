import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'

class AuthLoadingScreen extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount = async => {
        const token = await AsyncStorage.getItem("MTGToken")
        this.props.navigation.navigate(token ? "Home" : "Auth")
    }


}

export default AuthLoadingScreen