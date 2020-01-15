<template>
  <a-checkbox @change="onChange">
    <slot />
  </a-checkbox>
</template>
<script>
export default {
  methods: {
    onChange (e) {
      console.log(`checked = ${e.target.checked}`)
      if (e.target.checked) {
        console.log(e.target)
        this.$store.dispatch('add')
      } else {
        this.$store.dispatch('remove')
      }
    },
  },
}
</script>
