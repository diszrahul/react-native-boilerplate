/**
 * @author Rahul Rajput
 * @email rahul@studiographene.com
 * @create date 2020-05-06 09:51:28
 * @modify date 2020-05-06 09:51:28
 * @desc [description]
 */

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as Actions from '../../../redux/Actions';

import Discovery from './Discovery';

function mapStateToProps(state) {
  return {
    _userData: state.dataReducer._userData,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Discovery);
