<template>

  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer"/>

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          VueQuaVi
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" elevated show-if-above side="left">
      <!-- drawer content -->
      <q-drawer
          v-model="drawer"
          show-if-above
      >
        <q-scroll-area style="height: calc(100% - 150px)">
          <q-list padding>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="inbox"/>
              </q-item-section>

              <q-item-section @click="routes.push('/index')">
                Inbox
              </q-item-section>
            </q-item>

            <q-item active clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="star"/>
              </q-item-section>

              <q-item-section @click="routes.push('/')">
                Star
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="send"/>
              </q-item-section>

              <q-item-section @click="routes.push('/About')">
                Send
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="send"/>
              </q-item-section>

              <q-item-section @click="routes.push('/todo')">
                To do app
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="drafts"/>
              </q-item-section>

              <q-item-section>
                Drafts
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>


      </q-drawer>
    </q-drawer>
    <q-page-container>
<!--      <product1>-->
<!--      </product1>-->
      <router-view>
        <template v-slot:caption>
          Caption for router view
        </template>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import {ref} from 'vue'
import Product1 from './todo.vue'
import routes from "../plugins/routes.js";

const leftDrawerOpen = ref(false)

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
<style scoped>
.read-the-docs {
  color: #888;

}

q-page-container {
  position: absolute;
  text-align: justify;

}

q-page {
  position: absolute;
  right: auto;
}
</style>
