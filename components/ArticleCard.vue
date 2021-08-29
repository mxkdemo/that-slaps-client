<template>
   <v-card
    class="mx-auto fill-height"
    :class="cardWidth"
    tile
    outlined
    height="100%"
    style="display: flex;flex-direction: column;"    
    v-cloak

  >
    <v-hover
        v-slot:default="{ hover }"
      >
    <v-img
      :src="api_url + article.image.formats.medium.url"
      :alt="article.image.alternativeText" 
      :title="article.image.caption"
      height="277"
      max-height="277"
      @click.stop="$router.push('/' + article.slug)"
      style="cursor:pointer">
        <v-fade-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out white"
            style="height: 100%;opacity:0.1"
          >
          </div>
        </v-fade-transition>
      <template v-slot:placeholder>
        <v-row
          class="fill-height ma-0"
          align="center"
          justify="center"
        >
          <v-progress-circular
            indeterminate
            color="grey lighten-5"
          ></v-progress-circular>
        </v-row>
      </template> 
      </v-img>
    </v-hover>

    <v-card-subtitle class="text-center" style="letter-spacing: 2px;padding:4px;margin:4px;">
      {{article.category.name.toUpperCase()}}
    </v-card-subtitle>

    <v-card-title class="justify-center text-center mt-0 pt-1 pb-0 mb-0" style="word-break: keep-all;height:96px;align-content:baseline;text-overflow: ellipsis;overflow:hidden">
      <router-link :to="'../' + article.slug" class="article-subheader-font" :title="article.title">{{article.title}}</router-link>
    </v-card-title>

    <v-card-text class="grow text-center">
      {{article.description}}
    </v-card-text>

    <v-card-actions class="justify-center text-center" style="">
      <v-btn text tile outlined :to="'../' + article.slug" class="read-more-btn" title="Read More">Read More</v-btn>
    </v-card-actions>
  </v-card>
</template>


<script>
  export default {
    props: {
      article: {
        type: Object,
        required: true,
        default: ()=>{}
      },
      cardWidth: {
        type: String,
        required: false,
        default: 'solo'
      }
    },
    computed: {
      api_url() {
        return process.env.NODE_ENV == "production" ? '' : process.env.api_url
      },
    },
    data: () => ({
    }),
  }
</script>

<style lang="scss" scoped>
  a {
    color:#212121 !important;
    text-decoration: none !important;
    &:hover {
      color:#424242 !important;
    }
  }
</style>

<style>

.solo {
  max-width: 100%
}
.duo {
  max-width: 100%;
}

</style>