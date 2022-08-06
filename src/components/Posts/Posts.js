import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import useStyles from "./Styles";
import Post from "./Post/Post";
import { getAllPosts } from "../../features/posts/postSlice";
import { useSelector } from "react-redux";

const Posts = ({ setCurrentId }) => {
  const classes = useStyles();
  const posts = useSelector(getAllPosts);

  return (
    <>
      {!posts.length ? (
        <CircularProgress />
      ) : (
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={6} md={6}>
            {posts.map((post) => (
              <Post key={post._id} post={post} setCurrentId={setCurrentId} />
            ))}
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Posts;
