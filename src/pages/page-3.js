import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"

const getImageData = graphql`
  {
    allFile {
      edges {
        node {
          relativePath
          size
          extension
          birthTime
        }
      }
    }
  }
`

export default () => {
  const data = useStaticQuery(getImageData)
  console.log(data)

  return (
    <Layout>
      <table>
        <thead>
          <tr>
            <th>Relative path</th>
            <th>Size of image</th>
            <th>Extension</th>
            <th>Birthtime</th>
          </tr>
        </thead>
        <tbody>
          {data.allFile.edges.map(({ node }, index) => (
            <tr key={index}>
              <td>{node.relativePath}</td>
              <td>{node.size}</td>
              <td>{node.extension}</td>
              <td>{node.birthtime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  )
}
