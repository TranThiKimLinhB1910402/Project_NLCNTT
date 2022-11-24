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
    <div class="d-flex bg-light">
      <SidebarVue />
      <router-view />
    </div>
</template>