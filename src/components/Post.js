import React from "react";
import '../styles.scss';


const Post = ({post, editPost, deletePost}) => {

    return(
        <div className="postdiv">
            <h1>AVAILABILITY: {post.available_date}</h1>
            <h2>ZIP CODE: {post.zip_code}</h2>
            <h2>CONTACT EMAIL: {post.contact_email}</h2>
            <img className="image" alt="van spot" src={post.image}/>
            <br></br>
            <p>DOES {post.wifi === true ? '' : 'NOT'} INCLUDE WIFI</p>
            <p>DOES {post.water === true ? '' : 'NOT'} INCLUDE WATER</p>
            <p>DOES {post.twenty_hookup === true ? '' : 'NOT'} INCLUDE 20 HOOK-UP</p>
            <p>DOES {post.thirty_hookup === true ? '' : 'NOT'} INCLUDE 30 HOOK-UP</p>
            <p>DOES {post.fifty_hookup === true ? '' : 'NOT'} INCLUDE 50 HOOK-UP</p>
            <button onClick={(event) => editPost(post)}>Edit</button>
            <button onClick={(event) => deletePost(post)}>Delete</button>
            <br></br>
        </div>
    );
};

export default Post;