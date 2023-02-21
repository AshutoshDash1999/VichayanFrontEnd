import { SET_ALL_NOTIFICATIONS } from "../../constants/notifications/notificationsConst";
let initialState = {
  allNotifications: [],
};

export default function Notification(state = initialState, action) {
  switch (action.type) {
    case SET_ALL_NOTIFICATIONS:
      return { ...state, allNotifications: action.payload };
    default:
      return state;
  }
}
