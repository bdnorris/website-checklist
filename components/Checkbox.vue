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

<style>

.ant-checkbox-wrapper {
  margin-bottom: 1em;
}

.ant-checkbox-wrapper + span,
.ant-checkbox + span {
  font-size: 22px;
  line-height: 1;
}

.ant-checkbox {
  top: -0.25em;
}

</style>
