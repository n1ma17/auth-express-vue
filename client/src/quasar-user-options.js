import "./styles/quasar.scss";
import iconSet from "quasar/icon-set/fontawesome-v5.js";
import "@quasar/extras/fontawesome-v5/fontawesome-v5.css";

// To be used on app.use(Quasar, { ... })
export default {
  config: {
    brand: {
      primary: '#ffd100',
      negative: '#ff0000',
      white:'#fff',
      dark:'#4D5057',
      positive: '#17BEBB'
    }
  },
  plugins: {},
  iconSet: iconSet,
};
