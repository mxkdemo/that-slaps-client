<template>
<v-card
    class="mx-auto text-center sidebar"
    justify="center"
    align="center"
    tile
    outlined
     
        style="display:flex !important;flex-direction:column;align-items:center"
  >
      <v-card-subtitle class="text-center" style="letter-spacing: 2px;">LASTEST ARTICLES</v-card-subtitle>
        <v-card elevation="0" outlined tile class="mb-2" style="width:90%;" v-for="(item,i) in articles" :key="item.slug + i">

                <div class="d-flex flex-no-wrap justify-space-between align-center" >
                 <v-card-subtitle>
                   <router-link :to="item.slug" class="ibx-font">{{item.title}}</router-link>
                 </v-card-subtitle>

                <v-avatar
                    class="ma-3"
                    size="85"
                    tile
                >
                  <v-img 
                  :src="api_url + item.image.formats.thumbnail.url + '?resize&sizes[]=600'"
                  @click.stop="$router.push(item.slug)"
                  style="cursor:pointer"></v-img>
                </v-avatar>
                </div>
        </v-card>
  </v-card>

</template>


<script>
  export default {
    props: {
      articles: {
        type: Array,
        required: true,
        default: ()=>[]
      }
    },
    data: () => ({
    }),
    computed: {
      api_url() {
        return process.env.NODE_ENV == "production" ? '' : process.env.api_url
      }
    },
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