<template>
  <div class="container">
    {{hello}}
  </div>
</template>
<script>
export default {
  name: "App",
  data: function (){
    return {
      hello: 'hello world'
    }
  },
  created() {
    console.log('created');
  },
  mounted() {
    console.log('mounted');
  }
};
</script>
<style scoped>
.login {
  width: 200px;
  height: 200px;
  border: 1px solid red;
}
</style>
