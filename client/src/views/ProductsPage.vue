<script>
import AppSidebar from '../components/layouts/AppSidebar.vue';
import ListCardProduct from '../components/ListCardProduct.vue';
export default {
    components: {
        AppSidebar,
        ListCardProduct
    }
}
</script>

<template>
    <div class="container-fluid d-flex pt-5 bg-light">
        <div class="m-3" style="width:30%">
            <AppSidebar />
        </div>
        <div class="container mt-3 ms-3">
            <div class="row row-cols-md-2 row-cols-1 pb-lg-5">
                <ListCardProduct
                />
            </div>
        </div>
    </div>

</template>
<style>

</style>
