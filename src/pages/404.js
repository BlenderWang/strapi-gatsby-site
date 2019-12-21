import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import NavHeader from "../components/NavHeader"
import Footer from "../components/Footer"
import Title from "../components/Title"
import Paragraph from "../components/Paragraph"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <NavHeader />
    <div style={{
      position: `relative`,
      top: `11.85rem`,
      margin: `0 auto`,
      maxWidth: `80vw`,
      display: `flex`,
      flexDirection: `column`,
      alignItems: `center`,
      justifyContent: `center`
    }}>
      <Title subtitle={`PAGE NOT FOUND`} />
      <Paragraph paragraph={`You just hit a route that doesn't exist... the sadness ☹️ `} /> 
      <Link style={{ 
        marginLeft: "-30vw", 
        marginTop: `15%`,
        }} to="/"
      >
          &#8592; Go back to the homepage
      </Link>
    </div>
    <Footer />
  </Layout>
)

export default NotFoundPage
