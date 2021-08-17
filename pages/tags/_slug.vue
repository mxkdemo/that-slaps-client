<template>
<v-row>
     <v-col cols="12" class="mb-10 sidebar-break">  
          <v-row class="center">
          <v-col cols="12" class="mb-10" align="center" justify="center">
              <h1 class="article-header-font page-header-font">{{this.$route.params.slug.toUpperCase()}}</h1>
          </v-col>
      </v-row>
          <Nuxt />          
        </v-col>

    <v-col cols="12" v-for="item in articles" :key="item.title" class="mb-10">
         <ArticleCard v-if="articles.length > 0" :article="item" />      
    </v-col>   
    <v-col cols="12" class="text-center">
        <h1 v-if="articles && articles.length == 0">NO ARTICLES</h1>  
    </v-col>
</v-row>   
</template>

<script>
import articlesByTag from '~/apollo/queries/article/articlesByTag'

export default {
    apollo: {
        articles: {
            prefetch: true,
            query: articlesByTag,
            variables() {
                return { tag: this.$route.params.slug }
            }
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

<style>

</style>