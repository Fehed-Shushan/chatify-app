import axios from "axios";

const api = axios.create({
  baseURL: "https://chatify-api.up.railway.app",
  withCredentials: true,
});

// CSRF
export async function getCsrfToken() {
  const response = await api.patch("/csrf", null, {
    withCredentials: true,
  });
  return response.data.csrfToken;
}

// REGISTER
export async function registerUser(userData) {
  const csrfToken = await getCsrfToken();

  const response = await api.post(
    "/auth/register",
    userData,
    {
      headers: {
        "X-CSRF-Token": csrfToken,
      },
      withCredentials: true,
    }
  );

  return response.data;
}

// LOGIN
export async function loginUser(username, password) {
  const csrfToken = await getCsrfToken();

  const response = await api.post(
    "/auth/token",
    { username, password },
    {
      headers: {
        "X-CSRF-Token": csrfToken,
      },
      withCredentials: true,
    }
  );

  return response.data;
}
