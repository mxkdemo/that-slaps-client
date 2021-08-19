<template>
<v-container class="article-content-container">
    <div style="max-width:925px" class="mx-auto" ></div>
    <v-row justify="center">
        <v-col cols="12" class="">  
            <v-row class="center">
                <v-col cols="12" class="" align="center" justify="center">
                    <h1 class="article-header-font" style="font-size:30px">{{this.$route.params.slug.toUpperCase()}}</h1>
                </v-col>
            </v-row>             
        </v-col>
        <TopPickCategories v-if="articles && articles.length > 0" />
    </v-row> 

    <div style="max-width:925px;margin-top:50px" class="mx-auto" >
        <v-row justify="center" dense v-for="article in articleGroups" :key="article.id">
            <v-col cols="12" :sm="article[1] ? 6 : 12" class="py-3 px-3">
            <ArticleCard v-if="article[0]" :article="article[0]" />
            </v-col>
            <v-col cols="12" sm="6" class="py-3 px-3">
            <ArticleCard v-if="article[1]" :article="article[1]" />
            </v-col>
                <v-col cols="12" class="py-3 px-3">
            <ArticleCard v-if="article[2]" :article="article[2]" />
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="12" class="text-center">
                <h1 v-if="articles && articles.length == 0">NO ARTICLES</h1>  
            </v-col>
        </v-row>
    </div>
</v-container>
</template>

<script>
import articlesByCategory from '~/apollo/queries/article/articlesByCategory'

export default {
    apollo: {
        articles: {
            prefetch: true,
            query: articlesByCategory,
            variables() {
                return { category: this.$route.params.slug }
            }
        },
    },
    data: () => ({
        articles: []
    }),
    computed: {
        articleGroups () {
            return this.articles.reduce((all,one,i) => {
                const ch = Math.floor(i/3); 
                all[ch] = [].concat((all[ch]||[]),one); 
                return all
            }, [])
        },
    }

}
</script>