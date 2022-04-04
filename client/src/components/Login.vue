<template>
  <div class="login q-pa-lg">
    <span class="login__header">Login</span>
    <div class="login__form">
      <q-input
        clearable
        class="q-my-md"
        outlined
        v-model="data.email"
        label="Email"
      />
      <q-input
        class="q-my-md"
        outlined
        v-model="data.pass"
        label="Password"
        type="password"
        clearable
      />
    </div>
    <div class="row justify-between">
      <div class="col-6">
        <slot></slot>
      </div>
      <div class="col-5 text-right">
        <q-btn @click="routeToRegister" flat color="primary">
          <div>register</div>
          <q-icon right name="fa-solid fa-right-to-bracket" />
        </q-btn>
      </div>
    </div>
  </div>
</template>

<script>
import { toRef } from "vue";
export default {
  name: "Login",
  emits: ["registerd"],
  props: {
    formData: {
      type: Object,
      default: () => {},
    },
  },
  setup(props, context) {
    const data = toRef(props, "formData");
    function routeToRegister() {
      context.emit("registered", false);
    }
    return {
      data,
      routeToRegister,
    };
  },
};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &__header {
    font-size: 24px;
    font-weight: 700;
    color: var(--q-dark);
  }
}
</style>