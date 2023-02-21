import { BASE_URL } from "../../../shared/constants/sharedConstants";
import { store } from "../../store/index";
import { setSnackBar } from "../snackbar/snackbarAction";
import { setLoader, unsetLoader } from "../loader/loaderAction";
import { SET_ALL_POSTS } from "../../constants/post/postConst";
import { getToken } from "../authActions";
import axios from "axios";
export const setAllPosts = (payload) => {
  return {
    type: SET_ALL_POSTS,
    payload,
  };
};

export const getAllPosts = () => {
  return (dispatch) => {
    const token = getToken();

    axios.get(`${BASE_URL}dev/api/v1/post`, { headers: { Authorization: `Bearer ${token}` } }).then((res) => {
      const post = res.data.response.reverse();

      dispatch(setAllPosts(post));
    });
  };
};

export const createPost = async (des, image, docs) => {
  if (des === "") {
    store.dispatch(setSnackBar(true, "Please enter title of the post"));
  } else if (image === null) {
    store.dispatch(setSnackBar(true, "Please select an image"));
  } else {
    const token = getToken();
    const formData = new FormData();
    formData.append("images", image);
    formData.append("docs", docs);
    formData.append("text", des);

    try {
      axios({
        method: "post",
        url: `${BASE_URL}dev/api/v1/post`,
        data: formData,
        headers: { "Content-Type": "multipart/form-data", Authorization: `Bearer ${token}` },
      })
        .then(function (response) {
          store.dispatch(getAllPosts());
        })
        .catch(function (response) {});
    } catch (error) {}
  }
};

export const getPostLikes = async (id, callback = () => {}) => {
  const token = getToken();
  axios.get(`${BASE_URL}dev/api/v1/post/like/${id}`, { headers: { Authorization: `Bearer ${token}` } }).then((res) => {
    callback(res);
  });
};

export const getPostComments = async (id, callback = () => {}) => {
  const token = getToken();
  axios.get(`${BASE_URL}dev/api/v1/post/comment/${id}`, { headers: { Authorization: `Bearer ${token}` } }).then((res) => {
    callback(res);
  });
};

export const commentPost = async (id, comment, callback = () => {}) => {
  if (comment.length === 0) {
    store.dispatch(setSnackBar(true, "Please type something"));
    return;
  }
  const token = getToken();
  axios({
    method: "post",
    url: `${BASE_URL}dev/api/v1/post/comment/${id}`,
    data: { comment: comment },
    headers: { Authorization: `Bearer ${token}` },
  })
    .then(function (res) {
      store.dispatch(setSnackBar(true, res.data.message));
      callback(res);
    })
    .catch(function (error) {
      store.dispatch(setSnackBar(true, error.response.data.message));
    });
};
export const likePost = async (id, callback = () => {}) => {
  const token = getToken();
  axios.get(`${BASE_URL}dev/api/v1/post/react/${id}`, { headers: { Authorization: `Bearer ${token}` } }).then((res) => {
    callback(res);
    store.dispatch(setSnackBar(true, res.data.messsage));
  });
};

export const deletePost = async (id, callback = () => {}) => {
  const token = getToken();
  axios({
    method: "delete",
    url: `${BASE_URL}dev/api/v1/post/${id}`,
    headers: { "Content-Type": "multipart/form-data", Authorization: `Bearer ${token}` },
  })
    .then(function (res) {
      store.dispatch(setSnackBar(true, res.data.messsage));
      store.dispatch(getAllPosts());
    })
    .catch(function (response) {});
};
