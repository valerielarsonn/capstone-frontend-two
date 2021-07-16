import React from "react";


const Post = ({ post, editPost, deletePost }) => {

    return(
        <div className="postdiv">
            <h1>AVAILABILITY: {post.available_date}</h1>
            <h2>ZIP CODE: {post.zip_code}</h2>
            <h2>CONTACT EMAIL: {post.contact_email}</h2>
            <img className="image" alt="van spot" src={post.image}/>
            <h2>TWENTY-HOOKUP: {post.twenty_hookup}</h2>
            <h2>THIRTY-HOOKUP: {post.thirty_hookup}</h2>
            <h2>FIFTY-HOOKUP: {post.fifty_hookup}</h2>
            <h2>WIFI: {post.wifi}</h2>
            <h2>WATER: {post.water}</h2>
            <button onClick={(event) => editPost(post)}>Edit</button>
            <button onClick={(event) => deletePost(post)}>Delete</button>
        </div>
    );
};

export default Post;