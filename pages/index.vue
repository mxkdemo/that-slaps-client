<template>
    <v-container class="article-content-container">
          <Featured />
            <v-row class="" dense v-for="article in articleGroups" :key="article.id">
                <v-col cols="12" xs="12" sm="6" md="4" class="py-3 px-3">
                <ArticleCard :article="article[0]"  />
                </v-col>
                <v-col cols="12" xs="12" sm="6" md="4" class="py-3 px-3">
                <ArticleCard :article="article[1]"  />
                </v-col>
                 <v-col cols="12" xs="12" sm="12" md="4" class="py-3 px-3">
                <ArticleCard :article="article[2]" />
                </v-col>
            </v-row>
            <v-row class="" dense v-for="article in articleGroups" :key="article.id" style="">
                <v-col cols="12" sm="6" class="py-3 px-3">
                <ArticleCard :article="article[0]" :cardWidth="'duo'" />
                </v-col>
                <v-col cols="12" sm="6" class="py-3 px-3">
                <ArticleCard :article="article[1]" :cardWidth="'duo'" />
                </v-col>               
            </v-row>
            <v-row v-for="article in articleGroups" :key="article.id">
              <v-col cols="12" class="py-3 px-5">
                <ArticleCardSolo :article="article[2]" />
              </v-col>
            </v-row>          
    </v-container>    
</template>

<script>
  import ArticleCardSolo from '../components/ArticleCardSolo.vue'
  import articlesQuery from '~/apollo/queries/article/articles'
import Featured from '../components/Featured.vue'

  export default {
    components: { ArticleCardSolo, Featured },
    apollo: {
      articles: {
        prefetch: true,
        query: articlesQuery,
      },
    },
      data () {
        return {
          articles: [],
          query: '',
        }
      },
      computed: {
        articleGroups () {
          return this.articles.reduce((all,one,i) => {
            const ch = Math.floor(i/3); 
            all[ch] = [].concat((all[ch]||[]),one); 
            return all
          }, [])
        },
        latestArticles () {
          return this.articles.slice(0,3);
        }
      },
      beforeMount() {
      },
  }
</script>
