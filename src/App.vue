<template>
  <div class="container">
    <div class="content">
      <component :is="'Main'"/>
    </div>
  </div>
  
</template>

<script>
import Main from "./pages/main"

export default {
  name: "App",
  components: {
    Main,
  },
};
</script>

<style scoped>
.content {
  color: #f5f6f8;  
  background-image: linear-gradient(
  180deg
  ,#3f4452,#26282c);
  border-radius: 15px;
  box-shadow: 0 8px 21px 3px rgb(0 0 0 / 19%);
  overflow: hidden;
  width: 305px;
  height: 480px;
}
.container{  
  height: 100vh;  
  display: grid;
  justify-content: center;
  align-content: center;
}
</style>