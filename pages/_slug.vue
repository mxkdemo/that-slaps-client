<template>
<div v-cloak>
  <article v-if="!$apollo.loading && articleBySlug">
    <Share :article="articleBySlug" />
    <v-container>
    <v-row align="center" justify="center">
      <v-col class="text-center" xs="12" sm="10" md="10" lg="8" xl="5">
        <v-card flat class="mx-auto my-1">
        <v-row align="center" class="mx-0 mb-0" >
        <v-col class="text-center mx-0 mb-0 pb-0 px-0" cols="12">
          <span class="article-header-font" style="word-break: normal; overflow: hidden;text-overflow: ellipsis; color:#272727">
            {{articleBySlug.title}}
          </span> 
        </v-col>
               </v-row>
    <v-card-text class="mx-0 mb-0 px-0">
      <v-row align="center" class="mx-0 mb-0" >
        <v-col class=" mx-0 mb-0 pb-0 px-0" cols="12">
            <span class="article-subheader-font" >
              <v-chip tile style="background-color:#272727" outlined small label>{{ formatDate(articleBySlug.published_at) }}</v-chip>
            </span>  
        </v-col>
        <v-col class="mx-0 mb-0 pb-0 px-0" cols="12">
          <v-card-subtitle class="pb-0 px-0 pt-0" outlined style="letter-spacing:2px;font-size:20px">
            {{articleBySlug.category.name.toUpperCase()}}
          </v-card-subtitle>
        </v-col>
      </v-row>
      <!-- <v-row align="center" class="mx-0 my-0 mb-4 px-0">
        <v-col class="text-sm-left mx-0 mb-0 pb-0 px-0 pt-0">
          <v-rating
          :value=2
          color="amber"
          dense
          half-increments
          readonly
          size="18"
        ></v-rating>
        </v-col>

      </v-row> -->
      
      <div class="mt-5" style="font-size:15px">{{articleBySlug.description}}</div>
      <v-chip-group column>
        <v-chip small label color="" style="background-color:#272727" text-color="white" v-for="item in articleBySlug.tags" :key="item.name">
          <v-icon left dark> mdi-label</v-icon>
          {{item.name}}
        </v-chip>
      </v-chip-group>
    </v-card-text>
    <v-divider class="mx-4"></v-divider>
  </v-card> 
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col xs="12" sm="10" md="10" lg="8" xl="5" class="justify-center align-center text-center">
            <v-img
            contain
      :src="articleBySlug.image.url"></v-img> 
      </v-col>
    </v-row>

    <v-row align="center" justify="center">
      <v-col class="text-left" xs="12" sm="10" md="10" lg="8" xl="5">
         <div class="article-content-font" v-html="$md.render(articleBySlug.content)"></div>
      </v-col>
    </v-row>   

    </v-container>
  </article>
  <Error v-if="!$apollo.loading && !articleBySlug"  />
  </div>
</template>

<script>
  import articleQuery from '~/apollo/queries/article/article'
  export default {
    apollo: {
      articleBySlug: {
        prefetch: true,
        query: articleQuery,
        variables() {
          return { slug: this.$route.params.slug }
        },
        error (error) {
         return false
        },
      },
    },
    data: () => ({
      api_url:process.env.api_url,
      query: '',
      articleBySlug: {}
    }),
    methods: {
      formatDate (date) {
        const options = { month: 'numeric',year: 'numeric', day: 'numeric' }
        return new Date(date).toLocaleDateString('en', options)
      },
    }
  }
</script>

<style lang="scss" scoped>
  #app > article > p {
    font-size: 2em !important;
  }
  img {
    max-width: -webkit-fill-available !important;
    max-width: fill-available !important;
  }
</style>
