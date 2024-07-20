// @flow

import type { Node } from 'react';

import React from 'react';
import { graphql } from "gatsby";
import { map, prop } from 'ramda';
import { sentence } from 'change-case';
import PostList from '../components/layout/pages/PostList';


const pageTitleHandler = pageTitle => {
  if (pageTitle !== 'Til') return pageTitle
  return 'Today I Learned'
}

export default ({
    pageContext: { tag },
    data: {
      allMarkdownRemark: { edges },
    },
    location
}): Node => {
  const posts = map(prop('node'), edges)
  const pageTitle = sentence(tag);
  const pageData = {
    title: pageTitle
  }
  return (
    <PostList
      posts={posts}
      pageTitle={pageTitleHandler(pageTitle)}
      pageData={pageData} location={location}
    />
  )
}

export const pageQuery = graphql`
  query($tag: String!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: {
        tags: { eq: $tag }
        published: { ne: false }
      } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            image {
              src
              caption
              captionUrl
            }
          }
          fields {
            path
          }
          html
        }
      }
    }
  }
`