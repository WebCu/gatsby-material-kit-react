/*eslint-disable*/
import React from "react"
// nodejs library to set properties for components
import PropTypes from "prop-types"
// nodejs library that concatenates classes
import classNames from "classnames"
import { List, ListItem, withStyles } from "@material-ui/core"
import Tooltip from "@material-ui/core/Tooltip"
import Button from "components/CustomButtons/Button.jsx"

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite"

import footerStyle from "assets/jss/material-kit-react/components/footerStyle.jsx"

import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaWeibo,
  FaGithub,
} from "react-icons/fa"

function Footer({ ...props }) {
  const { classes, whiteFont } = props
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  })
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont,
  })
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <Tooltip
                id="instagram-twitter"
                title="to my Github"
                placement={
                  typeof window !== "undefined" && window.innerWidth > 959
                    ? "top"
                    : "left"
                }
                classes={{ tooltip: classes.tooltip }}
              >
                <Button
                  href="https://github.com/T0hsakaRin"
                  target="_blank"
                  color="transparent"
                  className={classes.navLink}
                >
                  <FaGithub />
                </Button>
              </Tooltip>
            </ListItem>

            <ListItem className={classes.inlineBlock}>
              <Tooltip
                id="instagram-facebook"
                title="to my weibo"
                placement={
                  typeof window !== "undefined" && window.innerWidth > 959
                    ? "top"
                    : "left"
                }
                classes={{ tooltip: classes.tooltip }}
              >
                <Button
                  color="transparent"
                  href="https://www.weibo.com/2715166781/profile?rightmod=1&wvr=6&mod=personinfo"
                  target="_blank"
                  className={classes.navLink}
                >
                  <FaWeibo />
                </Button>
              </Tooltip>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Tooltip
                id="instagram-tooltip"
                title="to my facebook"
                placement={
                  typeof window !== "undefined" && window.innerWidth > 959
                    ? "top"
                    : "left"
                }
                classes={{ tooltip: classes.tooltip }}
              >
                <Button
                  color="transparent"
                  href="https://www.facebook.com/shan.liu.35380"
                  target="_blank"
                  className={classes.navLink}
                >
                  <FaFacebook />
                </Button>
              </Tooltip>
            </ListItem>

            {/* <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.creative-tim.com/license"
                className={classes.block}
                target="_blank"
              >
                Licenses
              </a>
            </ListItem> */}
          </List>
        </div>
        <div className={classes.right}> lls@2019 For daily record. </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool,
}

export default withStyles(footerStyle)(Footer)
