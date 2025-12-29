import axios from "axios";

const api = axios.create({
  baseURL: "https://chatify-api.up.railway.app",
  withCredentials: true,
});

let csrfToken = null;

async function ensureCsrf() {
  if (!csrfToken) {
    const res = await api.patch("/csrf", null, {
      withCredentials: true,
    });
    csrfToken = res.data.csrfToken;
  }
  return csrfToken;
}

// REGISTER
export async function registerUser(userData) {
  const token = await ensureCsrf();

  const response = await api.post(
    "/auth/register",
    userData,
    {
      headers: {
        "X-CSRF-Token": token,
      },
      withCredentials: true,
    }
  );

  return response.data;
}

// LOGIN
export async function loginUser(username, password) {
  const token = await ensureCsrf();

  const response = await api.post(
    "/auth/token",
    { username, password },
    {
      headers: {
        "X-CSRF-Token": token,
      },
      withCredentials: true,
    }
  );

  return response.data;
}
