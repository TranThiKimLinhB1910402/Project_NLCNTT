<template>
    <div class="sidebar-admin d-flex flex-column flex-shrink-0" style="max-width: 280px;">
        <div class="p-5 logo">
          <i class="fa-solid fa-car fs-3"></i>  AUTO CAR 
        </div>
        <ul class="nav nav-pills flex-column mb-auto">
            <li class="nav-item">
                <a href="#" class="nav-link" aria-current="page">
                    <i class="fa-solid fa-gauge fs-5 me-3"></i>
                    Dashboard
                </a>
            </li>
            <li>
                <router-link :to="{ name: 'manager-product' }" class="nav-link">
                    <i class="fa-solid fa-car-side fs-5 me-3"></i>
                    Quản lý xe
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'manager-rent' }" class="nav-link">
                    <i class="fa-solid fa-file-pen fs-5 me-3"></i>
                    Quản lý phiếu đăng ký
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'manager-user' }" class="nav-link">
                    <i class="fa-solid fa-users fs-5 me-3"></i>
                    Quản lý người dùng
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'manager-driver' }" class="nav-link">
                    <i class="fa-regular fa-id-card fs-5 me-3"></i>
                    Quản lý tài xế
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'manager-route' }" class="nav-link">
                    <i class="fa-solid fa-map fs-5 me-3"></i>
                    Quản lý chuyến đi
                </router-link>
            </li>
            <li>
                <a href="#" class="nav-link">
                    <i class="fa-solid fa-chart-column fs-5 me-3"></i>
                    Thống kê doanh thu
                </a>
            </li>
            <hr class="w-100" />
            <li>
                <a href="#" class="nav-link" @click="onSignOut">
                    <i class="fa-solid fa-right-from-bracket fs-5 me-3"></i>
                    Log out
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
import { useUserStore } from '../../store/useStore';

export default {
    data() {
        const userStore = useUserStore();
        return {
            userStore,
        };
    },
    methods: {
        async onSignOut() {
            this.userStore.user = {};
            window.location.replace("login");
        }
    }
}

</script>
<style lang="scss">
.sidebar-admin {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

    ul {
        li {

            .nav-link {
                color: black;
                font-size: 1.3rem;
                margin: 10px 15px;

                &:hover {
                    background-color: var(--purple-color);
                }
            }

            .nav-link.active {
                background-color: var(--purple-color);
                color: black;
            }
        }
    }
}
</style>