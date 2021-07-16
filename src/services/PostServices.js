const URL = process.env.REACT_APP_BACKEND;

const PostService = {
    getPosts: async (city_id) => {
        const response = await fetch(URL + "/cities");
        const data = await response.json();
        return data
    },

    getPost: async (postId) => {
        const response = await fetch(URL + "/cities/" + postId);
        const data = await response.json();
        return data
    },

    addPosts: async (city_id, newPost) => {
        const response = await fetch(URL + "/cities/" + city_id + "/create", {
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
        const response = await fetch(URL + "/cities/" + post.post_id, {
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