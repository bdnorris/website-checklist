<template>
  <div class="progress-wrapper">
    <!-- <a-progress :percent="100" status="active" /> -->
    <!-- <a-progress :percent="70" status="exception" /> -->
    <a-progress :percent="percent" />
  </div>
</template>

<script>
export default {
  name: 'Progress',
  computed: {
    percent () {
      return Math.round(this.$store.getters.percentage)
    }
  },
}
</script>

<style>
.progress-wrapper {
  margin: 2em 0;
}
</style>
