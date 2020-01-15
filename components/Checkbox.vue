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
    },
  },
}
</script>
