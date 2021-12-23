import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Character from "./Character";
import { Grid, Box } from "@material-ui/core";

const Home = ({ display, getDetails }) => {
  const [cols, setCols] = useState(3);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 900) {
        setCols(3);
      }
      if (window.innerWidth < 900) {
        setCols(4);
      }
      if (window.innerWidth < 700) {
        setCols(6);
      }
      if (window.innerWidth < 400) {
        setCols(12);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
  }, [window.innerWidth]);

  return (
    <Box style={{ margin: 20, marginTop: 100 }}>
      <Grid container spacing={4}>
        {display.map((item) => (
          <Grid key={item.char_id} item xs={cols}>
            <Link
              key={item.char_id}
              to={`/detail/` + item.char_id}
              onClick={(e) => getDetails(item)}
            >
              <Character key={item.char_id} item={item} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
