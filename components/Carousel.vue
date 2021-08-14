<template>
    <v-row justify="center" no-gutters class="mb-10">
      <v-col cols="12">
        <v-carousel height="500" hide-delimiters continuous cycle  interval="7000">
          <v-carousel-item v-for="(item,i) in articles" :key="i">   
            <v-parallax dark height="500" :src="api_url + item.featuredImage.url" class="pa-0 ma-0" >
                <div class="text-h2 solo-overlay">
                        <div class="" style="padding-left:80px;font-size:28px !important;letter-spacing: 2px; padding-bottom:0 !important;margin-bottom:0 !important">
                            {{item.category.name.toUpperCase()}}
                        </div>
                        <hr style="width:200px;margin-left:80px; margin-top:0 !important" />
                        <div class="article-header-font" style="padding-left:80px;">
                            {{item.title}}
                        </div>
                    <div style="margin-left:80px;" >     
                        <v-chip-group column>
                            <v-chip class="white--text" x-small label style="background-color:#272727; font-size:12px" 
                            v-for="tag in item.tags" :key="tag.name" @click.stop="$router.push('/tags/' + tag.name)">
                            <v-icon left dark> mdi-label</v-icon>
                            {{tag.name}}
                            </v-chip>
                        </v-chip-group>
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
        return process.env.api_url
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