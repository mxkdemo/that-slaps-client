<template>
<v-row>
    <v-col cols="12" sm="6" v-for="item in articles" :key="item.title" class="mb-10">
         <ArticleCard v-if="articles.length > 0" :article="item" />      
    </v-col>   
    <v-col cols="12" class="text-center">
        <h1 v-if="articles && articles.length == 0">NO ARTICLES</h1>  
    </v-col>
</v-row>   
</template>

<script>
import articlesByTag from '~/apollo/queries/article/articlesByTag'

export default {
    layout:"category",
    apollo: {
        articles: {
            prefetch: true,
            query: articlesByTag,
            variables() {
                return { tag: this.$route.params.slug }
            }
        },
    },
    data: () => ({
        api_url:process.env.strapiBaseUri,
        query: '',
        articles: {}
    }),
}
</script>

<style>

</style>