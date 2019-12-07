import axios from 'axios';

const instance = axios.create({
  baseURL: "https://viscgo-sample.firebaseio.com/"
});
;

export default instance;