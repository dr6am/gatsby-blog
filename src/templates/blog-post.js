import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  const post = data.markdownRemark;
  console.log(post)
  return(
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html  }}></div>
      </div>
    </Layout>
  )
}

export const query = graphql`
    query ($slug: String!){markdownRemark(fields:{slug:{eq: $slug}}){
        id
        html
        frontmatter{
            title
        }
        fields {
            slug
        }
        
    }
    }
`