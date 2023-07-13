<template>
  <header-component></header-component>
  <quick-form-footer></quick-form-footer>
  <footer-component></footer-component>
</template>

<script>


import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import QuickFormFooter from "@/components/QuickFormFooter.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "About",
  components: {QuickFormFooter, FooterComponent, HeaderComponent},
}

</script>

<style scoped>

</style>