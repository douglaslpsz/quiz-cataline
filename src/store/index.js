import { createStore } from "vuex";
import { faqCategories } from '@/utils/db.json'

export default createStore({
  state: {
    faq: []
  },
  mutations: {
    SET_FAQ(state, faq) {
      state.faq = faq
    }
  },
  actions: {
    fetchFaq(context) {
      const faq = faqCategories
      context.commit('SET_FAQ', faq)
    }
  },
  getters: {
    $allFaqs(state) {
      return state.faq
    },
    $faqById: (state) => (id) => {
      return state.faq.find(x => x.id === id)
    },
    $faqQuestion: (state) => (idItem, idQuestion) => {
      let item = state.faq.find(x => x.id === idItem);
      const question = item.questions.find(x => x.id === idQuestion);
      return question;
    }
  },
});
