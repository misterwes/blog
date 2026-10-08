const path = require("path")

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1]
const isUserOrOrganizationSite = repositoryName?.endsWith(".github.io")
const pathPrefix = repositoryName && !isUserOrOrganizationSite
  ? `/${repositoryName}`
  : ""

module.exports = {
  siteMetadata: {
    title: "The Notebook",
    description: "Notes, reporting, and things worth noticing.",
    siteUrl: "https://example.github.io",
  },
  pathPrefix,
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: path.join(__dirname, "src", "content", "posts"),
      },
    },
    "gatsby-transformer-remark",
  ],
}
