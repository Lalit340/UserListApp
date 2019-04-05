

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import * as data from './User.json';

export default class UsersList extends Component {

  static navigationOptions = {
    title: "USER'S INFO",
    headerTitleStyle: { color: 'red' },
    headerStyle: { backgroundColor: 'cyan' }

  }

  render() {
    let user = this.props.navigation.state.params.inform;
    let array = [], i;
    let fName, lName, age, phNo, city;
    array = data.usersInfo;

    for (i in array) {
      if (user === array[i].firstName + ' ' + array[i].lastName) {
        fName = 'First Name : ' + array[i].firstName;
        lName = 'Last Name : ' + array[i].lastName;
        age = 'Age : ' + array[i].age;
        phNo = 'phone number : ' + array[i].phNumber;
        city = 'City : ' + array[i].city;
      }
    }

    return (
      <View style={styles.container}>
        <View style={styles.RectangleShapeView}>
          <Text style={styles.userItem}>{fName}</Text>
          <Text style={styles.userItem}>{lName}</Text>
          <Text style={styles.userItem}>{age}</Text>
          <Text style={styles.userItem}>{phNo}</Text>
          <Text style={styles.userItem}>{city}</Text>
        </View>

      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  RectangleShapeView: {
    justifyContent: 'center',
    marginTop: 15,
    height: 200,
    marginLeft: 15,
    marginRight: 15,
    padding: 12,
    backgroundColor: 'lightblue',
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8
  },

  userItem: {
    marginTop: 10,
    fontSize: 15,
    color: 'red',
    fontWeight: 'bold',
  },

});

AppRegistry.registerComponent('UserList', () => UsersList);
