import React from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import useStyles from "./Styles";
import { useState, useEffect } from "react";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createNewPost, updatePost } from "../../features/posts/postSlice";
import { useSelector } from "react-redux";

const Form = ({ currentId, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const post = useSelector((state) =>
    currentId ? state.posts.posts.find((post) => post._id === currentId) : null
  );
  const [postData, setPostData] = useState({
    creater: "",
    message: "",
    title: "",
    tags: "",
    selectedFile: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId === 0) {
      dispatch(createNewPost(postData));
    } else {
      dispatch(updatePost({ currentId, postData }));
    }
    clear();
  };

  const clear = () => {
    setPostData({
      creater: "",
      message: "",
      title: "",
      tags: "",
      selectedFile: "",
    });
    setCurrentId(0);
  };

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  return (
    <>
      <Paper className={classes.paper}>
        <form
          autoComplete="off"
          noValidate
          className={`${classes.root} ${classes.form}`}
          onSubmit={handleSubmit}
        >
          <Typography variant="h6">
            {currentId ? "Edit" : "Create"} Post
          </Typography>
          <TextField
            name="creater"
            variant="outlined"
            label="Creator"
            fullWidth
            value={postData.creater}
            onChange={(e) =>
              setPostData({ ...postData, creater: e.target.value })
            }
          />
          <TextField
            name="title"
            variant="outlined"
            label="Title"
            fullWidth
            value={postData.title}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
          />
          <TextField
            name="message"
            variant="outlined"
            label="Message"
            fullWidth
            multiline
            minRows={4}
            value={postData.message}
            onChange={(e) =>
              setPostData({ ...postData, message: e.target.value })
            }
          />
          <TextField
            name="tags"
            variant="outlined"
            label="Tags (coma separated)"
            fullWidth
            value={postData.tags}
            color="secondary"
            onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
          />
          <div className={classes.fileInput}>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setPostData({ ...postData, selectedFile: base64 })
              }
            ></FileBase>
          </div>
          <Button
            className={classes.buttonSubmit}
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            fullWidth
          >
            Submit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={clear}
            fullWidth
          >
            Clear
          </Button>
        </form>
      </Paper>
    </>
  );
};

export default Form;
