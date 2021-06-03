<template>
  <div class="main-page">
    <div class="heading">
      <div class="image-part">
        <img src="@/assets/images/astronaut.svg" class="logo" />
      </div>
      <div class="text-part">
        <h1 class="text-title">Perguntas frequentes</h1>
        <h3 class="text-content">Escolha a categoria desejada</h3>
      </div>
    </div>
    <ul class="categories">
      <li
        v-for="faq in $allFaqs"
        :key="faq.id"
        class="category-item"
        @click="$emit('openItem', { id: faq.id, component: 'Questions' })"
      >
        <img :src="getImgUrl(faq.icon)"  class="icon" />
        <p>{{ faq.title }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    getImgUrl(pic) {
      return require(`@/assets/images/${pic}`)
    },
  },
  computed: {
    $allFaqs() {
      return this.$store.getters.$allFaqs
    }
  }
}
</script>

<style scoped>
.logo {
  margin-top: 35px;
  width: 242px;
}

.icon {
  width: 1.5rem;
}

.categories {
  max-height: 234px;
  overflow: auto;
}

.category-item {
  display: grid;
  grid-template-columns: 1fr 6fr;
  grid-gap: 15px;
  padding-top: 1rem;
  padding-bottom: 1rem;
  align-content: center;
  padding: 0.875rem 1.875rem;
}

.category-item:hover {
  cursor: pointer;
  background: #3f4452;
  transition: background-color 0.2s ease-in-out;
}

.image-part {
  display: grid;
  justify-content: center;
}

.text-part {
  padding: 1.1rem 1.875rem 1.125rem;
}

.text-title {
  font-size: 1.25rem;
}

.text-content {
  font-size: 0.813rem;
  padding-top: 0.288rem;
}
</style>
