export const state = () => ({
  progress: {
    // total: 2,
    checked: 0,
  },
  lists: [
    {
      section: 'seo',
      title: 'XML Sitemap is being generated and is correct',
      info: 'some more info about xml sitemaps'
    },
    {
      section: 'seo',
      title: 'Robots.txt (if necessary to hide certain site areas)',
      info: 'asdf'
    },
    {
      section: 'seo',
      title: 'Meta descriptions are included and pertain to the unique page',
      info: 'asdf'
    },
    {
      section: 'seo',
      title: 'Page Titles are descriptive, SEO friendly, and unique',
      info: ''
    },
    {
      section: 'seo',
      title: 'Heading tags used appropriately (ideally, one H1 per page)',
      info: ''
    },
    {
      section: 'seo',
      title: 'Redirects: 301 redirects in place (if this new site is replacing an old one)',
      info: ''
    },
    {
      section: 'analytics',
      title: 'GTM Setup and is ready to push to live analytics property',
      info: ''
    },
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
