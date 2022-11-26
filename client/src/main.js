import { createApp } from 'vue';
import App from './App.vue';
import "@fortawesome/fontawesome-free/css/all.min.css";
import router from "./router";
import VCalendar from 'v-calendar';
import 'vue-bootstrap-typeahead';
import 'v-calendar/dist/style.css';
import "./assets/css/style.css";
import "./assets/css/login.css";
import {createPinia} from "pinia"
const pinia = createPinia()
const app=createApp(App);
	app.use(pinia)
app.use(VCalendar,{}).use(router).mount('#app')
