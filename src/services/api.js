import axios from "axios";

const api = axios.create({
    baseURL: "/api",
    withCredentials: true,
});


// API UTAN cookies (login)
const authApi = axios.create({
  baseURL: "/api",
});

// hämtar CSRF token
export async function getCsrfToken() {
    const response = await api.patch ("/csrf");
    return response.data.csrfToken;
}

// Register av ny användare
 export async function registerUser(userData) {
    const csrfToken = await getCsrfToken();

    const response = await api.post(
        "/auth/register",
        userData,
        {
            headers : {
                "X-CSRF-Token": csrfToken
            },
            withCredentials: true,
        }
    );
 }

 // Login- hämta JWT
 export async function loginUser(credentials) {
  const response = await authApi.post("/auth/token", credentials);

  return response.data;
}

 
