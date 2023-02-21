import { SET_ALL_POSTS } from "../../constants/post/postConst";
let initialState = {
  postslist: [],
  loading: true,
};

export default function postListReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ALL_POSTS:
      return { ...state, postslist: action.payload, loading: false };
    default:
      return state;
  }
}
