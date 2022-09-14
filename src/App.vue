<template>
  <div class="container">
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
import save, { saveArticle } from './noodb/noodb';
import dispatch from './util/gMd';
export default {
  name: 'App',
  components: {
    EngineeringVehicle,
    UploadTwo,
    Perspective,
    FileCode
  },
  data: function () {
    return {
      hello: 'hello world',
      isActive: false,
      initLeetCode: initLeetCode,
      save: save,
      saveArticle: saveArticle,
      dispatch: dispatch
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
      saveArticle(article.content, article.title).then((resp) => {
        if (resp.code == 0) {
          window.open('https://noodb.com/blog/' + resp.data, '_blank');
        }
      });
    },
    onClickSync() {
      console.log('click sync mennu');
    }
  }
};
</script>
<style scoped lang="css">
.container {
  position: fixed;
  right: 0px;
  bottom: 30vh;
  width: 100px;
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
.menu:hover .icon-item-menu {
  opacity: 1;
}
</style>
