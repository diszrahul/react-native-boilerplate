/**
 * @author Rahul Rajput
 * @email rahul@studiographene.com
 * @create date 2020-04-16 13:12:49
 * @modify date 2020-04-16 13:12:49
 * @desc [Root container for app]
 */

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as Actions from '../redux/Actions';

import Root from './Root';

function mapStateToProps(state) {
  return {
    shouldShowLoader: state.dataReducer._showLoader,
  };
}

function mapDispatchToProps(dispatch) {
  const mergedActions = Object.assign({}, Actions);
  return bindActionCreators(mergedActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Root);
