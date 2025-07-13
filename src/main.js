import { createApp } from "vue";
import App from "./App.vue";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

const app = createApp(App);
app.mount("#app");
