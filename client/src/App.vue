<script>
//import PublicLayout from "./components/layouts/PublicLayout.vue";
import AppHeader from '@/components/layouts/AppHeader.vue';
import AppFooter from './components/layouts/AppFooter.vue';
import AppSidebar from './components/layouts/AppSidebar.vue';
import LayoutAdmin from "@/components/LayoutAdmin/AdminLayout.vue"
export default {
  components: {
    AppHeader,
    AppFooter,
    AppSidebar,
    LayoutAdmin
  }
}
</script>
<template>
  
  <div id="app" v-if="this.$route.meta.layout">
    <LayoutAdmin />
  </div>
  <div id="app" v-else>
    <AppHeader />
    <router-view />
    <AppFooter />
  </div>
</template>
<style>
.page {
  max-width: 400px;
  margin: auto;
}
</style>