import api from "@/services/api";

const state = {
  user: JSON.parse(localStorage.getItem("user")) || null, // 初始化時檢查 localStorage
  isAuthenticated: !!localStorage.getItem("user"),
};

const mutations = {
  SET_USER(state, user) {
    state.user = user;
    state.isAuthenticated = !!user;
  },
  LOGOUT(state) {
    state.user = null;
    state.isAuthenticated = false;
  },
};

const actions = {
  async login({ commit }, userData) {
    try {
      const response = await api.getUsers();

      const users = response.data;

      // 使用 find() 方法來查找匹配的用戶
      const user = users.find(
        (u) =>
          u.username === userData.username && u.password === userData.password
      );

      if (user) {
        commit("SET_USER", user);
        localStorage.setItem("user", JSON.stringify(user)); // 保存用戶信息到 localStorage
        return user;
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  },
  logout({ commit }) {
    commit("LOGOUT");
  },
};

const getters = {
  user: (state) => state.user,
  isAuthenticated: (state) => state.isAuthenticated,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
