import {createApp} from "vue";
import App from "./App.vue";
import "./lib/link.scss";
import "./index.scss";
import "github-markdown-css";
import {router} from "./router";

const app = createApp(App);
app.use(router);
app.mount("#app");
