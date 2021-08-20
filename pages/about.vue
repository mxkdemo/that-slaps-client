<template>
    <v-container class="article-content-container">
      <v-row class="center">
          <v-col cols="12" class="mb-10" align="center" justify="center">
              <h1 class="that-slaps-font page-header-font">ABOUT</h1>
          </v-col>
      </v-row>


    <v-row align="center" justify="center" v-if="!$apollo.loading && about" v-cloak>
      <v-col xs="12" sm="10" md="10" lg="8" class="justify-center align-center text-center">
        <div class="article-content-font" v-html="$md.render(about)"></div>
      </v-col>
    </v-row> 


    </v-container>    
</template>

<script>
import aboutQuery from '~/apollo/queries/global/about'

export default {
    apollo: {
        about: {
            prefetch: true,
            query: aboutQuery,
            update(data) {
                return data.global.about
            }
        },
    },
}
</script>

<style>

</style>