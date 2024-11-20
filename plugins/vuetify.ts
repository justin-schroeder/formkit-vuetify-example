import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import "@formkit/vuetify";
import { VInput } from "@formkit/vuetify";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    components: {
      VInput
    }
  });
  app.vueApp.use(vuetify);
});
