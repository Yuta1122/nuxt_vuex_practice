<template>
  <v-app>
   <div class="d-flex justify-center mx-3">
        <v-card class="mt-12" width="95%">
          <!-- ----質問の描画---- -->
          <v-card-title class="d-flex justify-center pt-10">質問文</v-card-title>
             <!------ 選択肢の描画 -------->
             <div class="d-flex justify-center">
              <v-btn
                width="230"
                height="50"
                rounded
                class="cyan accent-2 mb-8"
              >選択肢</v-btn> 
             </div>
              
              <div class="d-flex justify-center">
              <v-btn
                width="230"
                height="50"
                rounded
                class="cyan accent-2 mb-8"
              >選択肢</v-btn>  
              </div>

              <div class="d-flex justify-center">
              <v-btn
                width="230"
                height="50"
                rounded
                class="cyan accent-2 mb-8"
              >選択肢</v-btn>  
              </div>

              <div class="d-flex justify-center">
              <v-btn
                width="230"
                height="50"
                rounded
                class="cyan accent-2 mb-8"
              >選択肢</v-btn>  
              </div>
              <!-- ----- 選択肢(終了) ------  -->
        </v-card>
      </div>
  </v-app>
</template>

<script>
export default {
}
</script>