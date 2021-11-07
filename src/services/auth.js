import { API_BASE_URL } from "../config";

function signIn({ email, password }) {
  return fetch(`${API_BASE_URL}/login`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}

function signUp({ email, username, password }) {
  return fetch(`${API_BASE_URL}/register`, {
    method: "POST",
    body: JSON.stringify({ email, username, password }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}

function getInfoUser(username) {
  return fetch(`${API_BASE_URL}/user/${username}`)
    .then((res) => res.json())
    .then((data) => data.data);
}

export { signIn, signUp, getInfoUser };
