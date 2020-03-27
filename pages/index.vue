<template>
  <v-app>
    <div class="count-text-wrapper d-flex justify-center">
      <h1 class="pt-12 pb-5">COUNT</h1>
    </div>
    
    <div class="count-integer-wrapper d-flex justify-center font-weight-bold display-4">
      <p class="pb-8">{{$store.state.counter}}</p>
    </div>
    
    <div class="btn-wrapper d-flex justify-center">
      <!-- @clickでクリックしたら発火、incrementを呼び出してcommitする -->
      <v-btn 
        class="mx-5" 
        fab dark 
        color="indigo"
        @click="$store.commit('increment')">
        <v-icon dark>mdi-plus</v-icon>
      </v-btn>

      <!-- @clickでクリックしたら発火、decrementを呼び出してcommitする -->
      <v-btn 
        class="mx-5"
        fab dark
        color="indigo"
        @click="$store.commit('decrement')">
        <v-icon dark>mdi-minus</v-icon>
      </v-btn>
    </div>
  </v-app>
</template>

<script>
// import axios from "axios";

export default {
  //// APIとの通信
  // data() {
  //   return {
  //     counter: [1,2,3,4]
  //   };
  // },
  // methods: {
  //   sendData() {
  //     axios
  //     .post(`http://localhost:8080/counter`, {
  //       counter: this.counter
  //     })
  //     .then(response => {
  //       console.log(response.data)
  //     });
  //   }
  // }
}
</script>