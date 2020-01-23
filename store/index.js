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
    {
      section: 'analytics',
      title: 'Live GA filters Marlin IPs or has  a View that filters these IPs',
      info: ''
    },
    {
      section: 'analytics',
      title: 'Site search setup in GA (if needed)',
      info: ''
    },
    {
      section: 'domains',
      title: 'www and non-www both work, and one forwards to the other',
      info: 'both www and no www should work, and one should forward to the other to avoid duplicate content issues with SEO'
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
