<template>
    <Carousel :articles="articles" />
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

