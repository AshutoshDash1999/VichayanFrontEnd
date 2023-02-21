import axios from "axios";
import { BASE_URL } from "../../../shared/constants/sharedConstants";
import { SET_ALL_NOTIFICATIONS } from "../../constants/notifications/notificationsConst";
import { getToken } from "../authActions";

export const setAllNotifications = (payload) => {
  return {
    type: SET_ALL_NOTIFICATIONS,
    payload,
  };
};

export const getAllNotification = () => {
  return (dispatch) => {
    const token = getToken();
    axios.get(`${BASE_URL}dev/api/v1/notification`, { headers: { Authorization: `Bearer ${token}` } }).then((res) => {
      const notification = res.data.response;
      dispatch(setAllNotifications(notification));
    });
  };
};
