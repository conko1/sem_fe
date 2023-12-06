<template>
  <div class="container mt-5">
    <div class="d-flex justify-content-between align-items-center mb-3 position-relative">
      <h2 class="text-start">Štatistiky</h2>
      <dropdown-custom
        :options="options"
        :pre-selected="selected"
        @select-from-to="selected.value = $event.to.value; selected.label = $event.to.label"
      />
    </div>
    <user-info-table :display-key="selected.value"/>
  </div>
</template>

<script>
import DropdownCustom from "@/components/Shared/DropdownCustom.vue";
import UserInfoTable from "@/components/StatisticsViewComponents/UserInfoTable.vue";

export default {
  name: "StatisticsView",
  components: {UserInfoTable, DropdownCustom},
  data: () => ({
    selected: {label: 'Dnes', value: 'today'},
    options: [
      {label: 'Dnes', value: 'today'},
      {label: 'Týždeň', value: 'week'},
      {label: 'Tento týždeň', value: 'thisWeek'}
    ]
  })
}
</script>

<style scoped lang="scss">
.v-select {
  min-width: 100px;
}

@import "vue-select/dist/vue-select.css";
</style>
<style lang="scss">
.vs__clear {
  visibility: hidden;
  display: none;
}
</style>