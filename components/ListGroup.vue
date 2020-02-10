<template>
  <div>
    <h2 class="subtitle">
      <slot />
    </h2>
    <ul :ref="itemKey">
      <li v-for="(item, index) in items" :key="index">
        <Checkbox
          :index="getIndex(item)"
          :checked="item.checked"
        >
          {{ item.title }}
        </Checkbox>
        <div class="content" v-html="item.info" />
      </li>
    </ul>
  </div>
</template>

<script>
import Checkbox from '~/components/Checkbox'

export default {
  components: {
    Checkbox,
  },
  props: {
    itemKey: {
      type: String,
      default: 'seo'
    },
  },
  computed: {
    items () {
      return this.$store.state.lists.filter(list => list.section === this.itemKey)
    },
  },
  methods: {
    getIndex (item) {
      return this.$store.getters.getIndex(item.title)
    }
  },
}
</script>

<style>
  .content > p,
  .content > a {
    margin-bottom: 1rem;
    margin-left: 0.5rem;
  }
  .content > ul {
    margin-left: 2rem;
    margin-bottom: 2em;
  }
</style>
