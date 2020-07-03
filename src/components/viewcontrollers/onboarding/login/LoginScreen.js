/**
 * @author Rahul Rajput
 * @email rahul@studiographene.com
 * @create date 2020-05-06 09:52:02
 * @modify date 2020-05-06 09:52:02
 * @desc [Login Screen]
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import UserAPI from '../../../../api/UserAPI';
import {APIParameters, LoginState} from '../../../../constants/Constants';
import {Errors} from '../../../../constants/Strings';
import Functions from '../../../../helpers/Functions';
import Validations from '../../../../helpers/Validations';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginEmail: '',
      loginPassword: '',
      checkValue: false,
    };
  }

  loginButtonPressed() {
    if (this.checkValues()) {
    
      this.callLoginAPI();
    }
  }
  checkValues = () => {
    const emailValidatinResult = Validations.isEmailValid(this.state.loginEmail);
    const passwordValidatinResult = Validations.isValidPassword(this.state.loginPassword);
  
    if (!emailValidatinResult[0]) {
      console.warn(emailValidatinResult[2]);
      //this.props.showMessage(true,emailValidatinResult[1],emailValidatinResult[2]);
      return false;
    }
    if (!passwordValidatinResult[0]) {
      console.warn(passwordValidatinResult[2]);
      //this.props.showMessage(true,passwordValidatinResult[1],passwordValidatinResult[2]);
      return false;
    }
      return true;
  }

  async callLoginAPI() {
  
    //Start loading view
    // this.props.showLoader(true);

    //Create user paramters dict
    const params = {
      [APIParameters.email]: this.state.loginEmail,
      [APIParameters.password]: this.state.loginPassword,
    };

    //Call Update Username API
    await new UserAPI().login(
      params,
      (response) => {
      
        //Extract data
        const data = response[APIParameters.data];
        const token = data['x-auth-token'];
      
        //Save auth token
        Functions.saveJWTAuth(token);
        Functions.saveLoginState(LoginState.login);

        //Stop loading view
        this.props.showLoader(false);
        this.props.navigation.navigate('GoTabs');
      },
      (error) => {
        this.props.showLoader(false);
        console.warn(Errors.error);
        // this.props.showMessage(true,Errors.error,error);
      },
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Setup done</Text>
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('RegisterScreen')}}>
          <Text>Goto Register</Text>
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
