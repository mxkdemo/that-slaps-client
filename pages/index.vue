<template>
    <v-container class="article-content-container">
      <Featured />
      <section v-for="article in articleGroups" :key="article.id">
        <v-row dense>
            <v-col cols="12" xs="12" sm="6" md="4" class="py-3 px-3">
            <ArticleCard v-if="article[0]" :article="article[0]"  />
            </v-col>
            <v-col cols="12" xs="12" sm="6" md="4" class="py-3 px-3">
            <ArticleCard v-if="article[1]" :article="article[1]"  />
            </v-col>
              <v-col cols="12" xs="12" sm="12" md="4" class="py-3 px-3">
            <ArticleCard v-if="article[2]" :article="article[2]" />
            </v-col>
        </v-row>
        <v-row dense>
            <v-col cols="12" sm="6" class="py-3 px-3">
            <ArticleCard v-if="article[3]" :article="article[3]" :cardWidth="'duo'" />
            </v-col>
            <v-col cols="12" sm="6" class="py-3 px-3">
            <ArticleCard v-if="article[4]" :article="article[4]" :cardWidth="'duo'" />
            </v-col>               
        </v-row>
        <v-row dense>
          <v-col cols="12" class="py-3 px-5">
            <ArticleCardSolo v-if="article[5]" :article="article[5]" />
          </v-col>
        </v-row>
      </section>          
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
            const ch = Math.floor(i/6); 
            all[ch] = [].concat((all[ch]||[]),one); 
            return all
          }, [])
        },
      }
  }
</script>
