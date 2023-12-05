<template>
  <v-select v-model="selected" :options="options"></v-select>
</template>

<script>
export default {
  name: "DropdownCustom",
  props: {
    preSelected: {
      type: Object
    },
    options: {
      type: Array,
      required: true,
    }
  },
  created() {
    for (const option of this.options) {
      const value = option.value;
      if (value !== this.preSelected.value) continue;
      this.selected = option;
      break;
    }
  },
  watch: {
    selected(to, from) {
      if (!this.loaded) {
        this.loaded = true;
        return;
      }
      this.$emit("select-from-to", {to, from});
    }
  },
  data: () => ({
    selected: null,
    loaded: false,
  }),
}
</script>

<style scoped>

</style>