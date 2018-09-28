import React, { Component } from "react";
import Container from "../components/Container";
import Button from "../components/Button";
import FontText from "../components/FontText";
import Checkbox from "../components/Checkbox";
import { images } from "../constants/Lands";

import {
  StyleSheet,
  View,
  TextInput,
  ScrollView
} from "react-native";
import RadioGroup from "react-native-radio-buttons-group";

class Library extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        { label: "Name" },
        { label: "Type" },
        { label: "Subtype" },
        { label: "Text" }
      ]
    };
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.scroll}>
          <Container>
            <Button
              label="Add Card"
              styles={{
                button: styles.addButton,
                label: styles.buttonWhiteText
              }}
              onPress={this.helloWorld}
            >
              <FontText style={{ fontFamily: "Beleren" }}>Add Card</FontText>
            </Button>
          </Container>
          <Container>
            <Button
              styles={{
                button: styles.removeButton,
                label: styles.buttonWhiteText
              }}
              onPress={this.helloWorld}
            >
              <FontText style={{ fontFamily: "Beleren" }}>Remove Card</FontText>
            </Button>
          </Container>
        </View>
        <View style={styles.formBox}>
          <TextInput style={styles.inputFields} name="searchTerm" />
          <Button
            label="Search"
            styles={{
              button: styles.searchButton,
              label: styles.buttonWhiteText
            }}
            onPress={this.helloWorld}
          >
            <FontText style={{ fontFamily: "Beleren" }}>Search</FontText>
          </Button>
          <FontText style={styles.paddingTop}>Filter By:</FontText>
          <RadioGroup flexDirection="row" radioButtons={this.state.data} />
          <FontText style={styles.paddingTop}>Mana Type:</FontText>
          <View>
            {images.map((img, index) => {
                return <Checkbox land={img} key={index}></Checkbox>
            })}
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    paddingTop: 30,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  addButton: {
    width: 150,
    backgroundColor: "#34A853"
  },
  removeButton: {
    width: 150,
    backgroundColor: "#c82a1f"
  },
  searchButton: {
    width: 150,
    backgroundColor: "#afafaf"
  },
  formBox: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  },
  inputFields: {
    height: 50,
    width: "50%",
    fontSize: 35
  },
  formInput: {
    fontSize: 50
  },
  paddingTop: {
    paddingTop: 30,
    fontSize: 20,
    fontFamily: "Beleren"
  },
  radios: {
    flex: 1,
    flexDirection: "row"
  },
  checkbox: {
    backgroundColor: "rgba(0,0,0,0)",
    borderColor: "rgba(0,0,0,0)"
  },
  checkboxGroup: {
      flexDirection: "row"
  }
});

export default Library;

// const mapDispatchToProps = dispatch => bindActionCreators({
//     fontLoader
// }, dispatch);

// export default connect(null, mapDispatchToProps)(Library);
