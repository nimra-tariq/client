import axios from "axios";

const url = "http://localhost:5000/posts";
export const _fetchAllPosts = async () => {
  try {
    const { data } = await axios.get(url);
    // console.log(data, "posts");
    return data;
  } catch (error) {
    console.log(error, "error post fetch");
  }
};

export const _createNewPost = async (postData) => {
  try {
    const { data } = await axios.post(url, postData);
    // console.log(data, "post data");
    return data;
  } catch (error) {
    console.log(error, "error while creating post");
  }
};

export const _updatePost = async ({ currentId: id, postData }) => {
  try {
    //http:localhost:5000/3488743743478 and on backend //http:localhost:5000/:id req.params to get id
    const { data } = await axios.patch(`${url}/${id}`, postData);
    return data;
  } catch (error) {
    console.log(error, "error while creating post");
  }
};

export const _deletePost = async (id) => {
  try {
    const { data } = await axios.delete(`${url}/${id}`);
    return data;
  } catch (error) {
    console.log(error, "error while creating post");
  }
};

export const _likePost = async (id) => {
  try {
    const { data } = await axios.patch(`${url}/${id}/likePost`);
    return data;
  } catch (error) {
    console.log(error, "error while creating post");
  }
};
