<template>
  <v-row class="form align-center justify-space-around">
    <span class="form__title ma-6"><font-awesome-icon icon="fa-solid fa-barcode" /> {{ title }} </span>
    <v-col cols="12" md="12">
      <v-text-field class="mb-3" label="email" v-bind="attrs"></v-text-field>
      <v-text-field label="password" v-bind="attrs"></v-text-field>
    </v-col>
    <v-col cols="12" md="12">
        <slot></slot>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Form",
  props: {
    title: {
      type: String,
      default: "Title",
    },
  },
  data() {
    return {
      attrs: {
        color: "#FFD200",
        outlined: true,
        dark:true
      },
    };
  },
};
</script>

<style scoped lang="scss">
.form {
    width: 100%;
    height: 100%;
    padding: 0 40px !important;
  &__title {
    width: 100%;
    text-align: center;
    font-weight: 700;
    font-size: 2rem;
    color: #FFD200;
  }
}
</style>