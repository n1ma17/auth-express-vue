<template>
  <div class="auth">
    <q-card class="auth__card">
      <Login
        v-if="state.registered"
        @registered="registeredHandler"
        :formData="formData"
      >
        <q-btn @click="loginUser" outline color="positive">
          <q-icon name="fa-solid fa-right-to-bracket" />
          <div>submit</div>
        </q-btn>
      </Login>
      <Register
        v-if="!state.registered"
        :formData="formData"
        @registered="registeredHandler"
      >
        <q-btn outline color="positive">
          <q-icon name="fa-solid fa-right-to-bracket" />
          <div>submit</div>
        </q-btn>
      </Register>
      <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
    </q-card>
  </div>
</template>

<script>
// import { ref, reactive, inject } from "vue";
import { ref, reactive } from "vue";
import axios from "axios";
import Login from "@/components/Login";
import Register from "@/components/Register";
export default {
  components: {
    Login,
    Register,
  },
  setup() {
    // let $axios = inject('$axios')
    console.log(this)
    const state = reactive({
      registered: false,
    });
    const formData = ref({ email: "", pass: "" });
    // const axiosWT =axios.create()
    function loginUser() {
      // console.log("data:", formData.value);
      const params = {
        username: formData.value.email,
        password: formData.value.pass,
      };
      // $axios.post("/login", params).then((res)=>{
      //   console.log(res);
      // }).catch(console.error);
      const res = axios.post(" http://localhost:5000/api/login", params)
      console.log(res);
    }
    function registeredHandler(val) {
      state.registered = val;
    }
    return {
      loginUser,
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