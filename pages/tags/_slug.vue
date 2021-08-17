<template>
<v-container>
<v-row>
     <v-col cols="12" class="mb-10 sidebar-break">  
          <v-row class="center">
          <v-col cols="12" class="" align="center" justify="center">
              <h1 class="article-header-font" style="font-size:30px">{{this.$route.params.slug.toUpperCase()}}</h1>
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
</v-container>
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
        articles: []
    }),
}
</script>

<style>

</style>