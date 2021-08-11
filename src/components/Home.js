import React from "react";
import { Link } from "react-router-dom";
import Character from "./Character";
import { Grid, Box } from "@material-ui/core";

const Home = ({ display, getDetails }) => {
  return (
    <Box style={{ margin: 20, marginTop: 100 }}>
      <Grid container spacing={4}>
        {display.map((item) => (
          <Grid key={item.char_id} item xs={3}>
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
