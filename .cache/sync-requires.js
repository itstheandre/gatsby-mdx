const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/private/tmp/gatsby-mdx/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/private/tmp/gatsby-mdx/src/pages/404.js"))),
  "component---src-pages-index-jsx": hot(preferDefault(require("/private/tmp/gatsby-mdx/src/pages/index.jsx"))),
  "component---src-templates-blog-post-jsx": hot(preferDefault(require("/private/tmp/gatsby-mdx/src/templates/blogPost.jsx")))
}

