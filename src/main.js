import { createApp } from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(fas);
library.add(far);

const app = createApp(App);

// createApp을 통해 생성한Application 인스턴스의 component API 활용
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
