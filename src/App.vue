<template>
  <div class="lctool-container" :class="{ 'login-show': isShowLoginModal }">
    <span
      role="img"
      aria-label="close"
      class="anticon anticon-close"
      style="cursor: pointer; float: right"
      v-if="isShowLoginModal"
      @click="
        () => {
          this.isShowLoginModal = false;
        }
      "
    >
      <svg
        focusable="false"
        class=""
        data-icon="close"
        width="1em"
        height="1em"
        fill="currentColor"
        aria-hidden="true"
        viewBox="64 64 896 896"
      >
        <path
          d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"
        ></path>
      </svg>
    </span>
    <div class="menu">
      <perspective
        theme="outline"
        size="30"
        fill="#518486"
        :strokeWidth="3"
        class="icon-item-menu"
        @click="onExtractArticle"
      />
      <div style="width: 100px; display: flex; align-items: center">
        <file-code
          @click="onClickCode"
          theme="outline"
          size="30"
          fill="#518486"
          :strokeWidth="3"
          style="padding: 5px"
          class="icon-item-menu"
        /><engineering-vehicle
          class="icon-main-menu"
          theme="outline"
          size="40"
          fill="#518486"
          :strokeWidth="3"
        />
      </div>
      <upload-two
        theme="outline"
        size="30"
        fill="#518486"
        :strokeWidth="3"
        class="icon-item-menu"
        @click="onClickSync"
      />
    </div>
    <login v-if="isShowLoginModal" @login="onLogin"></login>
  </div>
</template>
<script>
import {
  EngineeringVehicle,
  UploadTwo,
  Perspective,
  FileCode
} from '@icon-park/vue';
import '@icon-park/vue/styles/index.css';
import initLeetCode from './leetcode';
import Login from './view/Login.vue';
import save, {
  saveArticle,
  isLogin,
  setUsernameAndPassword
} from './noodb/noodb';
import dispatch from './util/gMd';
export default {
  name: 'App',
  components: {
    EngineeringVehicle,
    UploadTwo,
    Perspective,
    FileCode,
    Login
  },
  data: function () {
    return {
      hello: 'hello world',
      isActive: false,
      initLeetCode: initLeetCode,
      save: save,
      saveArticle: saveArticle,
      isLogin: isLogin,
      setUsernameAndPassword: setUsernameAndPassword,
      dispatch: dispatch,
      isShowLoginModal: false
    };
  },
  created() {
    console.log('created');
    initLeetCode();
  },
  mounted() {
    console.log('mounted');
  },
  methods: {
    onClickCode() {
      let article = window.leetCodeArticle;
      if (
        !(
          article &&
          article.problemTitle &&
          article.article &&
          article.code &&
          article.leetcodeLang
        )
      ) {
        console.error('获取leetcode代码错误');
        return;
      }
      save(
        article.problemTitle,
        article.article,
        article.code,
        article.leetcodeLang
      ).then((resp) => {
        if (resp.code == 0) {
          window.open('https://noodb.com/blog/' + resp.data, '_blank');
        }
      });
    },
    onExtractArticle() {
      console.log('click extract article mennu');
      let article = dispatch();
      if (!isLogin()) {
        //弹出东西来
        this.isShowLoginModal = true;
      } else {
        article &&
          saveArticle(article.content, article.title).then((resp) => {
            if (resp.code == 0) {
              window.open('https://noodb.com/blog/' + resp.data, '_blank');
            }
          });
      }
    },
    onLogin(event) {
      console.log(event);
      this.setUsernameAndPassword(event.username, event.password);
      let article = dispatch();
      article &&
        saveArticle(article.content, article.title).then((resp) => {
          if (resp.code == 0) {
            window.open('https://noodb.com/blog/' + resp.data, '_blank');
          }
        });
      this.isShowLoginModal = false;
    },
    onClickSync() {
      console.log('click sync mennu');
    }
  }
};
</script>
<style scoped lang="css">
.lctool-container {
  position: fixed;
  right: 0px;
  bottom: 30vh;
  width: 100px;
  z-index: 1000;
}
.lctool-container.login-show {
  right: initial;
  width: 500px;
  background-color: white;
  left: calc(50vw - 250px);
  border: 1px solid silver;
  padding: 20px;
  padding-bottom: 50px;
}
.icon-main-menu,
.icon-item-menu {
  cursor: pointer;
  display: block;
  opacity: 1;
  padding: 5px;
  width: 100px;
}
.icon-item-menu {
  opacity: 0;
}
.menu {
  height: 130px;
}
.login-show .menu {
  display: none;
}
.menu:hover .icon-item-menu {
  opacity: 1;
}
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizelegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
