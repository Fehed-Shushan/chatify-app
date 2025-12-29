import axios from "axios";

const api = axios.create({
  baseURL: "https://chatify-api.up.railway.app",
  withCredentials: true,
});

export async function getCsrfToken() {
  const response = await api.get("/csrf");
  return response.data.csrfToken;
}

export async function registerUser(userData) {
  const csrfToken = await getCsrfToken();

  const response = await api.post(
    "/auth/register",
    userData,
    {
      headers: {
        "X-CSRF-Token": csrfToken,
      },
    }
  );

  return response.data;
}
