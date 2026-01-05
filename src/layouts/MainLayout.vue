<script setup lang="ts">
import { useQuasar } from 'quasar';

// consts
const $q = useQuasar()
const menuBurger = $q.screen.width < 600
const prefixImage = process.env.cheminPublique
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated id="header">
      <q-toolbar class="flex justify-between items-center">

        <router-link :to="{ name: 'gallery' }">
          <q-toolbar-title class="header-title">
            Constellation64
          </q-toolbar-title>
        </router-link>

        <div v-if="menuBurger === false" class="header-options flex flex-center">
          <router-link :to="{ name: 'about' }">
            About
          </router-link>

          <router-link :to="{ name: 'contact' }">
            Contact
          </router-link>
        </div>

        <q-img v-else :src="`${prefixImage}/img/menuColored.png`" width="30px">
          <q-popup-proxy>
            <q-list class="bg-black text-body1">
              <q-item v-close-popup :to="{ name: 'about' }">
                <q-item-section>
                  <q-item-label>About</q-item-label>
                </q-item-section>
              </q-item>
              <q-item v-close-popup :to="{ name: 'contact' }">
                <q-item-section>
                  <q-item-label>Contact</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-popup-proxy>
        </q-img>

      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style>
#header {
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 10;
}

.header-options {
  font-size: 20px;
  margin-right: 15px;
}

@media screen and (max-width: 600px) {}

.header-title {
  margin: 15px;
  font-weight: 400;
}

.header-options>a {
  margin-left: 10px;
  margin-right: 10px;
}

a:hover,
.header-title:hover {
  color: var(--linkHover);
  transition: all 0.2s;
}
</style>
