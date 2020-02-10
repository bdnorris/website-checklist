export const state = () => ({
  siteName: '...',
  lists: [
    {
      section: 'seo',
      title: 'XML Sitemap is being generated and is correct',
      info: 'XML Sitemaps help search engines index your entire site, without having to rely on manual crawling. Usually, these can be programatically generated, and we have working examples from Umbraco and Nuxt. Sometimes, you may have to generate it manually, or by using a tool like <a href="https://www.xml-sitemaps.com/">this one</a>. This is especially useful for site rebuilds, since you can get Google\'s index updated much faster by submitting your site to Google search console. Old URLs will be replaced by new ones in Google\'s search index.',
      checked: false,
    },
    {
      section: 'seo',
      title: 'Robots.txt (if necessary to hide certain site areas)',
      info: 'asdf',
      checked: false,
    },
    {
      section: 'seo',
      title: 'Meta descriptions are included and pertain to the unique page',
      info: 'asdf',
      checked: false,
    },
    {
      section: 'seo',
      title: 'Page Titles are descriptive, SEO friendly, and unique',
      info: '',
      checked: false,
    },
    {
      section: 'seo',
      title: 'Heading tags used appropriately (ideally, one H1 per page)',
      info: '',
      checked: false,
    },
    {
      section: 'seo',
      title: 'Redirects: 301 redirects in place (if this new site is replacing an old one)',
      info: '',
      checked: false,
    },
    {
      section: 'analytics',
      title: 'GTM Setup and is ready to push to live analytics property',
      info: '',
      checked: false,
    },
    {
      section: 'analytics',
      title: 'Live GA filters Marlin IPs or has a View that filters these IPs',
      info: '',
      checked: false,
    },
    {
      section: 'analytics',
      title: 'Site search setup in GA (if needed)',
      info: '',
      checked: false,
    },
    {
      section: 'domains',
      title: 'www and non-www both work, and one forwards to the other',
      info: 'both www and no www should work, and one should forward to the other to avoid duplicate content issues with SEO',
      checked: false,
    },
    {
      section: 'domains',
      title: 'SSL works in production and staging and there are no non-HTTPS references (no mixed-content errors)',
      info: '',
      checked: false,
    },
    {
      section: 'ux',
      title: 'Empty states for all interactive items that could return no results',
      info: '',
      checked: false,
    },
    {
      section: 'performance',
      title: 'Google Pagespeed Insights, Load Speed, Mobile Performance',
      info: 'Lighthouse',
      checked: false,
    },
    {
      section: 'performance',
      title: 'Ensure only necessary fonts, weights and character sets are installed',
      info: '',
      checked: false,
    },
    {
      section: 'performance',
      title: 'Images reasonably optimized',
      info: 'tinypng, webp, etc.',
      checked: false,
    },
    {
      section: 'performance',
      title: 'Check for broken links (Integrity or Screaming Frog)',
      info: 'tinypng, webp, etc.',
      checked: false,
    },
    {
      section: 'performance',
      title: 'Validate HTML',
      info: '',
      checked: false,
    },
    {
      section: 'browsers',
      title: 'Check in IE11 and current Edge',
      info: 'whether required or not',
      checked: false,
    },
    {
      section: 'browsers',
      title: 'Check in a previous version of iOS',
      info: '',
      checked: false,
    },
    {
      section: 'accessibility',
      title: 'Site checked with Axe browser tool',
      info: '',
      checked: false,
    },
    {
      section: 'accessibility',
      title: 'ARIA attributes added where applicable',
      info: '',
      checked: false,
    },
    {
      section: 'accessibility',
      title: 'Image Alt attributes set appropriately',
      info: '',
      checked: false,
    },
    {
      section: 'accessibility',
      title: 'All form fields have < label >’s associated',
      info: '',
      checked: false,
    },
    {
      section: 'accessibility',
      title: 'All form fields clear input error states',
      info: '',
      checked: false,
    },
    {
      section: 'accessibility',
      title: 'HTML tag has language set',
      info: '',
      checked: false,
    },
    {
      section: 'accessibility',
      title: 'All parts of a site must be keyboard-accessible',
      info: '',
      checked: false,
    },
    {
      section: 'accessibility',
      title: 'Moving, blinking, scrolling, or auto updating can be user paused, stopped, or hidden',
      info: '',
      checked: false,
    },
    {
      section: 'accessibility',
      title: 'Provide Skip to Content links',
      info: '',
      checked: false,
    },
    {
      section: 'accessibility',
      title: 'Keyboard focus must be clear',
      info: '',
      checked: false,
    },
    {
      section: 'javascript',
      title: 'JS Libraries hosted on CDN have fallbacks',
      info: '',
      checked: false,
    },
    {
      section: 'javascript',
      title: 'Console.logs removed',
      info: '',
      checked: false,
    },
    {
      section: 'javascript',
      title: 'No errors in console',
      info: '',
      checked: false,
    },
    {
      section: 'forms',
      title: 'Server Generated E - mail Working',
      info: '',
      checked: false,
    },
    {
      section: 'forms',
      title: 'Recipient’s correct',
      info: '',
      checked: false,
    },
    {
      section: 'forms',
      title: 'Validation in place',
      info: '',
      checked: false,
    },
    {
      section: 'forms',
      title: 'Submissions can be tracked with analytics',
      info: '',
      checked: false,
    },
    {
      section: 'errors',
      title: 'Custom 404 Pages',
      info: '',
      checked: false,
    },
    {
      section: 'content',
      title: 'Favicons and other device icons',
      info: '',
      checked: false,
    },
    {
      section: 'content',
      title: 'Social meta tags(Open Graph, etc.) if necessary',
      info: '',
      checked: false,
    },
    {
      section: 'content',
      title: 'Check spelling',
      info: '',
      checked: false,
    },
    {
      section: 'content',
      title: 'No Placeholder text',
      info: '',
      checked: false,
    },
    {
      section: 'content',
      title: 'Privacy Policy and / or Terms of Service',
      info: '',
      checked: false,
    },
    {
      section: 'content',
      title: 'If EU, cookie declaration',
      info: '',
      checked: false,
    },
    {
      section: 'content',
      title: 'Footer includes up-to-date copywrite',
      info: '',
      checked: false,
    },
    {
      section: 'content',
      title: 'Print Stylesheets(if necessary)',
      info: '',
      checked: false,
    },
    {
      section: 'postlaunch',
      title: 'Verify analytics',
      info: '',
      checked: false,
    },
    {
      section: 'postlaunch',
      title: 'Verify forms are working and sending correct notifications',
      info: '',
      checked: false,
    },
    {
      section: 'postlaunch',
      title: 'Verify SSL',
      info: '',
      checked: false,
    },
    {
      section: 'postlaunch',
      title: 'Verify www and non - www',
      info: '',
      checked: false,
    },
    {
      section: 'postlaunch',
      title: 'Verify webfonts',
      info: '',
      checked: false,
    },
    {
      section: 'postlaunch',
      title: 'Verify webfonts',
      info: '',
      checked: false,
    },
    {
      section: 'cms',
      title: 'CMS login is hidden in production',
      info: '',
      checked: false,
    },
    {
      section: 'analytics',
      title: 'Gogle search console and BING if necessary',
      info: 'put your sitemap in',
      checked: false,
    },
    {
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
  },
}

export const getters = {
  percentage: (state, getters) => {
    return (state.lists.filter((l) => { return l.checked }).length / state.lists.length) * 100
  },
  getIndex: state => (payload) => {
    return state.lists.findIndex(x => x.title === payload)
  }
}
