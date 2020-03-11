<template>
  <v-app>
    <div class="count-text-wrapper d-flex justify-center">
      <h1 class="pt-12 pb-5">COUNT</h1>
    </div>
    
    <div class="count-integer-wrapper d-flex justify-center font-weight-bold display-4	">
      <p class="pb-8">0</p>
    </div>
    

    <div class="btn-wrapper d-flex justify-center">
      <v-btn class="mx-5" fab dark color="indigo">
        <v-icon dark>mdi-plus</v-icon>
      </v-btn>

      <v-btn class="mx-5" fab dark color="indigo">
        <v-icon dark>mdi-minus</v-icon>
      </v-btn>

    </div>
    
  </v-app>
</template>

<script>
export default {
}
</script>