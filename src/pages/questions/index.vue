<template>
  <div class="questions-page">
    <div class="heading">
      <ArrowButton/>
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

import ArrowButton from "@/components/arrowButton";

export default({
  data() {
    return {
      
    }
  },
  components: {
    ArrowButton
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