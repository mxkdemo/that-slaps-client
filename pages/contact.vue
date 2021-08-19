<template>
    <v-container class="article-content-container">
      <v-row class="center">
          <v-col cols="12" class="mb-10" align="center" justify="center">
              <h1 class="that-slaps-font page-header-font">CONTACT</h1>
          </v-col>
      </v-row>


    <v-row align="center" justify="center">
      <v-col xs="12" sm="10" md="10" lg="8" class="justify-center align-center text-center">
         <div class="article-content-font">
            {{contact}}
         </div>
      </v-col>
    </v-row> 


    </v-container>    
</template>

<script>
import contactQuery from '~/apollo/queries/global/contact'

export default {
    apollo: {
        contact: {
            prefetch: true,
            query: contactQuery,
            update(data) {
                return data.global.contact
            }
        },
    },
}
</script>

<style>

</style>