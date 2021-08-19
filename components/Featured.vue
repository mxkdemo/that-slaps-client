<template>
    <v-row justify="center" class="mb-10">
      <v-col cols="12" md="10" lg="12">
        <v-carousel height="500" hide-delimiters continuous interval="7000">
          <v-carousel-item v-for="(item,i) in articles" :key="i">   
            <v-parallax dark height="500" :src="api_url + item.featuredImage.url" class="pa-0 ma-0" >
                <div class="text-h2 solo-overlay" @click.stop="$router.push('/' + item.slug)">
                        <div class="" style="padding-left:80px;font-size:28px !important;letter-spacing: 2px; padding-bottom:0 !important;margin-bottom:0 !important;line-height:1.3">
                            {{item.category.name.toUpperCase()}}
                        </div>
                        <hr style="width:200px;margin-left:80px; margin-top:0 !important;" />
                        <div class="article-header-font" style="padding-left:80px;">
                            {{item.title}}
                        </div>
                </div>      
            </v-parallax>   
          </v-carousel-item>
        </v-carousel>
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