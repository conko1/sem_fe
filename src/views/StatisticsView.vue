<template>
  <div class="container mt-5">
    <div class="d-flex justify-content-between align-items-center mb-3 position-relative">
      <h2 class="text-start">Štatistiky</h2>
      <dropdown-custom :options="options" :pre-selected="selected" @select-from-to="changeDateRadius($event)"/>
    </div>
    <div class="table-responsive">
      <table class="table table-striped table-sm">
        <thead>
          <tr>
            <th scope="col">Meno</th>
            <th scope="col" v-for="(day) in dayViews">{{ day.toLocaleDateString() }}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1,001</td>
            <td v-for="() in dayViews">random</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import DropdownCustom from "@/components/Shared/DropdownCustom.vue";

export default {
  name: "StatisticsView",
  components: {DropdownCustom},
  created() {
    this.dayViews = this.getDatesBasedOnKey(this.selected.value);
  },
  methods: {
    changeDateRadius(dateData) {
      const viewMode = dateData.to.value;
      this.dayViews = this.getDatesBasedOnKey(viewMode);
    },
    getDatesBasedOnKey(key) {
      const today = new Date();
      const dayOfWeek = today.getDay();
      const dateOfWeek = today.getDate();
      if (key === "today") {
        return [today];
      } else if (key === "thisWeek") {
        const weekDates = [];
        const dayDifferenceFromMonday = dayOfWeek === 0 ? 7 : dayOfWeek;

        for (let i = 0; i < dayDifferenceFromMonday; i++) {
          const date = new Date();
          date.setDate(dateOfWeek-i)
          weekDates.unshift(date);
        }

        return weekDates;
      } else if (key === "week") {
        const weekDates = [];

        for (let i = 0; i < 7; i++) {
          const date = new Date();
          date.setDate(dateOfWeek-i)
          weekDates.unshift(date);
        }

        return weekDates;
      }
    }
  },
  data: () => ({
    dayViews: null,
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