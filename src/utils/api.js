import axios from "axios";

const api = axios.create({
  baseURL: "https://todotask-42572-default-rtdb.firebaseio.com/",
});

export { api };
