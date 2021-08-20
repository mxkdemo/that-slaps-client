<template>
    <Carousel v-if="articles && articles.length > 0" :articles="articles" :topHeader="'top picks'" />
</template>

<script>
import topPickCategories from '~/apollo/queries/category/topPicks'

export default {
    apollo: {
      articles: {
        prefetch: true,
        deep: true,
        query: topPickCategories,
        variables() {
            return { category: this.$route.params.slug }
        }
      },
    },
    data: () => ({
        articles: [],
    }),
  }
</script>

