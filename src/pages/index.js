import React from "react"
import Layout from "../components/layout"
// import Intro from "../components/Intro"
import Header from "../components/Header"
import About from "../components/About"
import Slideshow from "../components/Slideshow"
import NavHeader from "../components/NavHeader"
import Join from "../components/Join"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO />
    {/* <Intro /> */}
    <NavHeader />
    <Header />
    <About />
    <Slideshow />
    <Join />
    <Contact />
    <Footer />
  </Layout>
)

export default IndexPage
