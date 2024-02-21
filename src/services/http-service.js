import axios from "axios";
// import Words from "./../resources/words";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    //logger.log(error);
    // toast.error(Words.unhandled_exception);
  }


  console.log("Erorrr ====>" , error);

  return Promise.reject(error);
});

const service = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default service;
