import axios from 'axios';

const api = axios.create({
  baseURL: 'YourServerBaseURL/PathToBackendFolder/index.php',
});
export default api;
