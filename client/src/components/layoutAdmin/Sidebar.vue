<template>
    <div class="sidebar-admin d-flex flex-column flex-shrink-0" style="max-width: 280px;">
        <div class="p-5">
            logo
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
                    <i class="fa-solid fa-car fs-5 me-3"></i>
                    Quản lý xe
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'manager-rent' }" class="nav-link">
                    <i class="fa-solid fa-paste fs-5 me-3"></i>
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
                    <i class="fa-solid fa-chalkboard-user fs-5 me-3"></i>
                    Quản lý tài xế
                </router-link>
            </li>
            <li>
                <a href="#" class="nav-link">
                    <i class="fa-solid fa-chalkboard-user fs-5 me-3"></i>
                    Thống kê doanh thu
                </a>
            </li>
            <li>
                <a href="#" class="nav-link">
                    <i class="fa-solid fa-chalkboard-user fs-5 me-3"></i>
                    Thống kê doanh thu
                </a>
            </li>
            <hr class="w-100" />
            <li>
                <a href="#" class="nav-link">
                    <i class="fa-solid fa-chalkboard-user fs-5 me-3"></i>
                    Log out
                </a>
            </li>
        </ul>


        <!-- <div class="dropdown p-4">
            <a href="#" class="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
                data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2">
                <strong>mdo</strong>
            </a>
            <ul class="dropdown-menu text-small shadow">
                <li><a class="dropdown-item" href="#">New project...</a></li>
                <li><a class="dropdown-item" href="#">Settings</a></li>
                <li><a class="dropdown-item" href="#">Profile</a></li>
                <li>
                    <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item" href="#">Sign out</a></li>
            </ul>
        </div> -->
    </div>
</template>
<style lang="scss">
.sidebar-admin {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    background-color: white;

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