const URL = process.env.REACT_APP_BACKEND;

const PostService = {
    getPosts: async (cityid) => {
        const response = await fetch(URL + "/cities");
        const data = await response.json();
        return data
    },

    getPost: async (postId) => {
        const response = await fetch(URL + "cities/" + postId);
        const data = await response.json();
        return data
    },

    addPosts: async (cityid, newPost) => {
        const response = await fetch(URL + "/cities/" + cityid + "/create", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPost),
        });
        const data = await response.json();
        return data
    },

    updatePost: async (post, id) => {
        const response = await fetch(URL + "/cities/" + post.id, {
            method: "put",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(post),
        }) ;
        const data = await response.json();
        return data
    },

    deletePost: async (post) => {
        const response = await fetch(URL + "/cities/" + post.post_id + "/", {
            method: "delete",
        });
    }
}

export default PostService;