<template>
    <v-row align="center" justify="center">
      <v-col col="12" class="justify-center align-center text-center">
            <v-img
      :src="this.image.src"
      :srcSet="this.image.srcSet" style="max-width:942px"></v-img> 
      </v-col>
    </v-row>

</template>
<script>
export default {
  name: "DynamicImage", 
  props: {
    filename: {
      type: String,
      required: true
    }
  },
    data: () => ({
      image: {
        src: '',
        srcSet: ''
      },
      sizes: 'xs:300vw sm:600vw md:900vw'
    }),
    beforeMount() {
      this.image = require(`@/content${this.$nuxt.$route.path}/images/${this.filename}?resize&sizes[]=642&sizes[]=942`)
    },
};
</script>