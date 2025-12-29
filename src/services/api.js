import axios from "axios";

const api = axios.create({
  baseURL: "https://chatify-api.up.railway.app",
  withCredentials: true,
});

let csrfToken = null;

// HÄMTAS EN GÅNG PER SESSION
export async function initCsrf() {
  if (!csrfToken) {
    const res = await api.patch("/csrf");
    csrfToken = res.data.csrfToken;
    console.log("CSRF SET:", csrfToken);
  }
}

// REGISTER
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

// LOGIN
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
