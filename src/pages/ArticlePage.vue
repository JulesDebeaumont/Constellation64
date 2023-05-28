<script setup lang="ts">
import { configPages } from 'src/utils/config'
import { useRoute } from 'vue-router';

// consts
const route = useRoute()
const nomArticle = route.params.nomArticle
const prefixImage = process.env.cheminPublique
const configArticle = configPages.find((config) => {
    return config.folderPicture === nomArticle
})
</script>

<template>
    <q-page class="flex column items-center bg-accent">
        <div v-if="configArticle" class="constellation-page-article full-width flex column items-center">
            <h4 class="constellation-page-article-titre" :style="`color: ${configArticle.couleurTexte};`">
                {{ configArticle.titre }}
            </h4>

            <div class="q-pb-xl q-mb-xl full-width">
                <template v-for="(item, index) in configArticle.displayPages" :key="index">
                    <q-img v-if="item.type === 'picture'" class="q-my-md"
                        :src="`${prefixImage}/imgFolio/${configArticle.folderPicture}/${item.filenamePicture}`"
                        spinner-color="primary" />

                    <div v-if="item.type === 'description'"
                        class="constellation-page-article-description flex column flex-center q-py-lg">
                        <span :style="`color: ${configArticle.couleurTexte};`">Region : {{ configArticle.description.region
                        }}</span>
                        <span :style="`color: ${configArticle.couleurTexte};`">Engine : {{ configArticle.description.engine
                        }}</span>
                        <span :style="`color: ${configArticle.couleurTexte};`">Poly count : {{
                            configArticle.description.polyCount }}</span>
                        <span :style="`color: ${configArticle.couleurTexte};`">Room count : {{
                            configArticle.description.roomCount }}</span>
                    </div>

                    <div v-if="item.type === 'comment'" class="constellation-page-article-description"
                        :style="`color: ${configArticle.couleurTexte};`">
                        {{ item.comment }}
                    </div>
                </template>
            </div>
        </div>

        <div v-else>Article inconnu</div>
    </q-page>
</template>

<style scoped>
.constellation-page-article {
    padding-left: 10%;
    padding-right: 10%;
}

.constellation-page-article-titre {
    font-weight: 500;
    text-align: center;
}

.constellation-page-article-description {
    font-size: 24px;
    text-align: center;
}
</style>