/**
 * reducer login
 */
import { appAction } from 'src/action/'

const {
  MOBILE_STATE
} = appAction

const initialState = {
  isMobile: false
};

export default function login (state = initialState, action={}) {
  switch (action.type) {
    case MOBILE_STATE:
      return Object.assign({}, initialState, {isMobile: action.state});
    default:
      return state;
  }
}