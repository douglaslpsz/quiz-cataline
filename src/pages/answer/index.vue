<template>
  <div class="answer-page">
    <div class="heading">
      <ArrowButton  @click="$emit('openItem', { id: 1, component: 'Questions' })"/>
      <div class="text-part">
        <h3>{{ $faqQuestion.title }}</h3>
      </div>
    </div>
    <p v-html="$faqQuestion.content" class="text-content" >
    </p>
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
  },
  props: {
    id: {
      type: Number,
      default: null
    },
    questionId: {
      type: Number,
      default: null
    }
  },
  computed: {
    $faqQuestion() {
      return this.$store.getters.$faqQuestion(this.id, this.questionId)
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