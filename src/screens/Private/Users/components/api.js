import { api } from "../../../../utils";
import { objectToArray } from "../../../../helpers";

const get = async () => {
  const response = await api.get("/users.json");
  return objectToArray(response.data);
};

const post = (user) => {
  return user.data;
};

const like = () => { };

export const usersApi = { get, post, like };
