import { SET_EMAIL, SET_LOGIN_INFO } from "../constants/authConst";
let initialState = {
  userInfo: null,
  token: null,
};

export default function postListReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOGIN_INFO:
      return { ...state, userInfo: action.payload.userInfo, token: action.payload.token };
    case SET_EMAIL:
      return { ...state, email: action.payload };
    default:
      return state;
  }
}
