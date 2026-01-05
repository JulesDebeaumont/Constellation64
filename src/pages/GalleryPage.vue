<script setup lang="ts">
import { ref } from 'vue'
import { configPages } from 'src/utils/config'

// consts
const prefixPath = process.env.cheminPublique
// refs
const hoverItems = ref<{ [titrePage: string]: boolean }>({})
</script>

<template>
  <q-page class="flex flex-center">
    <div class="row full-width full-height">
      <q-card v-for="page in configPages" :key="page.titre" class="constellation-card-page"
        @mouseover="hoverItems[page.folderPicture] = true" @mouseleave="hoverItems[page.folderPicture] = false">
        <router-link :to="{ name: 'article', params: { nomArticle: page.folderPicture } }">
          <q-img :src="`${prefixPath}/imgFolio/${page.folderPicture}/preview.png`"
            :img-class="hoverItems[page.folderPicture] === true ? 'constellation-card-page-image-hover' : hoverItems[page.folderPicture] === false ? 'constellation-card-page-image' : ''"
            spinner-color="primary">
            <div v-show="hoverItems[page.folderPicture] === true"
              class="constellation-card-hover absolute-full flex flex-center"
              :style="`color: ${page.couleurTexte}; box-shadow: inset 0px 0px 50px -20px ${page.couleur};`">
              {{ page.titre }}
            </div>
          </q-img>
        </router-link>
      </q-card>
    </div>
  </q-page>
</template>

<style scoped>
.constellation-card-page {
  margin: 0;
  transition: all 0.2s;
  width: 25%;
}

@media screen and (max-width: 1200px) {
  .constellation-card-page {
    width: 33.33%;
  }
}

@media screen and (max-width: 600px) {
  .constellation-card-page {
    width: 50%;
  }
}

.constellation-card-hover {
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  background-color: transparent;
  transition: all 0.2s;
  animation: cardHoverAppear 0.2s;
}

@keyframes cardHoverAppear {
  0% {
    opacity: 0%;
  }

  100% {
    opacity: 100%;
  }
}
</style>
