import React, { useState, useEffect } from "react";
import Form from "../components/Form";
import PostService from "../services/PostServices";

import "../app.css";

const Edit = (props) => {
  const [targetPost, setTargetPost] = useState([]);
  const cityId = props.match.params.city_id;
  const postId = props.match.params.post_id;
  useEffect(() => {
      PostService.getPost(postId).then(p => {
        setTargetPost(p);
      })
  }, [postId])

  const onUpdate = (post) => {
    PostService.updatePost({city_id: cityId, post_id: postId , ...post})
    .then(() => {
      props.history.push("/cities/" + cityId)
    })
  }

    return (
      <div className= "App">
        <h1>test</h1>
        { targetPost && <Form
          initialPost={targetPost}
          handleSubmit={onUpdate}
          buttonLabel="update post"
        />}
      </div>
    )
};

export default Edit;