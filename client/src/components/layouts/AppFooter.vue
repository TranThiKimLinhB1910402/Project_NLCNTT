<template>
    <footer>
        <div class="container">
            <div class="row row-cols-md-4 row-cols-2">
                <div class="footer-col col">
                    <h4 class="title-footer">THỦ TỤC THUÊ XE</h4>
                    <ul class="list-footer">
                        <li>
                            <router-link :to="{ name: 'products' }">
                                Báo giá
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'products' }">
                                Quy định
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'products' }">
                                Thủ tục thuê xe
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'products' }">
                                Hình thức thanh toán
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div class="footer-col col">
                    <h4 class="title-footer">DỊCH VỤ</h4>
                    <ul class="list-footer">
                        <li>
                            <router-link :to="{ name: 'products' }">
                                Thuê xe du lịch
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'products' }">
                                Thuê xe tự lái
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'products' }">
                                Thuê xe có lái
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'products' }">
                                Thuê xe tiệc cưới
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div class="footer-col col">
                    <h4 class="title-footer">CHÍNH SÁCH</h4>
                    <ul class="list-footer">
                        <li>
                            <router-link :to="{ name: 'products' }">
                                Trách nhiệm bên thuê
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'products' }">
                                Trách nhiệm bên cho thuê
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'products' }">
                                Chính sách bảo mật thông tin
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div class="footer-col col">
                    <h4 class="title-footer">LIÊN HỆ</h4>
                    <ul class="list-footer">
                        <li>
                            <router-link :to="{ name: 'products' }">
                                <i class="fa-solid fa-phone me-2"></i> 0123456789
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'products' }">
                                <i class="fa-solid fa-envelope me-2"></i> autocarhoidap@gamil.com
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'products' }">
                                <i class="fa-solid fa-mobile-screen-button me-2"></i> Zalo: 0123456789
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'products' }">
                                <i class="fa-solid fa-location-dot me-2"></i> Can Tho University, Ninh Kieu, Can Tho
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </footer>
</template>
<style lang="scss">
footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4% 8%;
    background-color: var(--primary-color);

    .list-footer {
        list-style-type: none;
        padding: 0;
        margin: 0;

        li {
            padding: 5px 0;
        }

        i,
        a {
            color: var(--secondary-color);
            text-decoration: none;
            font-size: 1.1rem;

            &:hover {
                color: var(--secondary-hover);
            }
        }
    }

    .title-footer {
        margin: 1.3rem 0;
        color: var(--secondary-color);
        font-size: 1.2rem;
    }

}
</style>