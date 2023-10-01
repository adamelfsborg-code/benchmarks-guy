import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import LayoutComponent from "../components/layout"


const IndexPage: React.FC<PageProps> = () => {
  return (
    <LayoutComponent title="Root" >
      <div>
        <h2>Hello world</h2>
      </div>
    </LayoutComponent>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
