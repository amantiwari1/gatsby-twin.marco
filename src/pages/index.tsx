import  React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import 'twin.macro'
const BlogIndex: React.FC = () => {
  return (
    <Layout>
      <Seo title="All posts" />
      <p tw="text-center text-2xl font-bold" > Edit page on src\pages\index.tsx </p>
    </Layout>
  )
}

export default BlogIndex

