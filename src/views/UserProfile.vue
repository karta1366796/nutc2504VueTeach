<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-body">
        <h1 class="card-title text-center">用戶個人信息</h1>
        <hr />
        <p class="card-text"><strong>用戶名:</strong> {{ user.username }}</p>
        <p class="card-text"><strong>電子郵件:</strong> {{ user.email }}</p>
        <div class="text-center">
          <button class="btn btn-danger mt-3" @click="handleLogout">登出</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState('user', ['user']),
  },
  methods: {
    ...mapActions('user', ['logout']),
    handleLogout() {
      this.logout();
      this.$router.push({ name: 'Login' });
    }
  },
  created() {
    if (!this.user) {
      this.$router.push({ name: 'Login' });
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 600px;
}

.card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.card-title {
  font-size: 1.8rem;
  font-weight: bold;
}

.card-text {
  font-size: 1.2rem;
}

.btn-danger {
  background-color: #dc3545;
  border-color: #dc3545;
}

.btn-danger:hover {
  background-color: #c82333;
  border-color: #bd2130;
}
</style>
