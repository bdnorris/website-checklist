<template>
  <div class="container">
    <div>
      <h1 class="title">
        Website Launch Checklist
      </h1>
      <h2 class="subtitle">
        SEO Basics
      </h2>
      <ul>
        <li>
          <Checkbox>XML Sitemap is being generated and is correct</Checkbox>
        </li>
        <li>
          <Checkbox>Robots.txt (if necessary to hide certain site areas)</Checkbox>
        </li>
      </ul>
    </div>
  <!--
    SEO (the basics)

         Meta descriptions are included and pertain to the unique page
         Page Titles are descriptive, SEO friendly, and unique
         H1 and H2 tags used appropriately(ideally,one H1 per page)
         Redirects: 301 redirects in place (if this new site is replacing an old one)
    Analytics
        GTM Setup and is ready to push to live analytics property
        Live GA filters Marlin IPs or has  a View that filters these IPs
        Site search setup in GA (if needed)
    Domain and SSL issues
        www and non-www both work
        SSL works in production and staging and there are no non-HTTPS references (no mixed-content errors)
    User Experience
        Empty states for all interactive items that could return no results
    Front-end performance checks
        Google Pagespeed Insights
            Load Speed
            Mobile Performance
        Ensure only necessary fonts, weights and character sets are installed
        Images reasonably optimized
    Check for broken links (Integrity or Screaming Frog)
    Browsers
        Two avoid common issues:
            Check in IE11 and current Edge
            Check in a previous version of iOS
    Accessibility
        Site checked with Wave browser tool
        ARIA attributes added where applicable
        Image Alt attributes set appropriately
        All form fields have <label>’s associated
    Javascript
        JS Libraries hosted on CDN have fallbacks
        Console.logs removed
        No errors in console
    Forms
        Server Generated E-mail Working
            Recipient’s correct
        Validation in place
        Submissions can be tracked with analytics
    Favicons and other device icons
    Social meta tags (Open Graph, etc.) if necessary
    Content
        Check spelling
        No Placeholder text
        Privacy Policy and/or Terms of Service
        If EU, Cookie declaration
            GDPR?
        Footer includes up-to-date copywrite
        Custom 404 Pages
        Custom 500 Pages (if necessary)
    Print Stylesheets (if necessary)

Post Launch

    Verify analytics
    Verify forms
    Verify server generated e-mails
    Verify SSL
    Verify www and non-www
    Webfonts working
    Any CDN working
    CMS
        CMS login is hidden on production
    Search Console
        Google and Bing Search Consoles
        Link Google Analytics/GTM to Google Search Console -->
  </div>
</template>

<script>
// import Logo from '~/components/Logo.vue'
import Checkbox from '~/components/Checkbox'

export default {
  components: {
    Checkbox
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
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
