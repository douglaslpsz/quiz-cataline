<template>
  <div class="heading">
    <div class="image-part">
      <img src="@/assets/images/astronaut.svg" class="logo"/>
    </div>
    <div class="text-part">
      <h1 class="text-title"> Perguntas frequentes</h1>
      <h3 class="text-content"> Escolha a categoria desejada</h3>
    </div>

    <div class="categories-div">
      <ul class="categories">
        <li class="category-item">
          <img src="@/assets/images/rocket.svg" class="icon"/>
          <p>Item</p>
        </li>
        <li class="category-item">
          <img src="@/assets/images/rocket.svg" class="icon"/>
          <p>Item</p>
        </li>
        <li class="category-item">
          <img src="@/assets/images/rocket.svg" class="icon"/>
          <p>Item</p>
        </li>
        <li class="category-item">
          <img src="@/assets/images/rocket.svg" class="icon"/>
          <p>Item</p>
        </li>
      </ul>
    </div>

  </div>
  
</template>

<script>


export default ({
  data() {
    return {
    }
  },
})
</script>

<style scoped>
.heading{
  
}

.logo {
  margin-top: 35px;
  width: 242px;
}

.icon {
  width: 1.5rem;
}

.categories-div {
  margin: 0px 1.875rem;
}

.category-item {
  display: grid;
  grid-template-columns: 1fr 6fr;
  grid-gap: 15px;
  padding-top: 1rem;
  padding-bottom: 1rem;
  align-content: center;
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
  font-size: .813rem;
  padding-top: .288rem;
}

</style>