/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'HyperOneBlog',
  author: 'Hyper One Team',
  headerTitle: 'HyperOneBlo',
  description: 'Powered by Hyper One',
  language: 'en',
  theme: 'system', // system, dark or light
  siteUrl: 'https://blog.hyperonevn.com',
  siteRepo: 'https://github.com/hyperonevn/smart-home-blog',
  siteLogo: '/static/images/hyperone-logo.png',
  socialBanner: '/static/images/hyperone-banner.png',

  mastodon: '',
  email: 'team@hyperone.vn',
  github: 'https://github.com/hyperonevn',
  x: 'https://twitter.com/hyperonevn',
  facebook: 'https://facebook.com/hyperonevn',
  youtube: '',
  linkedin: 'https://www.linkedin.com/company/hyperonevn',
  threads: '',
  instagram: 'https://www.instagram.com/hyperonevn',
  locale: 'en',
  multiauthors: true,

  analytics: {
    // Nếu dùng sau này, thêm ID ở đây
    // umamiAnalytics: { umamiWebsiteId: process.env.NEXT_UMAMI_ID },
    // plausibleAnalytics: { plausibleDataDomain: 'blog.hyperonevn.com' },
    // googleAnalytics: { googleAnalyticsId: 'G-XXXXXXX' },
  },

  newsletter: {
    provider: '', // Mailchimp, Buttondown, Convertkit... (để trống nếu chưa dùng)
  },

  iscomments: false, // Tắt comment mặc định
  comments: {
    provider: '', // Nếu dùng sau này: giscus, disqus, utterances...
    giscusConfig: {
      repo: '',
      repositoryId: '',
      category: '',
      categoryId: '',
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'vi',
    },
  },

  search: {
    provider: 'kbar', // hoặc algolia nếu có key
    kbarConfig: {
      searchDocumentsPath: 'search.json',
    },
  },

  formspree: false, // dùng mailto thay vì Formspree

  iswaline: false,
  walineServer: '',
}

module.exports = siteMetadata
