<template>
    <v-row v-if="articles && articles.length > 0" justify="center" class="mb-10">
      <v-col cols="12" md="10" lg="12">
        <Carousel :articles="articles" :topHeader="'featured'" />
      </v-col>
    </v-row>
</template>

<script>
  import featuredQuery from '~/apollo/queries/article/featuredArticles'
  export default {
    apollo: {
      articles: {
        prefetch: true,
        deep: true,
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

<style scoped>
  .solo-overlay {
    width: -webkit-fill-available;
    height: 500px;
    position: absolute;
    background-color: rgba(53, 53, 53,0.5);
    top: 0px;
    left:0px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
  } 
  .solo-opacity {
    transition-property: opacity;
    transition-duration: 0.1s;
	  transition-delay: .1s;
	  transition-timing-function: linear;
    opacity: 0.95;
  }
</style>