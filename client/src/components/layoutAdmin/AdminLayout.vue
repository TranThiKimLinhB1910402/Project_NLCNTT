<script>
import SidebarVue from './Sidebar.vue';
import '../../assets/css/admin.scss';
export default{
    components:{
        SidebarVue
    }
}

</script>
<template>
    <div class="d-flex">
      <SidebarVue />
      <router-view />
    </div>
</template>