<template>
  <div class="auth">
    <div class="auth__form">
      <div class="auth__form__login">
        <login title="sign in">
          <div class="submit-section">
            <v-btn x-large color="#FFD200">submit</v-btn>
            <v-btn large color="#FFD200" text>
              register
             <font-awesome-icon class="ml-3" icon="fa-solid fa-arrow-right-long" />
             </v-btn>
          </div>
        </login>
      </div>
    </div>
  </div>
</template>

<script>
import Login from "@/components/Form";
export default {
  name: "Auth",
  components: {
    login: Login,
  },
};
</script>

<style scoped lang="scss">
.submit-section{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.auth {
  width: 100%;
  height: 100%;
  background: url("../assets/background.jpg");
  background-position: center;
  background-size: cover;
  &__form {
    width: 30%;
    height: 70%;
    box-shadow: 0px 0px 16px 2px #989898;
    background-color: #282828;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 100px;
    border-radius: 20px;
    &__login {
      height: 100%;
    }
  }
}
</style>