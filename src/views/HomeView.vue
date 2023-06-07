<script setup>
import TheWelcome from "../components/TheWelcome.vue";
import FilterContent from "@/components/filter-content.component.vue";
import SearchBarContent from "@/components/search-bar-content.vue";
import ResultContent from "@/components/result-content.vue";
import HeaderContent from "@/components/header-content.component.vue";
import FooterContent from "@/components/footer-content.component.vue";
</script>

<template>
  <HeaderContent />
  <main>
    <search-bar-content />
    <div class="flex flex-wrap justify-content-between w-10 mx-auto mt-4">
      <FilterContent />
      <Result-content />
    </div>
  </main>
  <FooterContent />
</template>

