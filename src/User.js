

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import * as data from './User.json';

export default class UserList extends Component {

    static templete = {
        title: 'USERSLIST INFO',
        headerTitleStyle: { color: 'red' },
        headerStyle: { backgroundColor: 'cyan' }

    }

     render(){
         let user = this.props.navigation.state.params.inform ;
        let array = [] , d;
        let fName,lName,age , phNo , city ;
         array = data.usersImfo ;

         for( d in array){
             if(user === array[d].firstName+' '+array[d].lastName){
                fName ='First Name : '+ array[d].firstName ;
                lName ='Last Name : '+array[d].lastName ;
                age   = 'Age : '+array[d].age ;
                phNo  = 'phone number : '+array[d].phNumber ;
                city  = 'City : '+array[d].city ;
             }
         }
     }
}