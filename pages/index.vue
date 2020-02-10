<template>
  <div class="container">
    <header>
      <h1 class="title">
        Website Launch Checklist for <strong>{{ this.$store.state.siteName }}</strong>
      </h1>
      <a-input @change="commitSiteName" v-model="siteName" size="large" placeholder="For Site..." />
      <a-button @click="resetData" type="primary">
        Reset Data
      </a-button>
      <Progress />
    </header>
    <ListGroup item-key="seo">
      SEO Basics
    </ListGroup>
    <ListGroup item-key="analytics">
      Analytics
    </ListGroup>
    <ListGroup item-key="domains">
      Domains and SSL
    </ListGroup>
    <ListGroup item-key="ux">
      User Experience
    </ListGroup>
    <ListGroup item-key="performance">
      Performance
    </ListGroup>
    <ListGroup item-key="browsers">
      Browsers
    </ListGroup>
    <ListGroup item-key="accessibility">
      Accessibility
    </ListGroup>
    <ListGroup item-key="javascript">
      Javascript
    </ListGroup>
    <ListGroup item-key="forms">
      Forms
    </ListGroup>
    <ListGroup item-key="errors">
      Error Catching
    </ListGroup>
    <ListGroup item-key="content">
      Content
    </ListGroup>
    <ListGroup item-key="cms">
      Content Management System
    </ListGroup>
  </div>
</template>

<script>
import Progress from '~/components/Progress'
import ListGroup from '~/components/ListGroup'

export default {
  components: {
    Progress,
    ListGroup
  },
  data () {
    return {
      siteName: ''
    }
  },
  methods: {
    commitSiteName (e) {
      this.$store.dispatch('siteName', this.siteName)
    },
    resetData () {
      this.$store.dispatch('reset')
    }
  },
}
</script>

<style>
h1 {
  line-height: 1;
  font-size: 4rem !important;
}

header {
  margin-bottom: 2em;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 10;
  padding: 1em 0;
}

p {
  font-size: 16px;
  padding-left: 1.5em;
  margin-bottom: 2.5em;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  max-width: 1024px;
  padding: 3em 1.5em;
  /* display: flex;
  justify-content: center;
  flex-flow: column nowrap; */
  /* align-items: center; */
  /* text-align: center; */
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
ul > li {
  font-size: 1em;
  margin-bottom: 1em;
}

label {
  font-size: 16px;
}
</style>
