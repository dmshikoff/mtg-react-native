import React, { Component } from "react";
import { StyleSheet, View, TextInput, ScrollView } from "react-native";

import Container from "../components/Container";
import Button from "../components/Button";
import Label from "../components/Label";

class Login extends Component {
  
    helloWorld() {
    console.log("hello world");
  }

  render() {
    return (
      <ScrollView style={styles.scroll}>
        <Container>
          <Button
            label="Forgot Login/Pass"
            styles={{ button: styles.alignRight, label: styles.label }}
            onPress={this.helloWorld}
          />
        </Container>
        <Container>
          <Label text="Username or Email" />
          <TextInput style={styles.textInput} />
        </Container>
        <Container>
          <Label text="Password" />
          <TextInput secureTextEntry={true} style={styles.textInput} />
        </Container>
        <View style={styles.footer}>
          <Container>
            <Button
              label="Sign In"
              styles={{
                button: styles.primaryButton,
                label: styles.buttonWhiteText
              }}
              onPress={this.helloWorld}
            />
          </Container>
          <Container>
            <Button
              label="CANCEL"
              styles={{ label: styles.buttonBlackText }}
              onPress={this.helloWorld}
            />
          </Container>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scroll: {
    padding: 30,
    flexDirection: "column"
  },
  label: {
    color: "#0d8898",
    fontSize: 20
  },
  alignRight: {
    alignSelf: "flex-end"
  },
  textInput: {
    height: 80,
    fontSize: 30
  },
  buttonWhiteText: {
    fontSize: 20,
    color: "#FFF"
  },
  buttonBlackText: {
    fontSize: 20,
    color: "#595856"
  },
  primaryButton: {
    backgroundColor: "#34A853"
  },
  footer: {
    marginTop: 100
  }
});

export default Login;