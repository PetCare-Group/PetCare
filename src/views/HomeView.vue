<script >

import SearchBarContent from "../components/search-bar-content.vue";
import FilterContent from "../components/filter-content.component.vue"
import ResultContent from "../components/result-content.vue";
import HeaderContent from "../components/header-content.component.vue"
export default ({
    components: {HeaderContent, ResultContent, FilterContent, SearchBarContent}
})

</script>

<template>
    <HeaderContent/>
    <SearchBarContent />
    <div class="flex flex-wrap justify-content-between w-10 mx-auto mt-4">
      <FilterContent />
      <ResultContent />
    </div>

</template>

