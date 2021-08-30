<template>

 <v-card tile outlined class="mx-auto fill-height">
    
              <v-img
                :src="api_url + (article.image.formats.large ? article.image.formats.large.url : article.image.url)"
                :alt="article.image.alternativeText" 
                @click.stop="$router.push(article.slug)"
                :srcset="srcset"
                :sizes="sizes"
                style="cursor:pointer;"
                class="white--text align-end offset-image"  
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"        
                height="300px"
              >

              <v-card-subtitle style="padding-bottom:0 !important; letter-spacing:2px; margin-bottom:0px !important; " 
              class="mb-0">{{article.category.name.toUpperCase()}}</v-card-subtitle>
              <v-divider color="white" style="width:200px;margin-left: 16px;margin-bottom:10px;"></v-divider>
              <v-card-title class="article-subheader-font" style="margin-top:0px;padding-top:0px; font-weight:500 !important" v-text="article.title"></v-card-title>
                
              </v-img>
              <div @mouseenter="onMouseEnter()" @mouseleave="onMouseLeave()" @click.stop="$router.push(article.slug)" class="solo-overlay"> </div>   
              <v-card-text class="grow text-center">
                {{article.description}}
              </v-card-text>                 
            <v-card-actions style="justify-content:center">
              <v-btn text tile outlined :to="article.slug" class="read-more-btn">
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
      },
      srcset() {
        return `${this.api_url + this.article.image.formats.small.url} 400w, 
          ${this.api_url + this.article.image.formats.medium.url} 600w, 
          ${this.api_url + this.article.image.url} 900w`
      },
      sizes() {
        return "(max-width: 400px) 400px, (max-width: 600px) 600px, (max-width: 900px) 900px, 100vw"
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