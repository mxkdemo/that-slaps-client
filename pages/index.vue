<template>
  <v-container class="m0 p0" style="padding:0;">

    <Carousel />

    <v-container class="article-content-container">
      <v-row class="justify-space-between">
          <v-col cols="12" xs="12" sm="9" md="9" lg="8" class="mb-10 sidebar-break ">
            <v-row class="" dense v-for="article in articleGroups" :key="article.id">
                <v-col cols="12" xs="12" sm="6" md="6" lg="6" class="mb-10">
                <ArticleCard :article="article[0]" />
                </v-col>
                <v-col cols="12" xs="12" sm="6" md="6" lg="6" class="mb-10">
                <ArticleCard :article="article[1]" />
                </v-col>
                <v-col cols="12" class="mb-10">
                <ArticleCardSolo :article="article[2]" />
                </v-col>
            </v-row>
          </v-col>
          <Sidebar :latestArticles="latestArticles" />
      </v-row>
    </v-container>    

  </v-container>
</template>

<script>
  import ArticleCardSolo from '../components/ArticleCardSolo.vue'
  import articlesQuery from '~/apollo/queries/article/articles'

  export default {
    components: { ArticleCardSolo },
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
