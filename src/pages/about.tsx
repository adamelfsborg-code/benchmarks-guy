import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"


const AboutPage: React.FC<PageProps> = () => {
  return (
    <div>
      <h2>About Page</h2>
    </div>
  )
}

export default AboutPage

export const Head: HeadFC = () => <title>Home Page</title>
