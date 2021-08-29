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
            <v-col cols="12" :sm="article[4] ? 6 : 12" class="py-3 px-3">
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
      <v-row style="padding:50px" v-if="hasMore">
        <v-col justify="center" align="center">
          <v-btn outlined tile x-large elevation="1" style="font-weight:700" title="Load More" @click.stop="showMore()">Load More</v-btn>
        </v-col>
      </v-row>       
    </v-container>    
</template>

<script>
  import ArticleCardSolo from '../components/ArticleCardSolo.vue'
  import Featured from '../components/Featured.vue'
  import articlesQuery from '~/apollo/queries/article/articles'
  import articleCountQuery from '~/apollo/queries/article/articleCount'

  export default {
    components: { ArticleCardSolo, Featured },
    apollo: {
      articles: {
        prefetch: true,
        query: articlesQuery,
        variables: {
          start: 0, 
          limit: 6 
        }
      },
      articleCount: {
        prefetch: true,
        query: articleCountQuery,
        update(data) {
          return data.articlesConnection.aggregate.totalCount
        }
      },
    },
    data () {
      return {
        articles: [],
        articleCount: 0,
        start: 0,
        limit: 6,
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
      api_url() {
        return process.env.NODE_ENV == "production" ? '' : process.env.api_url
      },
      hasMore() {
        return this.articleCount > this.articles.length
      }
    },
    methods: {
      showMore () {
        this.start += 6
        this.$apollo.queries.articles.fetchMore({
          variables: {
            start: this.start,
            limit: this.limit,
          },
          updateQuery: (previousResult, { fetchMoreResult }) => {
            const newArticles = fetchMoreResult.articles
            return {
              __typename: previousResult.articles.__typename,
              articles: [...previousResult.articles, ...newArticles]
            }
          },
        })
      },
    }
  }
</script>
