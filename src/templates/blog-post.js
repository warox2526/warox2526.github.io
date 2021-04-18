import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <style
          dangerouslySetInnerHTML={{
            __html: `
            .kg-width-wide {
              position: relative;
              width: 75vw;
              min-width: 100%;
              margin-left: calc(50% - 50vw);
              margin-right: calc(50% - 50vw);
              transform: translateX(calc(50vw - 50%));
            }
            
            .post-content-body-wide {
              position: relative;
              width: 75vw;
              min-width: 100%;
              margin-left: calc(50% - 50vw);
              margin-right: calc(50% - 50vw);
              transform: translateX(calc(50vw - 50%));
            }
          
            .post-subtitle {
              font-size: 2.2rem;
              text-align: center;
            }

            .button.primary {
              font-weight: 700;
            }

            hr {
              position: relative;
              display: block;
              width: 100%;
              margin: 2.5em 0 3.5em;
              padding: 0;
              height: 1px;
              border: 0;
              margin: 1.5vw 0;
            }
          `
          }}
        />
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article
          className={`post-content ${post.frontmatter.thumbnail || `no-image`}`}
        >
          <header className="post-content-header">
            <h1 className="post-content-title">{post.frontmatter.title}</h1>
          </header>

          {post.frontmatter.description && (
            <p className="post-content-excerpt">
              {post.frontmatter.description}
            </p>
          )}

          {/* {post.frontmatter.thumbnail && (
            <div className="post-content-image">
              <Img
                className="kg-image"
                fluid={post.frontmatter.thumbnail.childImageSharp.fluid}
                alt={post.frontmatter.title}
              />
            </div>
          )} */}

          <div
            className="post-content-body"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          <footer className="post-content-footer">
            {/* There are two options for how we display the byline/author-info.
        If the post has more than one author, we load a specific template
        from includes/byline-multiple.hbs, otherwise, we just use the
        default byline. */}
          </footer>
        </article>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 1360) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
