import React from "react"
// nodejs library that concatenates classes
import classNames from "classnames"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
// @material-ui/icons
import Camera from "@material-ui/icons/Camera"
import Palette from "@material-ui/icons/Palette"
import Favorite from "@material-ui/icons/Favorite"
// React icons
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa"
// core components
import Header from "components/Header/Header.jsx"
import Footer from "components/Footer/Footer.jsx"
import Button from "components/CustomButtons/Button.jsx"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import HeaderLinks from "components/Header/HeaderLinks.jsx"

import profile1 from "assets/img/profile1.jpg"

import NavPills from "components/NavPills/NavPills.jsx"
import Parallax from "components/Parallax/Parallax.jsx"

import profile from "assets/img/faces/christian.jpg"

import studio1 from "assets/img/examples/studio-1.jpg"
import studio2 from "assets/img/examples/studio-2.jpg"
import studio3 from "assets/img/examples/studio-3.jpg"
import studio4 from "assets/img/examples/studio-4.jpg"
import studio5 from "assets/img/examples/studio-5.jpg"
import work1 from "assets/img/examples/olu-eletu.jpg"
import work2 from "assets/img/examples/clem-onojeghuo.jpg"
import work3 from "assets/img/examples/cynthia-del-rio.jpg"
import work4 from "assets/img/examples/mariya-georgieva.jpg"
import work5 from "assets/img/examples/clem-onojegaw.jpg"

import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx"

import styled from "styled-components"

const VideoContainer = styled.div`
  // background-color: gray;
  // // background: url("http://pqk2g9z0u.bkt.clouddn.com/galaxy1.mp4") no-repeat
  //   center 0px;
  video {
    position: absolute;
    right: 0;
    bottom: 75px;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: 1;
    // background-size: cover;
  }
`

class ProfilePage extends React.Component {
  render() {
    const { classes, ...rest } = this.props
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    )
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery)
    return (
      <div>
        <Header
          color="transparent"
          brand="Dream of summer days"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white",
          }}
          {...rest}
        />
        <VideoContainer>
          <video autoPlay muted loop playsInline style={{ width: "100%" }}>
            <source
              src="http://pqk2g9z0u.bkt.clouddn.com/galaxy1.mp4"
              type="video/mp4"
            />
          </video>
        </VideoContainer>
        <div
          className={classNames(classes.main, classes.mainRaised)}
          style={{ marginTop: "333px" }}
        >
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img src={profile1} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>Liu</h3>
                      <h6>DEVELOPER</h6>
                      {/* <Button justIcon link className={classes.margin5}>
                        <FaTwitter />
                      </Button>
                      <Button justIcon link className={classes.margin5}>
                        <FaInstagram />
                      </Button>
                      <Button justIcon link className={classes.margin5}>
                        <FaFacebook />
                      </Button> */}
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>
                <p>以时间轴为序展示一些图片</p>
                <p>以时间轴为序展示一些图片</p>
                <p>以时间轴为序展示一些图片</p>
                <p>以时间轴为序展示一些图片</p>
                <p>以时间轴为序展示一些图片</p>
                <p>以时间轴为序展示一些图片</p>
                <p>以时间轴为序展示一些图片</p>
                <p>以时间轴为序展示一些图片</p>
                <p>以时间轴为序展示一些图片</p>
                <p>以时间轴为序展示一些图片</p>
                <p>以时间轴为序展示一些图片</p>
                <p>以时间轴为序展示一些图片</p>
                <p>以时间轴为序展示一些图片</p>
                <p>以时间轴为序展示一些图片</p>
                <p>以时间轴为序展示一些图片</p>
                <p>以时间轴为序展示一些图片</p>
                <p>以时间轴为序展示一些图片</p>
                <p>以时间轴为序展示一些图片</p>
                <p>以时间轴为序展示一些图片</p>
                <p>以时间轴为序展示一些图片</p>
                <p>以时间轴为序展示一些图片</p>
                <p>以时间轴为序展示一些图片</p>
                <p>以时间轴为序展示一些图片</p>
                <p>以时间轴为序展示一些图片</p>
                <p>以时间轴为序展示一些图片</p>
                <p>以时间轴为序展示一些图片</p>
                <p>以时间轴为序展示一些图片</p>
                <p>以时间轴为序展示一些图片</p>
              </div>
              <GridContainer justify="center">dddd</GridContainer>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(profilePageStyle)(ProfilePage)
