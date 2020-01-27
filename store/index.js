export const state = () => ({
  siteName: '...',
  lists: [
    {
      index: 0,
      section: 'seo',
      title: 'XML Sitemap is being generated and is correct',
      info: 'some more info about xml sitemaps',
      checked: false,
    },
    {
      index: 1,
      section: 'seo',
      title: 'Robots.txt (if necessary to hide certain site areas)',
      info: 'asdf',
      checked: false,
    },
    {
      index: 2,
      section: 'seo',
      title: 'Meta descriptions are included and pertain to the unique page',
      info: 'asdf',
      checked: false,
    },
    {
      index: 3,
      section: 'seo',
      title: 'Page Titles are descriptive, SEO friendly, and unique',
      info: '',
      checked: false,
    },
    {
      index: 4,
      section: 'seo',
      title: 'Heading tags used appropriately (ideally, one H1 per page)',
      info: '',
      checked: false,
    },
    {
      index: 5,
      section: 'seo',
      title: 'Redirects: 301 redirects in place (if this new site is replacing an old one)',
      info: '',
      checked: false,
    },
    {
      index: 6,
      section: 'analytics',
      title: 'GTM Setup and is ready to push to live analytics property',
      info: '',
      checked: false,
    },
    {
      index: 7,
      section: 'analytics',
      title: 'Live GA filters Marlin IPs or has  a View that filters these IPs',
      info: '',
      checked: false,
    },
    {
      index: 8,
      section: 'analytics',
      title: 'Site search setup in GA (if needed)',
      info: '',
      checked: false,
    },
    {
      index: 9,
      section: 'domains',
      title: 'www and non-www both work, and one forwards to the other',
      info: 'both www and no www should work, and one should forward to the other to avoid duplicate content issues with SEO',
      checked: false,
    }
  ]
})

export const mutations = {
  // increment (state, payload) {
  //   if (payload === 'add') {
  //     state.progress.checked = state.progress.checked + 1
  //   } else if (payload === 'remove') {
  //     state.progress.checked = state.progress.checked - 1
  //   }
  // },
  changeCheck (state, payload) {
    state.lists[payload.index].checked = payload.checked
  },
  changeSiteName (state, payload) {
    state.siteName = payload
  },
  resetData (state) {
    state.siteName = '...'
    state.lists.map((l) => {
      l.checked = false
    })
  }
}

export const actions = {
  check (context, payload) {
    context.commit('changeCheck', payload)
  },
  siteName (context, payload) {
    context.commit('changeSiteName', payload)
  },
  reset (context) {
    context.commit('resetData')
  }
}

export const getters = {
  percentage: (state, getters) => {
    return (state.lists.filter((l) => { return l.checked }).length / state.lists.length) * 100
  },
}
