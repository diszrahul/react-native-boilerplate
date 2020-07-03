/**
 * @author Rahul Rajput
 * @email rahul@studiographene.com
 * @create date 2020-05-06 09:54:27
 * @modify date 2020-05-06 09:54:27
 * @desc [Actions, use wisely]
 */

export const DISPLAY_LOADER = 'DISPLAY_LOADER';
export const DISPLAY_USER = 'DISPLAY_USER';

export function showLoader(bool) {
  return {
    type: DISPLAY_LOADER,
    data: bool,
  };
}
export function showUser(userData) {
  return {
    type: DISPLAY_USER,
    data: {userData: userData},
  };
}
