/**
 * @author Rahul Rajput
 * @email rahul@jigsaw.xyz
 * @create date 2020-05-06 09:55:33
 * @modify date 2020-05-06 09:55:33
 * @desc [Reduce them all]
 */
/* eslint-disable prettier/prettier */
import {
    DISPLAY_USER, CLEAR_DATA
 } from '../Actions';

 const initialState = {
   _showLoader: false,
   _showMessagePopup: false,
   _userData: [],
   _tokenData: []
 };

 const dataReducer = (state = initialState, action) => {
   switch (action.type) {
     case DISPLAY_USER: {
       const newState = Object.assign({}, state, { _userData: action.data });
       return newState;
     }
     case CLEAR_DATA: {
       return initialState;
     }
     default:
       return state;
   }
};

export default dataReducer;
