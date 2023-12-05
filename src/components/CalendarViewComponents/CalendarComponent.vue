<template>
  <div class="calendar-wrapper">
    <div class="calendar-navigation">
      <div class="calendar-button cursor-pointer user-select-none fnt-1-15-rem" @click="previousWeek">
        <img src="@/images/back-icon.png" alt="BACK">
        Dozadu
      </div>
      <div class="calendar-button cursor-pointer user-select-none fnt-1-15-rem" @click="nextWeek">
        Dopredu
        <img src="@/images/back-icon.png" class="rotate-180" alt="BACK">
      </div>
    </div>
    <div id="calendar">
      <DayPilotCalendar :config="config" ref="calendarRef" />
    </div>
  </div>
</template>

<script>
import { DayPilot, DayPilotCalendar } from "@daypilot/daypilot-lite-vue";
import {getCurrentInstance, ref} from "vue";
export default {
  name: "CalendarComponent",
  props: {
    days: {
      type: Number,
      required: true,
    },
  },
  components: {
    DayPilotCalendar,
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })
    this.onResize();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    onResize() {
      if (window.innerWidth < 1000) {
        this.calendarConstant = 0.7;
        this.config.viewType = "Days";
      } else {
        this.calendarConstant = 0.8;
        this.config.viewType = "WorkWeek"
      }
      this.setCalendarHeight();
    },
    nextWeek() {
      this.config.startDate = this.config.startDate.addDays(this.days);
      setTimeout(() => this.setCalendarHeight(), 1);
    },
    previousWeek() {
      this.config.startDate = this.config.startDate.addDays(-this.days);
      setTimeout(() => this.setCalendarHeight(), 1);
    },
    setCalendarHeight() {
      const newCalendarHeight = Math.floor(window.innerHeight * this.calendarConstant);
      document.getElementsByClassName("calendar_default_main")[0].children[1].style.height = `${newCalendarHeight}px`
    }
  },
  data: () => ({
    calendarConstant: 0.8,
  }),
  setup() {
    const calendarRef = ref(null);
    const instance = getCurrentInstance();

    const config = ref({
      barHidden: true,
      durationBarVisible: false,
      businessBeginsHour: 6,
      headerDateFormat: "d.M ddd",
      viewType: "WorkWeek",
      cellDuration: 60,
      startDate: DayPilot.Date.today(),
      locale: "sk-SK",
      eventResizeHandling: "Disabled",
      eventDeleteHandling: "Disabled",
      eventMoveHandling: "Disabled",
      onTimeRangeSelected: (args) => {
        instance.emit('event-time-selected', args);
      },
      onEventClicked: (args) => {
        instance.emit('event-clicked', args);
      },
    });

    // const global = instance.appContext.config.globalProperties;

    // const loadEvents = async (events) => {}

    // onMounted(() => {
    //   loadEvents(instance.props.events);
    // });

    return {
      config,
      calendarRef,
      // loadEvents,
    };
  },
}
</script>

<style scoped lang="scss">
.calendar-navigation {
  display: flex;
  justify-content: space-between;
  margin: 10px;
}
.calendar-wrapper {
  margin: 30px;
  overflow-y: auto;
}
.calendar-button:hover {
  color: #0d6efd;
}
</style>