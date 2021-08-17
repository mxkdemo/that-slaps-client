<template>

 <v-card tile outlined class="mx-auto fill-height" :max-width="1300">
    
              <v-img
                :src="api_url + article.image.url"
                :alt="article.title" @click.stop="$router.push(article.slug)" 
                style="cursor:pointer;"
                class="white--text align-end offset-image"  
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"        
                height="300px"
              >

              <v-card-subtitle style="padding-bottom:0 !important; letter-spacing:2px; margin-bottom:0px !important; " 
              class="mb-0">{{article.category.name.toUpperCase()}}</v-card-subtitle>
              <hr style="margin-top:0px !important;padding-top:0px !important; width:200px; margin-left: 16px;margin-bottom:10px;" />
              <v-card-title class="article-subheader-font" style="margin-top:0px;padding-top:0px;" v-text="article.title"></v-card-title>
                
              </v-img>
              <div @mouseenter="onMouseEnter()" @mouseleave="onMouseLeave()" @click.stop="$router.push(article.slug)" class="solo-overlay"> </div>                    
            <v-card-actions style="justify-content:center">
              <v-btn text tile outlined :to="article.slug">
                READ MORE
              </v-btn>
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
      }
    },
    computed: {
      api_url() {
        return process.env.NODE_ENV == "production" ? '' : process.env.api_url
      }
    },
    data: () => ({
    }),
    methods: {
      onMouseEnter() {
        this.$el.firstElementChild.classList.add('solo-opacity')
      },
      onMouseLeave() {
        this.$el.firstElementChild.classList.remove('solo-opacity')
      }
    },
  }
</script>

<style scoped>
  .solo-overlay {
    width: -webkit-fill-available;
    height: 300px;
    background-color: white;
    position: absolute;
    top: 0px;
    opacity: 0;
    cursor: pointer;
        transition-property: opacity;
    transition-duration: 0.2s;
	  transition-delay: .1s;
	  transition-timing-function: linear;
  } 
  .solo-opacity {
    transition-property: opacity;
    transition-duration: 0.1s;
	  transition-delay: .1s;
	  transition-timing-function: linear;
    opacity: 0.95;
  }




</style>