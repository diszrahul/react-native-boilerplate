/**
 * @author Rahul Rajput
 * @email rahul@studiographene.com
 * @create date 2020-05-06 09:52:09
 * @modify date 2020-05-06 09:52:09
 * @desc [Registration screen]
 */
/* eslint-disable no-return-assign */
/* eslint-disable react-native/no-inline-styles */

import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import UserAPI from '../../../../api/UserAPI';
import {APIParameters, LoginState} from '../../../../constants/Constants';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accessCode: '',
    };
  }

  loginBottomRight() {
    this.props.navigation.navigate('LoginScreen');
  }

  async callAccessCodeAPI() {
    //Start loading view
    // this.props.showLoader(true);

    //Create user paramters dict
    const params = {
      [APIParameters.accessCode]: this.state.accessCode,
    };

    //Call Update Username API
    await new UserAPI().verifyAccessCode(
      params,
      (response) => {
        //Extract data
        const data = response[APIParameters.data];
        // bring in the register screen here
        //Stop loading view
      },
      (error) => {  
        alert(error);
        this.props.showLoader(false);
        // this.props.showMessage(true,Errors.error,error);
      },
    );
  }

  render() {
    return (
      <View style={styles.container}>
       <Text>Register screen</Text>
       <TouchableOpacity onPress={()=>{this.props.navigation.navigate('LoginScreen')}}>
          <Text>Goto Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Discovery')}}>
          <Text>Discovery</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
