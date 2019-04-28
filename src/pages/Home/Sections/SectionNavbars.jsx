import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Search from "@material-ui/icons/Search";
import Email from "@material-ui/icons/Email";
import Face from "@material-ui/icons/Face";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Explore from "@material-ui/icons/Explore";
// React icons
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Header from "components/Header/Header.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import navbarsStyle from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.jsx";

import image from "assets/img/bg.jpg";
import profileImage from "assets/img/faces/avatar.jpg";

class SectionNavbars extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.title}>
                <h3>Menu</h3>
              </div>
              <Header
                brand="Menu"
                color="primary"
                leftLinks={
                  <List className={classes.list}>
                    <ListItem className={classes.listItem}>
                      <Button
                        href="#pablo"
                        className={classes.navLink}
                        onClick={e => e.preventDefault()}
                        color="transparent"
                      >
                        Link
                      </Button>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                      <Button
                        href="#pablo"
                        className={classes.navLink}
                        onClick={e => e.preventDefault()}
                        color="transparent"
                      >
                        Link
                      </Button>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                      <CustomDropdown
                        buttonText="Dropdown"
                        dropdownHeader="Dropdown Header"
                        buttonProps={{
                          className: classes.navLink,
                          color: "transparent"
                        }}
                        dropdownList={[
                          "Action",
                          "Another action",
                          "Something else here",
                          { divider: true },
                          "Separated link",
                          { divider: true },
                          "One more separated link"
                        ]}
                      />
                    </ListItem>
                  </List>
                }
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.title}>
                <h3>Menu with Icons</h3>
              </div>
              <Header
                brand="Icons"
                color="info"
                rightLinks={
                  <List className={classes.list}>
                    <ListItem className={classes.listItem}>
                      <Button color="transparent" className={classes.navLink}>
                        <Email className={classes.icons} />
                      </Button>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                      <Button color="transparent" className={classes.navLink}>
                        <Face className={classes.icons} />
                      </Button>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                      <CustomDropdown
                        left
                        hoverColor="info"
                        dropdownHeader="Dropdown Header"
                        buttonIcon="settings"
                        buttonProps={{
                          className: classes.navLink,
                          color: "transparent"
                        }}
                        dropdownList={[
                          "Action",
                          "Another action",
                          "Something else here",
                          { divider: true },
                          "Separated link",
                          { divider: true },
                          "One more separated link"
                        ]}
                      />
                    </ListItem>
                  </List>
                }
              />
            </GridItem>
          </GridContainer>
          <div className={classes.title}>
            <h3>Navigation</h3>
          </div>
        </div>
        <div id="navbar" className={classes.navbar}>
          <div
            className={classes.navigation}
            style={{ backgroundImage: "url(" + image + ")" }}
          >
            <Header
              brand="Brand"
              color="rose"
              leftLinks={
                <List className={classes.list}>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={e => e.preventDefault()}
                      color="transparent"
                    >
                      Link
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={e => e.preventDefault()}
                      color="transparent"
                    >
                      Link
                    </Button>
                  </ListItem>
                </List>
              }
              rightLinks={
                <div>
                  <CustomInput
                    white
                    inputRootCustomClasses={classes.inputRootCustomClasses}
                    formControlProps={{
                      className: classes.formControl
                    }}
                    inputProps={{
                      placeholder: "Search",
                      inputProps: {
                        "aria-label": "Search",
                        className: classes.searchInput
                      }
                    }}
                  />
                  <Button justIcon round color="white">
                    <Search className={classes.searchIcon} />
                  </Button>
                </div>
              }
            />
            <Header
              brand="Info Color"
              color="info"
              rightLinks={
                <List className={classes.list}>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink + " " + classes.navLinkActive}
                      onClick={e => e.preventDefault()}
                      color="transparent"
                    >
                      Discover
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={e => e.preventDefault()}
                      color="transparent"
                    >
                      Profile
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={e => e.preventDefault()}
                      color="transparent"
                    >
                      Settings
                    </Button>
                  </ListItem>
                </List>
              }
            />
            <Header
              brand="Primary Color"
              color="primary"
              rightLinks={
                <List className={classes.list}>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink + " " + classes.navLinkActive}
                      onClick={e => e.preventDefault()}
                      color="transparent"
                    >
                      <Explore className={classes.icons} /> Discover
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={e => e.preventDefault()}
                      color="transparent"
                    >
                      <AccountCircle className={classes.icons} /> Profile
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={e => e.preventDefault()}
                      color="transparent"
                    >
                      <Icon className={classes.icons}>settings</Icon> Settings
                    </Button>
                  </ListItem>
                </List>
              }
            />
            <Header
              brand="Navbar with notifications"
              color="dark"
              rightLinks={
                <List className={classes.list}>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={e => e.preventDefault()}
                      color="transparent"
                    >
                      Discover
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={e => e.preventDefault()}
                      color="transparent"
                    >
                      Wishlist
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      justIcon
                      round
                      href="#pablo"
                      className={classes.notificationNavLink}
                      onClick={e => e.preventDefault()}
                      color="rose"
                    >
                      <Email className={classes.icons} />
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <CustomDropdown
                      left
                      caret={false}
                      hoverColor="black"
                      dropdownHeader="Dropdown Header"
                      buttonText={
                        <img
                          src={profileImage}
                          className={classes.img}
                          alt="profile"
                        />
                      }
                      buttonProps={{
                        className:
                          classes.navLink + " " + classes.imageDropdownButton,
                        color: "transparent"
                      }}
                      dropdownList={[
                        "Me",
                        "Settings and other stuff",
                        "Sign out"
                      ]}
                    />
                  </ListItem>
                </List>
              }
            />
            <Header
              brand="Navbar with profile"
              rightLinks={
                <List className={classes.list}>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={e => e.preventDefault()}
                      color="transparent"
                    >
                      Discover
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={e => e.preventDefault()}
                      color="transparent"
                    >
                      Wishlist
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.registerNavLink}
                      onClick={e => e.preventDefault()}
                      color="rose"
                      round
                    >
                      Register
                    </Button>
                  </ListItem>
                </List>
              }
            />
            <Header
              brand="Transparent"
              color="transparent"
              rightLinks={
                <List className={classes.list}>
                  <ListItem className={classes.listItem}>
                    <Button
                      color="transparent"
                      className={
                        classes.navLink + " " + classes.socialIconsButton
                      }
                    >
                      <FaTwitter className={classes.marginRight5}/>{" "}
                      Twitter
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      color="transparent"
                      className={
                        classes.navLink + " " + classes.socialIconsButton
                      }
                    >
                      <FaFacebook className={classes.marginRight5}/>{" "}
                      Facebook
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      color="transparent"
                      className={
                        classes.navLink + " " + classes.socialIconsButton
                      }
                    >
                      <FaInstagram className={classes.marginRight5}/>{" "}
                      Instagram
                    </Button>
                  </ListItem>
                </List>
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(navbarsStyle)(SectionNavbars);
