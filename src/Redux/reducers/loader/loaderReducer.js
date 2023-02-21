import { SET_LOADER, UNSET_LOADER } from "../../constants/loader/loaderCosnt";

const initial_state = {
  open: false,
};

export default function reducer(state = initial_state, action) {
  switch (action.type) {
    case SET_LOADER:
      return (state = { ...state, open: true });
    case UNSET_LOADER:
      return (state = { ...state, open: false });
    default:
      return state;
  }
}
