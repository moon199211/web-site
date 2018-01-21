/**
 * action app
 */

export const MOBILE_STATE = 'MOBILE_STATE';

export function mobileChange (state) {
  return {
    type: MOBILE_STATE,
    state
  }
}; 