export const state = () => ({
  progress: {
    // total: 2,
    checked: 0,
  },
  lists: [
    {
      section: 'seo',
      title: 'XML Sitemap is being generated and is correct',
      info: ''
    },
    {
      section: 'seo',
      title: 'Robots.txt (if necessary to hide certain site areas)',
      info: ''
    }
  ]
})

export const mutations = {
  increment (state, payload) {
    if (payload === 'add') {
      state.progress.checked = state.progress.checked + 1
    } else if (payload === 'remove') {
      state.progress.checked = state.progress.checked - 1
    }
  }
}

export const actions = {
  add (context) {
    context.commit('increment', 'add')
  },
  remove (context) {
    context.commit('increment', 'remove')
  }
}

export const getters = {
  percentage: (state, getters) => {
    return (state.progress.checked / state.lists.length) * 100
  },
}
