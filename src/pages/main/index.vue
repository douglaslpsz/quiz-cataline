<template>
  <div class="heading">
    <div class="image-part">
      <img src="@/assets/images/astronaut.svg" class="logo"/>
    </div>
    <div class="text-part">
      <h1 class="text-title"> Perguntas frequentes</h1>
      <h3 class="text-content"> Escolha a categoria desejada</h3>
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

.image-part {
  display: grid;
  justify-content: center;
}

.text-part {
  width: 293px;
  display: grid;
  justify-content: center;
  margin-top: 18px;
}

.text-title {
  font-size: 1.25rem;
}

.text-content {
      font-size: .813rem;
}

</style>