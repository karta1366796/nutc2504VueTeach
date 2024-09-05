<template>
  <header class="bg-dark text-white p-3">
    <div class="container-fluid">
      <div class="d-flex justify-content-between align-items-center">
        <img
          alt="Vue logo"
          class="logo"
          src="@/assets/logo.svg"
          width="100"
          height="100"
        />
        <nav class="nav">
          <RouterLink class="nav-link text-white" to="/login">Login</RouterLink>
          <RouterLink class="nav-link text-white" to="/register">Register</RouterLink>
          <RouterLink class="nav-link text-white" to="/product"
            >Product</RouterLink
          >
          <RouterLink class="nav-link text-white" to="/cart">Cart</RouterLink>
          <RouterLink class="nav-link text-white" to="/user-profile"
            >User Profile</RouterLink
          >
        </nav>
      </div>
    </div>
  </header>
  <main class="container mt-4">
    <RouterView />
  </main>
</template>

<script>
import { mapActions } from "vuex";

export default {
  created() {
    const user = localStorage.getItem("user");
    if (user) {
      this.$store.commit("user/SET_USER", JSON.parse(user)); // 將用戶信息恢復到 Vuex
    }
  },
};
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
}

nav .nav-link {
  padding: 0 1rem;
  font-size: 16px;
}

nav .nav-link:hover {
  text-decoration: underline;
}

.container {
  max-width: 1200px;
}

@media (min-width: 1024px) {
  header {
    padding-right: 2rem;
  }
}
</style>
