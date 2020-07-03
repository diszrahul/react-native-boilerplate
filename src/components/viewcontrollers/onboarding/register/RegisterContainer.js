/**
 * @author Rahul Rajput
 * @email rahul@studiographene.com
 * @create date 2020-04-16 13:18:40
 * @modify date 2020-04-16 13:18:40
 * @desc [Container for RegisterScreen]
 */

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as Actions from '../../../../redux/Actions';

import RegisterScreen from './RegisterScreen';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);
