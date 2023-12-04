<template>
  <div class="container-fluid">
    <div class="row">
      <main>
        <calendar-component :days="7"/>
      </main>
    </div>
  </div>
</template>

<script>
import CalendarComponent from "@/components/CalendarViewComponents/CalendarComponent.vue";

export default {
  name: "CalendarView",
  components: {CalendarComponent}
}
</script>

<style scoped>

</style>