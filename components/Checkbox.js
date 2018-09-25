import React, { Component } from "react";
import { CheckBox } from "react-native-elements";
import { View, Image, StyleSheet } from "react-native";
import { Font } from 'expo'

class Checkbox extends Component {
    constructor(props){
        super(props)

        this.state = {
            isChecked : false,
            fontLoaded: null
        }
    }

    async componentDidMount() {
        await Font.loadAsync({
          'FontAwesome': require('../CustomFonts/FontAwesome.ttf')
        });
        this.setState({fontLoaded: true})

    }

    checked = () => {
        this.setState({ isChecked: !this.state.isChecked})
    }

    render(){
        return(
            <View style={styles.checkboxGroup}>
              <CheckBox
                checked={this.state.isChecked}
                containerStyle={styles.checkbox}
                onPress={this.checked}
              />
              <Image source={this.props.land} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    checkbox: {
        backgroundColor: "rgba(0,0,0,0)",
        borderColor: "rgba(0,0,0,0)"
    },
    checkboxGroup: {
        flexDirection: "row"
    },
    landImages: {
        width: 50,
        height: 50
    }
  });

export default Checkbox