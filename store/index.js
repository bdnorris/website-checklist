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
      title: '301/302 redirects in place (if this new site is replacing an old one)',
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
      title: 'There are empty states for all interactive items that could return no results',
      info: `
        <p>Make sure all of your empty states have appropriate messaging. If not, include a copywriter and designer to work on those states.</p>
      `,
      checked: false,
    },
    {
      section: 'performance',
      title: 'A performance tool has been run and you\'ve tried to fix any aggregious errors.',
      info: `
        <p>Items found by these tools may not all be fixable, but make sure you run this test and identify places you can improve your site's performance.</p>
        <ul>
          <li><a href="https://developers.google.com/speed/pagespeed/insights/">Google Pagespeed Insights</a></li>
          <li><a href="https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=en">Google Lighthouse</a></li>
        </ul>
      `,
      checked: false,
    },
    {
      section: 'performance',
      title: 'Only necessary fonts, weights and character sets are installed or requested from a font service',
      info: `
        <p>When in development, we sometimes install more fonts than we need. Make sure you are only requesting or only have installed font files that are actually used.</p>
      `,
      checked: false,
    },
    {
      section: 'performance',
      title: 'Images are all reasonably optimized',
      info: `
        <p>Make sure all of your images were optimized at some step in the workflow. Try to add further compression if reasonable. The technique you use may depend on your frameworks, CNDs, etc.</p>
        <ul>
          <li><a href="https://tinypng.com/">TinyPNG</a></li>
        </ul>
      `,
      checked: false,
    },
    {
      section: 'performance',
      title: 'There are no broken links',
      info: `
        <p>Use some kind of scanner to make sure you don't have any 404 errors on pages or assets.</p>
        <ul>
          <li><a href="https://apps.apple.com/us/app/integrity/id513610341?mt=12">Integrity App</a></li>
          <li><a href="https://app.dynomapper.com/">DynoMapper</a></li>
        </ul>
      `,
      checked: false,
    },
    {
      section: 'performance',
      title: 'HTML has been validated',
      info: `
        <p>Run your major template pages through W3Cs HTML Validator to make sure there are no errors that would hurt accessibilty or other parsing issues. A CLI tool may also be an option.</p>
        <ul>
          <li><a href="https://webhint.io/">Webhint Home</a></li>
          <li><a href="https://webhint.io/docs/user-guide/extensions/vscode-webhint/">Webhint for VSCode</a></li>
          <li><a href="https://validator.w3.org/">W3C Validator</a></li>
        </ul>
      `,
      checked: false,
    },
    {
      section: 'browsers',
      title: 'Basic functions work in IE11, or IE issues are noted',
      info: `
        <p>According to the scope of work, your site may need IE11 support, or not. Even if it doesn't, it's good to check basic functionality and layout, and then research any errors so you can estimate fixes, if deemed necessary.</p>
      `,
      checked: false,
    },
    {
      section: 'browsers',
      title: 'Site works in a previous version of iOS',
      info: `
        <p>Make sure your site works in the previous version of iOS's Safari browser.</p>
      `,
      checked: false,
    },
    {
      section: 'accessibility',
      title: 'No major issues found via testing with the Axe browser tool or Pa11y',
      info: `
        <p>Check major pages and templates of the site with the AXE browser tool and fix any errors. This may require further copywriting or design, so make sure to do this early. Whether you need to fix ALL errors or just the worst ones may depend on the scope of work.</p>
        <ul>
          <li><a href="https://www.deque.com/axe/">Axe</a></li>
          <li><a href="https://pa11y.org/">Pa11y</a></li>
        </ul>
      `,
      checked: false,
    },
    {
      section: 'accessibility',
      title: 'ARIA attributes have been added where applicable',
      info: `
        <p>
          Review your site for any "custom widgets". Anything that updates, closes, expands, etc. that is not using native HTML functionality and add appropriate ARIA attributes.
        </p>
        <ul>
          <li><a href="https://developer.mozilla.org/en-US/docs/Learn/Accessibility/WAI-ARIA_basics">WAI-ARIA Basics</a></li>
        </ul>
      `,
      checked: false,
    },
    {
      section: 'accessibility',
      title: 'Image ALT attributes set appropriately',
      info: `
        <p>Make sure content images have appropriate ALT attributes set, and decorative images have empty ALT attributes.</p>
      `,
      checked: false,
    },
    {
      section: 'accessibility',
      title: 'All form fields have <label>’s associated',
      info: `
        <p>
          All form fields must have associated labels. 
        </p>
      `,
      checked: false,
    },
    {
      section: 'accessibility',
      title: 'All form fields have clear input error states',
      info: `
        <p>
          Make sure your forms have either native or custom validation and you're using the appropriate input types. Make sure invalid fields have clear error states.
        </p>
      `,
      checked: false,
    },
    {
      section: 'accessibility',
      title: 'The <html> tag has a language set',
      info: `
        <p>The html tag should have an appropriate language set, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang">according to the specifications</a>.</p>
      `,
      checked: false,
    },
    {
      section: 'accessibility',
      title: 'All parts of a site are accessible via keyboard',
      info: `
        <p>Test your site for keyboard accessibility. You may find <a href="https://accessibilityinsights.io/">the Microsoft Accessibility Insights Tool</a> useful for walking you through these specifications.</p>
      `,
      checked: false,
    },
    {
      section: 'accessibility',
      title: 'Moving, blinking, scrolling, or auto updating can be user paused, stopped, or hidden',
      info: `
        <p>Check your site according to <a href="https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide.html">the specifications</a>.</p>
      `,
      checked: false,
    },
    {
      section: 'accessibility',
      title: 'Skip-to-Content links are provided (if necessary)',
      info: `
        <p>If deemed necessary, provide skip-to-content or skip navigation links.</p>
        <ul>
          <li><a href="https://webaim.org/techniques/skipnav/">Skip navigation technique</a></li>
          <li><a href="https://a11yproject.com/posts/skip-nav-links/">Skip nav links at A11y Project</a></li>
          <li><a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html">WCAG2 Criterion</a></li>
        </ul>
      `,
      checked: false,
    },
    {
      section: 'accessibility',
      title: 'Keyboard focus is clear',
      info: `
        <p>
          Make sure your focus indicators are not turned off and visible, whether they are browser defaults or if they're styled via CSS.
        </p>
      `,
      checked: false,
    },
    {
      section: 'javascript',
      title: 'JS Libraries hosted on CDN have fallbacks',
      info: `
        <p>It's usually a good idea if you're pulling in important JS libraries via a CDN, that you provide a local fallback.</p>
        <ul>
          <li><a href="https://www.hanselman.com/blog/CDNsFailButYourScriptsDontHaveToFallbackFromCDNToLocalJQuery.aspx">CDN's fail but your scripts don't have to.</a></li>
          <li><a href="http://fallback.io/">Fallback.js</a></li>
        </ul>
      `,
      checked: false,
    },
    {
      section: 'javascript',
      title: 'Console.logs have been removed',
      info: `
        <p>Remove console.log and console.dir from your javascript. You might reveal data you don't want to, but it will also help if you need to ask a user to let you know what they see in their console (or take a screenshot). Leave your console.error statements though.</p>
      `,
      checked: false,
    },
    {
      section: 'javascript',
      title: 'There are no errors in the console',
      info: `
        <p>Make sure you've eliminated any errors, and for that matter, warnings, from the console log as possible.</p>
      `,
      checked: false,
    },
    {
      section: 'forms',
      title: 'Server generated emails are working and the recipient’s are correct',
      info: `
        <p>Verify server generated emails, like form notifications, are working.</p>
      `,
      checked: false,
    },
    {
      section: 'forms',
      title: 'Form submissions can be tracked with analytics',
      info: `
        <p>Ideally, successful form submissions and errors can be tracked with analytics, alerting the analytics team to possible problems.</p>
      `,
      checked: false,
    },
    {
      section: 'errors',
      title: 'There is a custom 404 page (and 500 error page if possible)',
      info: '',
      checked: false,
    },
    {
      section: 'content',
      title: 'Favicons and other device icons are loading',
      info: `
        <p>
          Make sure you have at least a favicon for your site, but ideally, you would provide a <a href="https://github.com/fuzzywalrus/Photoshop-FavIcon-Action">full set of device icons</a>.
        </p>
      `,
      checked: false,
    },
    {
      section: 'content',
      title: 'Social meta tags (Open Graph, etc.) are included, if necessary',
      info: `
        <p>
          If you think it will, or you want to encourage, social media sharing, make sure to include tags according to the <a href="https://ogp.me/">Open Graph Protocol</a>.
        </p>
      `,
      checked: false,
    },
    {
      section: 'content',
      title: 'Check spelling',
      info: `
        <p>Check the spelling. Either in your <a href="https://github.com/bartosz-antosik/vscode-spellright">code editor</a> or in the <a href="https://android.stackexchange.com/questions/107196/how-do-i-temporarily-edit-a-webpage-in-chrome">browser</a>.
      `,
      checked: false,
    },
    {
      section: 'content',
      title: 'There is no placeholder content',
      info: `
        <p>Check the site and make sure there is no placeholder text, like lorem ipsum, or placeholder images.</p>
      `,
      checked: false,
    },
    {
      section: 'content',
      title: 'There are links to a Privacy Policy and/or Terms of Service',
      info: '',
      checked: false,
    },
    {
      section: 'content',
      title: 'If this site serves EU customers there is a cookie declaration',
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
      title: 'Print Stylesheets (if necessary)',
      info: `
        <p>If certain pages of your site are likely to be printed, or you encourage printing, make sure they print well by including a print stylesheet.</p>
      `,
      checked: false,
    },
    {
      section: 'postlaunch',
      title: 'Verify analytics',
      info: `
        <p>Verifiy analytics are working AND going to the correct Google Analytics account.</p>
      `,
      checked: false,
    },
    {
      section: 'postlaunch',
      title: 'Verify forms are working and sending correct notifications to the correct people',
      info: '',
      checked: false,
    },
    {
      section: 'postlaunch',
      title: 'Verify SSL is working in all browsers',
      info: '',
      checked: false,
    },
    {
      section: 'postlaunch',
      title: 'Verify www and non - www are both working and one forwards to the other',
      info: '',
      checked: false,
    },
    {
      section: 'postlaunch',
      title: 'Verify webfonts are loading',
      info: `
        <p>User browserstack or another computer to test this. If the webfonts are failing, but you have the fonts installed on your computer, you won't notice the failure.</p>
      `,
      checked: false,
    },
    {
      section: 'cms',
      title: 'The CMS login is hidden in production',
      info: `
        <p>Ideally, you either can't get to the production admin, or it's at least not called "admin" or "wp-admin".</p>
      `,
      checked: false,
    },
    {
      section: 'analytics',
      title: 'Site is added to Google search console and BING if necessary and linked with analytics',
      info: `
        <p>Ideally, you will submit your XML sitemap to <a href="https://search.google.com/search-console/about">Google Search Console</a> and <a href="https://www.bing.com/toolbox/webmaster">Bing Webmaster Tools</a>. This will alert you to issues with the crawlability of your site early, and provide valuable metrics to the analytics team. Google Search Console <a href="https://support.google.com/analytics/answer/1308621?hl=en">can also be linked to Google Analytics</a>.</p>
        <p>Note: Both services require some kind of verification to prove you are the owner.</p>
      `,
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
