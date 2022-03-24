<template>
  <div class="login">
      <div class="login__form">
          <span class="login__form__title">Sign in</span>
      </div>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style scoped lang="scss">
.login{
    width: 100%;
    height: 100%;
    background: url('../assets/images/background.jpg');
    background-size: cover;
    background-position: center;
    position: relative;
    &__form{
        width: 35%;
        height: 70%;
        border-radius: 20px;
        background-color: rgba(0, 0, 0, 0.445);
        position: absolute;
        top: 50%;
        transform:translateY(-50%) ;
        right: 100px;
        display: flex;
        justify-content: center;
        padding: 30px;
        &__title{

        }
    }
}
</style>