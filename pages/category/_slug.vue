<template>
<v-container class="article-content-container">


    <div style="max-width:925px" class="mx-auto" ></div>
<v-row justify="center">
     <v-col cols="12" class="">  
          <v-row class="center">
          <v-col cols="12" class="" align="center" justify="center">
              <h1 class="article-header-font" style="font-size:30px">{{this.$route.params.slug.toUpperCase()}}</h1>
          </v-col>
      </v-row>
                 
        </v-col>


        <TopPickCategories />
</v-row> 

<div style="max-width:925px" class="mx-auto" >
<v-row justify="center">
    <v-col v-for="item in articles" :key="item.title" class="mb-10">
         <ArticleCard v-if="articles.length > 0" :article="item" />      
    </v-col>   
    <v-col cols="12" class="text-center">
        <h1 v-if="articles && articles.length == 0">NO ARTICLES</h1>  
    </v-col>
  </v-row>
</div>


</v-container>
</template>

<script>
import articlesByCategory from '~/apollo/queries/article/articlesByCategory'

export default {
    apollo: {
        articles: {
            prefetch: true,
            query: articlesByCategory,
            variables() {
                return { category: this.$route.params.slug }
            }
        },
    },
    data: () => ({
        articles: []
    }),
}
</script>