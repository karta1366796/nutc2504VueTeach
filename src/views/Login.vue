<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <h1 class="card-title text-center mb-4">登入</h1>
            <form @submit.prevent="handlerLogin">
              <div class="mb-3">
                <label for="username" class="form-label">用戶名</label>
                <input
                  v-model="username"
                  type="text"
                  id="username"
                  class="form-control"
                  placeholder="輸入用戶名"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">密碼</label>
                <input
                  v-model="password"
                  type="password"
                  id="password"
                  class="form-control"
                  placeholder="輸入密碼"
                  required
                />
              </div>
              <button type="submit" class="btn btn-primary w-100 mb-2">
                登錄
              </button>
            </form>
            <!-- Button trigger modal -->
            <button
              type="button"
              class="btn btn-primary w-100"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              忘記密碼
            </button>

            <!-- Modal -->
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">忘記密碼</h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <form @submit.prevent="submitForm">
                      <div class="mb-3">
                        <label for="email" class="form-label"
                          >請輸入您的 Email</label
                        >
                        <input
                          type="email"
                          id="email"
                          v-model="email"
                          class="form-control"
                          placeholder="請輸入 Email"
                          required
                        />
                      </div>
                    </form>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      關閉
                    </button>
                    <button type="button" class="btn btn-primary" @click="reset">
                      重設密碼
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <p v-if="error" class="text-danger mt-3 text-center">{{ error }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      username: "",
      password: "",
      error: "",
      email: "",
    };
  },
  computed: {
    ...mapGetters("user", ["isAuthenticated"]),
  },
  methods: {
    ...mapActions("user", ["login"]),
    async handlerLogin() {
      try {
        await this.login({
          username: this.username,
          password: this.password,
        });
        this.$router.push("/user-profile");
      } catch (e) {
        this.error = "登錄失敗，請檢查您的帳號和密碼。";
      }
    },
    // 重設密碼
    reset(){

    }
  },
};
</script>

<style scoped>
.container {
  max-width: 800px;
}
.card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
