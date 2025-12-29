import axios from "axios";

const api = axios.create({
  baseURL: "https://chatify-api.up.railway.app",
  withCredentials: true,
});

let csrfToken = null;


export async function initCsrf() {
  if (!csrfToken) {
    const res = await api.patch("/csrf");
    csrfToken = res.data.csrfToken;
  }
  return csrfToken;
}


export async function registerUser(userData) {
  await initCsrf();

  const res = await api.post(
    "/auth/register",
    userData,
    {
      headers: {
        "X-CSRF-Token": csrfToken,
      },
    }
  );

  return res.data;
}


export async function loginUser(username, password) {
  await initCsrf();

  const res = await api.post(
    "/auth/token",
    { username, password },
    {
      headers: {
        "X-CSRF-Token": csrfToken,
      },
    }
  );

  return res.data;
}
