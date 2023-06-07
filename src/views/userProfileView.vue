<template>
  <HeaderContent />

  <FooterContent />
</template>

<script>
import HeaderContent from "@/components/header-content.component.vue";
import FooterContent from "@/components/footer-content.component.vue";

export default {
  name: "userProfileView",
  components: {FooterContent, HeaderContent},
};
</script>

<style scoped></style>
