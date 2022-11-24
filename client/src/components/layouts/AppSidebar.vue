<script>
import FormSearch from '../FormSearch.vue';
export default {
    components: {
        FormSearch
    }
}
</script>
<template>
    <div class="sidebar">
        <div class="input-group search rounded-pill">
            <input type="text" class="form-control" placeholder="Nhập từ khóa bất kì" aria-describedby="button-addon2">
            <div class="btn btn-search">
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
        <FormSearch />
    </div>
</template>
<style lang="scss">
.sidebar {
    padding: 0 4%;

    .search {
        background-color: #ffffff;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        margin-bottom: 8%;
    }

    .form-control {
        padding: 5% 7%;
        font-size: 1rem;
        background-color: transparent;
        border: none;

        &:focus {
            box-shadow: none;
            border-radius: 30px;
        }

        .btn-search {
            padding: 2% 6%;
            color: #06283d;
            font-size: 1.5rem;

            &:hover i {
                color: #921616;
            }
        }
    }
}
</style>