<template>
  <a-checkbox :checked="checked" @change="onChange" :data-index="index">
    <slot />
  </a-checkbox>
</template>
<script>
export default {
  props: {
    index: {
      type: Number,
      default: 0
    },
    checked: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onChange (e) {
      console.log(`checked = ${e.target.checked}`)
      if (e.target.checked) {
        console.log(e.target)
        this.$store.dispatch('check', { checked: true, index: this.index })
      } else {
        this.$store.dispatch('check', { checked: false, index: this.index })
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
