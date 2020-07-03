/**
 * @author Rahul Rajput
 * @email rahul@studiographene.com
 * @create date 2020-05-06 09:51:53
 * @modify date 2020-05-06 09:51:53
 * @desc [Define all your constants here]
 */

const Constants = {
    baseUrl: 'https://baseurl.xyz/',
  };
  
  const NavigationRoutes = {
    Discovery: 'Discovery',
    Profile: 'Profile',
    LoginScreen: 'LoginScreen',
    RegisterScreen: 'RegisterScreen',
    ForgotPasswordScreen: 'ForgotPasswordScreen',
    SplashScreen: 'SplashScreen',
  };
  
  const Colors = {
    glWhite: '#F2F2F2',
    glGrey: '#707070',
    glBlack: '#2F2F2F',
    glOrange: '#FF8C63',
    glButtonOrange: '#FF8C68',
    white: '#FFFFFF',
    glPlaceholder: 'rgba(39, 39, 39, 0.3)',
    glTextLight: 'rgba(39, 39, 39, 0.7)',
    glTextGen: 'rgba(39, 39, 39, 1)',
  };
  
  const Fonts = {
    muliBlack: 'Muli-Black',
    muliBlackItalic: 'Muli-BlackItalic',
    muliBold: 'Muli-Bold',
    muliBoldItalic: 'Muli-BoldItalic',
    muliExtraBold: 'Muli-ExtraBold',
    muliExtraBoldItalic: 'Muli-ExtraBoldItalic',
    muliExtraLight: 'Muli-ExtraLight',
    muliExtraLightItalic: 'Muli-ExtraLightItalic',
    muliLight: 'Muli-Light',
    muliLightItalic: 'Muli-LightItalic',
    muliRegular: 'Muli-Regular',
    muliRegularItalic: 'Muli-RegularItalic',
    muliSemiBold: 'Muli-SemiBold',
    muliSemiBoldItalic: 'Muli-SemiBoldItalic',
  };
  
  const Debug = {
    APILogs: true,
  };
  
  const Numbers = {
    maxPhoneNo: 13,
    minPhoneNo: 6,
    maxContributionPercent: 100,
  };
  const APIParameters = {
    //General
    id: '_id',
    data: 'data',
    userId: 'userId',
    UserId_: 'UserId',
    token: 'token',
    name: 'name',
    description: 'description',
    deviceToken: 'deviceToken',
    deviceId: 'deviceId',
    deviceType: 'deviceType',
  
    //User
    email: 'email',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    countryCode: 'countryCode',
    phoneNumber: 'phoneNumber',
    dateOfBirth: 'dob',
    residency: 'residency',
    nationality: 'nationality',
    receiveMarketing: 'receiveMarketing',
    imageUrl: 'imageUrl',
    referalCode: 'referedByCode',
    referedPhoneNumber: 'referedByPhoneNumber',
    accessCode: 'access_code',
  };
  
  const LoginState = {
    login: 'logged in',
  };
  
  module.exports = {
    Constants,
    NavigationRoutes,
    Colors,
    Fonts,
    Debug,
    Numbers,
    APIParameters,
    LoginState,
  };
  