import { SET_ALL_CONNECTIONS, SET_ALL_CONNECTION_REQUEST, SET_ALL_PENDING_USERS, SET_ALL_USERS } from "../../constants/connections/connnectionsConst";
let initialState = {
  allConnections: [],
  allConnectionsRequest: [],
  allPendingRequests: [],
  allUsers: [],
};

export default function postListReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ALL_CONNECTIONS:
      return { ...state, allConnections: action.payload };
    case SET_ALL_CONNECTION_REQUEST:
      return { ...state, allConnectionsRequest: action.payload };
    case SET_ALL_PENDING_USERS:
      return { ...state, allPendingRequests: action.payload };
    case SET_ALL_USERS:
      return { ...state, allUsers: action.payload };
    default:
      return state;
  }
}
