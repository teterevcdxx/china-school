import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Viewpage from "../components/viewpage"
import Sidebar from "../components/sidebar"
import Container from "../components/container"
import Newsbox from "../components/newsbox"
import Media from "../components/media"
import Sidemedia from "../components/sideMedia"
import { Helmet } from "react-helmet"
import Preloader from "../components/preloader"

export default class Page extends React.Component {
  constructor(){
    super()
    this.state ={ isLoading: true };
  }
  componentDidMount(){
    setInterval(() => {
      this.setState({isLoading: false});
    }, 1200);
  }
  preloader(){
    return(
      <Preloader/>
    )
  }
  page(){
    return(
    <Layout>
    <Viewpage>
    <Helmet>
          <meta charSet="utf-8" />
          <title>China-school | Home</title>
          <link href="https://fonts.googleapis.com/css?family=Old+Standard+TT:400,700" rel="stylesheet"></link>
    </Helmet>
    <Header><Sidebar/></Header>
    <Container>
      <Newsbox/>
      <Media/>
    </Container>
    </Viewpage>
    <Sidemedia/>
  </Layout>
    )
  }
  render(){
    return(
      this.state.isLoading ? this.preloader() : this.page()
    )
  }
  }

