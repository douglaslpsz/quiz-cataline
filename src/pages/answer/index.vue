<template>
  <div class="answer-page">
    <div class="heading">
      <div class="icon-part">
        <div class="btn-arrow">
          <img src="@/assets/images/arrow-left.svg" class="icon"/>
        </div>
      </div>
      <div class="text-part">
        <h3>Basecamp é gratuito?</h3>
      </div>
    </div>

    <p class="text-content" >
      O <a href='https://www.cataline.io/basecamp' target='_blank'>Basecamp</a> é o nosso campo de base, onde você encontra cursos gratuitos focados em tudo o que você precisa para ser um ótimo programador e conquistar uma base sólida no assunto.
    </p>
  </div>
</template>

<script>

export default({
  data() {
    return {
    }
  },
})
</script>

<style scoped>

.heading {
  display: grid;
  grid-template-columns: 1fr 4fr;
  justify-content: center;
  align-content: center;
  padding: 2.5rem 1.25rem 1.875rem 1.25rem;
}

.text-part {
  display: grid;
  align-items: center;
  padding-left: 5px;
}

.icon-part {
  display: grid;
  justify-content: center;
  align-items: center;
}

.icon {  
  height: 20px;
}

h3 {
  font-weight: unset;
  color: #f5f6f8;
  font-size: 1rem;
}

.text-content {
  font-size: .813rem;
  color: #f5f6f8;
  padding: 0 1.25rem 1.875rem 1.25rem;
  line-height: 1.25rem;
  max-height: 353px;
  overflow: auto;
}

</style>