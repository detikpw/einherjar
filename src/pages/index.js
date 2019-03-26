// @flow

import type { Node } from 'react';

import React from 'react';
import { graphql } from "gatsby";
import { map, prop } from 'ramda';
import PostList from '../components/layout/pages/PostList';

export default ({
    data: {
      allMarkdownRemark: { edges }
    },
    location
}): Node => {
  const posts = map(prop('node'), edges)
  const pageData = {
    title: 'Home'
  }
  return (
    <PostList posts={posts} pageTitle="Terbaru" location={location} pageData={pageData} />
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: {published: {ne: false}}
        fields: {category: {ne: ""}}
      }
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
