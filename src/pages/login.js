import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Viewpage from "../components/viewpage"
import Sidebar from "../components/sidebar"
import Container from "../components/container"
import Media from "../components/media"
import Sidemedia from "../components/sideMedia"
import Login from "../components/login"

export default () => (
  <Layout>
    <Viewpage>
    <Header><Sidebar/></Header>
    <Container>
        <Login/>
      <Media/>
    </Container>
    </Viewpage>
    <Sidemedia/>
  </Layout>
)