// import React, { useState, useEffect } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import Post from "../components/Post";
// import PostService from "../services/PostServices";

// import "../app.css";


// const Posts = (props) => {
//     const cityId = props.match.params.city_id
//     const [city] = useState(null);
//     const [posts, setPosts] = useState([]);
//     const history = useNavigate();
//     useEffect(() => {
//         PostService.getPosts().then(posts => {
//             console.log(posts);
//             setPosts(posts);
//         });
//     }, [])

    
    
//     const editPost = (post) => {
//         history.push(`/city/${cityId}/posts/${post.id}/edit`)
//     }

//     const deletePost = async (postToDelete) => {
//        await PostService.deletePost(postToDelete);
//        const updatedPosts = posts.filter (post => postToDelete.id !== post.id)
//        console.log(updatedPosts)
//        setPosts(updatedPosts)
//     }
    

//     return (
//         <div className="App">
//         { city && <h3>{city.post.zip_code}</h3>}
//         { city && <h3>{}</h3>}
//         { city && <h3>{}</h3>}
//         { city && <img className="image" alt="van spot" src={posts.image}/>}
//         { city && <h3>{}</h3>}
//         { city && <h3>{}</h3>}
//         { city && <h3>{}</h3>}
//         { city && <h3>{}</h3>}
//         { city && <h3>{}</h3>}
//         { city && <Link to={`/cities/${city.id}/create`}><button>Create a new Posting</button></Link> }
//         {posts.map((post) => <Post post={post} editPost={editPost} deletePost={deletePost} key={post.id}/>)}
//         </div>
//     );
// }

// export default Posts;