export const state = () => ({
  counter: 0
})

export const mutations = {
  //counterの値を+1するmutation
  increment(state){
      state.counter++
  },
  //counterの値を-1するmutation
  decrement(state){
      state.counter--
  }
}