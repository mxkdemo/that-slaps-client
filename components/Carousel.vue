<template>
  <v-carousel height="500" hide-delimiters continuous cycle interval="7000">
    <div v-if="topHeader" class="top-picks">{{topHeader.toUpperCase()}}</div>
    <v-carousel-item v-for="(item,i) in articles" :key="i">   
      <v-parallax dark height="500" :src="api_url + item.featuredImage.url" class="pa-0 ma-0" >
          <div class="text-h2 solo-overlay" @click.stop="$router.push('../' + item.slug)">
            <div class="carousel-category">
                {{item.category.name.toUpperCase()}}
            </div>
            <hr style="width:200px;margin-left:80px; margin-top:0 !important; font-size:1em;" />
            <div class="article-header-font" style="padding-left:80px;">
                {{item.title}}
            </div>
          </div>      
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
      },
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