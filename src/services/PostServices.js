const URL = process.env.REACT_APP_BACKEND;

const PostService = {
    getPosts: async (city_id) => {
        const response = await fetch(URL + "/cities/" + city_id);
        const data = await response.json();
        return data.posts
    },

    addPosts: async (newPost) => {
        console.log("1")
        newPost.twenty_hookup = (newPost.twenty_hookup ==="true")
        newPost.thirty_hookup = (newPost.thirty_hookup ==="true")
        newPost.fifty_hookup = (newPost.fifty_hookup ==="true")
        newPost.wifi = (newPost.wifi ==="true")
        newPost.water = (newPost.water ==="true")
        console.log("2")
        const response = await fetch(URL + "cities/" + newPost.city_id + "/create", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPost),
        });
        console.log("3")
        const data = await response;
        console.log("4")
        return data
    },

    updatePost: async (post) => {

        post.twenty_hookup = (post.twenty_hookup ==="true")
        post.thirty_hookup = (post.thirty_hookup ==="true")
        post.fifty_hookup = (post.fifty_hookup ==="true")
        post.wifi = (post.wifi ==="true")
        post.water = (post.water ==="true")
        const response = await fetch(URL + "cities/" + post.city_id + "/posts/" + post.post_id, {
            method: "put",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(post),
        }) ;
        const data = await response;
        return data
    },

    deletePost: async (post) => {
        const response = await fetch(URL + "cities/" + post.post_id, {
            method: "delete",
        });
        const data = await response;
        return data
    }
}

export default PostService;

    // getPost: async (postId) => {
    //     console.log("testing getpost")
    //     const response = await fetch(URL + "/posts/" + postId);
    //     const data = await response.json();
    //     return data.post
    // },