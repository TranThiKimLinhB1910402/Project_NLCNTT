<script>

</script>
<template>
    <div class="header-inner">
        <div class="container-fluid">
            <div class="row py-4 w-100 d-flex justify-content-center text-center">
                <div class="col col-md-3 col-3 img-logo">
                    <img src="../../assets/images/logo/Auto_Car_W.png" alt="" />
                </div>
                <div class="col col-md-6 col-4  img-banner">
                    <div>
                        <img src="../../assets/images/banner/banner-header.jpg" alt="" />
                    </div>
                </div>
                <div class="col col-md-3 col-5 mt-lg-4 text-login">

                    <div v-if="this.userStore.user.full_name" class="user">
                        <i class="fa-solid fa-user me-2"></i>
                        <span>{{ this.userStore.user.full_name }}</span>
                        
                        <span class="m-2">/</span>
                        <a href="#" @click="onSignOut">
                            Sign Out
                        </a>
                    </div>
                    <div v-else>
                        <i class="fa-solid fa-user me-2"></i>
                        <router-link :to="{ name: 'login' }">
                            Đăng nhập
                        </router-link>

                        <span class="m-2">/</span>
                        <router-link :to="{ name: 'register' }">
                            Đăng ký
                        </router-link>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-bars text-white fs-4"></i>
            </button>
            <div class="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link :to="{ name: 'home' }" class="nav-link">
                            Trang chủ
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'products' }" class="nav-link">
                            Danh mục thuê xe
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'bang-gia' }" class="nav-link">
                                    Bảng giá tổng hợp
                                </router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Dịch vụ
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a class="dropdown-item" href="#">Xe tự lái</a></li>
                            <li><a class="dropdown-item" href="#">Xe có tài xế</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'tra-cuu' }" class="nav-link">
                            Lịch sử đăng ký
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>


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
        }
    }
}

</script>
<style lang="scss">
.header-inner {
    .img-logo img {
        width: 30%;
        padding-top: 5%;
    }

    .img-banner img {
        width: 60%;
    }

    .text-login a {
        text-decoration: none;

        &:hover {
            color: var(--primary-hover);
            transition: ease-in-out 0.2s;
        }
    }
}

.navbar {
    background-color: var(--primary-color) !important;

    .nav-link {
        color: white;
        font-weight: 500;
        margin: 0 40px;
        font-size: 1.2rem;

        &:hover {
            color: var(--secondary-hover);
        }

        &:focus {
            color: var(--secondary-hover);
        }

    }

    .dropdown-menu {
        width: 100%;

        a {
            font-size: 1.2rem;
            padding: 0.5rem 2rem;
        }
    }

    .dropdown:hover .dropdown-menu {
        display: block;
    }
}
</style>