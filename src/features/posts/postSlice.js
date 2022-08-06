import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  _fetchAllPosts,
  _createNewPost,
  _updatePost,
  _deletePost,
  _likePost,
} from "../../api";

const initialState = { posts: [] };

export const fetchAllPosts = createAsyncThunk(
  "posts/fetchAllPosts",
  _fetchAllPosts
);

export const createNewPost = createAsyncThunk(
  "posts/createNewPost",
  _createNewPost
);
export const updatePost = createAsyncThunk("posts/updatePost", _updatePost);
export const deletePost = createAsyncThunk("posts/deletePost", _deletePost);
export const likePost = createAsyncThunk("posts/likePost", _likePost);

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    //returned obj form promise will have some extra properties destructure payload
    [fetchAllPosts.fulfilled]: (state, { payload }) => {
      // console.log(payload, "payload");
      state.posts = payload;
    },
    [createNewPost.fulfilled]: (state, { payload }) => {
      state.posts = [...state.posts, payload];
    },
    [updatePost.fulfilled]: (state, { payload }) => {
      state.posts = state.posts.map((post) =>
        post._id === payload._id ? payload : post
      );
    },
    [deletePost.fulfilled]: (state, { payload }) => {
      state.posts = state.posts.filter((post) => post._id !== payload._id);
    },
    [likePost.pending]:()=>{
      console.log("like post is pending");
    },
    [likePost.fulfilled]: (state, { payload }) => {
      console.log(payload);
      console.log("likePost fulfilled");
      state.posts = state.posts.map((post) =>
        post._id === payload._id ? payload : post
      );
    },
  },
});

export const getAllPosts = (state) => state.posts.posts;
export default postSlice.reducer;
// export default movieSlice.reducer
