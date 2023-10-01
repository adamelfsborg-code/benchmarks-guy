import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"


const IndexPage: React.FC<PageProps> = () => {
  return (
    <div>
      <h2>Hello World</h2>
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
