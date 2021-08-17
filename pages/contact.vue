<template>
    <v-container class="article-content-container">
      <v-row class="center">
          <v-col cols="12" class="mb-10" align="center" justify="center">
              <h1 class="that-slaps-font page-header-font">CONTACT</h1>
          </v-col>
      </v-row>

          <v-row align="center" justify="center">
      <v-col xs="12" sm="10" md="10" lg="8" class="justify-center align-center text-center">
         <div class="article-content-font">

THAT SLAPS. is a digital magazine for all things chic, featuring the best in travel, food & drink, lifestyle and shopping.

From the hottest new restaurants, to the most stylish places to stay and shop, let us be your guide to the finer things in life.

Boutique to us means luxe and elegant, but that doesn’t mean everything you read on our website comes with a hefty price tag.
<br />
<br />

Our team of lifestyle journalists also love to shine a spotlight on independent businesses where we can.

With this in mind, we’re confident you’ll find something on The Boutique Handbook you haven’t read about anywhere else.

Interested in finding out more? Email hello@boutiquehandbook.com
<br />
<br />

Now in her 30s, she has worked in the industry at every level, from locals to national newspapers, magazines and websites, including as an Editor at ITV News and MailOnline, the world’s most read news site.

Katie also had the longest running column in More! magazine, The Secret Life of an Online Dater. Although these days, she lives with her boyfriend in east London (who she didn’t meet online).

After several years reviewing restaurants and hotels for luxury lifestyle magazines, Katie joined The Boutique Handbook team when we launched in November 2020.

The Boutique Handbook might be new to the scene, but our beautiful website and exclusive content is already getting noticed.

         </div>
      </v-col>
    </v-row> 
    
    </v-container>     
</template>

<script>
import latestArticlesQuery from '~/apollo/queries/article/latestArticles'

export default {
    apollo: {
        articles: {
            prefetch: true,
            query: latestArticlesQuery,
        },
    },
}
</script>

<style>

</style>