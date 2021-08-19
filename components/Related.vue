<template>
  <v-container class="article-content-container mb-10 pb-10 pt-5">
      <h2 class="ibx-font">FEATURED ARTICLES</h2>
      <v-row>
      <v-col justify="center" align="center" cols="12" xs="12" sm="6" md="3" v-for="item in articles" :key="item.id">
 <v-card
    class="mx-auto"
    tile
    outlined
    style="cursor:pointer"
    @click.stop="$router.push('../' + item.slug)"
  >
    <v-hover
        v-slot:default="{ hover }"
      >
    <v-img
      :src="api_url + item.image.formats.medium.url "
      height="200"
      :alt="item.title"
      style="cursor:pointer">
        <v-fade-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out white"
            style="height: 100%;opacity:0.1"
          >
          </div>
        </v-fade-transition>
      </v-img>
    </v-hover>

    <v-card-title style="word-break: keep-all;" class="ibx-font">
      {{item.title}}
    </v-card-title>

    <v-card-subtitle style="word-break: keep-all;">
      {{item.description}}
    </v-card-subtitle>
  </v-card>
      </v-col>
    </v-row>

</v-container>
</template>

<script>
  import featuredQuery from '~/apollo/queries/article/featuredArticles'
export default {
    apollo: {
      articles: {
        prefetch: true,
        query: featuredQuery
      },
    },
    computed: {
      api_url() {
        return process.env.NODE_ENV == "production" ? '' : process.env.api_url
      }
    },
    data: () => ({
        articles: [],
    }), 
}
</script>

<style>

</style>