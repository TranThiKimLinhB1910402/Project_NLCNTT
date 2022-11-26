import {createWebHistory, createRouter} from "vue-router";
import HomePage from "@/views/HomePage.vue";
import ProductsPage from "@/views/ProductsPage.vue"
import LoginPage from "@/views/auth/LoginPage.vue";
import RegisterPage from "@/views/auth/RegisterPage.vue";
import ProductDetail from "@/views/ProductDetail.vue";
import RegisterCarPage from "@/views/RegisterCarPage.vue";
import FormConfirm from "@/views/FormConfirm.vue";
import TablePrice from "@/views/TablePrice.vue";
import RentHistory from "@/views/RentHistory.vue"
//admin
import Dashboard from "@/views/Admin/Dashboard.vue";
import ManagerProduct from "@/views/Admin/ManagerProduct/ManagerProduct.vue";
import ManagerUser from "@/views/Admin/ManagerUser/ManagerUser.vue";
import ManagerDriver from "@/views/Admin/ManagerDriver/ManagerDriver.vue";
import ManagerRent from "@/views/Admin/ManagerRent/ManagerRent.vue";
import DetailRent from "@/views/Admin/ManagerRent/DetailRent.vue";
import AddProduct from "@/views/Admin/ManagerProduct/AddProduct.vue";
import AddDriver from "@/views/Admin/ManagerDriver/AddDriver.vue";
import EditProduct from "@/views/Admin/ManagerProduct/EditProduct.vue";
import AddRent from "@/views/Admin/ManagerRent/AddRent.vue"
const routes = [
    
     { 
        path: "/admin",
        meta:{ layout: 'LayoutAdmin' },
        children: [
            { path: '', name: "admin", component: Dashboard },
            { path: 'dashboard', component: Dashboard },
            { path: 'manager-product', name: "manager-product", component: ManagerProduct},
            { path: 'add-product', name:"add-product", component: AddProduct},
            { path: 'manager-product/:id', name:"edit-product", component: EditProduct, props: true},
            { path: 'manager-user', name: "manager-user", component: ManagerUser},
            { path: 'manager-rent', name: "manager-rent", component: ManagerRent},
            { path: 'add-rent', name: "add-rent", component: AddRent},
            { path: 'manager-rent/:id', name: "detail-rent", component: DetailRent, props: true},
            { path: 'manager-driver', name: "manager-driver", component: ManagerDriver},
            { path: 'add-driver', name:"add-driver", component: AddDriver},


            
        ],
    },
    {
        path: "/",
        children:[
            { path: '', component: HomePage },
            { path: 'home', name:"home", component: HomePage },
            {
                path: "products",
                name : "products",
                component: ProductsPage
            },
            {
                path: "products/:id",
                name : "productDetail",
                component: ProductDetail,
                props: true
            },
            {
                path: "register-car",
                name : "register-car",
                component: RegisterCarPage,
                props: true
            },
            {
                path: "products/form-confirm/:id",
                name : "form-confim",
                component: FormConfirm,
            },
            {
                path: "bang-gia",
                name : "bang-gia",
                component: TablePrice
            },
            {
                path: "tra-cuu",
                name : "tra-cuu",
                component: RentHistory
            },
            {
                path: "login",
                name : "login",
                component: LoginPage,
            },
            {
                path: "register",
                name : "register",
                component: RegisterPage,
            },
        ]
    },
    
    
    

];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})
export default router;