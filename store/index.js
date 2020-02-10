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
      title: 'Live GA filters Marlin IPs or has a View that filters these IPs',
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
    },
    {
      index: 10,
      section: 'domains',
      title: 'SSL works in production and staging and there are no non-HTTPS references (no mixed-content errors)',
      info: '',
      checked: false,
    },
    {
      index: 11,
      section: 'ux',
      title: 'Empty states for all interactive items that could return no results',
      info: '',
      checked: false,
    },
    {
      index: 12,
      section: 'performance',
      title: 'Google Pagespeed Insights, Load Speed, Mobile Performance',
      info: 'Lighthouse',
      checked: false,
    },
    {
      index: 14,
      section: 'performance',
      title: 'Ensure only necessary fonts, weights and character sets are installed',
      info: '',
      checked: false,
    },
    {
      index: 15,
      section: 'performance',
      title: 'Images reasonably optimized',
      info: 'tinypng, webp, etc.',
      checked: false,
    },
    {
      index: 16,
      section: 'performance',
      title: 'Check for broken links (Integrity or Screaming Frog)',
      info: 'tinypng, webp, etc.',
      checked: false,
    },
    {
      index: 50,
      section: 'performance',
      title: 'Validate HTML',
      info: '',
      checked: false,
    },
    {
      index: 17,
      section: 'browsers',
      title: 'Check in IE11 and current Edge',
      info: 'whether required or not',
      checked: false,
    },
    {
      index: 18,
      section: 'browsers',
      title: 'Check in a previous version of iOS',
      info: '',
      checked: false,
    },
    {
      index: 19,
      section: 'accessibility',
      title: 'Site checked with Axe browser tool',
      info: '',
      checked: false,
    },
    {
      index: 20,
      section: 'accessibility',
      title: 'ARIA attributes added where applicable',
      info: '',
      checked: false,
    },
    {
      index: 21,
      section: 'accessibility',
      title: 'Image Alt attributes set appropriately',
      info: '',
      checked: false,
    },
    {
      index: 22,
      section: 'accessibility',
      title: 'All form fields have < label >’s associated',
      info: '',
      checked: false,
    },
    {
      index: 47,
      section: 'accessibility',
      title: 'All form fields clear input error states',
      info: '',
      checked: false,
    },
    {
      index: 48,
      section: 'accessibility',
      title: 'HTML tag has language set',
      info: '',
      checked: false,
    },
    {
      index: 49,
      section: 'accessibility',
      title: 'All parts of a site must be keyboard-accessible',
      info: '',
      checked: false,
    },
    {
      index: 51,
      section: 'accessibility',
      title: 'Moving, blinking, scrolling, or auto updating can be user paused, stopped, or hidden',
      info: '',
      checked: false,
    },
    {
      index: 52,
      section: 'accessibility',
      title: 'Provide Skip to Content links',
      info: '',
      checked: false,
    },
    {
      index: 53,
      section: 'accessibility',
      title: 'Keyboard focus must be clear',
      info: '',
      checked: false,
    },
    {
      index: 23,
      section: 'javascript',
      title: 'JS Libraries hosted on CDN have fallbacks',
      info: '',
      checked: false,
    },
    {
      index: 24,
      section: 'javascript',
      title: 'Console.logs removed',
      info: '',
      checked: false,
    },
    {
      index: 25,
      section: 'javascript',
      title: 'No errors in console',
      info: '',
      checked: false,
    },
    {
      index: 26,
      section: 'forms',
      title: 'Server Generated E - mail Working',
      info: '',
      checked: false,
    },
    {
      index: 27,
      section: 'forms',
      title: 'Recipient’s correct',
      info: '',
      checked: false,
    },
    {
      index: 28,
      section: 'forms',
      title: 'Validation in place',
      info: '',
      checked: false,
    },
    {
      index: 29,
      section: 'forms',
      title: 'Submissions can be tracked with analytics',
      info: '',
      checked: false,
    },
    {
      index: 30,
      section: 'errors',
      title: 'Custom 404 Pages',
      info: '',
      checked: false,
    },
    {
      index: 31,
      section: 'content',
      title: 'Favicons and other device icons',
      info: '',
      checked: false,
    },
    {
      index: 32,
      section: 'content',
      title: 'Social meta tags(Open Graph, etc.) if necessary',
      info: '',
      checked: false,
    },
    {
      index: 33,
      section: 'content',
      title: 'Check spelling',
      info: '',
      checked: false,
    },
    {
      index: 34,
      section: 'content',
      title: 'No Placeholder text',
      info: '',
      checked: false,
    },
    {
      index: 35,
      section: 'content',
      title: 'Privacy Policy and / or Terms of Service',
      info: '',
      checked: false,
    },
    {
      index: 36,
      section: 'content',
      title: 'If EU, cookie declaration',
      info: '',
      checked: false,
    },
    {
      index: 37,
      section: 'content',
      title: 'Footer includes up-to-date copywrite',
      info: '',
      checked: false,
    },
    {
      index: 38,
      section: 'content',
      title: 'Print Stylesheets(if necessary)',
      info: '',
      checked: false,
    },
    {
      index: 39,
      section: 'postlaunch',
      title: 'Verify analytics',
      info: '',
      checked: false,
    },
    {
      index: 40,
      section: 'postlaunch',
      title: 'Verify forms are working and sending correct notifications',
      info: '',
      checked: false,
    },
    {
      index: 41,
      section: 'postlaunch',
      title: 'Verify SSL',
      info: '',
      checked: false,
    },
    {
      index: 41,
      section: 'postlaunch',
      title: 'Verify www and non - www',
      info: '',
      checked: false,
    },
    {
      index: 42,
      section: 'postlaunch',
      title: 'Verify webfonts',
      info: '',
      checked: false,
    },
    {
      index: 43,
      section: 'postlaunch',
      title: 'Verify webfonts',
      info: '',
      checked: false,
    },
    {
      index: 44,
      section: 'cms',
      title: 'CMS login is hidden in production',
      info: '',
      checked: false,
    },
    {
      index: 45,
      section: 'analytics',
      title: 'Gogle search console and BING if necessary',
      info: '',
      checked: false,
    },
    {
      index: 46,
      section: 'analytics',
      title: 'Link GA and Google search console',
      info: '',
      checked: false,
    },
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
