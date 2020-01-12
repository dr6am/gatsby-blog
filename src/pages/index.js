import React from "react"
import { graphql,Link} from "gatsby"

import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Card = styled.div`
  background: #f0f0f0;
  color: #444;
  padding: 20px;
  margin-bottom: 12px;
  border-radius: 15px;
  width: 600px;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
`
const BlogLink = styled(Link)`
  text-decoration: none;
  color: #333;
`;
const BlogTitle = styled.h3`
  margin-bottom: 20px;
`

export default ({data}) =>
{
  //
  console.log(data)
  return(
  <Layout>
    <SEO title="Home"/>
    <div>
      {
        data.allMarkdownRemark.edges.map(({node})=>(
          <Card key={node.id}>
            <BlogLink to={node.fields.slug}>
               <BlogTitle>{node.frontmatter.title} - {node.frontmatter.date}</BlogTitle>
            </BlogLink>
            <p>{node.excerpt}</p>
          </Card>
        ))
      }
    </div>
    
  </Layout>
)}


export const query = graphql`
    {
        allMarkdownRemark(sort:{fields:[frontmatter___date], order:DESC}) {
            totalCount
            edges {
                node {
                    id
                    fields {
                        slug
                    }
                    frontmatter{
                        description
                        title
                        date
                    }
                    html
                    excerpt
                }
            }
        }
    }
`