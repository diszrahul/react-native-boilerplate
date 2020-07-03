/**
 * @author Rahul Rajput
 * @email rahul@studiographene.com
 * @create date 2020-04-16 13:18:59
 * @modify date 2020-04-16 13:18:59
 * @desc [Container for SplashScreen]
 */

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as Actions from '../../../../redux/Actions';

import SplashScreen from './SplashScreen';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);