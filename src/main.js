import { createApp } from "vue";
import App from "./App.vue";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import jQuery from "jquery";
import AppModal from "./components/AppModal.vue";
window.$ = window.jQuery = jQuery;

const app = createApp(App);
app.component("app-modal", AppModal);
app.mount("#app");
