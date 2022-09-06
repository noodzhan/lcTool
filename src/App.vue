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
  FileCode,
} from "@icon-park/vue";
import "@icon-park/vue/styles/index.css";
export default {
  name: "App",
  components: {
    EngineeringVehicle,
    UploadTwo,
    Perspective,
    FileCode,
  },
  data: function () {
    return {
      hello: "hello world",
      isActive: false,
    };
  },
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
  },
  methods: {
    onClickCode() {
      console.log("click code mennu");
    },
    onExtractArticle() {
      console.log("click extract article mennu");
    },
    onClickSync() {
      console.log("click sync mennu");
    },
  },
};
</script>
<style scoped lang="css">
.container {
  position: fixed;
  right: 0px;
  bottom: 30vh;
}
.icon-main-menu,
.icon-item-menu {
  cursor: pointer;
  display: block;
  opacity: 1;
  padding: 5px;
}
.icon-item-menu {
  opacity: 0;
}
.menu {
  height: 130px;
  widows: 90px;
}
.menu:hover .icon-item-menu {
  opacity: 1;
}
</style>
