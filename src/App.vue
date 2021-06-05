<template>
  <div class="container">
    
    <div class="content">
      <component
      :is="currentPage"
      :id="id"
      :questionId="questionId"
      @openItem="openItem($event)"
      @oldPage="oldPage($event)"/>
    </div>
  </div>
  
</template>

<script>
import Main from "./pages/main"
import Questions from "./pages/questions"
import Asnwer from "./pages/answer"

export default {
  name: "App",
  data() {
    return {
      currentPage: 'Main',
      id: null,
      questionId: null
    }
  },
  components: {
    Main,
    Questions,
    Asnwer,
  },

  methods: {
    openItem(event) {
      this.currentPage = event.component;
      this.id = event.id;

      if(event.questionId) {
        this.questionId = event.questionId;
      } else {
        this.questionId = null;
      }
      
    },
    oldPage(event) {
      this.currentPage = event.component;
    }
  },
  
  created() {
    this.$store.dispatch('fetchFaq')
  }
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