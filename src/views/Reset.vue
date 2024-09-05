<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h2 class="text-center mb-4">重設密碼</h2>
        <form @submit.prevent="submitForm">
          <!-- New Password -->
          <div class="mb-3">
            <label for="newPassword" class="form-label">新密碼</label>
            <input
              type="password"
              id="newPassword"
              v-model="newPassword"
              class="form-control"
              :class="{ 'is-invalid': newPasswordError }"
              placeholder="請輸入新密碼"
              required
            />
            <div class="invalid-feedback" v-if="newPasswordError">{{ newPasswordError }}</div>
          </div>

          <!-- Confirm New Password -->
          <div class="mb-3">
            <label for="confirmPassword" class="form-label">確認新密碼</label>
            <input
              type="password"
              id="confirmPassword"
              v-model="confirmPassword"
              class="form-control"
              :class="{ 'is-invalid': confirmPasswordError }"
              placeholder="請再次輸入新密碼"
              required
            />
            <div class="invalid-feedback" v-if="confirmPasswordError">{{ confirmPasswordError }}</div>
          </div>

          <!-- Submit Button -->
          <button type="submit" class="btn btn-primary w-100">重設密碼</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newPassword: '',
      confirmPassword: '',
      newPasswordError: '',
      confirmPasswordError: '',
    };
  },
  methods: {
    validateForm() {
      let isValid = true;
      this.newPasswordError = '';
      this.confirmPasswordError = '';

      // Password validation
      if (this.newPassword.length < 6) {
        this.newPasswordError = '密碼必須至少 6 個字符';
        isValid = false;
      }

      // Confirm Password validation
      if (this.newPassword !== this.confirmPassword) {
        this.confirmPasswordError = '密碼與確認密碼不一致';
        isValid = false;
      }

      return isValid;
    },
    submitForm() {
      if (this.validateForm()) {
        // 這裡可以加入提交新密碼到後端的邏輯
        alert('密碼重設成功！');
      }
    },
  },
};
</script>
