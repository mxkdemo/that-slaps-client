<template>
  <v-carousel height="500" hide-delimiter-background continuous cycle :show-arrows="false" interval="7000">
    <div v-if="topHeader" class="top-picks">{{topHeader.toUpperCase()}}</div>
    <v-carousel-item v-for="(item,i) in articles" :key="i">   
      <v-parallax dark height="500" :src="api_url + (item.featuredImage ? item.featuredImage.url : item.image.url) " ea class="pa-0 ma-0" >
          <div class="text-h2 solo-overlay carousel-text" @click.stop="$router.push('../' + item.slug)">
            <div class="carousel-category">
                {{item.category.name.toUpperCase()}}
                <v-divider class="hr-carousel" color="white" style="width:225px;margin-bottom:20px"></v-divider>
            </div>           
            <div class="article-header-font" style="">
                {{item.title}}
            </div>
          </div>   
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
      </v-parallax>   
    </v-carousel-item>
  </v-carousel>
</template>
    
<script>
export default {
    props: {
        articles: {
            type: Array,
            required: true,
            default: ()=>[]
        },
        topHeader: {
            type: String,
            required: false,
            default: null
        }
    },
    computed: {
      api_url() {
        return process.env.NODE_ENV == "production" ? '' : process.env.api_url
      }
    },
    data: () => ({}),
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