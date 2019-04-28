import React from "react"
// nodejs library that concatenates classes
import classNames from "classnames"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"

// @material-ui/icons

// React icons

// core components
import Header from "components/Header/Header.jsx"
import Footer from "components/Footer/Footer.jsx"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import HeaderLinks from "components/Header/HeaderLinks.jsx"
import Parallax from "components/Parallax/Parallax.jsx"

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx"

import LotusArticles from "./Sections/Articles"

const dashboardRoutes = []

class LandingPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props
    const tag1 = ["react", "js", "css", "test", "test"]
    const tag2 = ["javascript", "js", "css", "test", "test"]

    return (
      <div>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="Dream of summer days"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white",
          }}
          {...rest}
        />
        <Parallax filter image={require("assets/img/13.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>11234</h1>
                <h4>
                  长恨此身非我有，何时忘却营营。夜阑风静縠纹平。小舟从此逝，
                  江海寄余生。
                </h4>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div
          className={classNames(classes.main, classes.mainRaised)}
          style={{ paddingBottom: "70px" }}
        >
          <div className={classes.container}>
            <LotusArticles title={"文章标题"} tag={tag1}>
              勤学如春起之苗，不见其增，日有所长；辍学如磨刀之石，不见其损，日有所亏。
              勤学如春起之苗，不见其增，日有所长；辍学如磨刀之石，不见其损，日有所亏。
            </LotusArticles>
            <LotusArticles title={"文章标题"} tag={tag2} time={"2019年5月13日"}>
              勤学如春起之苗，不见其增，日有所长；辍学如磨刀之石，不见其损，日有所亏。
            </LotusArticles>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(landingPageStyle)(LandingPage)
