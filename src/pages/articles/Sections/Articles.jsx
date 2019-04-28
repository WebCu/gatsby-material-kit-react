import React from "react"
// plugin that creates slider
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"

// core components
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.jsx"
import Badge from "components/Badge/Badge.jsx"

import basicsStyle from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.jsx"

class SectionBasics extends React.Component {
  render() {
    const arrColor = [
      "primary",
      "info",
      "success",
      "warning",
      "danger",
      "rose",
      "",
    ]

    const { classes, title = "暂无标题", tag = [], time = "时间" } = this.props
    return (
      <div className={classes.sections} style={{ padding: "20px 0" }}>
        <div className={classes.container}>
          <div className={classes.title}>
            <h3>{title}</h3>
          </div>

          <div className={classes.title}>
            <h4>{this.props.children}</h4>
          </div>
          <div id="sliders">
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                {tag.map((item, key) => {
                  return <Badge color={arrColor[key]}>{item}</Badge>
                })}
              </GridItem>
              <GridItem
                xs={12}
                sm={12}
                md={6}
                style={{ textAlign: "center", color: "#3C4858" }}
              >
                <h4>{time}</h4>
              </GridItem>
              <CustomLinearProgress
                variant="determinate"
                color="info"
                value={100}
                style={{ width: "100%", display: "inline-block" }}
              />
            </GridContainer>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(basicsStyle)(SectionBasics)
