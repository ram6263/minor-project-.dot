const baseUrl = String(import.meta.env.VITE_BASE_URL);
const userAPI = String(import.meta.env.VITE_USER_URL);
const projectAPI = String(import.meta.env.VITE_PROJECT_URL);
const loginUserAPI = String(import.meta.env.VITE_LOGIN_USER);
const logoutUserAPI = String(import.meta.env.VITE_LOGOUT_USER);
const registerUserAPI = String(import.meta.env.VITE_REGISTER_USER);
const getCurrentUserAPI = String(import.meta.env.VITE_CURRENT_USER);
const getAllProjectsAPI = String(import.meta.env.VITE_GET_ALL_PROJECT_URL);
const getUserProjectsAPI = String(import.meta.env.VITE_GET_USER_PROJECT_URL);
const uploadProjectAPI = String(import.meta.env.VITE_UPLOAD_PROJECT_URL);

export {
    loginUserAPI,
    logoutUserAPI,
    registerUserAPI,
    getCurrentUserAPI,
    getAllProjectsAPI,
    getUserProjectsAPI,
    uploadProjectAPI
}