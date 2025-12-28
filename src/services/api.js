import axios from "axios";

const api = axios.create({
    baseURL: "/api",
    withCredentials: true,
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
    return response.data;
 }