import React from "react"
// nodejs library that concatenates classes
import classNames from "classnames"
// react components for routing our app without refresh
import { Link } from "gatsby"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"

import Build from "@material-ui/icons/Build"
import Create from "@material-ui/icons/Create"
import LocalFlorist from "@material-ui/icons/LocalFlorist"
// @material-ui/icons
// core components
import Header from "components/Header/Header.jsx"
import Footer from "components/Footer/Footer.jsx"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import Button from "components/CustomButtons/Button.jsx"
import Parallax from "components/Parallax/Parallax.jsx"

import NavPills from "components/NavPills/NavPills.jsx"

// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx"
import SectionBasics from "./Sections/SectionBasics.jsx"
import SectionNavbars from "./Sections/SectionNavbars.jsx"
import SectionTabs from "./Sections/SectionTabs.jsx"
import SectionPills from "./Sections/SectionPills.jsx"
import SectionNotifications from "./Sections/SectionNotifications.jsx"
import SectionTypography from "./Sections/SectionTypography.jsx"
import SectionJavascript from "./Sections/SectionJavascript.jsx"
import SectionCarousel from "./Sections/SectionCarousel.jsx"
import SectionCompletedExamples from "./Sections/SectionCompletedExamples.jsx"
import SectionLogin from "./Sections/SectionLogin.jsx"
import SectionExamples from "./Sections/SectionExamples.jsx"
import SectionDownload from "./Sections/SectionDownload.jsx"

import componentsStyle from "assets/jss/material-kit-react/views/components.jsx"

import styled from "styled-components"

const Points = styled.div`
  overflow: hidden;
  width: 100%;
  position: absolute;
  z-index: 0;
  display: block;
  .point {
    border-radius: 50%;
    z-index: 999;
    position: absolute;
    display: block;
  }
  .float1 {
    z-index: 999;
    background-color: #e50000;
    height: 10px;
    width: 10px;
    position: relative;
    -webkit-animation-name: p1;
    -webkit-animation-duration: 100s;
    -webkit-animation-iteration-count: infinite;
    animation-name: p1;
    animation-duration: 100s;
    animation-iteration-count: infinite;
  }
  .float2 {
    z-index: 999;
    background-color: green;
    height: 8px;
    width: 8px;
    position: relative;
    -webkit-animation-name: p2;
    -webkit-animation-duration: 90s;
    -webkit-animation-iteration-count: infinite;
    animation-name: p2;
    animation-duration: 90s;
    animation-iteration-count: infinite;
  }
  .float3 {
    z-index: 999;
    background-color: #e55322;
    height: 7px;
    width: 7px;
    position: relative;
    -webkit-animation-name: p3;
    -webkit-animation-duration: 70s;
    -webkit-animation-iteration-count: infinite;
    animation-name: p3;
    animation-duration: 70s;
    animation-iteration-count: infinite;
  }
  .float4 {
    z-index: 999;
    background-color: #faa805;
    height: 8px;
    width: 8px;
    position: relative;
    -webkit-animation-name: p4;
    -webkit-animation-duration: 60s;
    -webkit-animation-iteration-count: infinite;
    animation-name: p4;
    animation-duration: 60s;
    animation-iteration-count: infinite;
  }
  .float5 {
    z-index: 999;
    background-color: #4c3366;
    height: 9px;
    width: 9px;
    position: relative;
    -webkit-animation-name: p5;
    -webkit-animation-duration: 60s;
    -webkit-animation-iteration-count: infinite;
    animation-name: p5;
    animation-duration: 60s;
    animation-iteration-count: infinite;
  }
  .float6 {
    z-index: 999;
    background-color: #e50000;
    height: 10px;
    width: 10px;
    position: relative;
    -webkit-animation-name: p6;
    -webkit-animation-duration: 40s;
    -webkit-animation-iteration-count: infinite;
    animation-name: p6;
    animation-duration: 40s;
    animation-iteration-count: infinite;
  }
  .float7 {
    z-index: 999;
    background-color: #5c0c7b;
    height: 9px;
    width: 9px;
    position: relative;
    -webkit-animation-name: p7;
    -webkit-animation-duration: 70s;
    -webkit-animation-iteration-count: infinite;
    animation-name: p7;
    animation-duration: 70s;
    animation-iteration-count: infinite;
  }
  .float8 {
    z-index: 999;
    background-color: #346633;
    height: 8px;
    width: 8px;
    position: relative;
    -webkit-animation-name: p8;
    -webkit-animation-duration: 90s;
    -webkit-animation-iteration-count: infinite;
    animation-name: p8;
    animation-duration: 90s;
    animation-iteration-count: infinite;
  }
  .float9 {
    z-index: 999;
    background-color: #fe6767;
    height: 7px;
    width: 7px;
    position: relative;
    -webkit-animation-name: p9;
    -webkit-animation-duration: 50s;
    -webkit-animation-iteration-count: infinite;
    animation-name: p9;
    animation-duration: 50s;
    animation-iteration-count: infinite;
  }
  .float10 {
    z-index: 999;
    background-color: #77c3f2;
    height: 6px;
    width: 6px;
    position: relative;
    -webkit-animation-name: p10;
    -webkit-animation-duration: 40s;
    -webkit-animation-iteration-count: infinite;
    animation-name: p10;
    animation-duration: 40s;
    animation-iteration-count: infinite;
  }
  .float11 {
    z-index: 999;
    background-color: #984d54;
    height: 5px;
    width: 5px;
    position: relative;
    -webkit-animation-name: p11;
    -webkit-animation-duration: 60s;
    -webkit-animation-iteration-count: infinite;
    animation-name: p11;
    animation-duration: 60s;
    animation-iteration-count: infinite;
  }
  .float12 {
    z-index: 999;
    background-color: #cc3467;
    height: 4px;
    width: 4px;
    position: relative;
    -webkit-animation-name: p12;
    -webkit-animation-duration: 80s;
    -webkit-animation-iteration-count: infinite;
    animation-name: p12;
    animation-duration: 80s;
    animation-iteration-count: infinite;
  }
  .float13 {
    z-index: 999;
    background-color: #291e1a;
    height: 5px;
    width: 5px;
    position: relative;
    -webkit-animation-name: p13;
    -webkit-animation-duration: 50s;
    -webkit-animation-iteration-count: infinite;
    animation-name: p13;
    animation-duration: 50s;
    animation-iteration-count: infinite;
  }
  .float14 {
    z-index: 999;
    background-color: #0099cb;
    height: 6px;
    width: 6px;
    position: relative;
    -webkit-animation-name: p14;
    -webkit-animation-duration: 60s;
    -webkit-animation-iteration-count: infinite;
    animation-name: p14;
    animation-duration: 60s;
    animation-iteration-count: infinite;
  }
  .float15 {
    z-index: 999;
    background-color: #e50000;
    height: 12px;
    width: 12px;
    position: relative;
    -webkit-animation-name: p15;
    -webkit-animation-duration: 60s;
    -webkit-animation-iteration-count: infinite;
    animation-name: p15;
    animation-duration: 60s;
    animation-iteration-count: infinite;
  }
  .float16 {
    z-index: 999;
    background-color: #e50000;
    height: 12px;
    width: 12px;
    position: relative;
    -webkit-animation-name: p16;
    -webkit-animation-duration: 60s;
    -webkit-animation-iteration-count: infinite;
    animation-name: p16;
    animation-duration: 60s;
    animation-iteration-count: infinite;
  }
  .float17 {
    z-index: 999;
    background-color: #ffc61a;
    height: 10px;
    width: 10px;
    position: relative;
    -webkit-animation-name: p17;
    -webkit-animation-duration: 60s;
    -webkit-animation-iteration-count: infinite;
    animation-name: p17;
    animation-duration: 60s;
    animation-iteration-count: infinite;
  }
  .float18 {
    z-index: 999;
    background-color: #990008;
    height: 9px;
    width: 9px;
    position: relative;
    -webkit-animation-name: p18;
    -webkit-animation-duration: 60s;
    -webkit-animation-iteration-count: infinite;
    animation-name: p18;
    animation-duration: 60s;
    animation-iteration-count: infinite;
  }
  .float19 {
    z-index: 999;
    background-color: #990008;
    height: 9px;
    width: 9px;
    position: relative;
    -webkit-animation-name: p19;
    -webkit-animation-duration: 60s;
    -webkit-animation-iteration-count: infinite;
    animation-name: p19;
    animation-duration: 60s;
    animation-iteration-count: infinite;
  }
  // @-webkit-keyframes p1 {
  // }
  @keyframes p1 {
    0% {
      top: -690px;
      left: 0px;
    }
    50% {
      top: 1000px;
      left: 1440px;
    }
    100% {
      top: -690px;
      left: 0px;
    }
  }
  @keyframes p2 {
    0% {
      top: 1000px;
      left: 0px;
    }
    50% {
      top: -690px;
      left: 1440px;
    }
    100% {
      top: 1000px;
      left: 0px;
    }
  }
  @keyframes p2 {
    0% {
      top: 1000px;
      left: 0px;
    }
    50% {
      top: -690px;
      left: 1440px;
    }
    100% {
      top: 1000px;
      left: 0px;
    }
  }
  @keyframes p3 {
    0% {
      top: -690px;
      left: 360px;
    }
    50% {
      top: 1000px;
      left: 1080px;
    }
    100% {
      top: -690px;
      left: 360px;
    }
  }
  @keyframes p4 {
    0% {
      top: -270px;
      left: 1440px;
    }
    50% {
      top: 155px;
      left: 0px;
    }
    100% {
      top: -270px;
      left: 1440px;
    }
  }
  @keyframes p5 {
    0% {
      top: 155px;
      left: 1440px;
    }
    50% {
      top: -270px;
      left: 0px;
    }
    100% {
      top: 155px;
      left: 1440px;
    }
  }
  @keyframes p6 {
    0% {
      top: 155px;
      left: 0px;
    }
    50% {
      top: 575px;
      left: 1440px;
    }
    100% {
      top: 155px;
      left: 0px;
    }
  }
  @keyframes p7 {
    0% {
      top: -690px;
      left: 680px;
    }
    50% {
      top: 1000px;
      left: 0px;
    }
    100% {
      top: -690px;
      left: 680px;
    }
  }
  @keyframes p8 {
    0% {
      left: 1000px;
      top: 360px;
    }
    50% {
      left: -690px;
      top: 1080px;
    }
    100% {
      left: 1000px;
      top: 360px;
    }
  }
  @keyframes p9 {
    0% {
      top: 575px;
      left: 0px;
    }
    50% {
      top: 155px;
      left: 1440px;
    }
    100% {
      top: 575px;
      left: 0px;
    }
  }
  @keyframes p10 {
    0% {
      top: 155px;
      left: 1440px;
    }
    50% {
      top: -690px;
      left: 720px;
    }
    100% {
      top: 155px;
      left: 1440px;
    }
  }

  @keyframes p11 {
    0% {
      top: -690px;
      left: 720px;
    }
    50% {
      top: 575px;
      left: 0px;
    }
    100% {
      top: -690px;
      left: 720px;
    }
  }

  @keyframes p12 {
    0% {
      top: -730px;
      left: 720px;
    }
    50% {
      top: 1000px;
      left: 720px;
    }
    100% {
      top: -730px;
      left: 720px;
    }
  }

  @keyframes p13 {
    0% {
      top: -155px;
      left: 0px;
    }
    50% {
      top: 355px;
      left: 1440px;
    }
    100% {
      top: -155px;
      left: 0px;
    }
  }

  @keyframes p14 {
    0% {
      top: 155px;
      left: 0px;
    }
    50% {
      top: -690px;
      left: 1440px;
    }
    0% {
      top: 155px;
      left: 0px;
    }
  }

  @keyframes p15 {
    0% {
      top: 155px;
      left: 1440px;
    }
    50% {
      top: 1000px;
      left: 0px;
    }
    100% {
      top: 155px;
      left: 1440px;
    }
  }
  @keyframes p16 {
    0% {
      top: -270px;
      left: 1440px;
    }
    50% {
      top: -690px;
      left: 0px;
    }
    100% {
      top: -270px;
      left: 1440px;
    }
  }
  @keyframes p17 {
    0% {
      top: -850px;
      left: 360px;
    }
    50% {
      top: 0px;
      left: 1440px;
    }
    100% {
      top: -850px;
      left: 360px;
    }
  }
  @keyframes p18 {
    0% {
      top: -500px;
      left: 1440px;
    }
    50% {
      top: 120px;
      left: 0px;
    }
    100% {
      top: -500px;
      left: 1440px;
    }
  }
  @keyframes p19 {
    0% {
      top: 1000px;
      left: 0px;
    }
    50% {
      top: 575px;
      left: 1440px;
    }
    100% {
      top: 1000px;
      left: 0px;
    }
  }
`

class Components extends React.Component {
  render() {
    const { classes, ...rest } = this.props
    return (
      <Points>
        <Header
          brand="Dream of summer days"
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "white",
          }}
          {...rest}
        />

        <Parallax image={require("assets/img/bg4.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.title}>记录生活的每一帧</h1>
                  <h3 className={classes.subtitle}>
                    小楼一夜听春雨，深巷明朝卖杏花。
                  </h3>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <div class="point float1" />
        <div class="point float2" />
        <div class="point float3" />
        <div class="point float4" />
        <div class="point float5" />
        <div class="point float6" />
        <div class="point float7" />
        <div class="point float8" />
        <div class="point float9" />
        <div class="point float10" />
        <div class="point float11" />
        <div class="point float12" />
        <div class="point float13" />
        <div class="point float14" />
        <div class="point float15" />
        <div class="point float16" />
        <div class="point float17" />
        <div class="point float18" />
        <div class="point float19" />

        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div id="navigation-pills">
              <div className={classes.title}>
                <h3>articles</h3>
              </div>
              {/* <div className={classes.title}>
                <h3>
                  <small>With Icons</small>
                </h3>
              </div> */}
              <GridContainer>
                <GridItem xs={24} sm={24} md={24} lg={12}>
                  <NavPills
                    color="rose"
                    horizontal={{
                      tabsGrid: { xs: 12, sm: 2, md: 2 },
                      contentGrid: { xs: 12, sm: 10, md: 10 },
                    }}
                    tabs={[
                      {
                        tabButton: "技术文章",
                        tabIcon: Build,
                        tabContent: (
                          <span>
                            <p>
                              Collaboratively administrate empowered markets via
                              plug-and-play networks. Dynamically procrastinate
                              B2C users after installed base benefits.
                            </p>
                            <br />
                            <p>
                              Dramatically visualize customer directed
                              convergence without revolutionary ROI.
                              Collaboratively administrate empowered markets via
                              plug-and-play networks. Dynamically procrastinate
                              B2C users after installed base benefits.
                            </p>
                            <br />
                            <p>
                              Dramatically visualize customer directed
                              convergence without revolutionary ROI.
                              Collaboratively administrate empowered markets via
                              plug-and-play networks. Dynamically procrastinate
                              B2C users after installed base benefits.
                            </p>
                          </span>
                        ),
                      },
                      {
                        tabButton: "11234",
                        tabIcon: Create,
                        tabContent: (
                          <span>
                            <p>
                              Efficiently unleash cross-media information
                              without cross-media value. Quickly maximize timely
                              deliverables for real-time schemas.
                            </p>
                            <br />
                            <p>
                              Dramatically maintain clicks-and-mortar solutions
                              without functional solutions. Dramatically
                              visualize customer directed convergence without
                              revolutionary ROI. Collaboratively administrate
                              empowered markets via plug-and-play networks.
                              Dynamically procrastinate B2C users after
                              installed base benefits.
                            </p>
                            <span>
                              <p>
                                Efficiently unleash cross-media information
                                without cross-media value. Quickly maximize
                                timely deliverables for real-time schemas.
                              </p>
                              <br />
                              <p>
                                Dramatically maintain clicks-and-mortar
                                solutions without functional solutions.
                                Dramatically visualize customer directed
                                convergence without revolutionary ROI.
                                Collaboratively administrate empowered markets
                                via plug-and-play networks. Dynamically
                                procrastinate B2C users after installed base
                                benefits.
                              </p>
                            </span>
                          </span>
                        ),
                      },
                      {
                        tabButton: "园艺",
                        tabIcon: LocalFlorist,
                        tabContent: (
                          <span>
                            <p>
                              Collaboratively administrate empowered markets via
                              plug-and-play networks. Dynamically procrastinate
                              B2C users after installed base benefits.
                            </p>
                            <br />
                            <p>
                              Dramatically visualize customer directed
                              convergence without revolutionary ROI.
                              Collaboratively administrate empowered markets via
                              plug-and-play networks. Dynamically procrastinate
                              B2C users after installed base benefits.
                            </p>
                            <br />
                            <p>
                              Dramatically visualize customer directed
                              convergence without revolutionary ROI.
                              Collaboratively administrate empowered markets via
                              plug-and-play networks. Dynamically procrastinate
                              B2C users after installed base benefits.
                            </p>
                          </span>
                        ),
                      },
                    ]}
                  />
                </GridItem>
              </GridContainer>

              {/* <List className={classes.list}>
                <ListItem className={classes.listItem}>
                  <Link
                    to="//articles/plants"
                    color="transparent"
                    // target="_blank"
                    className={classes.navLink}
                  >
                    植物
                  </Link>
                </ListItem>
              </List> */}
            </div>
            <div id="navigation-pills">
              <div className={classes.title}>
                <h3>photos</h3>
              </div>
              <SectionCarousel />
            </div>
          </div>
        </div>
        <Footer />
      </Points>
    )
  }
}

export default withStyles(componentsStyle)(Components)
