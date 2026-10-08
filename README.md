# The Notebook

A minimalist Gatsby blog. Each post is a Markdown file with YAML frontmatter in `src/content/posts/`.

## Write a post

Create a `.md` file in `src/content/posts/`:

```markdown
---
title: "A Post Title"
date: "2026-10-08"
description: "A short summary shown on the homepage."
tags:
  - Reporting
---

Write the post in Markdown.
```

The date and title appear in the post header. Homepage entries sort newest first. Tags, reading time, and previous/next links are generated automatically. The lead image is optional; place image files in `static/images/` and reference them with `/images/filename.jpg`.

For an optional lead image, add these fields to the frontmatter:

```yaml
image: "/images/example.jpg"
imageAlt: "A short description of the image"
imageCaption: "An optional caption"
```

## Run locally

Install Node.js 20 or later, then run:

```sh
npm install
npm run develop
```

Open the local URL printed by Gatsby. Use `npm run build` to create the production site in `public/`.

## Publish with GitHub Pages

Push this repository to a GitHub repository using the `main` branch. In the repository's **Settings → Pages**, set the source to **GitHub Actions**. The included workflow builds and deploys on each push to `main`.

The workflow sets Gatsby's path prefix for a project site (for example, `account.github.io/repository`). A repository named `account.github.io` is treated as a user or organization site and uses the root path. For a custom domain, add a `CNAME` file in `static/` with the domain name before publishing.

## Customize the publication name

Update the site name and description in `gatsby-config.js`, `src/components/layout.js`, and the post page title in `src/templates/blog-post.js`. Replace the sample post in `src/content/posts/` when you are ready.
