
import React, { Component } from 'react';
import { AppRegistry, ScrollView, StyleSheet, FlatList, TouchableOpacity, Text, View } from 'react-native';
import * as data1 from './User.json';
console.disableYellowBox = true;


export default class Operation extends Component {

    static navigationOptions = {

        title: 'USER LIST',
        headerTitleStyle: { color: 'red' },
        headerStyle: { backgroundColor: 'yellow' }

    };


    nextScreen(item) {
        this.props.navigation.navigate('User', { inform: item });
    }

    separator = () => {
        return (
            <View style={styles.separator} />

        )
    }

    renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => this.nextScreen(item)}>
                <Text style={styles.itemContainer}>{item}</Text>
            </TouchableOpacity>

        );
    }
    render() {

        var json = data1.usersInfo;
        var arrayJson = [];
        for (let i in json) {
            var info = json[i].firstName + " " + json[i].lastName;
            arrayJson.push(info);
        }

        return (
            <ScrollView>
                <View style={styles.container}>
                    <FlatList
                        data={arrayJson}
                        renderItem={this.renderItem}
                        ItemSeparatorComponent={this.separator}
                    />
                </View>
            </ScrollView>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'purple'
    },
    separator: {
        height: 1,
        width: '100%',
        backgroundColor: 'black'
    },

    itemContainer: {
        padding: 10,
        height: 60,
        fontSize: 20,
        fontWeight: 'bold',
    }

});

AppRegistry.registerComponent('UserList', () => Operation);