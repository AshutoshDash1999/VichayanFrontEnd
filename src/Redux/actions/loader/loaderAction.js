import { SET_LOADER, UNSET_LOADER } from "../../constants/loader/loaderCosnt";
export function setLoader() {
  return {
    type: SET_LOADER,
    payload: true,
  };
}

export function unsetLoader() {
  return {
    type: UNSET_LOADER,
    payload: false,
  };
}
