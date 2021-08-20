<template>
<v-container class="article-content-container">
      <v-row style="display:flex;">
      <v-col v-if="prevArticle" justify="center" align="start" cols="12" sm="12" md="6">
        <v-card outlined tile style="float:left;cursor:pointer" @click.stop="$router.push('/' + prevArticle.slug)" class="article-hover" >
            <v-list-item three-line>
            <v-list-item-avatar size="80" tile>
                <v-img v-if="prevArticle.image" :src="api_url + prevArticle.image.formats.thumbnail.url"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
                <div class="text-overline mb-4">
                PREVIOUS
                </div>
                <v-list-item-title class="mb-1 ibx-font">
                {{prevArticle.title}}
                </v-list-item-title>
                <v-list-item-subtitle>{{prevArticle.description}}</v-list-item-subtitle>
            </v-list-item-content>

            </v-list-item>
        </v-card>

      </v-col>
      <v-col v-if="nextArticle" justify="center" align="end" cols="12" sm="12" md="6" offset="0" :offset-md="onlyNext - 1" :offset-lg="onlyNext">
        <v-card outlined style="float:right;cursor:pointer" @click.stop="$router.push('/' + nextArticle.slug)" class="article-hover">
            <v-list-item three-line>
            <v-list-item-content>
                <div class="text-overline mb-4">
                NEXT
                </div>
                <v-list-item-title class="mb-1 ibx-font">
                {{nextArticle.title}}
                </v-list-item-title>
                <v-list-item-subtitle>{{nextArticle.description}}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-avatar size="80" tile>
                <v-img v-if="nextArticle.image" :src="api_url + nextArticle.image.formats.thumbnail.url"></v-img>
            </v-list-item-avatar>
            </v-list-item>
        </v-card>
      </v-col>
    </v-row>

</v-container>

</template>

<script>
import nextArticleQuery from '~/apollo/queries/article/nextArticle'
import prevArticleQuery from '~/apollo/queries/article/previousArticle'
export default {
    props: {
        date: {
            type: String,
            required: true,
            default: null
        },
    },
    apollo: {
      nextArticle: {
        prefetch: false,
        query: nextArticleQuery,
        variables() {
          return { date: this.$props.date }
        },
        update(data) {
          return data.articles[0]
        }
      },
      prevArticle: {
        prefetch: false,
        query: prevArticleQuery,
        variables() {
          return { date: this.$props.date }
        },
        update(data) {
          return data.articles && data.articles.length > 0 ? data.articles[0] : null
        }
      },
    },
    methods: {
    },
    computed: {
      api_url() {
        return process.env.NODE_ENV == "production" ? '' : process.env.api_url
      },
      onlyNext() {
          return this.prevArticle ? 0 : 6
      }
    },
    data: () => ({
      nextArticle: {},
      prevArticle: {},
    }),
}
</script>

<style>
.article-hover:hover {
    background-color: #f7f7f781 !important;
}
</style>