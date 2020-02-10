export const state = () => ({
  siteName: '...',
  lists: [
    {
      section: 'seo',
      title: 'XML Sitemap is being generated and is correct',
      info: `
      <p>XML Sitemaps help search engines index your entire site, without having to rely on manual crawling. Usually, these can be programatically generated, and we have working examples from Umbraco and Nuxt. Sometimes, you may have to generate it manually, or by using a tool like <a href="https://www.xml-sitemaps.com/">this one</a>. This is especially useful for site rebuilds, since you can get Google's index updated much faster by submitting your site to Google search console. Old URLs will be replaced by new ones in Google's search index.</p>
      `,
      checked: false,
    },
    {
      section: 'seo',
      title: 'Robots.txt (if necessary to (un)hide certain URLs) or noindex directives',
      info: `
      <p>From Google: "A robots.txt file tells search engine crawlers which pages or files the crawler can or can't request from your site. This is used mainly to avoid overloading your site with requests; it is not a mechanism for keeping a web page out of Google. To keep a web page out of Google, you should use noindex directives, or password-protect your page."</p>
      <ul>
        <li><a href="https://support.google.com/webmasters/answer/6062608?hl=en">Google Webmasters</a></li>
        <li><a href="https://www.robotstxt.org/robotstxt.html">Robots.txt Site</a></li>
        <li><a href="https://support.google.com/webmasters/answer/93710?hl=en">Noindex Directives</a></li>
      </ul>
      `,
      checked: false,
    },
    {
      section: 'seo',
      title: 'Unique Meta descriptions are included on each page',
      info: `
      <p>
        From Moz: "The meta description is an HTML attribute that provides a brief summary of a web page. Search engines such as Google often display the meta description in search results, which can influence click-through rates."
      </p>
      <ul>
        <li><a href="https://moz.com/learn/seo/meta-description">MOZ Meta Descriptions</a></li>
      </ul>
      `,
      checked: false,
    },
    {
      section: 'seo',
      title: 'Page Titles are descriptive, SEO friendly, and unique',
      info: `
        <p>
          From Moz: "A title tag is an HTML element that specifies the title of a web page. Title tags are displayed on search engine results pages (SERPs) as the clickable headline for a given result, and are important for usability, SEO, and social sharing. The title tag of a web page is meant to be an accurate and concise description of a page's content."
        </p>
        <ul>
          <li><a href="https://moz.com/learn/seo/title-tag">MOZ Titles</a></li>
        </ul>
      `,
      checked: false,
    },
    {
      section: 'seo',
      title: 'Heading tags used appropriately (ideally, one H1 per page)',
      info: `
        <ul>
          <li><a href="https://www.w3.org/WAI/tutorials/page-structure/headings/">W3C Heading Documentation</a></li>
          <li><a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html">W3C Headings and Labels</a></li>
          <li><a href="https://usability.yale.edu/web-accessibility/articles/headings">Yale Headings & Accessibility</a></li>
        </ul>
      `,
      checked: false,
    },
    {
      section: 'seo',
      title: 'Redirects: 301/302 redirects in place (if this new site is replacing an old one)',
      info: `
        <p>
          From Moz: "A redirect is a way to send both users and search engines to a different URL from the one they originally requested. The three most commonly used redirects are 301, 302, and Meta Refresh."
        <p>
        <ul>
          <li><a href="https://moz.com/learn/seo/redirection">MOZ Redirects</a></li>
        </ul>
      `,
      checked: false,
    },
    {
      section: 'analytics',
      title: 'GTM Setup and is ready to push to live analytics property',
      info: `
        <p>
          If you have a testing GTM container and a production container, double check that when you launch your site, it will use the production GTM key. Additionally, make sure the production GTM container has been published.
        </p>
      `,
      checked: false,
    },
    {
      section: 'analytics',
      title: 'Production Google Analytics filters Marlin IPs or has a View that filters these IPs',
      info: `
        <p>Filtering out Marlin Network IPs helps make sure data isn't polluted by testing. Reach out to the Analytics Team to verify this.</p>
      `,
      checked: false,
    },
    {
      section: 'analytics',
      title: 'Site search setup in Google Analytics (if needed)',
      info: `
        <p>If your site uses a query parameter for search terms, you can easily connect this to Google Analytics.</p>
        <ul>
          <li><a href="https://support.google.com/analytics/answer/1012264?hl=en">Set up Site Search</a></li>
        </ul>
      `,
      checked: false,
    },
    {
      section: 'domains',
      title: 'www and non-www both work, and one forwards to the other',
      info: `
        <p>
          The domain should work both with "www" and without "www", and one should forward to the other to avoid duplicate content issues with SEO.
        </p>
        `,
      checked: false,
    },
    {
      section: 'domains',
      title: 'SSL works in staging and there are no non-HTTPS references (no mixed-content errors)',
      info: `
        <p>So that you can assure there are no issues in production with it's SSL, your staging site should also be secured. Check the console and the network developer tools in your browser to assure there are no SSL related errors.</p>
      `,
      checked: false,
    },
    {
      section: 'domains',
      title: 'Your site has a "Content Security Policy" headers',
      info: `
        <p>You should have a Content Security Policy on your site. This is especially important on sites that allow user input.<p>
        <p>From Moz: "The HTTP Content-Security-Policy response header allows web site administrators to control resources the user agent is allowed to load for a given page. With a few exceptions, policies mostly involve specifying server origins and script endpoints. This helps guard against cross-site scripting attacks (XSS)."</p>
        <ul>
          <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy">MDN on Content-Security-Policy</a></li>
        </ul>
      `,
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
