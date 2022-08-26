// Root component option
const options = {
  data() {
    return {
      appName: "kratik",
      showName: true,
      cart: ["apple", "banana", "mango", "graps", "orange"],
      person: {
        Name: "sakshi",
        age: 20,
        subject: "Full Stack",
      },
      message: "",
      agree: true,
      fruits: []
    };
  },
  methods: {
    addToCart() {
      this.cart.push("x");
    },
  },
};

// Application instance
const app = Vue.createApp(options);
// View model instance of component
const vm = app.mount("#app");
