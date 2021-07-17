import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import Post from "../components/Post";
import PostService from "../services/PostServices";

import "../app.css";


    // const onAdd = async (post) => {
    //   const {city_id} = await PostService.addPosts(post)
    //   redirectToCityPosts(city_id);
    // };


const Posts = (props) => {
    const cityId = props.match.params.city_id
    const [posts, setPosts] = useState([]);
    const history = useHistory();
    useEffect(() => {
        PostService.getPosts(cityId).then(p => {
            console.log(p);
            console.log(Array.isArray(p))
            setPosts(p);
        });
    }, [cityId])
 
    
    const editPost = (post) => {
        history.push(`/city/${cityId}/posts/${post.post_id}/edit`)
    }

    const deletePost = async (postToDelete) => {
       await PostService.deletePost(postToDelete);
       const updatedPosts = posts.filter (post => postToDelete.post_id !== post.post_id)
       console.log(updatedPosts)
       setPosts(updatedPosts)
    }

    return (
        <div className="App">
          <h1>Posts</h1>
            {<Link to={`/cities/${cityId}/create`}><button>Create a new Posting</button></Link> }
            {posts.map((post) => <Post post={post} editPost={editPost} deletePost={deletePost} key={post.post_id}/>)}
        </div>
    );
}

export default Posts;