<template>
  <div class="table-responsive">
    <table class="table table-striped table-sm" v-if="getEmployees && getEmployees.length !== 0">
      <thead>
        <tr>
          <th scope="col">Meno</th>
          <th scope="col" v-for="(day) in dayViews">{{ day.toLocaleDateString() }}</th>
          <th scope="col">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(employee) in getEmployees">
          <td class="text-center">{{employee.first_name}} {{employee.last_name}}</td>
          <td v-for="(date) in dayViews">
            <div v-for="(event) in filterEventsByDate(employee.events, date)">
              {{event.type.description}} {{ new Date(event.created).toLocaleDateString() }}
            </div>
          </td>
          <td>{{ getTotalHours(employee.events) }} minút</td>
        </tr>
      </tbody>
    </table>
    <div v-else>
      Nemáte pridaných žiadnych zamestnancov
    </div>
  </div>
</template>

<script>
export default {
  name: "UserInfoTable",
  props: {
    displayKey: {
      type: String,
      required: true,
    }
  },
  created() {
    this.dayViews = this.getDatesBasedOnKey(this.displayKey);
  },
  computed: {
    getEmployees() {
      let employees =  this.$store.getters["usersState/getMyEmployees"];
      if (!employees || employees.length === 0) return [];
      employees = employees.filter((e) => !e.is_staff && !e.is_employer);
      return employees;
    }
  },
  watch: {
    displayKey(newKey) {
      this.dayViews = this.getDatesBasedOnKey(newKey);
    }
  },
  methods: {
    filterEventsByDate(events, date) {
      return events.filter((e) => {
        const eventDateStr = new Date(e.created).toISOString().split('T')[0];
        const specifiedDateStr = date.toISOString().split('T')[0];
        return eventDateStr === specifiedDateStr;
      });
    },
    getTotalHours(events) {
      const start = new Date(events.find((e) => e.type.key === "shiftStart").created);
      const end = new Date(events.find((e) => e.type.key === "shiftEnd").created);
      // Returning difference in minutes
      return Math.round(((end - start % 86400000) % 3600000) / 60000);
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
  })
}
</script>

<style scoped>

</style>