import Location from "../components/location"
import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import Viewpage from "../components/viewpage"
import Sidebar from "../components/sidebar"
import Container from "../components/container"
import Media from "../components/media"
import Sidemedia from "../components/sideMedia"

export default () => (
    <Layout>
      <Viewpage>
      <Header><Sidebar/></Header>
      <Container>
        <Location/>
      </Container>
      </Viewpage>
      <Sidemedia/>
    </Layout>
  )