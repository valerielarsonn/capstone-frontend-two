// import React, { useState } from "react";
// import Form from "../components/Form";
// import PostService from "../services/PostServices";

// import "../app.css";

// const Edit = (props) => {
//   const [targetPost, setTargetPost] = useState(null);
//   const cityId = props.match.params.city_id;
//   const postId = props.match.params.post_id;
//   // useEffect(async () => {
//   //   const post = await PostService.getPost(postId)
//   //   setTargetPost(post);
//   // }, [])

//   const onUpdate = (post) => {
//     PostService.updatePost({id:postId, ...post})
//     .then(() => {
//       props.redirect(cityId)
//     })
//   }

//     return (
//       <div className= "App">
//         { targetPost && <Form
//           initialPost={targetPost}
//           handleSubmit={onUpdate}
//           buttonLabel="update post"
//         />}
//       </div>
//     )
// };

// export default Edit;