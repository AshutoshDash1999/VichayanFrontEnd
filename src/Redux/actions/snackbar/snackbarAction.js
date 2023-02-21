import { SET_SNACK_BAR, CLOSE_SNACK_BAR } from "../../constants/snackbar/snackbar";

//   FUNCTION TO CLOSE SNACKBAR
export function closeSnackBar() {
  return {
    type: CLOSE_SNACK_BAR,
  };
}
//   FUNCTION FOR SHOWING SNACK BAR
export function setSnackBar(status, message) {
  return {
    type: SET_SNACK_BAR,
    payload: message,
  };
}
