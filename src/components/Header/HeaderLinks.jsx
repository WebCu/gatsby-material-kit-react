/*eslint-disable*/
import React from "react"
// react components for routing our app without refresh
import { Link } from "gatsby"

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import Tooltip from "@material-ui/core/Tooltip"

// @material-ui/icons
import {
  Apps,
  CloudDownload,
  Home,
  AccessTime,
  InsertPhoto,
  Build,
  Cloud,
  AlternateEmail,
  Favorite,
  Search,
  Create,
  WbSunny,
  Stars,
  ViewList,
  LocalFlorist,
} from "@material-ui/icons"

// React icons

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx"
import Button from "components/CustomButtons/Button.jsx"

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx"

import Weather from "../../components/Weather/index"

function HeaderLinks({ ...props }) {
  const { classes } = props
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link
          to="/"
          color="transparent"
          // target="_blank"
          className={classes.navLink}
        >
          <Home className={classes.icons} /> 首页
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="博客"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={Apps}
          dropdownList={[
            // <Link to="/articles" className={classes.dropdownLink}>
            //   <ViewList style={{ fontSize: "16px", verticalAlign: "middle" }} />{" "}
            //   全部
            // </Link>,
            <Link to="/articles/tech" className={classes.dropdownLink}>
              <Build style={{ fontSize: "16px", verticalAlign: "middle" }} />{" "}
              技术文章
            </Link>,
            <Link to="/articles/11234" className={classes.dropdownLink}>
              <Create style={{ fontSize: "16px", verticalAlign: "middle" }} />{" "}
              11234
            </Link>,
            <Link to="/articles/plants" className={classes.dropdownLink}>
              <LocalFlorist
                style={{ fontSize: "16px", verticalAlign: "middle" }}
              />{" "}
              园艺
            </Link>,
          ]}
        />
      </ListItem>
      {/* <ListItem className={classes.listItem}>
        <Button
          href="/images"
          color="transparent"
          // target="_blank"
          className={classes.navLink}
        >
          <InsertPhoto className={classes.icons} /> 影集
        </Button>
      </ListItem> */}
      <ListItem className={classes.listItem}>
        <Link
          to="/images"
          color="transparent"
          // target="_blank"
          className={classes.navLink}
        >
          <InsertPhoto className={classes.icons} /> 影集
        </Link>
      </ListItem>

      {/* <ListItem className={classes.listItem}>
        <Button
          href="https://google.com"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <Search className={classes.icons} /> 搜索
        </Button>
      </ListItem> */}
      <ListItem className={classes.listItem}>
        <Button
          href="http://www.weather.com.cn/weather1d/101020100.shtml"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <WbSunny className={classes.icons} />
          <Weather />
        </Button>
      </ListItem>
    </List>
  )
}

export default withStyles(headerLinksStyle)(HeaderLinks)
