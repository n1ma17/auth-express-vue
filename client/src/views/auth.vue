<template>
  <div class="auth">
    <q-card class="auth__card">
      <Login
        v-if="state.registered"
        @registered="registeredHandler"
        :formData="formData"
      >
        <q-btn outline @click="submitForm" color="positive">
          <q-icon name="fa-solid fa-right-to-bracket" />
          <div>submit</div>
        </q-btn>
      </Login>
      <Register
        v-if="!state.registered"
        :formData="formData"
        @registered="registeredHandler"
      >
        <q-btn outline @click="submitForm" color="positive">
          <q-icon name="fa-solid fa-right-to-bracket" />
          <div>submit</div>
        </q-btn>
      </Register>
    </q-card>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import Login from "@/components/Login";
import Register from "@/components/Register";
export default {
  components: {
    Login,
    Register,
  },
  setup() {
    const state = reactive({
        registered: false
    })
    const formData = ref({ email: "", pass: "" });
    function submitForm() {
      console.log("data:", formData.value);
    }
    function registeredHandler(val) {
      console.log({ val });
      state.registered = val;
      console.log(state.registered);
    }
    return {
      submitForm,
      formData,
      state,
      registeredHandler,
    };
  },
};
</script>

<style lang="scss" scoped>
.auth {
  width: 100%;
  height: 100vh;
  background: url("../assets/bg.jpg");
  background-position: center;
  background-size: cover;
  position: relative;
  &__card {
    width: 25%;
    height: 400px;
    max-height: 70%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 10%;
  }
}
</style>