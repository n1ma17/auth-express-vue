<template>
  <div class="register q-pa-lg">
    <span class="register__header">Register</span>
    <div class="register__form">
      <q-input clearable class="q-my-md" outlined v-model="data.email" label="Email" />
      <q-input type="password" clearable class="q-my-md" outlined  v-model="data.pass" label="Password" />
    </div>
    <div class="register__login-before">
      Already have an account? <a @click="goToLoginForm"> Log in</a>
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>


<script>
import { toRef } from "vue";
export default {
  name: "Register",
  emits: ["registerd"],
  props: {
    formData: {
      type: Object,
      default: ()=>{},
    },
  },
  setup(props, context) {
    const data = toRef(props, "formData");
    function goToLoginForm() {
      context.emit('registered', true)
    }
    return {
      data,
      goToLoginForm,
    };
  },
};
</script>

<style lang="scss" scoped>
.register {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &__login-before {
    color: var(--q-dark);
    a {
      color: var(--q-primary);
      cursor: pointer;
    }
  }
  &__header {
    font-size: 24px;
    font-weight: 700;
    color: var(--q-dark);
  }
}
</style>