<template>
  <v-app dark>
    <Navbar />
    <v-main>
    <v-container class="article-content-container">  
      <v-row class="justify-space-between">
        <v-col cols="12" xs="12" sm="9" md="9" lg="8" class="mb-10 sidebar-break"> 
          <v-card
            class="mx-auto text-center mb-10"
            justify="center"
            align="center"
            tile
            outlined
          >
            <v-card-subtitle class="text-center article-subheader-font" style="letter-spacing: 2px;">{{this.header + this.$route.params.slug.toUpperCase()}}</v-card-subtitle>
          </v-card>   
          <Nuxt />          
        </v-col>
        <Sidebar :latestArticles="articles" />
      </v-row> 
    </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import latestArticles from '~/apollo/queries/article/latestArticles'

export default {
  apollo: {
      articles: {
          prefetch: true,
          query: latestArticles
      },
  },
  data: () => ({
      api_url:process.env.api_url,
      query: '',
      articles: {}
  }),
  computed: {
    header: function() {
      let head = this.$route.name.replace("-slug","")
      return head == "tags" ? "TAGS - " : "" 
    } 
  }
}
</script>
