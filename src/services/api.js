import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000", // 替換為你的 API 基址
  withCredentials: false, // 這允許跨域請求
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  // 獲取用戶列表
  getUsers(username, password) {
    return apiClient.get("/users", {
      params: {
        username: username,
        password: password,
      },
    });
  },
//   // 獲取單個用戶
//   getUser(id) {
//     return apiClient.get(`/users/${id}`);
//   },
//   // 創建新用戶
//   createUser(userData) {
//     return apiClient.post("/users", userData);
//   },
//   // 更新用戶信息
//   updateUser(id, userData) {
//     return apiClient.put(`/users/${id}`, userData);
//   },
//   // 刪除用戶
//   deleteUser(id) {
//     return apiClient.delete(`/users/${id}`);
//   },
  // 獲取產品列表
  getProducts() {
    return apiClient.get("/products");
  },
};
