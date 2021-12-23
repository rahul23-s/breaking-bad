import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, makeStyles, Box, InputBase } from "@material-ui/core";
import logo from "../images/logo.png";
import SearchIcon from "@material-ui/icons/Search";

const useStyle = makeStyles({
  header: {
    background: "#000214",
    padding: 10,
    position: "fixed",
    top: 0,
  },
  image: {
    width: 100,
  },
  search: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    marginLeft: "5vw",
    borderRadius: 5,
    position: "relative",
  },
  inputBox: {
    color: "inherit",
    margin: "0 50px",
    marginRight: "10px",
  },
  searchIcon: {
    position: "absolute",
    marginLeft: 10,
    top: 3,
  },
});

const Header = ({ getText }) => {
  const classes = useStyle();
  return (
    <AppBar className={classes.header} position="static">
      <Toolbar>
        <Link to="/">
          <img
            className={classes.image}
            id="logo"
            src={logo}
            alt="Breaking Bad"
          />
        </Link>
        <Box className={classes.search}>
          <Box className={classes.searchIcon}>
            <SearchIcon />
          </Box>
          <InputBase
            placeholder="Search by name"
            autoFocus
            classes={{ root: classes.inputBox }}
            onChange={(e) => getText(e.target.value)}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
