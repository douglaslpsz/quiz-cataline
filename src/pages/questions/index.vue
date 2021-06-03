<template>
  <div class="questions-page">
    <div class="heading">
      <div class="icon-part btn-arrow">
          <img src="@/assets/images/arrow-left.svg" class="icon"/>
      </div>
      <div class="text-part">
        <h1 class="text-title">Bootcamp</h1>
        <h3 class="text-content">Selecione uma pergunta</h3>
      </div>
      <div class="icon-part">
        <img src="@/assets/images/rocket.svg" class="icon-logo"/>
      </div>
    </div>

    <ul class="questions">
      <li class="question-item">
        <p>Texto texto texto texto</p>
      </li>
      <li class="question-item">
        <p>Texto texto texto texto</p>
      </li>
      <li class="question-item">
        <p>Texto texto texto texto</p>
      </li>
      <li class="question-item">
        <p>Texto texto texto texto</p>
      </li>
      <li class="question-item">
        <p>Texto texto texto texto</p>
      </li>
      <li class="question-item">
        <p>Texto texto texto texto</p>
      </li>
      <li class="question-item">
        <p>Texto texto texto texto</p>
      </li>
      <li class="question-item">
        <p>Texto texto texto texto</p>
      </li>
      <li class="question-item">
        <p>Texto texto texto texto</p>
      </li>
      <li class="question-item">
        <p>Texto texto texto texto</p>
      </li>
      <li class="question-item">
        <p>Texto texto texto texto</p>
      </li>
      <li class="question-item">
        <p>Texto texto texto texto</p>
      </li>
    </ul>
  </div>
</template>

<script>

export default({
  data() {
    return {
      
    }
  }
})
</script>

<style scoped>

.icon-part {
  display: grid;
  justify-content: center;
  align-items: center;
}

.text-part {
  display: grid;
  justify-content: center;
  align-items: center;
}

.text-title {
  font-size: 1.25rem;
}

.text-content {
  font-size: .813rem;
  padding-top: .288rem;
}

.heading {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  justify-content: center;
  align-content: center;
  padding: 2rem 1.25rem 1.875rem 1.25rem;
  border-bottom: 1px solid #404451;
}

.icon {  
  height: 20px;
}

.icon-logo {
  height: 28px;
}

.questions {
  padding-top: .813rem;
  max-height: 353px;
  overflow: auto;
}

.question-item {
  display: grid;
  grid-template-columns: 6fr;
  grid-gap: 15px;
  padding-top: 1rem;
  padding-bottom: 1rem;
  align-content: center;
  padding: 1rem 1.25rem;
}

.question-item:hover {
  cursor: pointer;
  background: #3F4452;
  transition: background-color .2s ease-in-out;
}

</style>