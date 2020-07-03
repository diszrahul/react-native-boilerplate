/**
 * @author Rahul Rajput
 * @email rahul@studiographene.com
 * @create date 2020-04-16 13:18:59
 * @modify date 2020-04-16 13:18:59
 * @desc [Container for LoginScreen]
 */

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as Actions from '../../../../redux/Actions';

import LoginScreen from './LoginScreen';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
