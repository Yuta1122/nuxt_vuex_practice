export const state = () => ({
  counter: 0,
  questions: [],
  answer:[]
})

export const mutations = {
  //counterの値を+1するmutation
  increment(state){
      state.counter++
  },
  //counterの値を-1するmutation
  decrement(state){
      state.counter--
  },
  // fetchQuestionによって得られたyaml内の質問と選択肢を、stateのquestionsに書き換える処理
  SET_QUESTION: function(state,question) {
    state.questions=question;
  },
  // fetchAnswerによって得られたおすすめカード情報を、stateのanswerに書き換える処理
  SET_ANSWER: function(state,answer) {
    state.answer=answer;
  }
}

export const action = {
   // Railsと非同期通信を行い、question.ymlの中の質問と選択肢を取ってくる。
    // そのあと、SET_QUESTIONをcommitし、storeの状態を変化させる。
    async fetchQuestion(context) {
      const url = 'http://localhost:8080/questions'
      const result = await axios.get(url);
      context.commit("SET_QUESTION", result.data)
  }
}