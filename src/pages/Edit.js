import React, { useState, useEffect } from "react";
import Form from "../components/Form";
import PostService from "../services/PostServices";

import '../styles.scss';

const Edit = (props) => {
  const [targetPost, setTargetPost] = useState(null);
  const cityId = props.match.params.city_id;
  const postId = props.match.params.post_id;
  useEffect(() => {
      PostService.getPosts(postId).then(p => {
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
        { targetPost && <Form
          initialPost={targetPost}
          handleSubmit={onUpdate}
          buttonLabel="update post"
        />}
      </div>
    )
};

export default Edit;
