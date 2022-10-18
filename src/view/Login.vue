<template>
  <div class="login">
    <div class="login-container" data-v-7ea57a1c="">
      <div style="margin: 0 auto; text-align: center">
        <img src="https://noodb.com/_nuxt/img/logo.0deeaf8.png" />
      </div>
      <form>
        <div>
          <label>用户名：</label
          ><input
            type="text"
            class="ant-input custom-input"
            v-model="username"
          />
        </div>
        <div>
          <label>密码：</label
          ><input
            type="password"
            class="ant-input custom-input"
            v-model="password"
          />
        </div>
        <div style="display: flex; width: 300px; margin: 0 auto">
          <div style="flex: 1">
            <button type="button" class="ant-btn" @click="onClear">重置</button>
          </div>
          <div style="flex: 1">
            <button
              type="button"
              class="ant-btn ant-btn-primary"
              @click="onLogin"
            >
              登录
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data: function () {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    onClear() {
      this.username = '';
      this.password = '';
    },
    onLogin() {
      this.$emit('login', {
        username: this.username,
        password: this.password
      });
    }
  }
};
</script>
<style scoped>
.custom-input {
  width: calc(100% - 100px) !important;
  padding-right: 200px;
}
label {
  width: 60px;
  display: inline-block;
  text-align: center;
}
form div {
  padding-top: 10px;
}
.ant-input {
  box-sizing: border-box;
  margin: 0;
  font-variant: tabular-nums;
  list-style: none;
  font-feature-settings: 'tnum';
  position: relative;
  display: inline-block;
  width: 100%;
  min-width: 0;
  padding: 4px 11px;
  color: #000000d9;
  font-size: 14px;
  line-height: 1.5715;
  background-color: #fff;
  background-image: none;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  transition: all 0.3s;
}
.ant-btn {
  line-height: 1.499;
  position: relative;
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  background-image: none;
  box-shadow: 0 2px 0 rgb(0 0 0 / 2%);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  touch-action: manipulation;
  height: 32px;
  padding: 0 15px;
  font-size: 14px;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.65);
  background-color: #fff;
  border: 1px solid #d9d9d9;
}
.ant-btn-primary {
  color: #fff;
  background-color: #1890ff;
  border-color: #1890ff;
  text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
  box-shadow: 0 2px 0 rgb(0 0 0 / 5%);
}
</style>
